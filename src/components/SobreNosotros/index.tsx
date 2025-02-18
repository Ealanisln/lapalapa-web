import React from 'react';
import { Anchor, Heart, Quote, MapPin, Users } from 'lucide-react';

const SobreNosotros = () => {
  const timeline = [
    {
      año: "1985",
      titulo: "Los inicios",
      descripcion: "Don Roberto y Doña María iniciaron vendiendo pescado fresco en el mercado municipal de San Juan de los Lagos."
    },
    {
      año: "1995",
      titulo: "El primer local",
      descripcion: "Abrimos nuestro primer local pequeño cerca de la Basílica, donde comenzamos a servir platillos preparados."
    },
    {
      año: "2008",
      titulo: "Expansión",
      descripcion: "La segunda generación se une al negocio, expandiendo el menú y modernizando el servicio."
    },
    {
      año: "2015",
      titulo: "Nueva ubicación",
      descripcion: "Inauguramos nuestro actual restaurante, un espacio más amplio para servir mejor a nuestros clientes."
    }
  ];

  return (
    <div id="nosotros" className="relative bg-slate-900 text-white py-20 overflow-hidden">
      {/* Patrón de Fondo */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(15)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Heart className="text-blue-400 h-12 w-12" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block text-blue-400">Nuestra Historia</span>
            <span className="block text-2xl md:text-3xl text-gray-300 mt-2">
              Una tradición familiar
            </span>
          </h2>
        </div>

        {/* Historia Principal */}
        <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
          <div className="space-y-6">
            <div className="relative">
              <Quote className="absolute -left-4 -top-4 text-blue-400/20 h-16 w-16" />
              <p className="text-lg text-gray-300 leading-relaxed">
                Nuestra historia comenzó hace más de tres décadas en el corazón de San Juan de los Lagos. 
                Lo que empezó como un pequeño puesto de pescado fresco en el mercado municipal, se ha 
                convertido en una tradición gastronómica que une a familias y amigos alrededor de los 
                mejores sabores del mar.
              </p>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Don Roberto, junto a su esposa Doña María, inculcaron en sus hijos el amor por la 
              gastronomía y el servicio. Hoy, la segunda generación continúa este legado, 
              manteniendo las recetas tradicionales mientras innovamos para las nuevas generaciones.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-800/50 p-4 rounded-lg text-center">
                <span className="block text-3xl font-bold text-blue-400">35+</span>
                <span className="text-gray-300">Años de experiencia</span>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg text-center">
                <span className="block text-3xl font-bold text-blue-400">2</span>
                <span className="text-gray-300">Generaciones</span>
              </div>
            </div>
          </div>
          
          {/* Imagen de la Familia */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="/api/placeholder/600/600"
                alt="Familia Lapalapa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-500 p-4 rounded-lg transform rotate-6">
              <Users className="h-8 w-8" />
            </div>
          </div>
        </div>

        {/* Línea del Tiempo */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold text-blue-400 mb-12">Nuestra Trayectoria</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className="relative bg-slate-800/50 p-6 rounded-lg border border-blue-400/20"
              >
                <div className="absolute -top-4 left-6 bg-blue-500 px-3 py-1 rounded-full">
                  <span className="font-semibold">{item.año}</span>
                </div>
                <h4 className="text-xl font-bold mt-4 mb-3">{item.titulo}</h4>
                <p className="text-gray-300">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Valores */}
        <div className="mt-20 text-center">
          <p className="text-gray-300 max-w-2xl mx-auto">
            En Lapalapa, creemos que cada platillo cuenta una historia y cada cliente se 
            convierte en parte de nuestra familia. Seguimos comprometidos con mantener 
            la calidad y el sabor que nos ha caracterizado por generaciones.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-blue-400">
            <MapPin size={20} />
            <span>San Juan de los Lagos, Jalisco</span>
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

export default SobreNosotros;