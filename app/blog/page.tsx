import BlogPage from "@/components/pages/blogpage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Articles - U Fill Academy",
  description: "Educational insights, learning tips, and latest trends in education technology",
};

export default function Blog() {
  return <BlogPage />;
}