import { ReactNode } from "react";

export interface ICustomContainerProps {
  children: ReactNode;
}
export default function CustomContainer({ children }: ICustomContainerProps) {
  return <div className="w-11/12 max-w-screen-xl mx-auto">{children}</div>;
}
