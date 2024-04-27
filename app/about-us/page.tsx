import { Metadata } from "next";
import AboutUsHomePage from "./about-us-home-page";

export const metadata: Metadata = {
  title: "Switch Online - About Us",
};

const AboutUs = () => {
  return <AboutUsHomePage />;
};

export default AboutUs;
