import type { NextConfig } from "next";
//Cấu hình accept domain picsumphoto, i.pravatar, apistore.cybersoft.edu.vn, 

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images:{
    domains:["picsum.photos", "i.pravatar.cc", "airbnbnew.cybersoft.edu.vn", 'avatarngau.sbs','dogolegia.vn'],
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
          hostname:"airbnbnew.cybersoft.edu.vn",
          port:"",
          pathname:"**"
      },
      {
        protocol:"https",
        hostname:"avatarngau.sbs",
        port:"",
        pathname:"**"
      },
      {
        protocol:"https",
        hostname:"dogolegia.vn",
        port:"",
        pathname:"**"
      }
    ]
  }
};

export default nextConfig;
