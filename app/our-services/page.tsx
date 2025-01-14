import { Metadata } from "next";
import ServicesHomePage from "./services-home-page";

export const metadata: Metadata = {
  title: "Switch Online - Our Services",
};

const OurServices = () => {
  return <ServicesHomePage />;
};

export default OurServices;
