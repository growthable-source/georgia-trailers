import type { Metadata } from "next";
import localFont from "next/font/local";
import { TrackingScripts } from "@/components/TrackingScripts";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const bebasNeue = localFont({
  src: [
    {
      path: "../../public/fonts/BebasNeue-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = localFont({
  src: [
    {
      path: "../../public/fonts/DMSans-Regular.woff2",
      weight: "400 700",
      style: "normal",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

const oswald = localFont({
  src: [
    {
      path: "../../public/fonts/Oswald-Regular.woff2",
      weight: "500 700",
      style: "normal",
    },
  ],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default:
      "Trailers for Sale Near Atlanta | No Credit Check Financing | Georgia Trailer Outlet",
    template: "%s | Georgia Trailer Outlet",
  },
  description:
    "Hundreds of trailers in stock at the lowest prices in the Southeast. No credit check financing. Dump, flatbed, tilt, enclosed & utility trailers in Cartersville, GA. Call (770) 608-6882.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Trailers for Sale Near Atlanta | Georgia Trailer Outlet",
    description:
      "Hundreds of trailers in stock at the lowest prices in the Southeast. No credit check financing available.",
    images: [siteConfig.ogImage],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} ${oswald.variable} antialiased`}
      >
        <TrackingScripts />
        {children}
      </body>
    </html>
  );
}
