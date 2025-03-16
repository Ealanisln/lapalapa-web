import React from 'react';
import MenuCompleto from '@/components/MenuCompleto';

export const metadata = {
  title: 'Menú Completo | Lapalapa',
  description: 'Explora nuestro menú completo de mariscos frescos y bebidas en Lapalapa.',
};

const MenuPage = () => {
  return <MenuCompleto seccionInicial="mariscos" />;
};

export default MenuPage;