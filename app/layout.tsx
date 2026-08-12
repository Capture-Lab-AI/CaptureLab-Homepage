import type { Metadata } from "next";
import { SmoothScroll } from "@/components/smooth-scroll";
import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://capture-lab.com"),
  title: "Capture Lab — You know what AI costs. Now know what it's worth.",
  description:
    "Portfolio management for enterprise AI. Capture Lab measures the cost per successful outcome of every AI workflow in the company, then helps leadership move the money to the ones that are paying off.",
  openGraph: {
    title: "Capture Lab",
    description:
      "You know what AI costs. Now know what it's worth. Portfolio management for enterprise AI.",
    url: "https://capture-lab.com",
    siteName: "Capture Lab",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fontVariables} antialiased`}>
      <body className="grain">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
