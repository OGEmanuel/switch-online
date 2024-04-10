import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar, { NavLink } from "@/components/navbar";
import Footer from "@/components/footer";
import Banner from "@/components/banner";
import ogImage from "@/public/switch-online-home.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Switch Online",
  description: "Unlock Your Brand's Potential with Switch.",
  openGraph: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
  );
}
