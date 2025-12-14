import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    domains: ["t4.ftcdn.net"], // add any external image host here
  },
};

export default nextConfig;
