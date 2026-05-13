import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { logoutUser } from "@/services/user";

const Navbar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleModule = (module: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("module", module || "information");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col gap-2 items-start p-4 bg-neutral-400 min-h-screen">
      <h3 className="font-bold text-lg">Dashboard</h3>
      <button
        onClick={() => handleModule("information")}
        className="cursor-pointer text-neutral-700 hover:text-neutral-900"
      >
        Informações
      </button>
      <button
        onClick={() => handleModule("users")}
        className="cursor-pointer text-neutral-700 hover:text-neutral-900"
      >
        Usuários
      </button>
      <button
        onClick={() => handleModule("products")}
        className="cursor-pointer text-neutral-700 hover:text-neutral-900"
      >
        Produtos
      </button>
      <button
        className="cursor-pointer text-neutral-700 hover:text-neutral-900"
        onClick={logoutUser}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
