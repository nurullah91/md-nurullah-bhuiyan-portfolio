import LoginForm from "@/components/Forms/LoginForm";

export default function login() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-11/12 md:w-9/12 lg:w-1/2 shadow-md rounded-lg px-4 py-6">
        <h1 className="text-center text-2xl font-bold">
          This is Login component
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
