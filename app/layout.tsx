import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} bg-background font-body text-primary`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
