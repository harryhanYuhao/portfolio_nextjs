import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { monserrat } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Harry's Profile",
    default: "Harry's Profile",
  },
  description: "Harry's Personal Profile and Portfolio Website",
  metadataBase: new URL('https://yhhan.net'),
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
