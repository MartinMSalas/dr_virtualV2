import React, { useState } from 'react';
import { FormBasico3 } from './FormBasico3';
import CuponMeli from './CuponMeli';

export const EcografiaAbdomen = () => {
  const [formSubmited, setFormSubmited] = useState(false);

  function formHandler(data) {
    console.log(data);
    setFormSubmited(true);
  }

  return (
    <>
      <FormBasico3 
        formHandler={formHandler} 
        especialidadSelected="Ecografía de Abdomen"
        extraFields={[]}  // No extra fields
      />
      {formSubmited && <CuponMeli productTitle="Ecografía de Abdomen" />}
    </>
  );
};

export default EcografiaAbdomen;
