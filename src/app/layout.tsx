import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
  title: "Be Bold - Your Ultimate Shopping Destination",
  description: "Be Bold is your one-stop e-commerce platform for the latest fashion, beauty products, and essentials. Shop with confidence and enjoy a seamless shopping experience.",
  keywords: "shopping, e-commerce, online store, fashion, beauty, essentials",
  authors: { name: "Be Bold" }
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
        <ToastContainer theme="colored" />
        <Footer />
      </body>
    </html>
  );
}
