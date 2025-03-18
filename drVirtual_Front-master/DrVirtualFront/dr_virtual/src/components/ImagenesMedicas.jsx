import React, { useState } from 'react';
import ObraSocial2 from './ObraSocial2';
import ApiMeli from './ApiMeli';
import { FormBasico3 } from './FormBasico3';
import ImagenesMedicasMenu from './ImagenesMedicasMenu';
import ImagenesEcografia from './ImagenesEcografia';
import ImagenesTomografia from './ImagenesTomografia';
import ImagenesResonancia from './ImagenesResonancia';

const ImagenesMedicas = () => {
  // Pasos: 'modality' | 'specialized' | 'obraSocial' | 'form' | 'submitted'
  const [step, setStep] = useState('modality');
  const [selectedModality, setSelectedModality] = useState('');
  const [obraSocialSelected, setObraSocialSelected] = useState('');

  const handleModalitySelect = (modality) => {
    setSelectedModality(modality);
    if (modality === 'radiografias') {
      // Radiografias no requiere menú especializado.
      setStep('obraSocial');
    } else {
      // Para ecografias, tomografias o resonancias se muestra componente especializado.
      setStep('specialized');
    }
  };

  // Callback desde el componente especializado (por ejemplo, ecografias)
  const handleSpecializedComplete = () => {
    setStep('obraSocial');
  };

  const handleObraSocialSelect = (obraSocialName) => {
    setObraSocialSelected(obraSocialName);
    setStep('form');
  };

  const handleFormSubmit = (data) => {
    console.log('Form Data:', data);
    setStep('submitted');
  };

  return (
    <>
      <ImagenesMedicasMenu
        clickHandler={handleModalitySelect}
        activeModality={selectedModality}
      />

      {step === 'specialized' && selectedModality === 'ecografias' && (
        <ImagenesEcografia onComplete={handleSpecializedComplete} />
      )}
      {step === 'specialized' && selectedModality === 'tomografias' && (
        <ImagenesTomografia onComplete={handleSpecializedComplete} />
      )}
      {step === 'specialized' && selectedModality === 'resonancias' && (
        <ImagenesResonancia onComplete={handleSpecializedComplete} />
      )}

      {step === 'obraSocial' && (
        <ObraSocial2 clickHandler={handleObraSocialSelect} />
      )}

      {step === 'form' && (
        <FormBasico3
          formHandler={handleFormSubmit}
          obraSocialSelected={obraSocialSelected}
          especialidadSelected={selectedModality}
        />
      )}

      {step === 'submitted' && <ApiMeli />}
    </>
  );
};

export default ImagenesMedicas;
