import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Anchor } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo y Descripción */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Anchor className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-2xl font-bold text-blue-400">Lapalapa</span>
            </div>
            <p className="text-gray-400">
              Experiencia culinaria única con los mejores mariscos frescos, 
              preparados con pasión y tradición.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} className="text-blue-400" />
                <span>Av. del Mar #123, Ciudad Puerto</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={18} className="text-blue-400" />
                <a href="tel:+123456789" className="hover:text-blue-400 transition-colors">
                  +52 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={18} className="text-blue-400" />
                <a href="mailto:info@lapalapa.com" className="hover:text-blue-400 transition-colors">
                  info@lapalapa.com
                </a>
              </li>
            </ul>
          </div>

          {/* Horario */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horario</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Clock size={18} className="text-blue-400" />
                <span>Lun - Jue: 12:00 - 22:00</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Clock size={18} className="text-blue-400" />
                <span>Vie - Sáb: 12:00 - 23:00</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Clock size={18} className="text-blue-400" />
                <span>Domingo: 12:00 - 20:00</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Lapalapa. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Designed by{' '}
              <a 
                href="https://alanis.dev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                alanis web dev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;