import Footer from "@/components/Shared/Footer";
import OthersPageNavbar from "@/components/Shared/OthersPageNavbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <OthersPageNavbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
