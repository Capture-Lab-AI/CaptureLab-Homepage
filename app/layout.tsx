import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// Libre Caslon Condensed — the editorial display serif used across the
// Capture Lab product for page titles (vendored from
// github.com/ertekinno/libre-caslon-condensed). Keeps the homepage's
// headline typography identical to the app.
const libreCaslonCondensed = localFont({
  variable: "--font-display",
  src: [
    {
      path: "./fonts/LibreCaslonCondensed-Variable.woff2",
      style: "normal",
      weight: "400 700",
    },
    {
      path: "./fonts/LibreCaslonCondensed-VariableItalic.woff2",
      style: "italic",
      weight: "400 700",
    },
  ],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Capture Lab — Prospecting autopilot for commercial real estate",
  description:
    "Capture Lab is an AI prospecting platform built for CRE brokerages. Discover off-market opportunities, enrich every prospect automatically, and start each day with an AI-drafted task queue grounded in real signals.",
  metadataBase: new URL("https://capturelab.example.com"),
  openGraph: {
    title: "Capture Lab — Prospecting autopilot for commercial real estate",
    description:
      "Every lease expiring in your market. Surfaced 18 months early.",
    type: "website",
    images: ["/og.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${libreCaslonCondensed.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
