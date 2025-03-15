import React from 'react';
import { Anchor, MapPin, PhoneCall, Utensils } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Patrón de Fondo */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <Anchor
            key={i}
            className="absolute text-blue-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
            size={24}
          />
        ))}
      </div>

      {/* Contenedor Principal */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen py-16 md:py-0 md:h-screen flex items-start md:items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full pt-12 md:pt-0">
          {/* Contenido de Texto */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block text-blue-400 mb-2">Lapalapa</span>
              <span className="block">Mariscos Frescos</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-lg">
              Sumérgete en los auténticos sabores del mar en cada bocado. Pescados y mariscos frescos, preparados con pasión artesanal y el toque único de nuestra cocina.
            </p>
            
            {/* Servicio a Domicilio Destacado */}
            <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4 flex items-center gap-3">
              <div className="bg-blue-500 rounded-full p-2 flex-shrink-0">
                <PhoneCall size={20} className="text-white" />
              </div>
              <div>
                <p className="font-medium text-blue-300">¡NUEVO! Ahora con servicio a domicilio</p>
                <a 
                  href="tel:+523951027470" 
                  className="text-white font-bold hover:text-blue-200 transition-colors"
                >
                  +52 (395) 102-7470
                </a>
              </div>
            </div>
            
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
              <Link 
                href="/menu-completo" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                Ver Menú Completo
                <Utensils size={20} />
              </Link>
              <a 
                href="tel:+523951027470" 
                className="border border-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall size={20} />
                Ordenar a Domicilio
              </a>
            </div>
            {/* Información de Ubicación */}
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin size={20} className="text-blue-400" />
              <p className="text-sm sm:text-base">Av. Benigno Romo #170, Centro, San Juan de los Lagos, Jalisco</p>
            </div>
          </div>

          {/* Imagen/Elemento Decorativo */}
          <div className="relative w-full max-w-lg mx-auto md:max-w-none">
            <div className="aspect-square rounded-full bg-blue-500/20 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="/images/hero/main.png"
                alt="Platillo de mariscos frescos"
                className="w-full h-full object-cover rounded-3xl transform rotate-6 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ola Decorativa */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 200" 
          className="w-full h-auto fill-blue-400/20"
          preserveAspectRatio="none"
        >
          <path d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;