"use client";

import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { UserLoginInputs, UserLoginSchema } from "../../types";
import { useState } from "react";
import { loginUser } from "@/services/user";
import Link from "next/link";

const UserLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginInputs>({
    resolver: zodResolver(UserLoginSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const onSubmit: SubmitHandler<UserLoginInputs> = async (
    data: UserLoginInputs,
  ) => {
    setIsLoading(true);
    try {
      await loginUser(data);
    } catch (error) {
      setLoginError((error as Error).message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-full items-center">
      <div className="flex flex-col justify-center lg:max-w-130 mx-auto">
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-center font-bold text-xl">Bem-vindo de volta!</h1>
          <p className="text-center text-sm">
            Acesse sua conta e comece a preparar a mochila para o seu próximo
            destino.
          </p>
        </div>
        {loginError && (
          <p className="text-xs text-red-500 text-center mb-2">{loginError}</p>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-xs text-neutral-500 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="enzo@exemplo.com"
              {...register("email")}
              className="border-b border-neutral-200 py-2 outline-none text-sm"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 mt-6">
            <label
              htmlFor="password"
              className="text-xs text-neutral-500 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              {...register("password")}
              className="border-b border-neutral-200 py-2 outline-none text-sm"
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 mt-6">
            <input
              type="submit"
              value={isLoading ? "Enviando..." : "Entrar"}
              disabled={isLoading}
              className="w-full bg-primary text-white rounded-xl py-1 shadow-md"
            />
          </div>
          <div className="mt-6">
            <p className="text-xs font-normal text-center">
              <a className="text-blue-700 cursor-pointer">Recuperar senha.</a>
            </p>
          </div>
          <div className="mt-2">
            <p className="text-xs font-normal text-center">
              Ainda não tem uma conta?{" "}
              <Link href="/users/sign" className="text-blue-700 cursor-pointer">
                Criar uma conta
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
