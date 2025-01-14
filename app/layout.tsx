import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar, { NavLink } from "@/components/navbar";
import Footer from "@/components/footer";
import Banner from "@/components/banner";
import ThemeContextProvider from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Switch Online",
  description: "Unlock Your Brand's Potential with Switch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <Navbar>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/our-services"}>Our services</NavLink>
            <NavLink href={"/case-studies"}>Case studies</NavLink>
            <NavLink href={"/about-us"}>About us</NavLink>
            <NavLink href={"https://blog.switchonline.xyz"}>Blog</NavLink>
          </Navbar>
          {children}
          <Banner />
          <Footer>
            <NavLink href={"/our-services"}>Our services</NavLink>
            <NavLink href={"/case-studies"}>Case studies</NavLink>
            <NavLink href={"/about-us"}>About us</NavLink>
            <NavLink href={"https://blog.switchonline.xyz"}>Blog</NavLink>
          </Footer>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
