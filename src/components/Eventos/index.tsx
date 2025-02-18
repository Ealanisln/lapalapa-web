import React from 'react';
import { Anchor, PartyPopper, Users, CalendarDays, ChevronRight } from 'lucide-react';

const Eventos = () => {
  const tiposEventos = [
    {
      titulo: "Eventos Corporativos",
      descripcion: "Impresiona a tus clientes y colaboradores con un evento empresarial memorable. Ofrecemos servicios de catering y espacios privados equipados para presentaciones.",
      capacidad: "Hasta 100 personas",
      servicios: ["Equipo audiovisual", "Wifi de alta velocidad", "Menús personalizados", "Área privada"],
      imagen: "/api/placeholder/600/400"
    },
    {
      titulo: "Celebraciones Familiares",
      descripcion: "El lugar perfecto para reunir a tus seres queridos. Desde cumpleaños hasta aniversarios, hacemos que cada momento sea especial.",
      capacidad: "Hasta 80 personas",
      servicios: ["Decoración temática", "Pastel personalizado", "Área infantil", "Música ambiental"],
      imagen: "/api/placeholder/600/400"
    },
    {
      titulo: "Bodas & Compromisos",
      descripcion: "Haz de tu día especial un momento inolvidable con nuestra selección de servicios premium para bodas y compromisos frente al mar.",
      capacidad: "Hasta 150 personas",
      servicios: ["Coordinador de eventos", "Decoración floral", "Menú de degustación", "Barra libre"],
      imagen: "/api/placeholder/600/400"
    }
  ];

  return (
    <div id="eventos" className="relative bg-slate-900 text-white py-20 overflow-hidden">
      {/* Patrón de Fondo */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(15)].map((_, i) => (
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
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <PartyPopper className="text-blue-400 h-12 w-12" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block text-blue-400">Eventos Especiales</span>
            <span className="block text-2xl md:text-3xl text-gray-300 mt-2">
              Celebra con nosotros
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Hacemos que cada celebración sea única y memorable. Nuestro equipo de eventos 
            se encargará de todos los detalles para que tú solo te preocupes por disfrutar.
          </p>
        </div>

        {/* Tarjetas de Eventos */}
        <div className="grid gap-8 lg:grid-cols-3">
          {tiposEventos.map((evento, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-slate-800/90 to-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-400/20 hover:border-blue-400/40 transition-all"
            >
              {/* Imagen del Evento */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={evento.imagen}
                  alt={evento.titulo}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </div>

              {/* Contenido */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-blue-400">{evento.titulo}</h3>
                <p className="text-gray-300">{evento.descripcion}</p>

                {/* Detalles del Evento */}
                <div className="space-y-3 py-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users size={18} className="text-blue-400" />
                    <span>{evento.capacidad}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <CalendarDays size={18} className="text-blue-400" />
                    <span>Disponibilidad flexible</span>
                  </div>
                </div>

                {/* Servicios Incluidos */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-400">Servicios incluidos:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {evento.servicios.map((servicio, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-center gap-1">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        {servicio}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón de Cotización */}
                <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors group">
                  Solicitar Cotización
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Información Adicional */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 max-w-2xl mx-auto">
            Todos nuestros paquetes de eventos incluyen un coordinador dedicado y pueden 
            personalizarse según tus necesidades específicas. Contáctanos para más detalles.
          </p>
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

export default Eventos;