import type { Metadata } from "next";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";


export const metadata: Metadata = {
  title: {
    template: "%s | Harry's Profile",
    default: "Harry's Profile",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="pt-[5vh] min-h-[100vh] pb-[5vh] flex ">{children}</div>
      <Footer />
    </div>
  );
}
