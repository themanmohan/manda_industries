import type { Metadata } from "next";
import localFont from "next/font/local";
import {Footer} from "../components"
import Navbar from "@/components/navbar/Navbar";
import "aos/dist/aos.css";
import "./globals.css";
import 'react-multi-carousel/lib/styles.css';
import { Toaster } from 'react-hot-toast'; 

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "M AND A Industries",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
      <Toaster
  position="bottom-right"
  reverseOrder={false}
/>
      </body>
    </html>
  );
}
