import React, { useState } from 'react';
import { FormBasico3 } from './FormBasico3';
import CuponMeli from './CuponMeli';

export const TACAbdomenYPelvis = () => {
  const [formSubmited, setFormSubmited] = useState(false);

  const extraFields = [
    {
      name: "opcionTAC",
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
        especialidadSelected="TAC Abdomen y Pelvis"
        extraFields={extraFields}
      />
      {formSubmited && <CuponMeli productTitle="TAC Abdomen y Pelvis" />}
    </>
  );
};

export default TACAbdomenYPelvis;
