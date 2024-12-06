import { Metadata } from "next";
import HomePage from "./home-page";

export const metadata: Metadata = {
  title: "Switch Online - Home",
};

export default function Home() {
  return <HomePage />;
}
