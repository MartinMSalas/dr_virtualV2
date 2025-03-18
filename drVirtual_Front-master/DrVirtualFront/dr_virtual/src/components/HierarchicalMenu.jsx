import React, { useState } from 'react';
import GenericMenu from './GenericMenu';
import Stepper from './Stepper';

const HierarchicalMenu = ({ menuStructure }) => {
  const [path, setPath] = useState([]); // Claves seleccionadas en cada nivel
  const [fade, setFade] = useState(true);
  const fadeDuration = 1000; // Duración de la transición en ms

  // Función recursiva para calcular la profundidad mínima (pasos restantes) de un array de opciones
  const computeMinDepth = (options) => {
    if (!options || options.length === 0) return 0;
    const depths = options.map((option) => {
      if (Array.isArray(option.next)) {
        return 1 + computeMinDepth(option.next);
      }
      return 1;
    });
    return Math.min(...depths);
  };

  // Recorre la estructura según el path para obtener las opciones actuales
  const getCurrentOptions = () => {
    let current = menuStructure;
    for (const key of path) {
      const found = current.find((option) => option.key === key);
      if (found) {
        if (Array.isArray(found.next)) {
          current = found.next;
        } else {
          return null; // Se llegó a una opción final
        }
      } else {
        return null;
      }
    }
    return current;
  };

  const currentOptions = getCurrentOptions();

  // Recorre la estructura para obtener el componente final, si se llegó
  const getFinalComponent = () => {
    if (path.length === 0) return null;
    let current = menuStructure;
    let lastOption = null;
    for (const key of path) {
      lastOption = current.find((option) => option.key === key);
      if (lastOption) {
        if (Array.isArray(lastOption.next)) {
          current = lastOption.next;
        } else {
          return lastOption.next;
        }
      }
    }
    return null;
  };

  const finalComponent = getFinalComponent();

  // Cálculo de pasos:
  // - Si no se ha elegido nada, se usa el mínimo de pasos de todo el menú y se suma +1.
  // - Si se ha avanzado y aún hay opciones, totalSteps = path.length + computeMinDepth(currentOptions) + 1.
  // - Si se llegó al final, totalSteps = path.length + 1 y se llena el último paso.
  let totalSteps = 0;
  let currentStep = 0;
  if (path.length === 0) {
    totalSteps = (computeMinDepth(menuStructure) || 0) + 1;
    currentStep = 1;
  } else if (currentOptions) {
    const remainingDepth = computeMinDepth(currentOptions);
    totalSteps = path.length + remainingDepth + 1;
    currentStep = path.length + 1;
  } else {
    totalSteps = path.length + 1;
    currentStep = totalSteps; // Componente final: último paso lleno
  }

  // Handler para avanzar: se hace fade out, se actualiza el path y luego fade in.
  const handleItemClick = (item) => {
    setFade(false);
    setTimeout(() => {
      setPath((prev) => [...prev, item.key]);
      setFade(true);
    }, fadeDuration);
  };

  // Handler para retroceder.
  const handleBack = () => {
    setFade(false);
    setTimeout(() => {
      setPath((prev) => prev.slice(0, prev.length - 1));
      setFade(true);
    }, fadeDuration);
  };

  return (
    <div>
      {/* Header sin posición fixed, sin shadow, sin fondo, con ancho fijo 700px centrado */}
      <div className="w-full flex justify-start ">
        <div className="w-full flex items-center justify-between pt-16 pl-4" style={{ height: '60px' }}>
          {/* Botón "Volver" a la izquierda (solo si se ha avanzado) */}
          <div className="w-20 ">
            {path.length > 0 ? (
              <button
                onClick={handleBack}
                className=" px-2 py-1 bg-gray-300 rounded transition-all duration-1000 ease-in-out"
              >
                Volver
              </button>
            ) : (
              <div className=""></div>
            )}
          </div>
          {/* Stepper centrado */}
          <div className='w-full '>
            <Stepper currentStep={currentStep} totalSteps={totalSteps} />
          </div>
          {/* Espacio reservado a la derecha para balancear */}
          <div style={{ width: '80px' }}></div>
        </div>
      </div>

      {/* Contenido del menú, con margen superior para no quedar tapado por el header */}
      <div style={{ marginTop: '80px' }}>
        {currentOptions && currentOptions.length > 0 ? (
          <div
            className={`transition-all duration-1000 ease-in-out ${
              fade ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
          >
            <GenericMenu items={currentOptions} activeKey={null} onItemClick={handleItemClick} />
          </div>
        ) : finalComponent ? (
          finalComponent
        ) : (
          <p>No hay opciones</p>
        )}
      </div>
    </div>
  );
};

export default HierarchicalMenu;
