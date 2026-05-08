"use client";

import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { UserSiginUpInputs, UserSiginUpSchema } from "../../types";

const UserSigin = ({
  setIsSignUp,
}: {
  setIsSignUp: (isSignUp: boolean) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSiginUpInputs>({
    resolver: zodResolver(UserSiginUpSchema),
  });

  const onSubmit: SubmitHandler<UserSiginUpInputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-full items-center">
      <div className="flex flex-col justify-center lg:max-w-130 mx-auto">
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-center font-bold text-xl">Bem-vindo!</h1>
          <p className="text-center text-sm">
            Crie sua conta para ter acesso aos melhores equipamentos e ofertas
            exclusivas para exploradores.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-xs text-neutral-500 font-medium"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="border-b border-neutral-200 py-2 outline-none text-sm"
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 mt-6">
            <label
              htmlFor="email"
              className="text-xs text-neutral-500 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
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
              {...register("password")}
              className="border-b border-neutral-200 py-2 outline-none text-sm"
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 mt-6">
            <label
              htmlFor="repassword"
              className="text-xs text-neutral-500 font-medium"
            >
              Repetir Password
            </label>
            <input
              type="password"
              id="repassword"
              {...register("repassword")}
              className="border-b border-neutral-200 py-2 outline-none text-sm"
            />
            {errors.repassword && (
              <p className="text-xs text-red-500">
                {errors.repassword.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1 mt-6">
            <label
              htmlFor="phone"
              className="text-xs text-neutral-500 font-medium"
            >
              Telefone
            </label>
            <input
              type="text"
              id="phone"
              {...register("phone")}
              className="border-b border-neutral-200 py-2 outline-none text-sm"
            />
            {errors.phone && (
              <p className="text-xs text-red-500">{errors.phone.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 mt-6">
            <label
              htmlFor="city"
              className="text-xs text-neutral-500 font-medium"
            >
              Cidade
            </label>
            <input
              type="text"
              id="city"
              {...register("city")}
              className="border-b border-neutral-200 py-2 outline-none text-sm"
            />
            {errors.city && (
              <p className="text-xs text-red-500">{errors.city.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 mt-6">
            <label
              htmlFor="state"
              className="text-xs text-neutral-500 font-medium"
            >
              Estado
            </label>
            <input
              type="text"
              id="state"
              {...register("state")}
              className="border-b border-neutral-200 py-2 outline-none text-sm"
            />
            {errors.state && (
              <p className="text-xs text-red-500">{errors.state.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 mt-6">
            <label
              htmlFor="cep"
              className="text-xs text-neutral-500 font-medium"
            >
              CEP
            </label>
            <input
              type="text"
              id="cep"
              {...register("cep")}
              className="border-b border-neutral-200 py-2 outline-none text-sm"
            />
            {errors.cep && (
              <p className="text-xs text-red-500">{errors.cep.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 mt-6">
            <label
              htmlFor="address"
              className="text-xs text-neutral-500 font-medium"
            >
              Endereço
            </label>
            <input
              type="text"
              id="address"
              {...register("address")}
              className="border-b border-neutral-200 py-2 outline-none text-sm"
            />
            {errors.address && (
              <p className="text-xs text-red-500">{errors.address.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 mt-6">
            <label
              htmlFor="number"
              className="text-xs text-neutral-500 font-medium"
            >
              Número
            </label>
            <input
              type="text"
              id="number"
              {...register("number")}
              className="border-b border-neutral-200 py-2 outline-none text-sm"
            />
            {errors.number && (
              <p className="text-xs text-red-500">{errors.number.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 mt-6">
            <label
              htmlFor="complement"
              className="text-xs text-neutral-500 font-medium"
            >
              Complemento
            </label>
            <input
              type="text"
              id="complement"
              {...register("complement")}
              className="border-b border-neutral-200 py-2 outline-none text-sm"
            />
            {errors.complement && (
              <p className="text-xs text-red-500">
                {errors.complement.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1 mt-6">
            <input
              type="submit"
              value="Enviar"
              className="w-full bg-primary text-white rounded-xl py-1 shadow-md"
            />
          </div>
          <div className="mt-6">
            <p className="text-xs font-normal text-center">
              Já possui uma conta?{" "}
              <a
                className="text-blue-700 cursor-pointer"
                onClick={() => setIsSignUp(false)}
              >
                Fazer login
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSigin;
