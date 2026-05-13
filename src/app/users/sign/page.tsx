import UserSigin from "@/components/users/UserSigin";

const SignUpPage = () => {
  return (
    <div className="mx-auto flex flex-row items-center justify-between p-2 my-6 sm:max-w-xl sm:px-0 md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
      {/* SIGNUP */}
      <div className="flex w-full flex-col-reverse overflow-hidden rounded-lg shadow-lg md:flex-row">
        <div className="min-w-full bg-white p-4">
          <UserSigin />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
