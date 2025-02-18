import React from 'react';
import { Anchor, Award, Star, Flame } from 'lucide-react';

const Especialidades = () => {
  const especialidades = [
    {
      nombre: "Torre de Mariscos",
      descripcion: "Espectacular torre de mariscos frescos que incluye camarón, pulpo, ostión, almeja y pescado, bañada en nuestra salsa especial de la casa",
      precio: "$580",
      porciones: "2-3 personas",
      popular: true,
      icono: "🦐"
    },
    {
      nombre: "Langosta Puerto Nuevo",
      descripcion: "Langosta fresca preparada al estilo Puerto Nuevo, servida con mantequilla de ajo, arroz y frijoles refritos",
      precio: "$720",
      porciones: "1 persona",
      icono: "🦞"
    },
    {
      nombre: "Molcajete Marinero",
      descripcion: "Combinación de mariscos en salsa roja servidos en molcajete caliente con queso gratinado y tortillas hechas a mano",
      precio: "$490",
      porciones: "2 personas",
      popular: true,
      icono: "🫕"
    },
    {
      nombre: "Pescado Zarandeado",
      descripcion: "Pescado entero marinado con especias tradicionales y asado a la leña, acompañado de arroz y ensalada",
      precio: "$420",
      porciones: "2 personas",
      icono: "🐟"
    }
  ];

  return (
    <div id="especialidades" className="relative bg-slate-900 text-white py-20 overflow-hidden">
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
            <Award className="text-blue-400 h-12 w-12" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block text-blue-400">Especialidades</span>
            <span className="block text-2xl md:text-3xl text-gray-300 mt-2">
              de la Casa
            </span>
          </h2>
        </div>

        {/* Grid de Especialidades */}
        <div className="grid gap-8 md:grid-cols-2">
          {especialidades.map((plato, index) => (
            <div 
              key={index}
              className="relative bg-gradient-to-br from-slate-800/90 to-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-400/20 hover:border-blue-400/40 transition-all group"
            >
              {/* Icono Flotante */}
              <div className="absolute -top-4 -right-4 text-4xl transform rotate-12 group-hover:rotate-0 transition-transform">
                {plato.icono}
              </div>
              
              {/* Contenido */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold text-blue-400">
                    {plato.nombre}
                  </h3>
                  <span className="text-xl font-semibold">{plato.precio}</span>
                </div>
                
                <p className="text-gray-300">{plato.descripcion}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-blue-400" />
                    <span>Recomendado para {plato.porciones}</span>
                  </div>
                  {plato.popular && (
                    <div className="flex items-center gap-1 text-orange-400">
                      <Flame size={16} />
                      <span>Más Popular</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota al pie */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 max-w-2xl mx-auto">
            Todas nuestras especialidades son preparadas al momento y pueden requerir un tiempo adicional de preparación. 
            Pregunta a tu mesero por el tiempo estimado.
          </p>
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

export default Especialidades;