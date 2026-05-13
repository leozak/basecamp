import { verifyAuth } from "@/lib/auth-actions";
import { redirect } from "next/navigation";
import { logoutUser } from "@/services/user";

const UserPage = async () => {
  const user = await verifyAuth();

  if (!user) {
    redirect("/users");
  }

  return (
    <div>
      <h1>Página do usuário</h1>
      <div>
        <button className="bg-primary-600 cursor-pointer" onClick={logoutUser}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserPage;
