"use client";

import { Input } from "../ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

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
  return (
    <div className="mt-3">
      <FormField
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input placeholder={placeholder} {...field} type={type} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
