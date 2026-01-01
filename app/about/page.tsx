import AboutPage from "@/components/pages/about-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - U Fill Academy",
  description: "Education for All - Providing free education to tribal and underprivileged students",
};

export default function About() {
  return <AboutPage />;
}