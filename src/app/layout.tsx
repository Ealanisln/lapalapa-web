import type { Metadata, Viewport } from "next";  // Add Viewport import
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lapalapa | Restaurante de Mariscos",
  description: "Disfruta de los mejores mariscos frescos en Lapalapa. Especialidades del mar preparadas con pasión y experiencia. Reserva tu mesa hoy.",
  keywords: ["restaurante", "mariscos", "seafood", "cocina marina", "pescados frescos", "lapalapa"],
  authors: [{ name: "Lapalapa Restaurant" }],
  creator: "Lapalapa",
  publisher: "Lapalapa",
  robots: "index, follow",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico"
  }
};

// Add separate viewport export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1E293B"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}