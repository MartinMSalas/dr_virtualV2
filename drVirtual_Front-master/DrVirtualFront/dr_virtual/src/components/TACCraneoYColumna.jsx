import React, { useState } from 'react';
import { FormBasico3 } from './FormBasico3';
import CuponMeli from './CuponMeli';

export const TACCraneoYColumna = () => {
  const [formSubmited, setFormSubmited] = useState(false);

  const extraFields = [
    {
      name: "opcionTACCraneoColumna",
      label: "Opción",
      type: "select",
      options: [
        { value: "craneo", label: "TAC de Craneo" },
        { value: "dorsal", label: "TAC Columna Dorsal" },
        { value: "cervical", label: "TAC Columna Cervical" },
        { value: "lumbroSacra", label: "TAC Columna Lumbro Sacra" },
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
        especialidadSelected="TAC de Craneo y Columna"
        extraFields={extraFields}
      />
      {formSubmited && <CuponMeli productTitle="TAC de Craneo y Columna" />}
    </>
  );
};

export default TACCraneoYColumna;
