"use client";

import React, { useEffect, useState } from "react";
import { Anchor, Phone, Mail, Clock, MapPin, ExternalLink, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

const BackgroundPattern = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  // Create positions array instead of directly rendering in the map
  const positions = Array.from({ length: 15 }).map((_, i) => ({
    left: `${i * 7}%`,
    top: `${(i * 13) % 100}%`,
    transform: `rotate(${i * 24}deg)`,
  }));

  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      {positions.map((style, i) => (
        <Anchor
          key={i}
          className="absolute text-amber-700"
          style={style}
          size={24}
        />
      ))}
    </div>
  );
};

const Contacto = () => {
  // Define state to ensure component is mounted
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const infoContacto = [
    {
      icon: <Phone className="h-8 w-8" />,
      titulo: "Teléfono",
      detalles: ["+52 (395) 102-7470"],
      accion: {
        label: "Llamar ahora",
        href: "tel:+523951027470",
        icon: <ExternalLink size={16} className="ml-1" />
      }
    },
    {
      icon: <Mail className="h-8 w-8" />,
      titulo: "Correo",
      detalles: ["contacto@lapalapa.vip"],
      accion: {
        label: "Enviar correo",
        href: "mailto:contacto@lapalapa.vip",
        icon: <ExternalLink size={16} className="ml-1" />
      }
    },
    {
      icon: <Clock className="h-8 w-8" />,
      titulo: "Horario",
      detalles: [
        "Lun, Mar, Jue, Vie, Sáb, Dom: 12:00 - 19:00",
        "Miércoles: Cerrado"
      ]
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      titulo: "Ubicación",
      detalles: ["Prolongación Pedro Galeana #2. Col. El Pedregoso.", "Centro, San Juan de los Lagos"],
      accion: {
        label: "Ver en mapa",
        href: "https://maps.google.com/?q=San+Juan+de+los+Lagos+Lapalapa",
        icon: <ExternalLink size={16} className="ml-1" />
      }
    },
  ];

  const redesSociales = [
    {
      nombre: "Instagram",
      icono: <Instagram className="h-6 w-6" />,
      url: "https://www.instagram.com/lapalapa.slj/",
      color: "hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
    },
    {
      nombre: "Facebook",
      icono: <Facebook className="h-6 w-6" />,
      url: "https://facebook.com/lapalapa",
      color: "hover:bg-blue-600"
    }
  ];

  return (
    <div
      id="contacto"
      className="relative bg-white text-gray-800 py-32"
    >
      {isClient && <BackgroundPattern />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block text-amber-700">Contáctanos</span>
            <span className="block text-2xl md:text-3xl text-gray-600 mt-2">
              Estamos para servirte
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o quieres hacer una reservación? 
            Contáctanos directamente por teléfono o correo electrónico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Tarjetas de Información de Contacto */}
          {infoContacto.map((info, index) => (
            <div
              key={index}
              className="bg-amber-50 p-8 rounded-2xl border border-amber-200 hover:border-amber-300 transition-all duration-300 flex flex-col items-center text-center shadow-md hover:shadow-lg"
            >
              <div className="text-white bg-amber-700 p-4 rounded-full mb-4">
                {info.icon}
              </div>
              <h3 className="font-semibold text-xl mb-3 text-amber-900">{info.titulo}</h3>
              {info.detalles.map((detalle, i) => (
                <p key={i} className="text-gray-600">
                  {detalle}
                </p>
              ))}
              {info.accion && (
                <Link 
                  href={info.accion.href}
                  className="mt-4 inline-flex items-center text-amber-700 hover:text-amber-600 font-medium transition-colors"
                  target={info.accion.href.startsWith('http') ? "_blank" : undefined}
                  rel={info.accion.href.startsWith('http') ? "noopener noreferrer" : undefined}
                >
                  {info.accion.label}
                  {info.accion.icon}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Sección de Redes Sociales */}
        <div className="bg-amber-50 rounded-2xl border border-amber-200 p-8 mb-12 shadow-md">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-amber-700 mb-2">Síguenos en redes sociales</h3>
            <p className="text-gray-600">Mantente al día con nuestras promociones y eventos especiales</p>
          </div>
          
          <div className="flex justify-center gap-4">
            {redesSociales.map((red, index) => (
              <a
                key={index}
                href={red.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-white border border-amber-200 rounded-full ${red.color} text-amber-700 transition-all duration-300 hover:shadow-lg hover:scale-110`}
                aria-label={`Visitar ${red.nombre}`}
              >
                {red.icono}
              </a>
            ))}
          </div>
        </div>

        {/* Mensaje Final */}
        <div className="text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Agradecemos tu preferencia y esperamos poder atenderte pronto.
            En Lapalapa nos esforzamos por brindarte la mejor experiencia.
          </p>
        </div>
      </div>

      {/* Ola Decorativa */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-auto fill-amber-100"
          preserveAspectRatio="none"
        >
          <path d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Contacto;