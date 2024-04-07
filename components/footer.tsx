import { ReactNode } from "react";
import Logo from "./logo";
import { Button } from "./ui/button";
import Link from "next/link";
import TwitterIcon from "@/public/icons/twitter-icon";
import LinkedInIcon from "@/public/icons/linkedIn-icon";
import FacebookIcon from "@/public/icons/facebook-icon";
import SocialIcon from "@/public/icons/social-icon";

const Footer = ({ children }: { children: ReactNode }) => {
  return (
    <footer className="px-4 md:px-8 lg:px-20 pt-10 md:pt-16 pb-12">
      <div className="flex justify-between md:flex-nowrap flex-wrap h-[100px] md:mb-16 mb-12">
        <div className="flex flex-col justify-between md:gap-0 gap-4 md:mb-0 mb-8">
          <Logo />
          <p className="max-w-[406px] text-[#667085]">
            Ready to take your brand to new heights? Don&apos;t hesitate to
            reach out.
          </p>
        </div>
        <div className="flex flex-col md:items-end md:gap-0 gap-4 justify-between">
          <div className="flex gap-x-5 md:gap-6 md:flex-nowrap flex-wrap">
            {children}
          </div>
          <div className="flex md:gap-0 gap-6">
            <Button variant="link" className="md:px-4 px-0">
              <TwitterIcon />
            </Button>
            <Button variant="link" className="md:px-4 px-0">
              <LinkedInIcon />
            </Button>
            <Button variant="link" className="md:px-4 px-0">
              <FacebookIcon />
            </Button>
            <Button variant="link" className="md:px-4 px-0">
              <SocialIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex md:flex-nowrap md:mt-0 mt-52 md:gap-0 gap-5 flex-wrap flex-col-reverse md:flex-row justify-between text-[#98A2B3] pt-8 border-t border-t-[#EAECF0]">
        <p>© 2024 Switch Online. All rights reserved.</p>
        <div className="flex gap-4 items-center">
          <Link href={"/"}>Terms</Link>
          <Link href={"/"}>Privacy</Link>
          <Link href={"/"}>Cookies</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
