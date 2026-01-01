import TeamPage from "@/components/pages/TeamPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team - U Fill Academy",
  description: "Meet the passionate educators and innovators behind U Fill Academy",
};

export default function Team() {
  return <TeamPage />;
}