import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/lib/Providers";

export const metadata: Metadata = {
  title: "Md Nurullah Bhuiyan",
  description:
    "Full stack web developer. A MERN stack based full stack developer with advance typescript redux and next js experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
