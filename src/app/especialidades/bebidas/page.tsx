import React from 'react';
import MenuCompleto from '@/components/MenuCompleto/MenuCompleto';

export const metadata = {
  title: 'Especialidades de Bebidas | Lapalapa',
  description: 'Explora nuestra carta de bebidas y cócteles en Lapalapa.',
};

const EspecialidadesBebidasPage = () => {
  return <MenuCompleto seccionInicial="bebidas" />;
};

export default EspecialidadesBebidasPage;