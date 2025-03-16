// src/components/Hero/index.tsx

import React from "react";
import { Anchor, MapPin, PhoneCall, Utensils } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative bg-white text-gray-800 overflow-hidden">
      {/* Patrón de Fondo */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <Anchor
            key={i}
            className="absolute text-amber-700"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            size={24}
          />
        ))}
      </div>

      {/* Contenedor Principal */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Contenido de Texto */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block text-amber-700 mb-2">Lapalapa</span>
              <span className="block">Mariscos Frescos</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Sumérgete en los auténticos sabores del mar en cada bocado.
              Pescados y mariscos frescos, preparados con pasión artesanal y el
              toque único de nuestra cocina.
            </p>

            {/* Servicio a Domicilio Destacado */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-center gap-3">
              <div className="bg-amber-600 rounded-full p-2 flex-shrink-0">
                <PhoneCall size={20} className="text-white" />
              </div>
              <div>
                <p className="font-medium text-amber-800">
                  ¡NUEVO! Ahora con servicio a domicilio
                </p>
                <a
                  href="tel:+523951027470"
                  className="text-amber-900 font-bold hover:text-amber-700 transition-colors"
                >
                  +52 (395) 102-7470
                </a>
              </div>
            </div>

            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
              <Link
                href="/menu"
                className="bg-amber-700 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-md hover:shadow-lg"
              >
                Ver Menú Completo
                <Utensils size={20} />
              </Link>
              <a
                href="tel:+523951027470"
                className="border border-amber-700 text-amber-700 hover:bg-amber-50 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <PhoneCall size={20} />
                Ordenar a Domicilio
              </a>
            </div>
            {/* Información de Ubicación */}
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={20} className="text-amber-700" />
              <p className="text-sm sm:text-base">
                Av. Benigno Romo #170, Centro, San Juan de los Lagos, Jalisco
              </p>
            </div>
          </div>

          {/* Imagen/Elemento Decorativo */}
          <div className="relative w-full max-w-lg mx-auto md:max-w-none">
            <div className="aspect-square rounded-full bg-amber-100 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/images/hero/main.png"
                alt="Platillo de mariscos frescos"
                className="w-4/5 h-4/5 object-cover rounded-3xl transform rotate-6 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ola Decorativa */}
      <div className="relative w-full mt-16">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto fill-amber-100"
          preserveAspectRatio="none"
        >
          <path d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
