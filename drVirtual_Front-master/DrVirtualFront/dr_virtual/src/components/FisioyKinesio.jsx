import React, { useState } from 'react';
import { FormBasico3 } from './FormBasico3';
import CuponMeli from './CuponMeli';

export const FisioyKinesio = () => {
  const [formSubmited, setFormSubmited] = useState(false);

  // Extra field: a selectable field for "Cantidad de Sesiones"
  const extraFields = [
    {
      name: "cantidadSesiones",
      label: "Cantidad de Sesiones",
      type: "select",
      options: [
        { value: "1", label: "1 Sesion" },
        { value: "5", label: "5 Sesiones" },
        { value: "15", label: "15 Sesiones" },
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
        especialidadSelected="Fisioterapia y Kinesiologia"
        extraFields={extraFields}
      />
      {formSubmited && <CuponMeli productTitle="Fisioterapia y Kinesiologia" />}
    </>
  );
};

export default FisioyKinesio;
