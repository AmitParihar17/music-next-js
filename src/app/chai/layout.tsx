
export default function LemonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1 className="text-2xl mx-6">Inner Lemon layout item</h1>
      {children}
    </>
  );
}
