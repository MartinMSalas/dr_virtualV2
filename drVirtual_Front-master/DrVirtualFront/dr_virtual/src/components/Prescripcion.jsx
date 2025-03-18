import React, { useState } from 'react';
import ObraSocial2 from './ObraSocial2';
import ApiMeli from './ApiMeli';
import PrescripcionEspecialidades from './PrescripcionEspecialidades';
import { FormBasico3 } from './FormBasico3';
import FormFisioExtra from './FormFisioExtra';
import FormInterconsultaExtra from './FormInterconsultaExtra';

export const Prescripcion = () => {
  // Steps: 'especialidades' | 'obraSocial' | 'form' | 'formFisio' | 'formInterconsulta' | 'submitted'
  const [step, setStep] = useState('especialidades');
  const [especialidadSelected, setEspecialidadSelected] = useState('');
  const [obraSocialSelected, setObraSocialSelected] = useState('');
  const [fisioExtraData, setFisioExtraData] = useState(null);
  const [interconsultaExtraData, setInterconsultaExtraData] = useState(null);

  // Handler for selecting the specialty
  const handleEspecialidadSelect = (especialidadName) => {
    setEspecialidadSelected(especialidadName);
    setStep('obraSocial');
  };

  // Handler for selecting the obra social
  const handleObraSocialSelect = (obraSocialName) => {
    setObraSocialSelected(obraSocialName);
    setStep('form');
  };

  // Handler for the basic form submission
  const handleFormSubmit = (data) => {
    console.log('Form Data:', data);
    if (especialidadSelected === 'fisioterapia') {
      setStep('formFisio');
    } else if (especialidadSelected === 'interconsultas') {
      setStep('formInterconsulta');
    } else {
      setStep('submitted');
    }
  };

  // Handler for fisioterapia extra form submission
  const handleFormFisioSubmit = (data) => {
    setFisioExtraData(data);
    console.log('Fisio Extra Data:', data);
    setStep('submitted');
  };

  // Handler for interconsulta extra form submission
  const handleFormInterconsultaSubmit = (data) => {
    setInterconsultaExtraData(data);
    console.log('Interconsulta Extra Data:', data);
    setStep('submitted');
  };

  return (
    <>
      {step === 'especialidades' && (
        <PrescripcionEspecialidades clickHandler={handleEspecialidadSelect} />
      )}
      {step === 'obraSocial' && (
        <ObraSocial2 clickHandler={handleObraSocialSelect} />
      )}
      {step === 'form' && (
        <FormBasico3
          formHandler={handleFormSubmit}
          obraSocialSelected={obraSocialSelected}
          especialidadSelected={especialidadSelected}
        />
      )}
      {step === 'formFisio' && (
        <FormFisioExtra formFisioHandler={handleFormFisioSubmit} />
      )}
      {step === 'formInterconsulta' && (
        <FormInterconsultaExtra formInterconsultaHandler={handleFormInterconsultaSubmit} />
      )}
      {step === 'submitted' && <ApiMeli />}
    </>
  );
};
