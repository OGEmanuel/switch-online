import { Metadata } from "next";
import SwitchPage from "./switch-page";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Switch Online - Get in touch",
};

const GetInTouch = () => {
  return (
    <>
      <Toaster />
      <SwitchPage />{" "}
    </>
  );
};

export default GetInTouch;
