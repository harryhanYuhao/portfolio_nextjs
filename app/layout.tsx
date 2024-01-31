import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";

import { monserrat } from "@/app/ui/fonts";
import "@/app/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} `}>
        <div>
          {children}
        </div>
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics token={`${process.env.GOOGLE_ANALYTICS_TOKEN}`}/>
      </body>
    </html>
  );
}
