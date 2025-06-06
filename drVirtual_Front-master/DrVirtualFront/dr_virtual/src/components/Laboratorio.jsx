import React, { useState } from 'react';
import { FormBasico3 } from './FormBasico3';
import CuponMeli from './CuponMeli';

export const Laboratorio = () => {
  const [formSubmited, setFormSubmited] = useState(false);

  // Extra field for Laboratory: "Pedido de análisis de laboratorio"
  const extraFields = [
    {
      name: "pedidoAnalisis",
      label: "Pedido de análisis de laboratorio",
      type: "text",
      placeholder: "Ingrese el pedido de análisis de laboratorio",
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
        especialidadSelected="Laboratorio"
        extraFields={extraFields}
      />
      {formSubmited && <CuponMeli productTitle="Laboratorio" />}
    </>
  );
};

export default Laboratorio;
