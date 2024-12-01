import Sidebar from "@/components/Dashboard/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard -Md Nurullah Bhuiyan",
  description: "Dashboard of for admin. Manage users, post's, show analytics",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-4 flex-col lg:flex-row">
      <Sidebar />
      <div className="w-full mt-20 lg:mt-4">{children}</div>
    </div>
  );
}
