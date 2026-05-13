import UserLogin from "@/components/users/UserLogin";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="mx-auto flex flex-row items-center justify-between p-2 my-6 sm:max-w-xl sm:px-0 md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
      {/* LOGIN */}
      <div className="flex w-full flex-col-reverse overflow-hidden rounded-lg shadow-lg md:flex-row">
        <div className="min-w-full bg-white p-4 md:min-w-3/4">
          <UserLogin />
        </div>
        {/* IMAGEM */}
        <div className="w-fit md:min-w-2/4 overflow-hidden">
          <Image
            src="/users-mobile.png"
            alt="Login"
            width={1000}
            height={1000}
            className="md:hidden"
          />
          <Image
            src="/users-desktop.png"
            alt="Login"
            width={300}
            height={300}
            className="hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
