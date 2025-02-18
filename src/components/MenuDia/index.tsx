import React from 'react';
import { Anchor, Clock, Utensils } from 'lucide-react';

const MenuDelDia = () => {
  const platillos = [
    {
      categoria: "Entradas",
      items: [
        { nombre: "Sopa de Pescado", descripcion: "Preparada con pescado fresco del día y vegetales", precio: "$85" },
        { nombre: "Cóctel de Camarón Chico", descripcion: "Camarones en salsa coctelera especial de la casa", precio: "$120" }
      ]
    },
    {
      categoria: "Platos Principales",
      items: [
        { nombre: "Filete de Pescado al Mojo de Ajo", descripcion: "Pescado fresco del día con salsa de ajo y limón", precio: "$180" },
        { nombre: "Camarones al Ajillo", descripcion: "Camarones salteados en aceite de oliva y ajo", precio: "$220" }
      ]
    },
    {
      categoria: "Postres",
      items: [
        { nombre: "Flan Napolitano", descripcion: "Cremoso flan casero con caramelo", precio: "$65" },
        { nombre: "Pay de Limón", descripcion: "Pay cremoso de limón con base de galleta", precio: "$75" }
      ]
    }
  ];

  return (
    <div id="menu" className="relative bg-slate-900 text-white py-16 overflow-hidden">
      {/* Patrón de Fondo */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(12)].map((_, i) => (
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="block text-blue-400">Menú del Día</span>
          </h2>
          <div className="flex items-center justify-center gap-4 text-gray-300">
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-blue-400" />
              <span>12:00 PM - 8:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils size={20} className="text-blue-400" />
              <span>Servicio completo</span>
            </div>
          </div>
        </div>

        {/* Contenedor del Menú */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {platillos.map((seccion, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-400/20"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-6">
                {seccion.categoria}
              </h3>
              <div className="space-y-6">
                {seccion.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">{item.nombre}</h4>
                      <span className="text-blue-400 font-semibold">{item.precio}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{item.descripcion}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Nota al pie */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>Los precios pueden variar según la disponibilidad del día.</p>
          <p>Todos nuestros platillos incluyen guarnición del día.</p>
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

export default MenuDelDia;