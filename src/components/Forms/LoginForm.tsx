"use client";
import { useRouter, useSearchParams } from "next/navigation"; // To handle redirection
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useEffect, useState } from "react";

import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useLoginUser } from "@/hooks";
import { useUser } from "@/context/user.provider";
import CustomForm from "./CustomForm";
import { loginSchema } from "@/schema";
import CustomInput from "./CustomInput";
import Link from "next/link";
import { Button } from "../ui/button";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const [show, setShow] = useState(false);
  const router = useRouter();
  const redirect = searchParams.get("redirect");
  const { setIsLoading: userLoading } = useUser();
  const { mutate: handleLogin, isPending, data: loginData } = useLoginUser();

  useEffect(() => {
    console.log(loginData);
    if (loginData && !loginData?.success) {
      toast.error(loginData?.message as string);
    } else if (loginData && loginData?.success) {
      toast.success("Login Successful");
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/dashboard");
      }
    }
  }, [loginData, router, redirect]);

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    handleLogin(JSON.stringify(data));
    userLoading(true);
  };

  return (
    <div>
      <CustomForm onSubmit={handleSubmit} resolver={zodResolver(loginSchema)}>
        <CustomInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
        />
        <div className="relative">
          <CustomInput
            placeholder="Enter password"
            label="Password"
            name="password"
            type={`${show ? "text" : "password"}`}
          />

          <button
            type="button"
            className="absolute bottom-3 right-2"
            onClick={() => setShow(!show)}
          >
            {show ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <p className="mt-1">
          <Link
            href="/forget-password"
            className="text-sm font-bold hover:underline"
          >
            Forget Password?
          </Link>
        </p>

        <Button
          className="mt-2"
          disabled={isPending}
          type="submit"
          variant="default"
        >
          {isPending ? "Logging in..." : "Login"}
        </Button>
      </CustomForm>
    </div>
  );
}
