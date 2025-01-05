import {JetBrains_Mono } from "next/font/google";
import "./globals.css";


// components

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const jetbrainsMono = JetBrains_Mono({
  subsets : ['latin'],
  weight : ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable : '--font-jetbrainsMono'
});

export const metadata = {
  title: "Ankit's Portfolio",
  description: "This is a portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} antialiased`}>

          <Header/>

         <StairTransition/>

         <PageTransition>
            {children}
          </PageTransition>

    


      </body>
    </html>
  );
}
