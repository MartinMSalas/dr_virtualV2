import React,{useState} from 'react'

import EspecialidadEcografiaGenitales from './EspecialidadEcografiaGenitales';
import EspecialidadEcografiaGlandulas from './EspecialidadEcografiaGlandulas';
import EspecialidadEcografiaArticular from './EspecialidadEcografiaArticular';
import EcografiaMenu from './EcografiaMenu';

//adicional por abdomen renal y venosa
import ObraSocial2 from './ObraSocial2'
import { FormBasico3 } from './FormBasico3';
import ApiMeli from './ApiMeli';

export default function ImagenesEcografia({clickHandler}) {

  
  const [especialidadSelected, setEspecialidadSelected] = useState("");

  const [especialidadClick, setEspecialidadClick] = useState(false);
  const [obraSocialSelected, setObraSocialSelected] = useState(""); //osep, swiss, etc

  const [especialidadEcografiaGenitalesHabilitacion,setEspecialidadEcografiaGenitalesHabilitacion]=useState(false);
  const [especialidadGlandulasHabilitacion,setEspecialidadGlandulasHabilitacion]=useState(false);
  const [especialidadArticularHabilitacion,setEspecialidadArticularHabilitacion]=useState(false);


  // adicional por abdomen renal y venosa
  const [obraSocialClick, setObraSocialClick] = useState(false);
  const [formSubmited, setFormSubmited] = useState(false);  
  function clickHandlerEspecialidades(especialidadName){
 
    console.log(`Eco Menu seleccionada es ${especialidadName}`)

    setEspecialidadSelected(especialidadName);
    setEspecialidadEcografiaGenitalesHabilitacion(false)
    setEspecialidadGlandulasHabilitacion(false)
    setEspecialidadArticularHabilitacion(false)
    if (!especialidadClick) {
      if (especialidadName==="articular") {
        setEspecialidadArticularHabilitacion(true)
      }
      
      else if(especialidadName==="genitales"){
        setEspecialidadEcografiaGenitalesHabilitacion(true)
 
      }
      else if(especialidadName==="glandulas"){
        setEspecialidadGlandulasHabilitacion(true)

      }
     /*  else if(especialidadName==="abdomen"){
        // setEspecialidadTomografiaHabilitacion(true)
       }
      else if(especialidadName==="renal"){
        // setEspecialidadResonanciaHabilitacion(true)
      }else if(especialidadName==="venosa"){
        // setEspecialidadResonanciaHabilitacion(true)
      } */
      else 
      setEspecialidadClick(true);
    }else
    {
      setEspecialidadClick(false);
     // setEspecialidadEcografiaHabilitacion(false)
      //setEspecialidadTomografiaHabilitacion(false)
      //setEspecialidadResonanciaHabilitacion(false)

    }
  }

  // Adicional por abdomen renal y venosa
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
      <EcografiaMenu clickHandler={clickHandlerEspecialidades} />
      {especialidadEcografiaGenitalesHabilitacion && <EspecialidadEcografiaGenitales ></EspecialidadEcografiaGenitales>}
      {especialidadGlandulasHabilitacion && <EspecialidadEcografiaGlandulas></EspecialidadEcografiaGlandulas>}
      {especialidadArticularHabilitacion && <EspecialidadEcografiaArticular></EspecialidadEcografiaArticular>}

      {especialidadClick && <ObraSocial2 clickHandler={clickHandlerObraSocial}></ObraSocial2>}
      {obraSocialClick && (<FormBasico3 formHandler={formHandler} obraSocialSelected={obraSocialSelected} especialidadSelected={`Ecografia ${especialidadSelected}`}></FormBasico3>)}

      {formSubmited && <ApiMeli></ApiMeli>}
    </>


  )
}
