import LoginForm from "@/components/Forms/LoginForm";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Login -Md Nurullah Bhuiyan",
  description:
    "Login page of Md Nurullah Bhuiyan. Full stack web developer. A MERN stack based full stack developer with advance typescript redux and next js experience",
};

export default function login() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-11/12 md:w-9/12 lg:w-1/2 shadow-md rounded-lg px-4 py-6">
        <h1 className="text-center text-2xl font-bold">Please Login</h1>
        <Suspense fallback={<div>Loading..</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
