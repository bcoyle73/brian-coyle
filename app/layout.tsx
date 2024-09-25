import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from './header';
import Footer from './footer';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "brian-coyle.com",
  description: "Home for Brian's thoughts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          
            <main className="container flex-1">
            {children}
            </main>
       
    </div>
      </body>
    </html>
  );
}
