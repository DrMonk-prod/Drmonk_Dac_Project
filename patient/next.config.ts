import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "findr-media-prod.s3.ap-northeast-3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
