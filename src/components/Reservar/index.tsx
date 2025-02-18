"use client";

import React, { useState, useEffect } from 'react';
import { Anchor, Calendar, Clock, Users, UtensilsCrossed, CalendarDays } from 'lucide-react';

const BackgroundPattern = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 opacity-20">
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

const Reservas = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    hora: '',
    personas: '2',
    ocasion: '',
    notas: ''
  });

  const [enviando, setEnviando] = useState(false);

  const horarios = [
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
    "19:00", "19:30", "20:00", "20:30", "21:00"
  ];

  const ocasiones = [
    "Cena casual",
    "Celebración de cumpleaños",
    "Aniversario",
    "Reunión de negocios",
    "Evento familiar",
    "Otra ocasión"
  ];

  interface FormData {
    nombre: string;
    email: string;
    telefono: string;
    fecha: string;
    hora: string;
    personas: string;
    ocasion: string;
    notas: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setEnviando(true);
    
    // Aquí iría la lógica para procesar la reserva
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      fecha: '',
      hora: '',
      personas: '2',
      ocasion: '',
      notas: ''
    });
    setEnviando(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div id="reservar" className="relative bg-slate-900 text-white py-20 overflow-hidden">
      <BackgroundPattern />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <CalendarDays className="text-blue-400 h-12 w-12" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block text-blue-400">Reservaciones</span>
            <span className="block text-2xl md:text-3xl text-gray-300 mt-2">
              Asegura tu mesa
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Reserva tu experiencia gastronómica con nosotros. Te recomendamos hacer tu 
            reservación con al menos 24 horas de anticipación.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Formulario de Reserva */}
          <div className="bg-slate-800/50 p-8 rounded-lg border border-blue-400/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-300">
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
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
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-300">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-blue-400/20 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-colors text-white placeholder-gray-400"
                    placeholder="Tu teléfono"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="personas" className="block text-sm font-medium text-gray-300">
                    Número de personas
                  </label>
                  <select
                    id="personas"
                    name="personas"
                    value={formData.personas}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-blue-400/20 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-colors text-white"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'persona' : 'personas'}
                      </option>
                    ))}
                    <option value="10+">Más de 10 personas</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="fecha" className="block text-sm font-medium text-gray-300">
                    Fecha
                  </label>
                  <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-blue-400/20 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-colors text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="hora" className="block text-sm font-medium text-gray-300">
                    Hora
                  </label>
                  <select
                    id="hora"
                    name="hora"
                    value={formData.hora}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-blue-400/20 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-colors text-white"
                  >
                    <option value="">Selecciona una hora</option>
                    {horarios.map(hora => (
                      <option key={hora} value={hora}>{hora}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="ocasion" className="block text-sm font-medium text-gray-300">
                    Ocasión especial
                  </label>
                  <select
                    id="ocasion"
                    name="ocasion"
                    value={formData.ocasion}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-blue-400/20 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-colors text-white"
                  >
                    <option value="">Selecciona la ocasión (opcional)</option>
                    {ocasiones.map(ocasion => (
                      <option key={ocasion} value={ocasion}>{ocasion}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="notas" className="block text-sm font-medium text-gray-300">
                    Notas especiales
                  </label>
                  <textarea
                    id="notas"
                    name="notas"
                    value={formData.notas}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-blue-400/20 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-colors text-white placeholder-gray-400"
                    placeholder="Requerimientos dietéticos especiales, alergias, preferencias de mesa, etc."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={enviando}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {enviando ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Procesando reserva...
                  </>
                ) : (
                  <>
                    Confirmar Reservación
                    <UtensilsCrossed size={20} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Calendario y Políticas */}
          <div className="space-y-8">
            {/* Calendario de Google */}
            <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-400/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Calendar className="text-blue-400" />
                Disponibilidad
              </h3>
              <div className="aspect-video w-full bg-slate-700/50 rounded-lg overflow-hidden">
                {/* Aquí iría el iframe de Google Calendar */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Calendario de disponibilidad
                </div>
              </div>
            </div>

            {/* Políticas de Reservación */}
            <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-400/20">
              <h3 className="text-xl font-semibold mb-4">Políticas de Reservación</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <p>Las reservaciones tienen una tolerancia de 15 minutos. Después de este tiempo, la mesa podría ser asignada a otros comensales.</p>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <p>Para grupos de más de 10 personas, por favor contacta directamente al restaurante para coordinar los detalles.</p>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <p>Las cancelaciones deben realizarse con al menos 4 horas de anticipación para evitar cargos.</p>
                </li>
              </ul>
            </div>
          </div>
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

export default Reservas;