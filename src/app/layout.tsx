import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Printable Wall Art Conversion Radar",
  description:
    "Deep research dashboard highlighting the highest converting printable wall art opportunities across digital commerce platforms.",
  openGraph: {
    title: "Printable Wall Art Conversion Radar",
    description:
      "Surface high-intent niches, buyer personas, and platform strategies for scalable printable wall art revenue.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Printable Wall Art Conversion Radar",
    description:
      "Research-backed blueprint for building massive printable wall art sales across platforms.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
