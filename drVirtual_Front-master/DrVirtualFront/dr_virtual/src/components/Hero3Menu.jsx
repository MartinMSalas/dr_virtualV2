import React from 'react';
import GenericMenu from './GenericMenu';

const heroItems = [
  { key: 'recetas', label: 'Recetas', tooltip: 'Ver recetas' },
  { key: 'prescripcion', label: 'Prescripcion', tooltip: 'Ver prescripcion' },
  { key: 'laboratorio', label: 'Laboratorio', tooltip: 'Ver laboratorio' },
  { key: 'consultas', label: 'Consultas', tooltip: 'Ver consultas' },
  { key: 'imagenes', label: 'Imagenes Medicas', tooltip: 'Ver imagenes medicas' },
];

const Hero3Menu = ({ clickHandler, activeSection }) => {
  const handleClick = (item) => {
    clickHandler(item.key);
  };

  return (
    <GenericMenu items={heroItems} activeKey={activeSection} onItemClick={handleClick} />
  );
};

export default Hero3Menu;
