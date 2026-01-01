import ResourcesPage from "@/components/pages/resources";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Resources - U Fill Academy",
  description: "Downloadable study materials, guides, templates, and learning resources for students and educators",
};

export default function Resources() {
  return <ResourcesPage />;
}