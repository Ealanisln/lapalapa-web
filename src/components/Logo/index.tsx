// src/components/Logo/index.tsx

import Link from 'next/link';
import Image from 'next/image';

type LogoProps = {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  linkUrl?: string;
  className?: string;
};

/**
 * Componente de Logo reutilizable para Lapalapa
 * Puede usarse en Header, Footer u otras partes del sitio
 */
const Logo: React.FC<LogoProps> = ({ 
  size = 'medium', 
  showText = true, 
  linkUrl = '/',
  className = ''
}) => {
  const sizes = {
    small: { imgClass: 'w-7 h-7', textClass: 'text-lg' },
    medium: { imgClass: 'w-10 h-10', textClass: 'text-xl' },
    large: { imgClass: 'w-14 h-14', textClass: 'text-2xl' }
  };
  
  const { imgClass, textClass } = sizes[size];
  
  const logoContent = (
    <div className={`flex items-center group ${className}`}>
      <div className={`relative ${imgClass} overflow-hidden`}>
        <Image 
          src="/images/logo.png" 
          alt="Logo"
          width={100} // Valores base (ajustar según necesidad real)
          height={100}
          className="w-full h-full object-contain"
        />
      </div>
      {showText && (
        <span className={`ml-2 ${textClass} font-bold text-amber-700 group-hover:text-amber-600 transition-all duration-500`}>
          Lapalapa
        </span>
      )}
    </div>
  );

  if (linkUrl) {
    return (
      <Link href={linkUrl} className="block">
        {logoContent}
      </Link>
    );
  }
  
  return logoContent;
};

export default Logo;