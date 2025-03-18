"use client";

import { useRef, useState } from "react";
import {
  checkName,
  checkLastName,
  checkDni,
  checkCarnetNumber,
  checkPhoneNumber,
  checkEmail,
  checkDayOfBirth,
} from "./validators";
import Button from "./Button";
import CuponMeli from "./CuponMeli";

export function FormBasico3({ especialidadSelected = false, formHandler, extraFields = [] }) {
  const nameRef = useRef();
  const lastNameRef = useRef();
  const dniRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const carnetNumberRef = useRef();
  const dayOfBirthRef = useRef();
  const obraSocialRef = useRef();
  const clienteObraSocialRef = useRef();

  // State for dynamic extra fields values
  const [extraValues, setExtraValues] = useState({});

  const [nameErrors, setNameErrors] = useState([]);
  const [lastNameErrors, setLastNameErrors] = useState([]);
  const [dniErrors, setDniErrors] = useState([]);
  const [emailErrors, setEmailErrors] = useState([]);
  const [phoneNumberErrors, setPhoneNumberErrors] = useState([]);
  const [carnetNumberErrors, setCarnetNumberErrors] = useState([]);
  const [dayOfBirthErrors, setDayOfBirthErrors] = useState([]);

  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false);

  // Constant to ensure consistent label styling
  const labelClass =
    "peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0";

  function onSubmit(e) {
    e.preventDefault();
    setIsAfterFirstSubmit(true);

    const nameResults = checkName(nameRef.current.value);
    const lastNameResults = checkLastName(lastNameRef.current.value);
    const dniResults = checkDni(dniRef.current.value);
    const emailResults = checkEmail(emailRef.current.value);
    const phoneNumberResults = checkPhoneNumber(phoneNumberRef.current.value);
    const carnetNumberResults = checkCarnetNumber(carnetNumberRef.current.value);
    const dayOfBirthResults = checkDayOfBirth(dayOfBirthRef.current.value);

    setNameErrors(nameResults);
    setLastNameErrors(lastNameResults);
    setDniErrors(dniResults);
    setEmailErrors(emailResults);
    setPhoneNumberErrors(phoneNumberResults);
    setCarnetNumberErrors(carnetNumberResults);
    setDayOfBirthErrors(dayOfBirthResults);

    if (
      nameResults.length === 0 &&
      lastNameResults.length === 0 &&
      dniResults.length === 0 &&
      emailResults.length === 0 &&
      phoneNumberResults.length === 0 &&
      carnetNumberResults.length === 0 &&
      dayOfBirthResults.length === 0
    ) {
      formHandler({
        name: nameRef.current.value,
        lastName: lastNameRef.current.value,
        dni: dniRef.current.value,
        email: emailRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
        carnet: carnetNumberRef.current.value,
        dayOfBirth: dayOfBirthRef.current.value,
        obraSocial: obraSocialRef.current.value,
        clienteObraSocial: clienteObraSocialRef.current.value,
        extraFields: extraValues,
      });
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 pt-8">
        <div>
          <h2 className="text-center text-m font-bold pt-1 text-rose-800">
            Por favor, ingrese los datos del paciente
          </h2>
        </div>
        <form onSubmit={onSubmit} className="px-5 pt-8 w-full form">
          {/* Fixed Fields */}
          <div className="grid md:grid-cols-2 md:gap-6">
            {/* Nombre */}
            <div className="relative z-0 w-full mb-6 group">
              <div className={`form-group ${nameErrors.length > 0 ? "error" : ""}`}>
                <input
                  ref={nameRef}
                  onChange={
                    isAfterFirstSubmit ? (e) => setNameErrors(checkName(e.target.value)) : undefined
                  }
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  placeholder=" "
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <label htmlFor="floating_first_name" className={labelClass}>
                  Nombre
                </label>
                {nameErrors.length > 0 && <div className="msg">{nameErrors.join(", ")}</div>}
              </div>
            </div>
            {/* Apellido */}
            <div className="relative z-0 w-full mb-6 group">
              <div className={`form-group ${lastNameErrors.length > 0 ? "error" : ""}`}>
                <input
                  ref={lastNameRef}
                  onChange={
                    isAfterFirstSubmit ? (e) => setLastNameErrors(checkLastName(e.target.value)) : undefined
                  }
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  placeholder=" "
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <label htmlFor="floating_last_name" className={labelClass}>
                  Apellido
                </label>
                {lastNameErrors.length > 0 && <div className="msg">{lastNameErrors.join(", ")}</div>}
              </div>
            </div>
          </div>
          {/* DNI */}
          <div className="relative z-0 w-full mb-6 group">
            <div className={`form-group ${dniErrors.length > 0 ? "error" : ""}`}>
              <input
                ref={dniRef}
                onChange={isAfterFirstSubmit ? (e) => setDniErrors(checkDni(e.target.value)) : undefined}
                type="number"
                name="dniNumber"
                id="dniNumber"
                placeholder=" "
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label htmlFor="dniNumber" className={labelClass}>
                DNI
              </label>
              {dniErrors.length > 0 && <div className="msg">{dniErrors.join(", ")}</div>}
            </div>
          </div>
          {/* Email & Teléfono */}
          <div className="grid md:grid-cols-2 md:gap-6">
            {/* Email */}
            <div className="relative z-0 w-full mb-6 group">
              <div className={`form-group ${emailErrors.length > 0 ? "error" : ""}`}>
                <input
                  ref={emailRef}
                  onChange={isAfterFirstSubmit ? (e) => setEmailErrors(checkEmail(e.target.value)) : undefined}
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  placeholder=" "
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <label htmlFor="floating_email" className={labelClass}>
                  Email
                </label>
                {emailErrors.length > 0 && <div className="msg">{emailErrors.join(", ")}</div>}
              </div>
            </div>
            {/* Teléfono */}
            <div className="relative z-0 w-full mb-6 group">
              <div className={`form-group ${phoneNumberErrors.length > 0 ? "error" : ""}`}>
                <input
                  ref={phoneNumberRef}
                  onChange={isAfterFirstSubmit ? (e) => setPhoneNumberErrors(checkPhoneNumber(e.target.value)) : undefined}
                  type="tel"
                  name="floating_phone"
                  id="floating_phone"
                  placeholder=" "
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <label htmlFor="floating_phone" className={labelClass}>
                  Número Telefónico (383-4567890)
                </label>
                {phoneNumberErrors.length > 0 && <div className="msg">{phoneNumberErrors.join(", ")}</div>}
              </div>
            </div>
          </div>
          {/* Carnet & Fecha de Nacimiento */}
          <div className="grid md:grid-cols-2 md:gap-6">
            {/* Carnet */}
            <div className="relative z-0 w-full mb-6 group">
              <div className={`form-group ${carnetNumberErrors.length > 0 ? "error" : ""}`}>
                <input
                  ref={carnetNumberRef}
                  onChange={isAfterFirstSubmit ? (e) => setCarnetNumberErrors(checkCarnetNumber(e.target.value)) : undefined}
                  type="number"
                  name="floating_company"
                  id="floating_company"
                  placeholder=" "
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <label htmlFor="floating_company" className={labelClass}>
                  Número de carnet
                </label>
                {carnetNumberErrors.length > 0 && <div className="msg">{carnetNumberErrors.join(", ")}</div>}
              </div>
            </div>
            {/* Fecha de Nacimiento */}
            <div className="relative z-0 w-full mb-6 group">
              <div className={`form-group ${dayOfBirthErrors.length > 0 ? "error" : ""}`}>
                <input
                  ref={dayOfBirthRef}
                  onChange={isAfterFirstSubmit ? (e) => setDayOfBirthErrors(checkDayOfBirth(e.target.value)) : undefined}
                  type="date"
                  name="floating_company"
                  id="floating_company"
                  placeholder=" "
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <label htmlFor="floating_company" className={labelClass}>
                  Fecha de nacimiento (dd/mm/yyyy)
                </label>
                {dayOfBirthErrors.length > 0 && <div className="msg">{dayOfBirthErrors.join(", ")}</div>}
              </div>
            </div>
          </div>

          {/* Dynamic Field: OBRA SOCIAL */}
          <div className="relative z-0 w-full mb-6 group">
            <label htmlFor="obraSocial" className="block text-sm font-medium text-gray-700">
              Obra Social
            </label>
            <select
              ref={obraSocialRef}
              id="obraSocial"
              name="obraSocial"
              className="mt-1 block w-full rounded-md border-0 border-b-2 border-gray-300 bg-emerald-50 appearance-none focus:outline-none focus:border-blue-600"
              defaultValue="OSEP"
            >
              <option value="OSEP">OSEP</option>
              <option value="OSECAT">OSECAT</option>
              <option value="OSPRA">OSPRA</option>
            </select>
          </div>

          {/* Dynamic Field: Número de Cliente Obra Social */}
          <div className="relative z-0 w-full mb-6 group">
            <div className="form-group">
              <input
                ref={clienteObraSocialRef}
                type="text"
                name="clienteObraSocial"
                id="clienteObraSocial"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label htmlFor="clienteObraSocial" className={labelClass}>
                Número de Cliente Obra Social
              </label>
            </div>
          </div>

          {/* Dynamic Fields: Extra Fields - CORREGIDO */}
          {extraFields.length > 0 && (
            <div className="grid grid-cols-1 gap-4 mt-4">
              {extraFields.map((field, index) => (
                <div key={index} className="relative z-0 w-full mb-6 group">
                  {field.type === "select" ? (
                    <>
                      <label
                        htmlFor={field.name}
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {field.label}
                      </label>
                      <select
                        name={field.name}
                        id={field.name}
                        value={extraValues[field.name] || ""}
                        onChange={(e) =>
                          setExtraValues((prev) => ({
                            ...prev,
                            [field.name]: e.target.value,
                          }))
                        }
                        className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-emerald-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600"
                      >
                        {field.options                          
                          .map((option, idx) => (
                            <option key={idx} value={option.value} className="bg-emerald-50">
                              {option.label}
                            </option>
                          ))}
                      </select>
                    </>
                  ) : (
                    <div className="form-group">
                      <input
                        type={field.type || "text"}
                        name={field.name}
                        id={field.name}
                        placeholder=" "
                        value={extraValues[field.name] || ""}
                        onChange={(e) =>
                          setExtraValues((prev) => ({
                            ...prev,
                            [field.name]: e.target.value,
                          }))
                        }
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      />
                      <label htmlFor={field.name} className={labelClass}>
                        {field.label}
                      </label>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="m-16">
            <Button className="btn" type="submit">
              Ingresar Datos para orden de {especialidadSelected}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormBasico3;