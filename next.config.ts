import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dextrocloud.com",
      },
    ],
  },
};

export default nextConfig;
