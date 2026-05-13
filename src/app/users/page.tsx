import { verifyAuth } from "@/lib/auth-actions";
import { redirect } from "next/navigation";

const UsersPage = async () => {
  const user = await verifyAuth();

  if (!user) {
    redirect("/users/login");
  }

  if (user.admin) {
    redirect("/dashboard");
  }

  redirect(`/users/${user.id}`);
  return;
};

export default UsersPage;
