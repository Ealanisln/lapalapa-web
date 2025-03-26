// app/page.tsx
import HeroSection from "@/components/Hero";

export default function Home() {
  return (
    <div itemScope itemType="https://schema.org/Restaurant">
      <HeroSection />

      {/* Estas etiquetas son invisibles pero ayudan al SEO */}
      <div className="hidden">
        <h1 itemProp="name">Lapalapa Restaurante de Mariscos</h1>
        <span itemProp="priceRange">$$</span>
        <span itemProp="servesCuisine">Mariscos</span>
        <div
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <span itemProp="streetAddress">Prolongación Pedro Galeana #2. Col. El Pedregoso.</span>
          <span itemProp="addressLocality">San Juan de los Lagos</span>
          <span itemProp="addressRegion">Jalisco</span>
          <span itemProp="postalCode">47000</span>
          <span itemProp="addressCountry">MX</span>
        </div>
        <span itemProp="telephone">+523951027470</span>
        <a itemProp="url" href="https://lapalapa.vip">
          lapalapa.vip
        </a>
      </div>
    </div>
  );
}
