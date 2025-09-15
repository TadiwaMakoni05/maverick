import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Maverick Global Fitters",
  description: "Manufacturers of all Aluminum and Glass products. Specialists in Shopfronts, Doors. Framed and frameless cubicles, Staircase Glasses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 overflow-x-hidden`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
