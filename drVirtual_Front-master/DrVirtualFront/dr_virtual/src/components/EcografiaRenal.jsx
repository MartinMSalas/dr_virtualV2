import React, { useState } from 'react';
import { FormBasico3 } from './FormBasico3';
import CuponMeli from './CuponMeli';

export const EcografiaRenal = () => {
  const [formSubmited, setFormSubmited] = useState(false);

  function formHandler(data) {
    console.log(data);
    setFormSubmited(true);
  }

  return (
    <>
      <FormBasico3 
        formHandler={formHandler} 
        especialidadSelected="Ecografía Renal"
        extraFields={[]}  // No extra fields
      />
      {formSubmited && <CuponMeli productTitle="Ecografía Renal" />}
    </>
  );
};

export default EcografiaRenal;
