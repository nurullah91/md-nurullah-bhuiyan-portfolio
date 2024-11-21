"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import UserProvider from "@/context/user.provider";

export interface ProvidersProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();

export function Providers({ children }: ProvidersProps) {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster richColors position="top-center" />
        {children}
      </QueryClientProvider>
    </UserProvider>
  );
}
