"use client"

import React, { useState, useEffect } from 'react';
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

// Componente separado para el patrón de fondo
const BackgroundPattern = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      {Array.from({ length: 12 }).map((_, i) => (
        <Anchor
          key={i}
          className="absolute text-amber-700"
          style={{
            left: `${Math.floor(Math.random() * 100)}%`,
            top: `${Math.floor(Math.random() * 100)}%`,
            transform: `rotate(${Math.floor(Math.random() * 360)}deg)`,
          }}
          size={24}
        />
      ))}
    </div>
  );
};

const MenuCompleto: React.FC<MenuCompletoProps> = ({ seccionInicial = "mariscos" }) => {
  // Usamos un string estático para asegurar que el valor inicial sea consistente entre servidor y cliente
  const [seccionActiva, setSeccionActiva] = useState<string>(seccionInicial);
  
  const menuSecciones: Record<string, MenuSeccion> = {
    mariscos: {
      titulo: "Mariscos",
      categorias: [
        {
          titulo: "Entradas",
          icon: <Waves className="h-5 w-5 text-amber-700" />,
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
          icon: <Utensils className="h-5 w-5 text-amber-700" />,
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
          icon: <Utensils className="h-5 w-5 text-amber-700" />,
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
          icon: <Waves className="h-5 w-5 text-amber-700" />,
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
          icon: <Fish className="h-5 w-5 text-amber-700" />,
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
          icon: <Beer className="h-5 w-5 text-amber-700" />,
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
          icon: <Coffee className="h-5 w-5 text-amber-700" />,
          items: [
            { nombre: "30-30 Reposado", precio: "$70" },
            { nombre: "San Matías Reserva Añejo", precio: "$90" },
            { nombre: "1800 Cristalino", precio: "$100" }
          ]
        },
        {
          titulo: "Whiskey",
          icon: <Coffee className="h-5 w-5 text-amber-700" />,
          items: [
            { nombre: "Etiqueta Roja", precio: "$70" },
            { nombre: "Etiqueta Negra", precio: "$110" }
          ]
        },
        {
          titulo: "Ron",
          icon: <Coffee className="h-5 w-5 text-amber-700" />,
          items: [
            { nombre: "Habana Club 7 Años", precio: "$80" },
            { nombre: "Bacardi", precio: "$70" }
          ]
        },
        {
          titulo: "Ginebra",
          icon: <Coffee className="h-5 w-5 text-amber-700" />,
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
          icon: <Coffee className="h-5 w-5 text-amber-700" />,
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
          icon: <Coffee className="h-5 w-5 text-amber-700" />,
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

  // Verificar que la sección activa existe
  const seccionExiste = Object.keys(menuSecciones).includes(seccionActiva);
  const seccionActualKey = seccionExiste ? seccionActiva : "mariscos";
  const seccionActual = menuSecciones[seccionActualKey];

  // Función segura para cambiar sección
  const cambiarSeccion = (seccion: string) => {
    if (Object.keys(menuSecciones).includes(seccion)) {
      setSeccionActiva(seccion);
    } else {
      console.warn(`La sección "${seccion}" no existe en el menú`);
      setSeccionActiva("mariscos"); // Valor por defecto seguro
    }
  };

  return (
    <div id="menu" className="relative bg-white text-gray-800 py-32">
      {/* Patrón de Fondo - Componente reutilizable */}
      <BackgroundPattern />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="block text-amber-700">Nuestro Menú</span>
          </h2>
          <div className="flex items-center justify-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Fish size={20} className="text-amber-700" />
              <span>Mariscos frescos del día</span>
            </div>
          </div>
        </div>

        {/* Selector de sección - Con key para forzar remontaje */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-lg bg-amber-50 shadow-md">
            {Object.entries(menuSecciones).map(([key, seccion]) => (
              <button
                key={key}
                className={`px-6 py-2.5 text-sm font-medium rounded-md transition-all ${
                  seccionActiva === key 
                    ? 'bg-amber-700 text-white shadow-md' 
                    : 'text-gray-600 hover:text-amber-800 hover:bg-amber-100'
                }`}
                onClick={() => cambiarSeccion(key)}
              >
                {seccion.titulo}
              </button>
            ))}
          </div>
        </div>

        {/* Contenedor del Menú - Con key para forzar remontaje cuando cambia la sección */}
        <div key={`seccion-${seccionActiva}`} className="space-y-12">
          {seccionActual.categorias.map((categoria, index) => (
            <div key={index} className="bg-amber-50 rounded-lg p-6 border border-amber-200 shadow-md">
              <h3 className="text-xl font-semibold text-amber-800 mb-6 flex items-center gap-2">
                {categoria.icon}
                {categoria.titulo}
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categoria.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-gray-800">{item.nombre}</h4>
                      <span className="text-amber-700 font-semibold">{item.precio}</span>
                    </div>
                    {item.descripcion && (
                      <p className="text-gray-600 text-sm">{item.descripcion}</p>
                    )}
                    {item.subItems && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.subItems.map((subItem, subIndex) => (
                          <div key={subIndex} className="flex justify-between text-sm text-gray-600">
                            <span>{subItem.nombre}</span>
                            <span>{subItem.precio}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {item.nota && (
                      <div className="text-xs text-amber-600 italic mt-1">{item.nota}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Nota al pie */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Los precios pueden variar según la disponibilidad del día.</p>
          <p>En Lapalapa utilizamos productos frescos y de primera calidad.</p>
        </div>
      </div>

      {/* Ola Decorativa - Siguiendo el patrón del componente Contacto */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 200"
          className="w-full h-auto fill-amber-100"
          preserveAspectRatio="none"
        >
          <path d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default MenuCompleto;