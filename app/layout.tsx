import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { monserrat } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${monserrat.className}`}>
        <>
          <Navbar />
          <div className="min-h-screen flex items-center justify-center">{children}</div>
          <Footer />
        </>
      </body>
    </html>
  );
}
