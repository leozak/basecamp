import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { TanstackProvider } from "@/components/providers/tanstack-provider";
import DashboardUsersTable from "./UsersTable";
import DashboardUsersEdit, { EditUser } from "./UsersEdit";
import { useState } from "react";
import DashboardNewEdit from "./NewUser";
import { SquarePlus, Table } from "lucide-react";

const DashboardUsersPage = () => {
  const [user, setUser] = useState<EditUser | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleAction = (action: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("action", action || "table");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const action = searchParams.get("action");

  return (
    <TanstackProvider>
      <div>
        <h1 className="font-bold text-2xl text-center mr-16">Usuários</h1>
        <div>
          <button
            onClick={() => handleAction("table")}
            className="cursor-pointer text-neutral-700 hover:text-neutral-900"
            title="Tabela de usuários"
          >
            <Table />
          </button>
          <button
            onClick={() => handleAction("new")}
            className="cursor-pointer text-neutral-700 hover:text-neutral-900"
            title="Novo usuário"
          >
            <SquarePlus />
          </button>
        </div>
        {/* TABELA DE USUÁRIOS */}
        {(action === "table" || action === null) && (
          <DashboardUsersTable setUser={setUser} />
        )}
        {/* NOVO USUÁRIO */}
        {action === "new" && <DashboardNewEdit />}
        {/* EDITAR USUÁRIO */}
        {action === "edit" && <DashboardUsersEdit user={user as EditUser} />}
      </div>
    </TanstackProvider>
  );
};

export default DashboardUsersPage;
