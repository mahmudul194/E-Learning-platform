import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IMS | Learn BIM Build Your Career",
  description:
    "Professional BIM, Revit Architecture, Structure, MEP, Navisworks, AutoCAD & Dynamo Online Learning Platform. Build Smart. Lead Ahead.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} font-sans h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-orange-500 selection:text-white font-sans">
        {/* Sticky Header Container (TopBar + Navbar together) */}
        <header className="sticky top-0 z-50 shadow-xs">
          <TopBar />
          <Navbar />
        </header>

        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
