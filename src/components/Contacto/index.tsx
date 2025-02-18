"use client";

import React, { useEffect, useState } from "react";
import { Anchor, Phone, Mail, Clock, MapPin, Send } from "lucide-react";

// Move the interface before using it in useState
interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  asunto: string;
  mensaje: string;
}

const BackgroundPattern = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      {Array.from({ length: 15 }).map((_, i) => (
        <Anchor
          key={i}
          className="absolute text-blue-400"
          style={{
            left: `${i * 7}%`,
            top: `${(i * 13) % 100}%`,
            transform: `rotate(${i * 24}deg)`,
          }}
          size={24}
        />
      ))}
    </div>
  );
};

const Contacto = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setEnviando(true);

    // Aquí iría la lógica para enviar el formulario
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: "",
    });
    setEnviando(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const infoContacto = [
    {
      icon: <Phone className="h-6 w-6" />,
      titulo: "Teléfono",
      detalles: ["+52 (395) 785-1234", "+52 (395) 785-5678"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      titulo: "Correo",
      detalles: ["reservaciones@lapalapa.com", "eventos@lapalapa.com"],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      titulo: "Horario",
      detalles: ["Lun - Jue: 12:00 - 22:00", "Vie - Dom: 12:00 - 23:00"],
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      titulo: "Ubicación",
      detalles: ["Av. Benigno Romo #170", "Centro, San Juan de los Lagos"],
    },
  ];

  return (
    <div
      id="contacto"
      className="relative bg-slate-900 text-white py-20"
    >
      <BackgroundPattern />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block text-blue-400">Contáctanos</span>
            <span className="block text-2xl md:text-3xl text-gray-300 mt-2">
              Estamos para servirte
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o comentario? Nos encantaría escucharte.
            Completa el formulario y nos pondremos en contacto contigo lo antes
            posible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Información de Contacto */}
          <div className="lg:col-span-1 space-y-8">
            {infoContacto.map((info, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-lg border border-blue-400/20"
              >
                <div className="flex items-start gap-4">
                  <div className="text-blue-400">{info.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-2">{info.titulo}</h3>
                    {info.detalles.map((detalle, i) => (
                      <p key={i} className="text-gray-300 text-sm">
                        {detalle}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Formulario */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-800/50 p-8 rounded-lg border border-blue-400/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-blue-400/20 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-colors text-white placeholder-gray-400"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-blue-400/20 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-colors text-white placeholder-gray-400"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-blue-400/20 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-colors text-white placeholder-gray-400"
                    placeholder="Tu teléfono"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="asunto"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-blue-400/20 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-colors text-white placeholder-gray-400"
                    placeholder="Asunto del mensaje"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-blue-400/20 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-colors text-white placeholder-gray-400"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={enviando}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {enviando ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send size={20} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Ola Decorativa */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-auto fill-blue-400/20"
          preserveAspectRatio="none"
        >
          <path d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Contacto;