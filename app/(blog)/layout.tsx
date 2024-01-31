import type { Metadata } from "next";

import Navbar from "@/app/(blog)/components/Navbar";

export const metadata: Metadata = {
  title: {
    template: "%s | Harry's Blog",
    default: "Harry's Blog",
  },
  description: "Harry's Blog on Tech, Math, and CS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div >
      <Navbar />
      <div className="mt-[5vh] min-h-[100vh] mb-[5vh] flex "> {children} </div>
    </div>
  );
}
