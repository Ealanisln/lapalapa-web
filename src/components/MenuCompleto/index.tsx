"use client"

import React, { useState } from 'react';
import { Anchor, Fish, Beer, Waves, Coffee, Utensils } from 'lucide-react';

type MenuItem = {
  nombre: string;
  descripcion?: string;
  precio: string;
  subItems?: { nombre: string; precio: string }[];
  nota?: string;
};

type MenuCategoria = {
  titulo: string;
  icon: React.ReactNode;
  items: MenuItem[];
};

type MenuSeccion = {
  titulo: string;
  categorias: MenuCategoria[];
};

type MenuCompletoProps = {
  seccionInicial?: string;
};

const MenuCompleto: React.FC<MenuCompletoProps> = ({ seccionInicial = "mariscos" }) => {
  const [seccionActiva, setSeccionActiva] = useState<string>(seccionInicial);

  const menuSecciones: Record<string, MenuSeccion> = {
    mariscos: {
      titulo: "Mariscos",
      categorias: [
        {
          titulo: "Entradas",
          icon: <Waves className="h-5 w-5 text-blue-400" />,
          items: [
            { nombre: "Tenazas de Jaiba", precio: "$120" },
            { nombre: "Taco dorado de camarón", precio: "$20" },
            { nombre: "Quesadilla de camarón", precio: "$45" },
            { nombre: "Quesadilla de pulpo", precio: "$55" },
            { nombre: "Aros de calamar", precio: "$80" },
            { nombre: "Torre de Mariscos", precio: "$150", nota: "Especialidad de la casa" }
          ]
        },
        {
          titulo: "Tostadas",
          icon: <Utensils className="h-5 w-5 text-blue-400" />,
          items: [
            { nombre: "Tostada de ceviche", precio: "$20" },
            { 
              nombre: "Tostada de aguachile", 
              precio: "$45", 
              subItems: [
                { nombre: "Rojo", precio: "$45" },
                { nombre: "Verde", precio: "$45" }
              ]
            },
            { nombre: "Tostada de Pulpo", precio: "$55" },
            { nombre: "Tostada de Camarón", precio: "$45" },
            { nombre: "Tostada de Marlín", precio: "$45" }
          ]
        },
        {
          titulo: "Cócteles",
          icon: <Utensils className="h-5 w-5 text-blue-400" />,
          items: [
            { 
              nombre: "Camarón", 
              precio: "$70 - $120",
              subItems: [
                { nombre: "1/2", precio: "$70" },
                { nombre: "Orden", precio: "$120" }
              ]
            },
            { 
              nombre: "Pulpo", 
              precio: "$80 - $135",
              subItems: [
                { nombre: "1/2", precio: "$80" },
                { nombre: "Orden", precio: "$135" }
              ]
            },
            { 
              nombre: "Campechana", 
              precio: "$80 - $135",
              subItems: [
                { nombre: "1/2", precio: "$80" },
                { nombre: "Orden", precio: "$135" }
              ]
            }
          ]
        },
        {
          titulo: "Concha",
          icon: <Waves className="h-5 w-5 text-blue-400" />,
          items: [
            { 
              nombre: "Pata de Mula", 
              precio: "$60 - $110",
              subItems: [
                { nombre: "1/2", precio: "$60" },
                { nombre: "Orden", precio: "$110" }
              ]
            },
            { 
              nombre: "Ostión", 
              precio: "$50 - $90",
              subItems: [
                { nombre: "1/2", precio: "$50" },
                { nombre: "Orden", precio: "$90" }
              ]
            },
            { nombre: "Power Ostión", precio: "$45" },
            { nombre: "Power Pata de Mula", precio: "$50" }
          ]
        },
        {
          titulo: "Platillos Calientes",
          icon: <Fish className="h-5 w-5 text-blue-400" />,
          items: [
            { 
              nombre: "Camarones al Gusto", 
              precio: "$150", 
              descripcion: "A la diabla, zarandeados, momia, empanizados, a la mantequilla y al ajillo" 
            },
            { 
              nombre: "Filete de Pescado", 
              precio: "$140", 
              descripcion: "Al gusto" 
            },
            { 
              nombre: "Pulpo al Gusto", 
              precio: "$160" 
            },
            { 
              nombre: "Molcajete de Mariscos", 
              precio: "$220 - $230",
              subItems: [
                { nombre: "Frío", precio: "$220" },
                { nombre: "Caliente", precio: "$230" }
              ]
            }
          ]
        }
      ]
    },
    bebidas: {
      titulo: "Bebidas",
      categorias: [
        {
          titulo: "Cervezas",
          icon: <Beer className="h-5 w-5 text-blue-400" />,
          items: [
            { nombre: "Preparada", precio: "$45" },
            { nombre: "Preparada en lata", precio: "$45" },
            { nombre: "Preparada 1L", precio: "$90" },
            { nombre: "Caguama preparada", precio: "$110" },
            { nombre: "Corona 355 ml", precio: "$30" },
            { nombre: "Ampolleta 210 ml", precio: "$20" },
            { nombre: "Victoria 355 ml", precio: "$30" },
            { nombre: "Ampolleta", precio: "$20" },
            { nombre: "Estrella", precio: "$30" },
            { nombre: "Ampolleta", precio: "$20" },
            { nombre: "Pacífico", precio: "$30" },
            { nombre: "Ampolleta", precio: "$20" },
            { nombre: "Michelob ultra", precio: "$30" },
            { nombre: "Modelo especial", precio: "$35" },
            { nombre: "Corona Mega", precio: "$70" },
            { nombre: "Negra modelo", precio: "$75" },
            { nombre: "Estrella mega", precio: "$70" }
          ]
        },
        {
          titulo: "Tequila",
          icon: <Coffee className="h-5 w-5 text-blue-400" />,
          items: [
            { nombre: "30-30 Reposado", precio: "$70" },
            { nombre: "San Matías Reserva Añejo", precio: "$90" },
            { nombre: "1800 Cristalino", precio: "$100" }
          ]
        },
        {
          titulo: "Whiskey",
          icon: <Coffee className="h-5 w-5 text-blue-400" />,
          items: [
            { nombre: "Etiqueta Roja", precio: "$70" },
            { nombre: "Etiqueta Negra", precio: "$110" }
          ]
        },
        {
          titulo: "Ron",
          icon: <Coffee className="h-5 w-5 text-blue-400" />,
          items: [
            { nombre: "Habana Club 7 Años", precio: "$80" },
            { nombre: "Bacardi", precio: "$70" }
          ]
        },
        {
          titulo: "Ginebra",
          icon: <Coffee className="h-5 w-5 text-blue-400" />,
          items: [
            { nombre: "Bombay", precio: "$80" },
            { nombre: "Beefeater", precio: "$80" },
            { nombre: "Vodka", precio: "$80" },
            { nombre: "Smirnoff", precio: "$70" },
            { nombre: "Absolut", precio: "$80" }
          ]
        },
        {
          titulo: "Bebidas Preparadas",
          icon: <Coffee className="h-5 w-5 text-blue-400" />,
          items: [
            { nombre: "Mojito", precio: "$90" },
            { nombre: "Piña colada", precio: "$90" },
            { nombre: "Barandal", precio: "$90" },
            { nombre: "Cuba libre", precio: "$80" },
            { nombre: "Azulito", precio: "$100" },
            { nombre: "Agua fresca con vodka", precio: "$75" },
            { nombre: "Jarra de agua con vodka", precio: "$180" }
          ]
        },
        {
          titulo: "Sin Alcohol",
          icon: <Coffee className="h-5 w-5 text-blue-400" />,
          items: [
            { nombre: "Refrescos Familia", precio: "" },
            { nombre: "Coca Cola", precio: "$30" },
            { nombre: "Michelada", precio: "$40" },
            { nombre: "Agua fresca", precio: "$35" },
            { nombre: "Jarra de agua fresca", precio: "$90" }
          ]
        }
      ]
    }
  };

  const seccionActual = menuSecciones[seccionActiva];

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
            <span className="block text-blue-400">Nuestro Menú</span>
          </h2>
          <div className="flex items-center justify-center gap-4 text-gray-300">
            <div className="flex items-center gap-2">
              <Fish size={20} className="text-blue-400" />
              <span>Mariscos frescos del día</span>
            </div>
          </div>
        </div>

        {/* Selector de sección */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-lg bg-slate-800/70 backdrop-blur-sm">
            {Object.entries(menuSecciones).map(([key, seccion]) => (
              <button
                key={key}
                className={`px-6 py-2.5 text-sm font-medium rounded-md transition-all ${
                  seccionActiva === key 
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
                onClick={() => setSeccionActiva(key)}
              >
                {seccion.titulo}
              </button>
            ))}
          </div>
        </div>

        {/* Contenedor del Menú */}
        <div className="space-y-12">
          {seccionActual.categorias.map((categoria, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-400/20">
              <h3 className="text-xl font-semibold text-blue-400 mb-6 flex items-center gap-2">
                {categoria.icon}
                {categoria.titulo}
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categoria.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">{item.nombre}</h4>
                      <span className="text-blue-400 font-semibold">{item.precio}</span>
                    </div>
                    {item.descripcion && (
                      <p className="text-gray-400 text-sm">{item.descripcion}</p>
                    )}
                    {item.subItems && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.subItems.map((subItem, subIndex) => (
                          <div key={subIndex} className="flex justify-between text-sm text-gray-300">
                            <span>{subItem.nombre}</span>
                            <span>{subItem.precio}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {item.nota && (
                      <div className="text-xs text-amber-300 italic mt-1">{item.nota}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Nota al pie */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>Los precios pueden variar según la disponibilidad del día.</p>
          <p>En Lapalapa utilizamos productos frescos y de primera calidad.</p>
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

export default MenuCompleto;