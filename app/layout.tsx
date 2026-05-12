import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Script from "next/script";
import "./global.css";
// import "swiper/css";
import { ToastContainer } from "react-toastify";
import LoadRedux from "./(component)/shared/LoadRedux";
import { PaperAirplaneIcon } from "@heroicons/react/16/solid";
import ModalContainer from "./(component)/shared/UI/ModalContainer";
import DrawerContainer from "./(component)/shared/UI/DrawerContainer";

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
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="icon" href={"../favicon.png"} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css" />
      </head>

      <body className=" bg-white antialiased">
        <LoadRedux>
          <>
            {children}
            <ModalContainer />
            <DrawerContainer />
          </>
        </LoadRedux>
        <ToastContainer />
      </body>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"></Script>
      <Script src="/libs/backtoTop/util.js" />
      <Script src="/libs/backtoTop/main.js" />
    </html>
  );
}
