"use client";

import React, { useState, useEffect } from 'react';
import { Fish, Utensils, Flame } from 'lucide-react';


// Componente para el patrón de fondo con hidratación segura
const BackgroundPattern = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      {Array.from({ length: 8 }).map((_, i) => (
        <Flame
          key={i}
          className="absolute text-amber-700"
          style={{
            left: `${i * 12}%`,
            top: `${(i * 13) % 100}%`,
            transform: `rotate(${i * 45}deg) scale(${0.5 + (i % 3) * 0.5})`
          }}
          size={24}
        />
      ))}
    </div>
  );
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
    <div className="relative bg-white text-gray-800 py-32 overflow-hidden min-h-screen">
      {/* Patrón de Fondo */}
      <BackgroundPattern />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-amber-700">Platillos Calientes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestras especialidades preparadas al momento con los mariscos más frescos de la región
          </p>
        </div>

        {/* Tarjetas de Platillos */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {platillosCalientes.map((platillo, index) => (
            <div 
              key={index}
              className="bg-amber-50 rounded-xl overflow-hidden shadow-lg border border-amber-200 hover:border-amber-300 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="h-48 bg-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-amber-100/50">
                  <Fish className="h-20 w-20 text-amber-700/30" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{platillo.nombre}</h3>
                  <span className="text-amber-700 font-bold">{platillo.precio}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{platillo.descripcion}</p>
                
                {platillo.opciones && (
                  <div className="space-y-1 mt-2 border-t border-amber-100 pt-2">
                    <p className="text-sm text-gray-500">Opciones:</p>
                    {platillo.opciones.map((opcion, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="text-gray-600">{opcion.nombre}</span>
                        <span className="text-amber-700">{opcion.precio}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="mt-4 flex justify-end">
                  <span className="inline-flex items-center text-xs text-amber-600">
                    <Utensils className="h-3 w-3 mr-1" />
                    Especialidad de la casa
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Chef Recomendación */}
        <div className="mt-16 p-8 bg-amber-50 rounded-2xl border border-amber-200 shadow-md">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="bg-amber-100 p-5 rounded-full shadow-inner">
              <Utensils className="h-12 w-12 text-amber-700" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-amber-700 mb-2">Recomendación del Chef</h3>
              <p className="text-gray-600 mb-4">
                Nuestro chef recomienda probar el Molcajete de Mariscos versión caliente, una explosión de sabores marinos
                con nuestra salsa secreta de chiles tatemados, que rinde homenaje a la tradición culinaria de la costa.
              </p>
              <p className="text-amber-600 text-sm italic">
                &ldquo;La mezcla perfecta entre lo tradicional y lo gourmet, con el sabor inconfundible del mar&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ola Decorativa */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 200" 
          className="w-full h-auto fill-amber-100"
          preserveAspectRatio="none"
        >
          <path d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z">
          </path>
        </svg>
      </div>
    </div>
  );
};

export default PlatillosCalientes;