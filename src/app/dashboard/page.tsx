import { verifyAuth } from "@/lib/auth-actions";
import { redirect } from "next/navigation";
import Dashboard from "./components/Dashboard";

const DashboardPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ module: string }>;
}) => {
  const user = await verifyAuth();

  if (!user) {
    redirect("/users/login");
  }

  if (!user.admin) {
    redirect(`/users/${user.id}`);
  }

  const { module } = await searchParams;

  if (!module) {
    redirect("/dashboard?module=information");
  }

  return (
    <div className="absolute z-10 inset-0 bg-neutral-100/40 backdrop-blur-xs">
      <div className="shadow-2xl bg-neutral-300 overflow-hidden rounded-xl mx-auto flex flex-row items-center justify-between my-6 sm:max-w-xl sm:px-0 md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
        <Dashboard module={module} />
      </div>
    </div>
  );
};

export default DashboardPage;
