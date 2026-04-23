import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Script from "next/script";
import "./global.css";
// import "swiper/css";
import { ToastContainer } from "react-toastify";
import LoadRedux from "./(component)/shared/LoadRedux";
import { PaperAirplaneIcon } from "@heroicons/react/16/solid";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="mytheme"
      className={`${openSans.variable} `}
    >
      <head>
        <link rel="icon" href={"../favicon.png"} />
      </head>

      <body className=" bg-white">
        <LoadRedux>
          {children}
        </LoadRedux>
        <ToastContainer />
      </body>


    </html>
  );
}
