import React, { useState } from 'react';
import { FormBasico3 } from './FormBasico3';
import CuponMeli from './CuponMeli';

export const RNMAbdomenPelvis = () => {
  const [formSubmited, setFormSubmited] = useState(false);

  // Extra field: a select with two options: "Abdomen" and "Pelvis"
  const extraFields = [
    {
      name: "opcionRNMAbdomenPelvis",
      label: "Opción",
      type: "select",
      options: [
        { value: "abdomen", label: "Abdomen" },
        { value: "pelvis", label: "Pelvis" },
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
        especialidadSelected="RNM Abdomen y Pelvis"
        extraFields={extraFields}
      />
      {formSubmited && <CuponMeli productTitle="RNM Abdomen y Pelvis" />}
    </>
  );
};

export default RNMAbdomenPelvis;
