import React, { useState } from 'react';
import { FormBasico3 } from './FormBasico3';
import CuponMeli from './CuponMeli';

export const InterconsultaEspecialista = () => {
  const [formSubmited, setFormSubmited] = useState(false);

  // Extra field: a selectable field for choosing one specialist
  const extraFields = [
    {
      name: "especialista",
      label: "Especialista",
      type: "select",
      options:[
        { "value": "CARDIOLOGIA", "label": "CARDIOLOGIA" },
        { "value": "CIRUGIA", "label": "CIRUGIA" },
        { "value": "DERMATOLOGIA", "label": "DERMATOLOGIA" },
        { "value": "ENDOCRINOLOGIA", "label": "ENDOCRINOLOGIA" },
        { "value": "GINECOLOGIA", "label": "GINECOLOGIA" },
        { "value": "GERENTOLOGIA", "label": "GERENTOLOGIA" },
        { "value": "HEMATOLOGIA", "label": "HEMATOLOGIA" },
        { "value": "IMAGENOLOGIA", "label": "IMAGENOLOGIA" },
        { "value": "INFECTOLOGIA", "label": "INFECTOLOGIA" },
        { "value": "INMUNOLOGIA", "label": "INMUNOLOGIA" },
        { "value": "MEDICINA - LABORAL", "label": "MEDICINA LABORAL" },
        { "value": "MEDICINA - LEGAL", "label": "MEDICINA LEGAL" },
        { "value": "MEDICINA ESTETICA", "label": "MEDICINA ESTETICA" },
        { "value": "NEFROLOGIA", "label": "NEFROLOGIA" },
        { "value": "NEUMOLOGIA", "label": "NEUMOLOGIA" },
        { "value": "OBSTETRICIA", "label": "OBSTETRICIA" },
        { "value": "ONCOLOGIA", "label": "ONCOLOGIA" },
        { "value": "OTORRINOLARINGOLOGIA", "label": "OTORRINOLARINGOLOGIA" },
        { "value": "PSIQUIATRIA", "label": "PSIQUIATRIA" },
        { "value": "REUMATOLOGIA", "label": "REUMATOLOGIA" },
        { "value": "TRAUMATOLOGIA", "label": "TRAUMATOLOGIA" },
        { "value": "UROLOGIA", "label": "UROLOGIA" }
      ]
      ,
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
        especialidadSelected="Interconsulta con Especialista"
        extraFields={extraFields}
      />
      {formSubmited && <CuponMeli productTitle="Interconsulta con Especialista" />}
    </>
  );
};

export default InterconsultaEspecialista;
