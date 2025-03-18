import React, { useState } from 'react';
import { FormBasico3 } from './FormBasico3';
import CuponMeli from './CuponMeli';

export const TACTorax = () => {
  const [formSubmited, setFormSubmited] = useState(false);

  function formHandler(data) {
    console.log(data);
    setFormSubmited(true);
  }

  return (
    <>
      <FormBasico3 
        formHandler={formHandler} 
        especialidadSelected="TAC de Torax"
        extraFields={[]}  // No extra fields
      />
      {formSubmited && <CuponMeli productTitle="TAC de Torax" />}
    </>
  );
};

export default TACTorax;
