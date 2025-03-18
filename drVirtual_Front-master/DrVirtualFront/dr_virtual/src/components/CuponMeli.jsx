"use client";
import React, { useEffect, useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

const CuponMeli = ({ productTitle }) => {
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    // Initialize MercadoPago with your public key
    initMercadoPago('APP_USR-ffe31b75-7030-4c45-be45-8bacb029f7fd', { locale: 'es-AR' });

    // Prepare the data to send: an array of items using the passed productTitle
    const items = [
      {
        title: productTitle,
        quantity: 1,
        unit_price: 6000,
      }
    ];

    // Send POST request to your backend to create the preference
    fetch("http://localhost:8080/create_preference", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(items)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Preference created:", data);
        setPreferenceId(data.id);
      })
      .catch((error) => console.error("Error:", error));
  }, [productTitle]);

  return (
    <div>
      {preferenceId ? (
        <Wallet initialization={{ preferenceId }} />
      ) : (
        <div className="flex justify-center items-center min-h-[150px]">
          <svg className="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
        </div>
      )}
    </div>
  );
};

export default CuponMeli;
