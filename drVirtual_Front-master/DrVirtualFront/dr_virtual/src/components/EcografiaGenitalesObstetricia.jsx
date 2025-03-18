import React, { useState } from 'react';
import { FormBasico3 } from './FormBasico3';
import CuponMeli from './CuponMeli';

export const EcografiaGenitalesObstetricia = () => {
  const [formSubmited, setFormSubmited] = useState(false);

  // Extra field: selector for "Ecografía de genitales y obstetricia"
  const extraFields = [
    {
      name: "tipoEcografiaGenitales",
      label: "Tipo de Ecografía",
      type: "select",
      options: [
        { value: "ginecologica", label: "Ecografía Ginecologica" },
        { value: "vesiculoTesticular", label: "Ecografía de Vesículo testicular" },
        { value: "prostatica", label: "Ecografía Prostatica" },
        { value: "obstetricia", label: "Obstetricia" },
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
        especialidadSelected="Ecografía de genitales y obstetricia"
        extraFields={extraFields}
      />
      {formSubmited && <CuponMeli productTitle="Ecografía de genitales y obstetricia" />}
    </>
  );
};

export default EcografiaGenitalesObstetricia;
