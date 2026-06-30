import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Averqon | Product Engineering Portfolio",
  description:
    "Explore Averqon's portfolio of web, mobile, cloud, ERP, SaaS and AI products, with selected case studies and measurable outcomes.",
  keywords: [
    "Product Engineering Portfolio",
    "Web Development",
    "Mobile Development",
    "Cloud Engineering",
    "AI Integration",
    "SaaS",
    "Case Studies",
    "Averqon",
  ],
  metadataBase: new URL("https://averqon.com"),
  openGraph: {
    title: "Averqon | Product Engineering Portfolio",
    description:
      "Selected product engineering work across web, mobile, cloud and AI.",
    url: "https://averqon.com",
    siteName: "Averqon",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Averqon | Product Engineering Portfolio",
    description: "Selected product engineering work across web, mobile, cloud and AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
