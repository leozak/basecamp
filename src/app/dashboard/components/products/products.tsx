import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { TanstackProvider } from "@/components/providers/tanstack-provider";
import { useState } from "react";
import { SquarePlus, Table } from "lucide-react";

const DashboardProductsPage = () => {
  const [product, setProduct] = useState(null);

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
            title="Tabela de produtos"
          >
            <Table />
          </button>
          <button
            onClick={() => handleAction("new")}
            className="cursor-pointer text-neutral-700 hover:text-neutral-900"
            title="Novo produto"
          >
            <SquarePlus />
          </button>
        </div>
        {/* TABELA DE PRODUTOS */}
        {(action === "table" || action === null) && (
          <div>Tabela de Produtos</div>
        )}
        {/* NOVO PRODUTO */}
        {action === "new" && <div>Novo Produto</div>}
        {/* EDITAR PRODUTO */}
        {action === "edit" && <div>Editar Produto</div>}
      </div>
    </TanstackProvider>
  );
};

export default DashboardProductsPage;
