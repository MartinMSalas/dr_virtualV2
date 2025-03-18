import React, { useState } from 'react';
import { FormBasico3 } from './FormBasico3';
import ApiMeli from './ApiMeli';
import CuponMeli from './CuponMeli';

export const Recetas = () => {
  const [formSubmited, setFormSubmited] = useState(false);

  // Array dinámico con nuevos campos para el formulario
  const extraFields = [
    {
      name: "textoReceta",
      label: "Texto de Receta",
      type: "text",
      placeholder: "Ingrese el texto de receta"
    },
    {
      name: "dolencia",
      label: "Dolencia",
      type: "text",
      placeholder: "Ingrese la dolencia"
    }
  ];

  function formHandler(data) {
    if (!formSubmited) {
      setFormSubmited(true);
    } else {
      setFormSubmited(false);
    }
    console.log(data);
  }

  return (
    <>{
      /*


     
      */
    }

    <FormBasico3 
        formHandler={formHandler} 
        especialidadSelected={"Receta"}
        extraFields={extraFields}
      />
      {formSubmited && <CuponMeli />}
    </>
  );
};
