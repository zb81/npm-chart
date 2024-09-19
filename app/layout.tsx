import type { Metadata } from "next";
import { Public_Sans } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "NPM Chart",
  description: "Visualize npm downloads in a beautiful chart, ready to be shared with your community.",
};

const PublicSans = Public_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${PublicSans.className}`}>
        {children}
      </body>
    </html>
  );
}
