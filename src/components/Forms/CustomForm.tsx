/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";

interface formConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}
interface IProps extends formConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}
export default function CustomForm({
  children,
  onSubmit,
  defaultValues,
  resolver,
}: IProps) {
  const form = useForm<z.infer<typeof resolver>>({
    resolver: zodResolver(resolver),
    defaultValues: defaultValues,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
}
