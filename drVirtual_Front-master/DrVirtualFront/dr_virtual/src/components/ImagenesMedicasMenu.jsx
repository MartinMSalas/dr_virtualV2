import React from 'react';
import GenericMenu from './GenericMenu';

const modalities = [
  { key: 'radiografias', label: 'Radiografias', tooltip: 'Ver radiografias' },
  { key: 'ecografias', label: 'Ecografias', tooltip: 'Ver ecografias' },
  { key: 'tomografias', label: 'Tomografia Axial Computada', tooltip: 'Ver tomografias' },
  { key: 'resonancias', label: 'Resonancia Nuclear Magnetica', tooltip: 'Ver resonancias' },
];

const ImagenesMedicasMenu = ({ clickHandler, activeModality }) => {
  const handleClick = (item) => {
    clickHandler(item.key);
  };

  return (
    <GenericMenu
      items={modalities}
      activeKey={activeModality}
      onItemClick={handleClick}
    />
  );
};

export default ImagenesMedicasMenu;
