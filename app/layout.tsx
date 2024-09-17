import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import ResponsiveNav from "@/components/ResponsiveNav";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "HH",
  description: "Home - House",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
