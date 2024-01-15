import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

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
  metadataBase: new URL("https://yhhan.net"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${monserrat.className}`}>
        <Navbar />
        <div className="pt-[5vh] min-h-[100vh] pb-[5vh] flex items-start justify-start">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
