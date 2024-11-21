export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>Navbar HomeLayout</div>
      {children}
    </div>
  );
}
