import type { Metadata } from "next";
import { geist_mono } from "@/fonts/fonts";
import "./globals.css";
import Navbar from "@/components/common/Navbar/Navbar";
import WidthLimiter from "@/components/wrappers/Layout/WidthLimiter";



export const metadata: Metadata = {
  title: "Docs | Diptanshu Mahish",
  description: "docs for things by diptanshu mahish",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist_mono.className} bg-back-color text-white`}>
        <Navbar/>

        {children}

        </body>
    </html>
  );
}
