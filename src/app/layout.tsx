import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lukka Chhupi",
  description: "An anonymous feedback/suggestion giving platform ",
  icons:{
    icon:[
      '/public/favicon.ico?v=1',
    ],
    apple:[
      '/public/apple-touch-icon.png?v=4',
    ],
    shortcut:[
      '/public/apple-touch-icon.png?v=4', // for iOS <  12.3; safari on iOS should get this if they
    ],
  },
  manifest:'/public/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster/>
        </AuthProvider>
      </body>
    </html>
  );
}
