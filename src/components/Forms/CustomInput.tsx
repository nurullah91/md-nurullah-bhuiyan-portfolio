"use client";

import { Input } from "../ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useFormContext } from "react-hook-form";

interface IProps {
  placeholder?: string;
  type?: string;
  label: string;
  name: string;
}

export default function CustomInput({
  type = "text",
  label,
  name,
  placeholder,
}: IProps) {
  const { control } = useFormContext();

  return (
    <div className="mt-3">
      <FormField
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input placeholder={placeholder} {...field} type={type} />
            </FormControl>
            <FormMessage>{fieldState.error?.message}</FormMessage>
          </FormItem>
        )}
      />
    </div>
  );
}
