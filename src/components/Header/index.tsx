"use client";

import React, { useState } from 'react';
import { Menu, X, Anchor } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Menú del Día', href: '/menu-del-dia' },
    { name: 'Especialidades', href: '/especialidades' },
    { name: 'Eventos', href: '/eventos' },
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav className="bg-slate-900/95 text-white fixed w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Name */}
          <Link href="/" className="flex items-center">
            <Anchor className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold text-blue-400">Lapalapa</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/reservar" 
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Reservar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/reservar"
              className="block w-full mt-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Reservar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;