export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={"mx-auto max-w-[1440px] px-4 md:px-8 lg:px-20"}>
      {children}
    </section>
  );
}
