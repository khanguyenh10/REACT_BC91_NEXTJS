import type { NextConfig } from "next";
//Cấu hình accept domain picsumphoto, i.pravatar, apistore.cybersoft.edu.vn, 

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "airbnbnew.cybersoft.edu.vn",
        port: "",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "avatarngau.sbs",
        port: "",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "dogolegia.vn",
        port: "",
        pathname: "**"
      },
      {
        protocol: "http",
        hostname: "sc04.alicdn.com",
        port: "",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "www.gravatar.com",
        port: "",
        pathname: "**"
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "**"
      }
    ]
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
};

export default nextConfig;
