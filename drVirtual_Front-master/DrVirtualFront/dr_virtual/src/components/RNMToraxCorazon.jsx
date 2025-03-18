import React, { useState } from 'react';
import { FormBasico3 } from './FormBasico3';
import CuponMeli from './CuponMeli';

export const RNMToraxCorazon = () => {
  const [formSubmited, setFormSubmited] = useState(false);

  // Extra field: A select with two options: "Torax" and "Corazon"
  const extraFields = [
    {
      name: "opcionRNMToraxCorazon",
      label: "Opción",
      type: "select",
      options: [
        { value: "torax", label: "Torax" },
        { value: "corazon", label: "Corazon" },
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
        especialidadSelected="RNM Torax y Corazon"
        extraFields={extraFields}
      />
      {formSubmited && <CuponMeli productTitle="RNM Torax y Corazon" />}
    </>
  );
};

export default RNMToraxCorazon;
