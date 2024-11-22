"use client";

import { Button } from "@/components/ui/button";
import { logout } from "@/services/Auth";

export default function dashboard() {
  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <h1
        style={{
          fontWeight: "bold",
          textAlign: "center",
          color: "#f43f5e",
          fontSize: "1.875rem",
        }}
      >
        This is Dashboard component
      </h1>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
