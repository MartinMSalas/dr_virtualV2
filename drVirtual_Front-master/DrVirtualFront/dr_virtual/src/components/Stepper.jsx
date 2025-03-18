import React from 'react';

const Stepper = ({ currentStep, totalSteps }) => {
  const steps = [];
  for (let i = 1; i <= totalSteps; i++) {
    steps.push(
      <React.Fragment key={`step-${i}`}>
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-2000 ease-in-out
            ${i < currentStep ? 'bg-blue-500 text-white' : i === currentStep ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          style={{ transition: 'background-color 2s' }}
        >
          {i}
        </div>
        {i < totalSteps && (
          <div
            className={`h-1 w-20 transition-all duration-1000 ease-in-out
              ${i < currentStep ? 'bg-blue-500' : 'bg-gray-200'}`}
          ></div>
        )}
      </React.Fragment>
    );
  }
  return (
    <div className="flex items-center justify-start ">
      {steps}
    </div>
  );
};

export default Stepper;
