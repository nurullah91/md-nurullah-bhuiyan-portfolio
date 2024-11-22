import Footer from "@/components/Shared/Footer";
import NavbarWrapper from "@/components/Shared/NavbarWrapper";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavbarWrapper />
      {children}
      <Footer />
    </div>
  );
}
