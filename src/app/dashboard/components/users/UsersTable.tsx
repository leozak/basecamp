import React, { SetStateAction } from "react";
import { SquarePen } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { getUsers } from "@/services/user";

import { User } from "@/services/user";
import { EditUser } from "./UsersEdit";

const DashboardUsersTable = ({
  setUser,
}: {
  setUser: React.Dispatch<SetStateAction<EditUser | null>>;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleAction = (action: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("action", action || "table");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const queryUsers = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return (
    <div className="rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-neutral-400">
          <tr>
            <th className="p-2">Nº</th>
            <th className="text-start p-2">Nome</th>
            <th className="p-2">Email</th>
            <th className="p-2">Tipo</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {queryUsers.data?.map((user: Omit<User, "password">, index) => (
            <tr
              key={user.id}
              className="odd:bg-neutral-100 even:bg-neutral-200 hover:bg-blue-200/50 transition"
            >
              <td className="text-center p-2">{index + 1}</td>
              <td className="p-2">{user.name}</td>
              <td className="text-center p-2">{user.email}</td>
              <td className="text-center p-2">
                {user.admin ? "Admin" : "Usuário"}
              </td>
              <td className="text-center p-2">
                <button
                  onClick={() => {
                    handleAction("edit");
                    setUser(user as EditUser);
                  }}
                  className="cursor-pointer"
                >
                  <SquarePen size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardUsersTable;
