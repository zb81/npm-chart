import type { Metadata } from "next";
import { Public_Sans } from 'next/font/google';
import "./globals.css";
import Link from "@/components/link";

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

        <footer className='fixed bottom-0 w-full pb-6 flex justify-center'>
          <p className='text-gray-500 text-sm'>
            Made by <Link target='_blank' href='https://github.com/zb81'>zb81</Link>
            <span className='mx-1.5'>·</span>
            Source code on <Link target='_blank' href='https://github.com/zb81/npm-chart'>GitHub</Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
