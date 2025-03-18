import React, { useState } from 'react';
import EcografiaMenu from './EcografiaMenu';

export default function ImagenesEcografia({ onComplete }) {
  const [selectedSubtype, setSelectedSubtype] = useState('');

  const handleSubtypeSelect = (subtype) => {
    setSelectedSubtype(subtype);
  };

  return (
    <div className="w-full">
      <EcografiaMenu
        clickHandler={handleSubtypeSelect}
        activeSubtype={selectedSubtype}
      />
      {selectedSubtype && (
        <div className="text-center mt-4">
          <p>Has seleccionado: {selectedSubtype}</p>
          <button
            onClick={onComplete}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
          >
            Continuar
          </button>
        </div>
      )}
    </div>
  );
}
