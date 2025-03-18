import React, { useState } from 'react';
import { FormBasico3 } from './FormBasico3';
import CuponMeli from './CuponMeli';

export const RNMCraneoCervicalLumbar = () => {
  const [formSubmited, setFormSubmited] = useState(false);

  // Extra field: A select with three options
  const extraFields = [
    {
      name: "opcionRNM",
      label: "Opción",
      type: "select",
      options: [
        { value: "craneo", label: "Craneo" },
        { value: "cervical", label: "Columna Cervical" },
        { value: "lumbar", label: "Columna Lumbar" },
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
        especialidadSelected="RNM Craneo Cervical Lumbar"
        extraFields={extraFields}
      />
      {formSubmited && <CuponMeli productTitle="RNM Craneo Cervical Lumbar" />}
    </>
  );
};

export default RNMCraneoCervicalLumbar;
