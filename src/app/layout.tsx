import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/organisms/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KoinX: Trusted Crypto Tax Software and Portfolio Tracker",
  description: "Trusted Crypto Tax Software and Portfolio Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex flex-col">
      <body className="">
        <Navbar />
        <div className="bg-[#DEDFE2] min-h-[90vh]">{children}</div>
      </body>
    </html>
  );
}
