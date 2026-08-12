import { Inter, JetBrains_Mono, Urbanist } from "next/font/google";
import localFont from "next/font/local";

/**
 * The five faces of the Capture Lab type system, shared with the product.
 * Each binds a CSS variable that `app/globals.css` re-exports as a Tailwind
 * `font-*` utility.
 */

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  axes: ["opsz"],
});

/** Headlines. Vendored — not on Google Fonts. License in `app/fonts/OFL.txt`. */
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
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

/** Figures. Always paired with `.tabular`. */
const urbanist = Urbanist({
  variable: "--font-numeric",
  subsets: ["latin"],
});

export const fontVariables = [
  inter.variable,
  libreCaslonCondensed.variable,
  jetbrainsMono.variable,
  urbanist.variable,
].join(" ");
