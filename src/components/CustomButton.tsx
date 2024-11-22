"use client";

import { Button } from "./ui/button";

export interface ICustomButtonProps {
  event: () => void;
  label: string;
}
export default function CustomButton({ event, label }: ICustomButtonProps) {
  return (
    <>
      <Button onClick={event}>{label}</Button>
    </>
  );
}
