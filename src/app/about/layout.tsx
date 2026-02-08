export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1 className="text-2xl mx-6">about layout</h1>
      {children}
    </>
  );
}
