import type { Metadata, Viewport } from "next";
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

// JSON-LD para SEO avanzado
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Lapalapa",
  "image": "https://lapalapa.vip/images/lapalapa-og.jpg",
  "url": "https://lapalapa.vip",
  "telephone": "+523951027470",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Benigno Romo #170",
    "addressLocality": "San Juan de los Lagos",
    "addressRegion": "Jalisco",
    "postalCode": "47000",
    "addressCountry": "MX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "21.238333", 
    "longitude": "-102.335833" 
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "12:00",
      "closes": "22:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday", "Saturday", "Sunday"],
      "opens": "12:00",
      "closes": "23:00"
    }
  ],
  "menu": "https://lapalapa.vip/menu",
  "servesCuisine": ["Mariscos", "Cocina Mexicana", "Pescados"],
  "priceRange": "$$",
  "paymentAccepted": "Efectivo, tarjetas de crédito",
  "potentialAction": {
    "@type": "OrderAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "tel:+523951027470",
      "inLanguage": "es-MX",
      "actionPlatform": [
        "http://schema.org/MobileWebPlatform"
      ]
    },
    "deliveryMethod": [
      "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"
    ]
  }
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lapalapa.vip"),
  title: "Lapalapa | Restaurante de Mariscos Frescos en San Juan de los Lagos",
  description: "Disfruta de los mejores mariscos frescos en San Juan de los Lagos. Servicio a domicilio, especialidades del mar y platillos preparados artesanalmente. ¡Ordena ya!",
  keywords: ["restaurante", "mariscos", "seafood", "cocina marina", "pescados frescos", "lapalapa", "San Juan de los Lagos", "servicio a domicilio", "pulpo", "camarones"],
  authors: [{ name: "Lapalapa Restaurant" }],
  creator: "Lapalapa",
  publisher: "Lapalapa",
  robots: "index, follow",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    type: "website",
    title: "Lapalapa | El mejor restaurante de mariscos en San Juan de los Lagos",
    description: "Descubre los auténticos sabores del mar. Mariscos frescos preparados con pasión artesanal. ¡Ahora con servicio a domicilio!",
    url: "https://lapalapa.vip",
    siteName: "Lapalapa Mariscos",
    locale: "es_MX",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lapalapa Mariscos Frescos",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lapalapa | Mariscos Frescos en San Juan de los Lagos",
    description: "Disfruta de mariscos frescos con el sabor inigualable de Lapalapa. ¡Ahora con servicio a domicilio!",
    images: ["/twitter-image.jpg"]
  },
  alternates: {
    canonical: "https://lapalapa.vip",
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  category: "Restaurant",
  other: {
    "geo.region": "MX-JAL",
    "geo.placename": "San Juan de los Lagos",
    "geo.position": "21.238333;-102.335833",
    "ICBM": "21.238333, -102.335833",
  }
};

// Viewport configuration
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
    <html lang="es">
      <head>
        {/* JSON-LD Schema para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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