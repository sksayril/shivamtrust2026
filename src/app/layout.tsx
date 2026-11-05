import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shibham Education & Social Welfare Trust | Official Portal",
  description: "Official portal of Shibham Education & Social Welfare Trust (Est. 2006). Empowering 2 million youth through 9 renowned institutions, NSDC, PMKVY, PBSSD skill development, healthcare outreach, and free coaching in West Bengal & Pan-India.",
  keywords: [
    "Shibham Trust",
    "Shibham Education and Social Welfare Trust",
    "Jakir Hossain Medical College",
    "Aurangabad Public School",
    "PMKVY Murshidabad",
    "NSDC training partner West Bengal",
    "Dipak Kumar Das",
    "Jakir Hossain",
    "PBSSD Utkarsh Bangla",
    "Free Coaching Center Aurangabad"
  ],
  icons: {
    icon: "/images/logos.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[#070b14] text-slate-100 selection:bg-orange-500 selection:text-white`}
      >
        <TopBar />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
