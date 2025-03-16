// src/components/Header/index.tsx

"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, PhoneCall } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../Logo"; // Importar el componente Logo

const Navbar = () => {
  // Cambié la inicialización de scrolled para garantizar que comience como false
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  // Mejoré la detección de scroll para garantizar que funcione
  useEffect(() => {
    const handleScroll = () => {
      // Compara directamente con el valor actual de window.scrollY
      setScrolled(window.scrollY > 10);
      
      // Añadir log para depuración
      console.log("Scroll position:", window.scrollY, "Scrolled state:", window.scrollY > 10);
    };

    // Ejecuta handleScroll inmediatamente para establecer el estado inicial correcto
    handleScroll();
    
    // Agrega el evento
    window.addEventListener("scroll", handleScroll);
    
    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Quité scrolled de las dependencias para evitar llamadas innecesarias

  // Cerrar los submenús cuando se hace clic fuera de la navbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.getElementById('main-navbar');
      if (navbar && !navbar.contains(event.target as Node)) {
        setOpenSubmenus({});
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    { name: "Inicio", href: "/" },
    {
      name: "Menú completo",
      href: "/menu",
    },
    {
      name: "Especialidades",
      href: "/especialidades",
      submenu: [
        { name: "Mariscos", href: "/especialidades/mariscos" },
        { name: "Platillos Calientes", href: "/especialidades/calientes" },
        { name: "Bebidas", href: "/especialidades/bebidas" },
      ],
    },
    { name: "Contacto", href: "/contacto" },
  ];

  const isActive = (path: string): boolean => {
    return pathname === path;
  };

  // Función para abrir o cerrar un submenú
  const toggleSubmenu = (name: string, state?: boolean) => {
    const newState = { ...openSubmenus };
    newState[name] = state !== undefined ? state : !openSubmenus[name];
    setOpenSubmenus(newState);
  };

  return (
    <nav
      id="main-navbar"
      className={`${
        scrolled ? "bg-white shadow-lg py-2" : "bg-white/95 py-4"
      } text-gray-800 fixed w-full z-50 backdrop-blur-sm transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo con el nuevo cambio de tamaño */}
          <div className="py-1">
            <div className="text-xs text-gray-400 hidden">Scrolled: {scrolled ? "true" : "false"}</div>
            <Logo size={scrolled ? "small" : "large"} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) =>
              item.submenu ? (
                <div key={item.name} className="relative group">
                  <button
                    className={`flex items-center space-x-1 ${
                      isActive(item.href) ? "text-amber-700" : "text-gray-700"
                    } hover:text-amber-600 transition-colors duration-200`}
                    onClick={() => toggleSubmenu(item.name)}
                    onMouseEnter={() => toggleSubmenu(item.name, true)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        openSubmenus[item.name] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                      openSubmenus[item.name]
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                    onMouseEnter={() => toggleSubmenu(item.name, true)}
                    onMouseLeave={() => toggleSubmenu(item.name, false)}
                  >
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    isActive(item.href) ? "text-amber-700" : "text-gray-700"
                  } hover:text-amber-600 transition-colors duration-200 relative group`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              )
            )}
            <a
              href="tel:+523951027470"
              className="flex items-center gap-2 text-white bg-amber-700 hover:bg-amber-600 px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <PhoneCall size={16} />
              Ordenar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-700 transition-colors duration-300"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100 pt-4" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-2 pb-3 space-y-1">
            {menuItems.map((item) =>
              item.submenu ? (
                <div key={item.name} className="space-y-1">
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className={`flex items-center justify-between w-full px-3 py-2 text-base font-medium ${
                      isActive(item.href) ? "text-amber-700" : "text-gray-700"
                    } hover:text-amber-700 hover:bg-amber-50 rounded-md`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        openSubmenus[item.name] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`pl-4 space-y-1 transition-all duration-200 ${
                      openSubmenus[item.name] ? "block" : "hidden"
                    }`}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={`block px-3 py-1.5 text-sm font-medium ${
                          isActive(subItem.href)
                            ? "text-amber-700"
                            : "text-gray-600"
                        } hover:text-amber-700 hover:bg-amber-50 rounded-md`}
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium ${
                    isActive(item.href) ? "text-amber-700" : "text-gray-700"
                  } hover:text-amber-700 hover:bg-amber-50 rounded-md`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <a
              href="tel:+523951027470"
              className="flex items-center justify-center gap-2 w-full mt-4 bg-amber-700 hover:bg-amber-600 px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-center hover:shadow-md text-white"
              onClick={() => setIsOpen(false)}
            >
              <PhoneCall size={18} />
              Ordenar a Domicilio
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;