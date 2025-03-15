
import { useRef, useState } from "react"
import { checkName,checkLastName,checkDni,checkCarnetNumber, checkPhoneNumber, checkEmail, checkDayOfBirth, checkRp1,checkRp2,checkDiagnostic1,checkDiagnostic2 } from "./validators"
import Button from "./Button";

export function FormBasico2({ receta=false, obraSocialSelected, formHandler}) {
  const nameRef = useRef()
  const lastNameRef = useRef()
  const dniRef = useRef()
  const emailRef = useRef()
  const phoneNumberRef = useRef()
  const carnetNumberRef = useRef()
  const dayOfBirthRef = useRef()
  const rp1Ref = useRef()
  const rp2Ref = useRef()
  const diagnostic1Ref = useRef()
  const diagnostic2Ref = useRef()


  const [nameErrors, setNameErrors] = useState([])
  const [lastNameErrors, setLastNameErrors] = useState([])
  const [dniErrors, setDniErrors] = useState([])
  const [emailErrors, setEmailErrors] = useState([])
  const [phoneNumberErrors, setPhoneNumberErrors] = useState([])
  const [carnetNumberErrors, setCarnetNumberErrors] = useState([])
  const [dayOfBirthErrors, setDayOfBirthErrors] = useState([])
  const [rp1Errors, setRp1Errors] = useState([])
  const [rp2Errors, setRp2Errors] = useState([])
  const [diagnostic1Errors, setDiagnostic1Errors] = useState([])
  const [diagnostic2Errors, setDiagnostic2Errors] = useState([])


  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setIsAfterFirstSubmit(true)

    const nameResults = checkName(nameRef.current.value)
    const lastNameResults = checkLastName(lastNameRef.current.value)
    const dniResults = checkDni(dniRef.current.value)
    const emailResults = checkEmail(emailRef.current.value)
    const phoneNumberResults = checkPhoneNumber(phoneNumberRef.current.value)
    const carnetNumberResults = checkCarnetNumber(carnetNumberRef.current.value)
    const dayOfBirthResults = checkDayOfBirth(dayOfBirthRef.current.value)
    const rp1Results = checkRp1(rp1Ref.current.value)
    const rp2Results = checkRp2(rp2Ref.current.value)
    const diagnostic1Results = checkDiagnostic1(diagnostic1Ref.current.value)
    const diagnostic2Results = checkDiagnostic2(diagnostic2Ref.current.value)


    setNameErrors(nameResults)
    setLastNameErrors(lastNameResults)
    setDniErrors(dniResults)
    setEmailErrors(emailResults)
    setPhoneNumberErrors(phoneNumberResults)
    setCarnetNumberErrors(carnetNumberResults)
    setDayOfBirthErrors(dayOfBirthResults)
    setRp1Errors(rp1Results)
    setRp2Errors(rp2Results)
    setDiagnostic1Errors(diagnostic1Results)
    setDiagnostic2Errors(diagnostic2Results)

    if (nameResults.length === 0 && lastNameResults.length === 0 && dniResults.length === 0 && emailResults.length === 0 && phoneNumberResults.length === 0 &&
      carnetNumberResults.length === 0 && dayOfBirthResults.length === 0 && rp1Results.length === 0 && rp2Results.length === 0 && diagnostic1Results.length === 0 && diagnostic2Results.length === 0) {
      alert("Success")

      formHandler({name: nameRef.current.value, lastName: lastNameRef.current.value, dni: dniRef.current.value,email: emailRef.current.value,phoneNumber: phoneNumberRef.current.value,
         carnet: carnetNumberRef.current.value, dayOfBirth : dayOfBirthRef.current.value, rp1: rp1Ref.current.value, rp2: rp2Ref.current.value,diagnostic1: diagnostic1Ref.current.value,
         diagnostic2:diagnostic2Ref.current.value})
    }
  }


  return (
    <div>
      
      <div className='grid grid-cols-1 pt-8'>
        <div className="">
          <h2 className="text-center text-m font-bold pt-1 text-rose-800 w" >
            Por favor, ingrese los datos del paciente, Obra Social {obraSocialSelected}
          </h2>
        </div>
        <form onSubmit={onSubmit} className='px-5 pt-8 w-full form'>
          <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                  <div className={`form-group ${nameErrors.length > 0 ? "error" : ""}`}>
                    <input ref={nameRef} onChange={ isAfterFirstSubmit ? e => setNameErrors(checkName(e.target.value)): undefined }  type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=""  />
                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
                    {nameErrors.length > 0 && (
                      <div className="msg">{nameErrors.join(", ")}</div>
                    )}
                  </div>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                  <div className={`form-group ${lastNameErrors.length > 0 ? "error" : ""}`}>
                    <input ref={lastNameRef} onChange={ isAfterFirstSubmit ? e => setLastNameErrors(checkLastName(e.target.value)): undefined }  type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido</label>
                    {lastNameErrors.length > 0 && (
                      <div className="msg">{lastNameErrors.join(", ")}</div>
                    )}
                  </div>
              </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
                  <div className={`form-group ${dniErrors.length > 0 ? "error" : ""}`}>
                    <input ref={dniRef} onChange={ isAfterFirstSubmit ? e => setDniErrors(checkDni(e.target.value)): undefined }   type="number" name="dniNumber" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label htmlFor="dniNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">DNI</label>
                    {dniErrors.length > 0 && (
                      <div className="msg">{dniErrors.join(", ")}</div>
                    )}
                  </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <div className={`form-group ${emailErrors.length > 0 ? "error" : ""}`}>
                  <input ref={emailRef} onChange={ isAfterFirstSubmit ? e => setEmailErrors(checkEmail(e.target.value)): undefined } type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                  <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                  {emailErrors.length > 0 && (
                    <div className="msg">{emailErrors.join(", ")}</div>
                  )}
                </div>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <div className={`form-group ${phoneNumberErrors.length > 0 ? "error" : ""}`}>
                  <input ref={phoneNumberRef} onChange={ isAfterFirstSubmit ? e => setPhoneNumberErrors(checkPhoneNumber(e.target.value)): undefined }  type="tel"  name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                  <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numero Telefonico (383-4567890)</label>
                  {phoneNumberErrors.length > 0 && (
                    <div className="msg">{phoneNumberErrors.join(", ")}</div>
                  )}
                </div>
              </div>
            </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
                <div className={`form-group ${carnetNumberErrors.length > 0 ? "error" : ""}`}>
                    <input ref={carnetNumberRef} onChange={ isAfterFirstSubmit ? e => setCarnetNumberErrors(checkCarnetNumber(e.target.value)): undefined } type="number" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numero de carnet</label>
                    {carnetNumberErrors.length > 0 && (
                    <div className="msg">{carnetNumberErrors.join(", ")}</div>
                  )}
                </div>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <div className={`form-group ${dayOfBirthErrors.length > 0 ? "error" : ""}`}>
                    <input ref={dayOfBirthRef} onChange={ isAfterFirstSubmit ? e => setDayOfBirthErrors(checkDayOfBirth(e.target.value)): undefined } type="date" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fecha de nacimiento(dd/mm/yyyy)</label>
                    {dayOfBirthErrors.length > 0 && (
                    <div className="msg">{dayOfBirthErrors.join(", ")}</div>
                  )}
                </div>
            </div>
          </div>
          {receta && 
            (
              <>
              
              
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                      <div className={`form-group ${rp1Errors.length > 0 ? "error" : ""}`}>
                          <input ref={rp1Ref} onChange={ isAfterFirstSubmit ? e => setRp1Errors(checkRp1(e.target.value)): undefined }  type="text" name="rp1" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                          <label htmlFor="rp1" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rp1 (Consultar al Doctor)</label>
                          {rp1Errors.length > 0 && (
                            <div className="msg">{rp1Errors.join(", ")}</div>
                          )}
                      </div>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                      <div className={`form-group ${diagnostic1Errors.length > 0 ? "error" : ""}`}>
                          <input ref={diagnostic1Ref} onChange={ isAfterFirstSubmit ? e => setDiagnostic1Errors(checkDiagnostic1(e.target.value)): undefined } type="text" name="diagnostic1" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                          <label htmlFor="diagnostic1" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Diagnostico 1</label>
                          {diagnostic1Errors.length > 0 && (
                            <div className="msg">{diagnostic1Errors.join(", ")}</div>
                          )}
                      </div>
                    </div>
                </div>                
                
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <div className={`form-group ${rp2Errors.length > 0 ? "error" : ""}`}> 
                      <input ref={rp2Ref} onChange={ isAfterFirstSubmit ? e => setRp2Errors(checkRp2(e.target.value)): undefined }  type="text" name="rp2" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                      <label htmlFor="rp2" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rp2 (Consultar al Doctor)</label>
                      {rp2Errors.length > 0 && (
                        <div className="msg">{rp2Errors.join(", ")}</div>
                      )}
                    </div>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <div className={`form-group ${diagnostic2Errors.length > 0 ? "error" : ""}`}>
                      <input ref={diagnostic2Ref} onChange={ isAfterFirstSubmit ? e => setDiagnostic2Errors(checkDiagnostic2(e.target.value)): undefined } type="text" name="diagnostic2" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                      <label htmlFor="diagnostic2" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Diagnostico 2</label>
                      {diagnostic2Errors.length > 0 && (
                        <div className="msg">{diagnostic2Errors.join(", ")}</div>
                      )}
                    </div>
                  </div>
                </div>
              
              </>
           
            )
            
          }
          
          <div className="m-16 md:grid-cols-2 md:gap-6">
            <Button className="btn  " type="submit">
              Ingresar Datos
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}