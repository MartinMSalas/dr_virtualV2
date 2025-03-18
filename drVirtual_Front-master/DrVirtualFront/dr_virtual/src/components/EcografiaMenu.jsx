import React from 'react';
import GenericMenu from './GenericMenu';

const ecografiaSubtypes = [
  { key: 'articular', label: 'Ecografia Articular y de partes blandas', tooltip: 'Ver articular' },
  { key: 'abdomen', label: 'Ecografia de Abdomen', tooltip: 'Ver abdomen' },
  { key: 'genitales', label: 'Ecografia de Genitales y Obstetricia', tooltip: 'Ver genitales' },
  { key: 'glandulas', label: 'Ecografia de Glandulas', tooltip: 'Ver glandulas' },
  { key: 'renal', label: 'Ecografia Renal', tooltip: 'Ver renal' },
  { key: 'venosa', label: 'Ecografia Venosa', tooltip: 'Ver venosa' },
];

const EcografiaMenu = ({ clickHandler, activeSubtype }) => {
  const handleClick = (item) => {
    clickHandler(item.key);
  };

  return (
    <div className="w-full">
      <div className="text-center text-m font-bold p-8 text-rose-800">
        Por favor, seleccione el tipo de Ecografia
      </div>
      <GenericMenu items={ecografiaSubtypes} activeKey={activeSubtype} onItemClick={handleClick} />
    </div>
  );
};

export default EcografiaMenu;
