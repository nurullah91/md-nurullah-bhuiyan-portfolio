"use client";

import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

import { Button } from "@/components/ui/button";
import { logout } from "@/services/Auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/user.provider";

export default function Sidebar() {
  const [show, setShow] = useState<boolean>(false);

  const router = useRouter();
  const { setIsLoading: setUserLoading } = useUser();

  const handleLogout = () => {
    logout();
    setUserLoading(true);

    router.push("/");

    toast.success("Logout success");
  };

  return (
    <div className="sticky top-16 lg:h-screen px-2 py-4 z-20 backdrop-blur-md lg:w-60 w-full shadow-lg shadow-default-200 rounded-lg">
      <div className="block lg:hidden">
        <button onClick={() => setShow(!show)}>
          {show ? (
            <RxCross2 className="text-2xl" />
          ) : (
            <HiOutlineMenuAlt1 className="text-2xl" />
          )}
        </button>
      </div>
      <div>
        <div
          className={`flex lg:flex flex-col gap-2 ${show ? "block" : "hidden"}`}
        >
          <Link
            href={"/dashboard/add-blog"}
            className="shadow-md py-3 px-2 rounded shadow-default-200 bg-default-100 w-full text-center"
          >
            Add Blog
          </Link>
          <Link
            href="/dashboard/add-project"
            className="shadow-md py-3 px-2 rounded shadow-default-200 bg-default-100 w-full text-center"
          >
            Add Project
          </Link>
          <Link
            href="/dashboard/add-skills"
            className="shadow-md py-3 px-2 rounded shadow-default-200 bg-default-100 w-full text-center"
          >
            Add Skills
          </Link>
          <Link
            href={"/"}
            className="shadow-md py-3 px-2 rounded shadow-default-200 bg-default-100 w-full text-center"
          >
            Home
          </Link>
          <div className="shadow-md rounded shadow-default-200  w-full text-center">
            <Button onClick={handleLogout} className="w-full">
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
