"use client"

import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface DishDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  dish: {
    nombre: string;
    descripcion?: string;
    precio: string;
    imagen?: string;
    nota?: string;
  } | null;
}

const DishDetailModal: React.FC<DishDetailModalProps> = ({ isOpen, onClose, dish }) => {
  if (!isOpen || !dish) return null;

  // Close modal when clicking outside the content
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-2xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="relative bg-amber-700 text-white p-4">
          <h3 className="text-xl font-semibold pr-8">{dish.nombre}</h3>
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-white hover:text-amber-200 transition-colors"
            aria-label="Cerrar"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-grow overflow-auto">
          {/* Image */}
          {dish.imagen ? (
            <div className="relative h-64">
              <Image 
                src={dish.imagen} 
                alt={dish.nombre} 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          ) : (
            <div className="bg-amber-100 flex items-center justify-center h-48">
              <p className="text-amber-700 italic">Imagen no disponible</p>
            </div>
          )}
          
          {/* Details */}
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{dish.nombre}</h4>
                {dish.descripcion && (
                  <p className="text-gray-600 mt-1">{dish.descripcion}</p>
                )}
              </div>
              <span className="text-xl font-bold text-amber-700">{dish.precio}</span>
            </div>
            
            {dish.nota && (
              <div className="mt-4 p-3 bg-amber-50 border-l-4 border-amber-700 text-amber-800">
                <p className="text-sm">{dish.nota}</p>
              </div>
            )}
            
            {/* Additional content that could be added */}
            <div className="mt-6">
              <h5 className="font-medium text-gray-700 mb-2">Acerca de este platillo</h5>
              <p className="text-gray-600">
                Todos nuestros platillos son preparados con ingredientes frescos del día y sazonados con las mejores especias.
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="border-t border-gray-200 p-4 text-right">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishDetailModal;