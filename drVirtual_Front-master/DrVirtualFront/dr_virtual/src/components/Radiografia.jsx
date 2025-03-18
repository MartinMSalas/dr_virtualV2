import React, { useState } from 'react';
import { FormBasico3 } from './FormBasico3';
import CuponMeli from './CuponMeli';

export const Radiografia = () => {
  const [formSubmited, setFormSubmited] = useState(false);

  // Extra field: "Detalle pedido de radiografía"
  const extraFields = [
    {
      name: "detalleRadiografia",
      label: "Detalle pedido de radiografía",
      type: "text",
      placeholder: "Ingrese el detalle de la radiografía"
    }
  ];

  function formHandler(data) {
    console.log(data);
    setFormSubmited(true);
  }

  return (
    <>
      <FormBasico3 
        formHandler={formHandler} 
        especialidadSelected="Radiografía"
        extraFields={extraFields}
      />
      {formSubmited && <CuponMeli productTitle="Radiografía" />}
    </>
  );
};

export default Radiografia;
