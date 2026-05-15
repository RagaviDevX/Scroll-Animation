import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Allow serving static frames from /public/frames */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
