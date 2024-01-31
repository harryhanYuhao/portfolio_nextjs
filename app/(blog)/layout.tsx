import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Harry's Blog",
    default: "Harry's Blog",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}
