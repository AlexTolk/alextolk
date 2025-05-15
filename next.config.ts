import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/alextolk",
  assetPrefix: "/alextolk/",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
