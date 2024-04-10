import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar, { NavLink } from "@/components/navbar";
import Footer from "@/components/footer";
import Banner from "@/components/banner";
import Head from "next/head";

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
    <>
      <Head>
        <meta
          property="og:image"
          content="https://i.ibb.co/9wZqKtw/Switch-Online-Home.png"
        />
        <meta property="og:title" content="Switch Online"></meta>
        <meta
          property="og:description"
          content="Unlock Your Brand's Potential with Switch."
        />
      </Head>
      <html lang="en">
        <body className={inter.className}>
          <Navbar>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/our-services"}>Our services</NavLink>
            <NavLink href={"/case-studies"}>Case studies</NavLink>
            <NavLink href={"/about-us"}>About us</NavLink>
          </Navbar>
          {children}
          <Banner />
          <Footer>
            <NavLink href={"/our-services"}>Our services</NavLink>
            <NavLink href={"/case-studies"}>Case studies</NavLink>
            <NavLink href={"/about-us"}>About us</NavLink>
          </Footer>
        </body>
      </html>
    </>
  );
}
