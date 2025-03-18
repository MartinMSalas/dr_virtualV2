import React, { useState } from 'react';
import { FormBasico3 } from './FormBasico3';
import CuponMeli from './CuponMeli';

export const EcografiaArticular = () => {
  const [formSubmited, setFormSubmited] = useState(false);

  // Extra field: A select for "Tipo de Ecografía"
  const extraFields = [
    {
      name: "tipoEcografia",
      label: "Tipo de Ecografía",
      type: "select",
      options: [
        { value: "articular", label: "Ecografia Articular" },
        { value: "muscular", label: "Ecografia Muscular" },
        { value: "partesBlandas", label: "Ecografia de partes blandas" },
      ],
    },
  ];

  function formHandler(data) {
    console.log(data);
    setFormSubmited(true);
  }

  return (
    <>
      <FormBasico3 
        formHandler={formHandler} 
        especialidadSelected="Ecografía Articular"
        extraFields={extraFields}
      />
      {formSubmited && <CuponMeli productTitle="Ecografía Articular" />}
    </>
  );
};

export default EcografiaArticular;
