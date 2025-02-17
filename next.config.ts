import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://ztvhfiwqkd.ufs.sh/",
        pathname: "/f/**",
      }
    ]
  }
};

export default nextConfig;
