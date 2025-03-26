"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MobileGalleryProps {
  images: string[];
}

const MobileMenuGallery: React.FC<MobileGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  // Handle manual navigation
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Touch event handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="relative md:hidden rounded-lg overflow-hidden shadow-md mb-10">
      <div 
        className="relative w-full h-56"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image 
              src={image} 
              alt={`Platillo Lapalapa ${index + 1}`} 
              fill 
              className="object-cover"
              sizes="100vw"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        ))}
        
        <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-white w-4' 
                  : 'bg-white/50'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={goToPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1 rounded-full bg-white/30 text-white hover:bg-white/50 transition-colors"
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={20} />
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-1 rounded-full bg-white/30 text-white hover:bg-white/50 transition-colors"
          aria-label="Imagen siguiente"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="absolute bottom-0 z-20 w-full bg-gradient-to-t from-amber-800/90 to-amber-800/30 py-2 px-4">
        <h3 className="text-white font-semibold text-center">Mariscos frescos del día</h3>
      </div>
    </div>
  );
};

export default MobileMenuGallery;