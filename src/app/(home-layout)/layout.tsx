export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <nav>Hello Home page</nav>
      {children}
    </main>
  );
}
