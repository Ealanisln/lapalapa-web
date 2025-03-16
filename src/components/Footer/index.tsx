"use client";

import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import Logo from '../Logo'; // Importar el nuevo componente Logo

const Footer = () => {
  return (
    <footer className="bg-amber-50 text-gray-700 border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna de Logo y Descripción */}
          <div className="flex flex-col items-start">
            <Logo size="large" />
            
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Experiencia culinaria única con los mejores mariscos frescos, 
              preparados con pasión y tradición.
            </p>
          </div>

          {/* Columna de Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-amber-700 mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-amber-600" />
                <span className="text-gray-600 text-sm">
                  Av. Benigno Romo #170, Centro, San Juan de los Lagos
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-600" />
                <a 
                  href="tel:+523951027470" 
                  className="text-gray-600 hover:text-amber-700 transition-colors text-sm"
                >
                  +52 (395) 102-7470
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-600" />
                <a 
                  href="mailto:info@lapalapa.vip" 
                  className="text-gray-600 hover:text-amber-700 transition-colors text-sm"
                >
                  info@lapalapa.vip
                </a>
              </li>
            </ul>
          </div>

          {/* Columna de Horario */}
          <div>
            <h3 className="text-lg font-semibold text-amber-700 mb-4">Horario</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-amber-600" />
                <span className="text-gray-600 text-sm">Lun - Jue: 12:00 - 22:00</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-amber-600" />
                <span className="text-gray-600 text-sm">Vie - Sáb: 12:00 - 23:00</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-amber-600" />
                <span className="text-gray-600 text-sm">Domingo: 12:00 - 20:00</span>
              </li>
            </ul>
          </div>

          {/* Columna de Síguenos */}
          <div>
            <h3 className="text-lg font-semibold text-amber-700 mb-4">Síguenos</h3>
            <div className="flex space-x-3">
              <a 
                href="https://www.instagram.com/lapalapa.slj/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full border border-amber-200 text-amber-700 hover:text-white hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/lapalapa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full border border-amber-200 text-amber-700 hover:text-white hover:bg-blue-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-amber-200 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Lapalapa. Todos los derechos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 text-sm">
                Designed by <a href="https://alanis.dev" className="text-amber-600 hover:text-amber-700 transition-colors" target="_blank" rel="noopener noreferrer">alanis web dev</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;