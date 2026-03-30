import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/programs/business-analytics",
        destination: "/programs/artificial-intelligence",
        permanent: true,
      },
      {
        source: "/programs/applied-finance",
        destination: "/programs/global-finance-corporate-analyst",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
