import type { Metadata } from "next";
import "./globals.css";
import Banner from "@/components/Banner";
import Header from "@/components/Header/Header";
import Footer from "@/components/FooterComponents/Footer";

export const metadata: Metadata = {
  title: "SHOP.CO",
  description: "Created by Jaimeen M.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="outfit scrolls">
        <Banner />
        <Header />
        <div className="mt-[70px] max-w-screen-xl mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
