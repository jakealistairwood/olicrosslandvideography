import { Inter, Manrope } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";

import Navbar from "@/components/globals/Navbar";
import Footer from "@/components/globals/Footer";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });
const hubotSansCondensed = localFont({
  src: [
    {
      path: "../../public/fonts/HubotSansCondensed-Light.woff2",
      weight: "300",
      style: "normal"
    },
    {
      path: "../../public/fonts/HubotSansCondensed-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/HubotSansCondensed-Medium.woff2",
      weigh: "500",
      style: "normal"
    },
    {
      path: "../../public/fonts/HubotSansCondensed-SemiBold.woff2",
      weigh: "600",
      style: "normal"
    },
    {
      path: "../../public/fonts/HubotSansCondensed-Bold.woff2",
      weight: "700",
      style: "normal"
    },
  ],
  variable: "--font-hubot-sans-condensed",
})

const commitMono = localFont({
  src: [
    {
      path: "../../public/fonts/CommitMono-400-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CommitMono-700-Regular.woff2",
      weight: "700",
      style: "normal",
    }
  ],
  variable: "--font-commit-mono",
})

export const metadata = {
  title: "Oli Crossland | Creative Videography & Production",
  description: "Welcome to the portfolio site of Oliver Crossland. A creative videographer specializing in video editing and photography with over 5 years of professional experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${hubotSansCondensed.variable} ${commitMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
