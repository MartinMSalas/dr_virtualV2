import React, { useState } from 'react';
import { FormBasico3 } from './FormBasico3';
import CuponMeli from './CuponMeli';

export const Consultas = () => {
  const [formSubmited, setFormSubmited] = useState(false);

  // Extra field for Consultas: "Detalle consulta médica"
  const extraFields = [
    {
      name: "detalleConsulta",
      label: "Detalle consulta médica",
      type: "text",
      placeholder: "Ingrese el detalle de la consulta médica",
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
        especialidadSelected="Consultas"
        extraFields={extraFields}
      />
      {formSubmited && <CuponMeli productTitle="Consultas" />}
    </>
  );
};

export default Consultas;
