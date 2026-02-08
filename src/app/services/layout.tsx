export default function ServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1 className="text-2xl mx-6">Inner Services layout item</h1>
      {children}
    </>
  );
}
