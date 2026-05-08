"use client";

import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { UserLoginInputs, UserLoginSchema } from "../../types";

const UserLogin = ({
  setIsSignUp,
}: {
  setIsSignUp: (isSignUp: boolean) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginInputs>({
    resolver: zodResolver(UserLoginSchema),
  });

  const onSubmit: SubmitHandler<UserLoginInputs> = (data) => {
    console.log(data);
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
              value="Entrar"
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
              <a
                className="text-blue-700 cursor-pointer"
                onClick={() => setIsSignUp(true)}
              >
                Criar uma conta
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
