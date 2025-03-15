import React,{useState} from 'react'
import ObraSocial2 from './ObraSocial2'

import ApiMeli from './ApiMeli';
import { FormBasico3 } from './FormBasico3';

import ImagenesMedicasMenu from './ImagenesMedicasMenu';
import ImagenesEcografia from './ImagenesEcografia';
import ImagenesTomografia from './ImagenesTomografia';
import ImagenesResonancia from './ImagenesResonancia';

export const ImagenesMedicas=()=> {
  
  
  const [especialidadSelected, setEspecialidadSelected] = useState("");
  const [obraSocialSelected, setObraSocialSelected] = useState(""); //osep, swiss, etc
  
  const [obraSocialClick, setObraSocialClick] = useState(false);
  const [especialidadClick, setEspecialidadClick] = useState(false);


  const [especialidadEcografiaHabilitacion,setEspecialidadEcografiaHabilitacion]=useState(false);
 
  const [especialidadTomografiaHabilitacion,setEspecialidadTomografiaHabilitacion]=useState(false);
  const [especialidadResonanciaHabilitacion,setEspecialidadResonanciaHabilitacion]=useState(false);

  const [formSubmited, setFormSubmited] = useState(false);

  function clickHandlerEspecialidades(especialidadName){
    setObraSocialClick(false);
    console.log(`La especialidad seleccionada es ${especialidadName}`)

    setEspecialidadSelected(especialidadName);
    setEspecialidadEcografiaHabilitacion(false)
    setEspecialidadTomografiaHabilitacion(false)
    setEspecialidadResonanciaHabilitacion(false)
    if (!especialidadClick) {
      if (especialidadName==="ecografias") {
        setEspecialidadEcografiaHabilitacion(true)
      }else if(especialidadName==="tomografias"){
        setEspecialidadTomografiaHabilitacion(true)
      }else if(especialidadName==="resonancias"){
        setEspecialidadResonanciaHabilitacion(true)
      }else 
      setEspecialidadClick(true);
    }else
    {
      setEspecialidadClick(false);


    }
  }
  // Segundo nivel

  function clickHandlerObraSocial(obraSocialName){
    console.log(obraSocialName)
    setObraSocialSelected(obraSocialName);
    setFormSubmited(false);

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
      <ImagenesMedicasMenu clickHandler={clickHandlerEspecialidades}></ImagenesMedicasMenu>

      
      {especialidadEcografiaHabilitacion && <ImagenesEcografia></ImagenesEcografia>}
      
      {especialidadTomografiaHabilitacion && <ImagenesTomografia></ImagenesTomografia>}
      {especialidadResonanciaHabilitacion && <ImagenesResonancia></ImagenesResonancia>}


     
      
      {especialidadClick && <ObraSocial2 clickHandler={clickHandlerObraSocial}></ObraSocial2>}
      {obraSocialClick && (<FormBasico3 formHandler={formHandler} obraSocialSelected={obraSocialSelected} especialidadSelected={especialidadSelected}></FormBasico3>)}

      {formSubmited && <ApiMeli></ApiMeli>}
    </>

  )
}

