import React from 'react';
import { Fish, Utensils, Flame } from 'lucide-react';

export const metadata = {
  title: 'Platillos Calientes | Lapalapa',
  description: 'Disfruta de nuestra selección de platillos calientes en Lapalapa.',
};

const PlatillosCalientes = () => {
  const platillosCalientes = [
    { 
      nombre: "Camarones al Gusto", 
      precio: "$150", 
      descripcion: "Preparación a elegir: a la diabla, zarandeados, momia, empanizados, a la mantequilla y al ajillo",
      imagen: "/imagenes/camarones-al-gusto.jpg" 
    },
    { 
      nombre: "Filete de Pescado", 
      precio: "$140", 
      descripcion: "Pescado fresco del día preparado al gusto",
      imagen: "/imagenes/filete-pescado.jpg" 
    },
    { 
      nombre: "Pulpo al Gusto", 
      precio: "$160",
      descripcion: "Pulpo fresco preparado con nuestro toque especial",
      imagen: "/imagenes/pulpo-al-gusto.jpg"  
    },
    { 
      nombre: "Molcajete de Mariscos", 
      precio: "$220 - $230",
      descripcion: "Deliciosa combinación de mariscos frescos, disponible en versión fría o caliente",
      opciones: [
        { nombre: "Frío", precio: "$220" },
        { nombre: "Caliente", precio: "$230" }
      ],
      imagen: "/imagenes/molcajete-mariscos.jpg" 
    },
    {
      nombre: "Torre de Mariscos",
      precio: "$150",
      descripcion: "Espectacular torre con variedad de mariscos frescos",
      imagen: "/imagenes/torre-mariscos.jpg"
    }
  ];
  
  return (
    <div className="relative bg-slate-900 text-white py-16 overflow-hidden min-h-screen">
      {/* Patrón de Fondo */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <Flame
            key={i}
            className="absolute text-orange-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 1.5})`
            }}
            size={24}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-orange-400">Platillos Calientes</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Nuestras especialidades preparadas al momento con los mariscos más frescos de la región
          </p>
        </div>

        {/* Tarjetas de Platillos */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {platillosCalientes.map((platillo, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-orange-500/20 hover:scale-105 transition-all duration-300"
            >
              <div className="h-48 bg-slate-700 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-blue-900/40">
                  <Fish className="h-20 w-20 text-white/30" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">{platillo.nombre}</h3>
                  <span className="text-orange-400 font-bold">{platillo.precio}</span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{platillo.descripcion}</p>
                
                {platillo.opciones && (
                  <div className="space-y-1 mt-2 border-t border-slate-700 pt-2">
                    <p className="text-sm text-gray-400">Opciones:</p>
                    {platillo.opciones.map((opcion, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="text-gray-300">{opcion.nombre}</span>
                        <span className="text-orange-400">{opcion.precio}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="mt-4 flex justify-end">
                  <span className="inline-flex items-center text-xs text-orange-300">
                    <Utensils className="h-3 w-3 mr-1" />
                    Especialidad de la casa
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Chef Recomendación */}
        <div className="mt-16 p-8 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-2xl backdrop-blur-sm border border-orange-500/20">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="bg-orange-500/20 p-5 rounded-full">
              <Utensils className="h-12 w-12 text-orange-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-orange-400 mb-2">Recomendación del Chef</h3>
              <p className="text-gray-300 mb-4">
                Nuestro chef recomienda probar el Molcajete de Mariscos versión caliente, una explosión de sabores marinos
                con nuestra salsa secreta de chiles tatemados, que rinde homenaje a la tradición culinaria de la costa.
              </p>
              <p className="text-orange-300 text-sm italic">
                &ldquo;La mezcla perfecta entre lo tradicional y lo gourmet, con el sabor inconfundible del mar&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ola Decorativa */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 200" 
          className="w-full h-auto fill-orange-400/20"
          preserveAspectRatio="none"
        >
          <path d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </div>
  );
};

export default PlatillosCalientes;