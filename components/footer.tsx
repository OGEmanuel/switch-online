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
    <footer className="px-20 pt-16 pb-12">
      <div className="flex justify-between h-[100px]">
        <div className="flex flex-col justify-between">
          <Logo />
          <p className="max-w-[406px]">
            Ready to take your brand to new heights? Don't hesitate to reach
            out.
          </p>
        </div>
        <div className="flex flex-col items-end justify-between">
          <div>{children}</div>
          <div>
            <Button variant="link">
              <TwitterIcon />
            </Button>
            <Button variant="link">
              <LinkedInIcon />
            </Button>
            <Button variant="link">
              <FacebookIcon />
            </Button>
            <Button variant="link">
              <SocialIcon />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
