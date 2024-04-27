"use client";

import { useThemeContext } from "@/context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useThemeContext();

  return (
    <section className={`${theme === "dark" ? "bg-[#020F0F]" : ""}`}>
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-20">
        {children}
      </div>
    </section>
  );
}
