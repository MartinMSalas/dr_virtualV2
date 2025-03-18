import React, { useState } from 'react';
import { FormBasico3 } from './FormBasico3';
import ApiMeli from './ApiMeli';
import CuponMeli from './CuponMeli';

export const Ergometria = () => {
  const [formSubmited, setFormSubmited] = useState(false);

  // Extra field: A selectable question with three options
  const extraFields = [
    {
     
    },
  ];

  function formHandler(data) {
    console.log(data);
    // Toggle form submission state
    setFormSubmited(!formSubmited);
  }

  return (
    <>
      <FormBasico3 
        formHandler={formHandler} 
        especialidadSelected="Ergometria"
        
      />
      {formSubmited && <CuponMeli productTitle="Ergometria" />}
    </>
  );
};

export default Ergometria;
