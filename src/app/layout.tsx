import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chef K Guest | Premium Family Restaurant in Gujranwala",
  description:
    "Experience premium dining at Chef K Guest — Gujranwala's finest restaurant offering Pakistani, Turkish, Chinese, BBQ, and Continental cuisine. Located at Sialkot Bypass, Faiz Alam Town.",
  keywords: [
    "Chef K Guest",
    "restaurant Gujranwala",
    "premium restaurant Pakistan",
    "Pakistani cuisine",
    "Turkish food Gujranwala",
    "BBQ restaurant",
    "family restaurant Gujranwala",
    "fine dining Gujranwala",
    "best restaurant Gujranwala",
    "luxury restaurant Pakistan",
  ],
  openGraph: {
    title: "Chef K Guest | Premium Family Restaurant in Gujranwala",
    description:
      "Where Exceptional Food Meets Elegant Ambiance. Premium dining in the heart of Gujranwala.",
    type: "website",
    locale: "en_PK",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-luxury-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
