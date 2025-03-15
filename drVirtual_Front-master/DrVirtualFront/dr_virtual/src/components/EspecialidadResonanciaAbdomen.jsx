import React,{useState} from 'react'


import { FormBasico3 } from './FormBasico3'
import ObraSocial2 from './ObraSocial2'
import ApiMeli from './ApiMeli'

import ResonanciaAbdomenMenu from './ResonanciaAbdomenMenu'
export default function EspecialidadResonanciaAbdomen ({clickHandler, especialidadPadre}) {

  const [especialidadSelected, setEspecialidadSelected] = useState()
  const [obraSocialSelected, setObraSocialSelected] = useState("") //osep, swiss, etc
  const [formSubmited, setFormSubmited] = useState(false)


  const [especialidadClick, setEspecialidadClick] = useState(false)
  const [obraSocialClick, setObraSocialClick] = useState(false)
  
  function especialidadHandler(especialidad){
    setEspecialidadSelected(especialidad)
    console.log(`especialidad seleccionada es ${especialidad}`)
    if (!especialidadClick) {
      setEspecialidadClick(true)
    }else
    {
      setEspecialidadClick(false)
    }
    
  }

  function clickHandlerObraSocial(obraSocialName){
    console.log(obraSocialName)
    setObraSocialSelected(obraSocialName);


    if (!obraSocialClick) {
      console.log("osep", obraSocialClick);
      setObraSocialClick(true);
    } else {
      setObraSocialClick(false);
    }
  }

  function formHandler(data){  
    console.log(especialidadSelected)
    if (!formSubmited) {
 
        setFormSubmited(true);

    } else {

      setFormSubmited(false);
    }
    console.log(data)
  }
  return (
    <>

      <ResonanciaAbdomenMenu clickHandler={especialidadHandler}></ResonanciaAbdomenMenu>
      {especialidadClick && <ObraSocial2 clickHandler={clickHandlerObraSocial}></ObraSocial2>}
      {obraSocialClick && (<FormBasico3 formHandler={formHandler} obraSocialSelected={obraSocialSelected} especialidadSelected={`Resonancia NM de ${especialidadSelected}`}></FormBasico3>)}
      {formSubmited && <ApiMeli></ApiMeli>}


     
    </>

    )
}