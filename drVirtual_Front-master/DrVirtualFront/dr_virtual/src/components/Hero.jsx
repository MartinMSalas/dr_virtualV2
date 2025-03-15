import React, {useState} from 'react'
import GetStarted from './GetStarted'
import Button from '../components/Button'
import {Button2} from '../components/Button2'
import { close, logo,logoV, menu} from '../assets';
import { useScrollBy } from 'react-use-window-scroll';


const Hero = () => {

  const [showRecetas, setShowRecetas] = useState(false)
  const [showPrescripcion, setShowPrescripcion] = useState(false)
  const [showObraSocial, setShowObraSocial] = useState(false)
  const [showObraSocialFisio, setShowObraSocialFisio] = useState(false)
  const [showFormularioOsep, setShowFormularioOsep] = useState(false)
  const [showFormularioOsepFisio, setShowFormularioOsepFisio] = useState(false)
  const [showGenerarOrdenOsepFisio, setShowGenerarOrdenOsepFisio] = useState(false)
  const [showApiMeli, setShowApiMeli] = useState(false)
  const [showFisioSesionNumber, setFisioSesionNumber] = useState(0);
  const scrollBy = useScrollBy();

  function topButtonClick(){
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})

    setShowPrescripcion(false)
    setShowApiMeli(false)
    setShowRecetas(false)
    setShowObraSocial(false)
    setShowFormularioOsep(false)
    setShowObraSocialFisio(false)
    setShowFormularioOsepFisio(false)
    setShowGenerarOrdenOsepFisio(false)
  }
  function buttonRecetasClick() {   
    //setClicked(true);
    setShowPrescripcion(false)
    setShowObraSocialFisio(false)
    setShowFormularioOsepFisio(false)
    setShowGenerarOrdenOsepFisio(false)
    setShowApiMeli(false)
    console.log(showRecetas)
    if(!showRecetas){
      setShowRecetas(true)
      setShowObraSocial(true)
    }else{
      setShowRecetas(false)
      setShowObraSocial(false)
    }
    
    scrollBy({ top: 200, left: 0, behavior: "smooth" })
    console.log(showRecetas)
  }
  function buttonPrescripcionClick() {
    setShowPrescripcion(preShowPrescripcion => !preShowPrescripcion)
    setShowRecetas(false)
    setShowObraSocial(false)
    setShowFormularioOsep(false)
    setShowApiMeli(false)
    setShowObraSocialFisio(false)
    setShowFormularioOsepFisio(false)
    setShowGenerarOrdenOsepFisio(false)
    console.log(showPrescripcion)
    scrollBy({ top: 200, left: 0, behavior: "smooth" })
  }
  function buttonObraSocialOsepClick() {

    if(!showFormularioOsep){
      setShowFormularioOsep(true)

    }else{
      setShowFormularioOsep(false)

    }
    scrollBy({ top: 200, left: 0, behavior: "smooth" })
  }
  function buttonGenerarRecetaOsepClick() {

    setShowApiMeli(preShowApiMeli => !preShowApiMeli)
    
    scrollBy({ top: 200, left: 0, behavior: "smooth" })
  }

  function buttonFisioterapiaClick() {
    setShowObraSocialFisio(preShowObraSocialFisio => !preShowObraSocialFisio)
    scrollBy({ top: 200, left: 0, behavior: "smooth" })

  }
  function buttonObraSocialOsepFisioClick(){
    setShowFormularioOsepFisio(preShowFormularioOsepFisio => !preShowFormularioOsepFisio)
    scrollBy({ top: 200, left: 0, behavior: "smooth" })
  }
  function buttonOsepFisio1SessionClick(){
    setShowGenerarOrdenOsepFisio(preShowGenerarOrdenOsepFisio => !preShowGenerarOrdenOsepFisio)
    setShowApiMeli(false)
    setFisioSesionNumber(1)
    scrollBy({ top: 200, left: 0, behavior: "smooth" })
  }
  function buttonOsepFisio5SessionClick(){
    setShowGenerarOrdenOsepFisio(preShowGenerarOrdenOsepFisio => !preShowGenerarOrdenOsepFisio)
    setShowApiMeli(false)
    setFisioSesionNumber(5)
    scrollBy({ top: 200, left: 0, behavior: "smooth" })
  }
  function buttonOsepFisio10SessionClick(){
    setShowGenerarOrdenOsepFisio(preShowGenerarOrdenOsepFisio => !preShowGenerarOrdenOsepFisio)
    setShowApiMeli(false)
    setFisioSesionNumber(10)
    scrollBy({ top: 200, left: 0, behavior: "smooth" })
  }
  function buttonGenerarRecetaOsepFisioClick() {
    setShowApiMeli(preShowApiMeli => !preShowApiMeli)
    scrollBy({ top: 200, left: 0, behavior: "smooth" })
  }
  return (
    
    <div className=' w-full '>
      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] group">
          <Button2 clickHandler={buttonRecetasClick} >Recetas</Button2>
        </div>
        <div className="relative  w-[160px] group">
           <Button clickHandler={buttonPrescripcionClick} >Prescripcion</Button>
        </div>     
         

      </div>
      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] group">
     
          <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
          <button className="h-12 text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
            Laboratorio
          </button>
        </div>
        <div className="relative  w-[160px] group">
          <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
          <button className="h-12 text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
              Consulta Medica
          </button>
        </div>     
      </div>
      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] group">
          <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
          <button className="h-12 text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
            Imagenes Medicas
          </button>
        </div>
      </div>

      
      {showPrescripcion &&
          <div className=' w-full  '>
            <div className=' flex justify-around py-5 '>
              <div className="relative  w-[160px] h-12 group">
                <Button clickHandler={buttonFisioterapiaClick} >Fisioterapia y Kinesioterapia</Button>
              </div>
              <div className="relative  w-[160px] h-12 group">
                <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
                <button className=" h-12  text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
                    Electrocardiograma
                    
                </button>
              </div>     
            </div>
            <div className=' flex justify-around py-5 '>
              <div className="relative  w-[160px] group">
                <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
                <button className="h-12  text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
                  Espirometria
                </button>
              </div>
              <div className="relative  w-[160px] group">
                <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
                <button className="h-12  text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
                  Ergometria
                </button>
              </div>     
            </div>
            <div className=' flex justify-around py-5 '>
              <div className="relative  w-[160px] group">
                <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
                <button className="h-12 text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
                  Interconsultas con Especialistas
                </button>
              </div>
            </div>


          </div>
            
      
      }
      {showObraSocial &&
          <div className=' w-full  '>
            <div>
              <h2 className="text-center text-m font-bold pt-1 text-rose-800 w" >
                Por favor, seleccione su obra social
              </h2>
            </div>
            <div className=' flex justify-around py-5 '>
              <div className="relative  w-[160px] h-12 group">
                <Button clickHandler={buttonObraSocialOsepClick} >OSEP</Button>
              </div>
              <div className="relative  w-[160px] h-12 group">
                <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
                <button onClick={buttonObraSocialOsepClick} className=" h-12  text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
                    OSECAT                    
                </button>
              </div>     
            </div>
            <div className=' flex justify-around py-5 '>
              <div className="relative  w-[160px] group">
                <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
                <button onClick={buttonObraSocialOsepClick} className="h-12  text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
                  OSEP
                </button>
              </div>
              <div className="relative  w-[160px] group">
                <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
                <button onClick={buttonObraSocialOsepClick} className="h-12  text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
                  OSDE
                </button>
              </div>     
            </div>
          </div>
      }{
        showObraSocialFisio &&
        <div className=' w-full  '>
        <div>
          <h2 className="text-center text-m font-bold pt-1 text-rose-800 w" >
            Por favor, seleccione su obra social
          </h2>
        </div>
        <div className=' flex justify-around py-5 '>
          <div className="relative  w-[160px] h-12 group">
            <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
            <button onClick={buttonObraSocialOsepFisioClick} className=" h-12  text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
              OSEP
            </button>
          </div>
          <div className="relative  w-[160px] h-12 group">
            <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
            <button onClick={buttonObraSocialOsepFisioClick} className=" h-12  text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
                OSECAT                    
            </button>
          </div>     
        </div>
        <div className=' flex justify-around py-5 '>
          <div className="relative  w-[160px] group">
            <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
            <button onClick={buttonObraSocialOsepFisioClick} className="h-12  text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
              OSEP
            </button>
          </div>
          <div className="relative  w-[160px] group">
            <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
            <button onClick={buttonObraSocialOsepFisioClick} className="h-12  text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
              OSDE
            </button>
          </div>     
        </div>
      </div>
      }
      {
        showFormularioOsep &&
      <div className='grid grid-cols-1 pt-8'>
         <div>
          <h2 className="text-center text-m font-bold pt-1 text-rose-800 w" >
            Por favor, ingrese los datos del paciente
          </h2>
        </div>
        <form className='px-5 pt-5 w-full'>
          <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                  <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre y Apellido</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                  <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido</label>
              </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <div className="relative z-0 w-full mb-6 group">
                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input type="tel" pattern="[0-9]{3}-[0-9]{7}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numero Telefonico (383-4789012)</label>
          </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
          
          <div className="relative z-0 w-full mb-6 group">
              <input type="number" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numero de Carnet</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input type="date" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fecha de nacimiento(dd/mm/yyyy) </label>
          </div>
          </div>

          
          <div className="grid md:grid-cols-2 md:gap-6">
          
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rp1 (Consultar al Doctor)</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Diagnostico</label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rp2 (Consultar al Doctor)</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Diagnostico</label>
            </div>
          </div>
        </form>
        <div className='w-full flex justify-center p-7'>
          <div className="relative  w-[160px] group">
                  <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
                  <button onClick={buttonGenerarRecetaOsepClick} className="h-12  text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
                    Generar receta OSDE
                  </button>
                </div>     
          </div>  

        </div>
        
      }{
        showFormularioOsepFisio &&
        
        <div className='grid grid-cols-1 pt-8'>
                   <div>
          <h2 className="text-center text-m font-bold pt-1 text-rose-800 w" >
            Por favor, ingrese los datos del paciente
          </h2>
        </div>
          <form className='px-5 w-full'>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido</label>
                </div>
            </div>
              <div className="relative z-0 w-full mb-6 group">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input type="tel" pattern="[0-9]{3}-[0-9]{7}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numero Telefonico (383-4567890)</label>
              </div>
            </div>
            
  
            
            <div className="grid md:grid-cols-2 md:gap-6">
            
              <div className="relative z-0 w-full mb-6 group">
                  <input type="number" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numero de carnet</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                  <input type="date" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fecha de nacimiento(dd/mm/yyyy)</label>
              </div>
            </div>
           
          </form>
          <div>
              <h2 className="text-center text-m font-bold pt-1 text-rose-800 w" >
                Seleccione la cantidad de sesiones necesarias
              </h2>
            </div>
          <div className='w-full flex justify-evenly p-7'>
            <div className="relative  w-28 group">
                    <Button clickHandler={buttonOsepFisio1SessionClick}>1 Sesion</Button>                    
            </div>    
            <div className="relative w-28  group">
                    <Button clickHandler={buttonOsepFisio5SessionClick}>5 Sesiones</Button>                   
            </div>  
            <div className="relative w-28 group">
                    <Button clickHandler={buttonOsepFisio10SessionClick}>10 Sesiones</Button>                    
            </div>   
          </div>{showGenerarOrdenOsepFisio&&           
            <div className='w-full flex justify-center p-7'>
              <div className="relative  w-[240px] group">
                      <Button clickHandler={buttonGenerarRecetaOsepClick}>
                        <div>Prescripcion Fisioterapia OSEP</div>
                        <div> {showFisioSesionNumber} {showFisioSesionNumber == 1 ? "Sesion" : "Sesiones"} </div>
                      </Button>                      
                          
              </div>     
            </div>
            }   
  
        </div>
      }
      {
        showApiMeli &&
        <div className=''>
          
          <div className='w-full flex  h-[300px] bg-amber-300  justify-center'>
                <div>
                  <h2 className="text-center text-m pt-28 text-rose-800 w" >
                    ACA va la api de Mercado Pago
                  </h2>
                </div>
          </div>
          <div>
            <div className="flex justify-evenly py-5  pt-1  ">
              <img src={logoV } alt="logo" className="w-[64px] h-[64px] cursor-pointer" onClick={topButtonClick} />        
            </div>
            <div>
              <h2 className="text-center text-m font-bold pb-8 pt-1 text-rose-800 w" >
                Desea generar otra receta ? Presione para ir al inicio
              </h2>
            </div>
          </div>
        </div>
      }


    </div>)
  
}

export default Hero