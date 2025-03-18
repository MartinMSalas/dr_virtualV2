import React, { useState } from 'react';
import { FormBasico3 } from './FormBasico3';
import CuponMeli from './CuponMeli';

export const EcografiaVenosa = () => {
  const [formSubmited, setFormSubmited] = useState(false);

  function formHandler(data) {
    console.log(data);
    setFormSubmited(true);
  }

  return (
    <>
      <FormBasico3 
        formHandler={formHandler} 
        especialidadSelected="Ecografía Venosa"
        extraFields={[]}  // No extra fields
      />
      {formSubmited && <CuponMeli productTitle="Ecografía Venosa" />}
    </>
  );
};

export default EcografiaVenosa;
