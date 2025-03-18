import React, { useState } from 'react';
import { FormBasico3 } from './FormBasico3';
import CuponMeli from './CuponMeli';

export const EcografiaGlandulas = () => {
  const [formSubmited, setFormSubmited] = useState(false);

  // Extra field: selector for "Ecografía de Glandulas"
  const extraFields = [
    {
      name: "tipoEcografiaGlandulas",
      label: "Tipo de Ecografía",
      type: "select",
      options: [
        { value: "mamaria", label: "Ecografía Mamaria" },
        { value: "tiroidea", label: "Ecografía Tiroidea" },
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
        especialidadSelected="Ecografía de Glandulas"
        extraFields={extraFields}
      />
      {formSubmited && <CuponMeli productTitle="Ecografía de Glandulas" />}
    </>
  );
};

export default EcografiaGlandulas;
