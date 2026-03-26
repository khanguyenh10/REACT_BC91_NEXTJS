import type { NextConfig } from "next";
//Cấu hình accept domain picsumphoto, i.pravatar, apistore.cybersoft.edu.vn, 

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images:{
    domains:["picsum.photos", "i.pravatar.cc", "apistore.cybersoft.edu.vn"],
    remotePatterns:[
      {
        protocol:"https",
        hostname:"picsum.photos",
        port:"",
        pathname:"**"
      },
      {
        protocol:"https",
        hostname:"i.pravatar.cc",
        port:"",
        pathname:"**"
      },
      {
        protocol:"https",
        hostname:"apistore.cybersoft.edu.vn",
        port:"",
        pathname:"**"
      }
    ]
  }
};

export default nextConfig;
