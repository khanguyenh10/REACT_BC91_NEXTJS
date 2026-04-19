import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Script from "next/script";
import "./global.css";
import { ToastContainer } from "react-toastify";
import LoadRedux from "./(component)/shared/LoadRedux";

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
      data-theme="light"
      className={`${openSans.variable} `}
    >
      <head>

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
