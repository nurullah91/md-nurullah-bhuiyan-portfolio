import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`antialiased`}>
        <h1 className="text-blue-900">Hello from rooot layoyt</h1>
        {children}
      </body>
    </html>
  );
}
