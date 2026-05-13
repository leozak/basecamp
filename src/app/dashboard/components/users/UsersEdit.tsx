import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { UserEditSchema, UserEditInputs } from "@/types";
import { useState } from "react";
import { toast } from "react-toastify";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { editUser } from "@/services/user";

export interface EditUser {
  id: string;
  name: string;
  email: string;
  admin: boolean;
  phone: string;
  city: string;
  state: string;
  cep: string;
  address: string;
  number: string;
  complement: string;
  createdAt: string;
}

const DashboardUsersEdit = ({ user }: { user: EditUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserEditInputs>({
    resolver: zodResolver(UserEditSchema),
  });
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleAction = (action: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("action", action || "table");
    router.push(`${pathname}?${params.toString()}`);
  };

  const onSubmit: SubmitHandler<UserEditInputs> = async (
    data: UserEditInputs,
  ) => {
    setIsLoading(true);
    try {
      const formattedData = {
        ...data,
        admin: data.admin === "true" ? true : false,
      };
      console.log(formattedData);
      await editUser(user.id, formattedData);
      toast.success("Alteração realizado com sucesso!");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      handleAction("table");
    }
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="name"
            className="text-sm text-neutral-500 font-medium"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            defaultValue={user?.name}
            {...register("name")}
            className="bg-neutral-100/20 rounded-md px-2 border-b border-neutral-200 py-2 outline-none text-sm"
          />
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <label
            htmlFor="email"
            className="text-sm text-neutral-500 font-medium"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            defaultValue={user?.email}
            {...register("email")}
            className="bg-neutral-100/20 rounded-md px-2 border-b border-neutral-200 py-2 outline-none text-sm"
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <label className="text-sm text-neutral-500 font-medium">Tipo</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="true"
                {...register("admin")}
                defaultChecked={user?.admin === true}
                className="cursor-pointer"
              />
              <span className="text-sm">Administrador</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="false"
                {...register("admin")}
                defaultChecked={user?.admin === false}
                className="cursor-pointer"
              />
              <span className="text-sm">Usuário</span>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <label
            htmlFor="phone"
            className="text-sm text-neutral-500 font-medium"
          >
            Telefone
          </label>
          <input
            type="text"
            id="phone"
            defaultValue={user?.phone}
            {...register("phone")}
            className="bg-neutral-100/20 rounded-md px-2 border-b border-neutral-200 py-2 outline-none text-sm"
          />
          {errors.phone && (
            <p className="text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <label htmlFor="cep" className="text-sm text-neutral-500 font-medium">
            CEP
          </label>
          <input
            type="text"
            id="cep"
            defaultValue={user?.cep}
            {...register("cep")}
            className="bg-neutral-100/20 rounded-md px-2 border-b border-neutral-200 py-2 outline-none text-sm"
          />
          {errors.cep && (
            <p className="text-xs text-red-500">{errors.cep.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <label
            htmlFor="city"
            className="text-sm text-neutral-500 font-medium"
          >
            Cidade
          </label>
          <input
            type="text"
            id="city"
            defaultValue={user?.city}
            {...register("city")}
            className="bg-neutral-100/20 rounded-md px-2 border-b border-neutral-200 py-2 outline-none text-sm"
          />
          {errors.city && (
            <p className="text-xs text-red-500">{errors.city.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <label
            htmlFor="state"
            className="text-sm text-neutral-500 font-medium"
          >
            Estado
          </label>
          <input
            type="text"
            id="state"
            defaultValue={user?.state}
            {...register("state")}
            className="bg-neutral-100/20 rounded-md px-2 border-b border-neutral-200 py-2 outline-none text-sm"
          />
          {errors.state && (
            <p className="text-xs text-red-500">{errors.state.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <label
            htmlFor="adress"
            className="text-sm text-neutral-500 font-medium"
          >
            Endereço
          </label>
          <input
            type="text"
            id="address"
            defaultValue={user?.address}
            {...register("address")}
            className="bg-neutral-100/20 rounded-md px-2 border-b border-neutral-200 py-2 outline-none text-sm"
          />
          {errors.address && (
            <p className="text-xs text-red-500">{errors.address.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <label
            htmlFor="number"
            className="text-sm text-neutral-500 font-medium"
          >
            Número
          </label>
          <input
            type="text"
            id="number"
            defaultValue={user?.number}
            {...register("number")}
            className="bg-neutral-100/20 rounded-md px-2 border-b border-neutral-200 py-2 outline-none text-sm"
          />
          {errors.number && (
            <p className="text-xs text-red-500">{errors.number.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <label
            htmlFor="complement"
            className="text-sm text-neutral-500 font-medium"
          >
            Complemento
          </label>
          <input
            type="text"
            id="complement"
            defaultValue={user?.complement}
            {...register("complement")}
            className="bg-neutral-100/20 rounded-md px-2 border-b border-neutral-200 py-2 outline-none text-sm"
          />
          {errors.complement && (
            <p className="text-xs text-red-500">{errors.complement.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <label
            htmlFor="password"
            className="text-sm text-neutral-500 font-medium"
          >
            Senha
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="bg-neutral-100/20 rounded-md px-2 border-b border-neutral-200 py-2 outline-none text-sm"
          />
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <label
            htmlFor="repassword"
            className="text-sm text-neutral-500 font-medium"
          >
            Repetir Senha
          </label>
          <input
            type="password"
            id="repassword"
            {...register("repassword")}
            className="bg-neutral-100/20 rounded-md px-2 border-b border-neutral-200 py-2 outline-none text-sm"
          />
          {errors.repassword && (
            <p className="text-xs text-red-500">{errors.repassword.message}</p>
          )}
        </div>

        {user?.createdAt && (
          <div className="flex flex-col gap-1 mt-4">
            <label
              htmlFor="createdAt"
              className="text-sm text-neutral-500 font-medium"
            >
              Data de cadastro
            </label>
            <p>
              {format(user?.createdAt, "EEEE, d MMMM yyyy", { locale: ptBR })}
            </p>
          </div>
        )}

        {/* EDIT USER ACTIONS */}
        <div className="flex flex-row gap-2 mt-6">
          <input
            type="submit"
            value={isLoading ? "Enviando..." : "Enviar"}
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary-600 disabled:opacity-50 text-white rounded-xl py-1 shadow-md cursor-pointer"
          />
          <button
            type="button"
            onClick={() => handleAction("table")}
            disabled={isLoading}
            className="w-full bg-neutral-500 hover:bg-neutral-600 disabled:opacity-50 text-white rounded-xl py-1 shadow-md cursor-pointer"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default DashboardUsersEdit;
