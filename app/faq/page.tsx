import FAQPage from "@/components/pages/faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - U Fill Academy",
  description: "Frequently asked questions about admissions, courses, and student support",
};

export default function FAQ() {
  return <FAQPage />;
}