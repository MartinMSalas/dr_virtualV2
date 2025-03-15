import React,{useState} from 'react'
import ObraSocial2 from './ObraSocial2'

import ApiMeli from './ApiMeli';
import PrescripcionEspecialidades from './PrescripcionEspecialidades';
import { FormBasico3 } from './FormBasico3';
import FormFisioExtra from './FormFisioExtra';
import FormInterconsultaExtra from './FormInterconsultaExtra';


export const Prescripcion=()=> {
  
  
  const [especialidadSelected, setEspecialidadSelected] = useState("");
  const [obraSocialSelected, setObraSocialSelected] = useState(""); //osep, swiss, etc
  const [fisioExtraData, setFisioExtraData] = useState(false);
  const [interconsultaExtraData, setInterconsultaExtraData] = useState(false);

  const [obraSocialClick, setObraSocialClick] = useState(false);
  const [especialidadClick, setEspecialidadClick] = useState(false);
  const [formSubmited, setFormSubmited] = useState(false);
  const [formFisioExtra,setFormFisioExtra]=useState(false);
  const [formInterconsultaExtra,setFormInterconsultaExtra]=useState(false);

  

  function clickHandlerEspecialidades(especialidadName){
    setObraSocialClick(false);
    setFormSubmited(false);
    setFormFisioExtra(false)

    console.log(especialidadName)
    setEspecialidadSelected(especialidadName);
    if (!especialidadClick) {
     
      setEspecialidadClick(true);
    }else
    {
      setEspecialidadClick(false);
    }
  }
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
      if(especialidadSelected==="fisioterapia")
      {
        
        setFormFisioExtra(true)
      }else if(especialidadSelected==="interconsultas"){
        
        setFormInterconsultaExtra(true)
      }    
      else{
      
        setFormSubmited(true);
      }
    } else {
      setFormFisioExtra(false)
      setFormSubmited(false);
    }
    console.log(data)
  }
  function formFisioHandler(data){
    setFisioExtraData(data);
    console.log(`se recibio ${data}`)
    if (!formSubmited){
      setFormSubmited(true);
    }else{
      setFormSubmited(false);
    }
  }
  function formInterconsultaHandler(data){
    setInterconsultaExtraData(data);
    //console.log(`se recibio ${data}`)
    if (!formSubmited){
      setFormSubmited(true);
    }else{
      setFormSubmited(false);
    }
  }


  return (
    <>  
      <PrescripcionEspecialidades clickHandler={clickHandlerEspecialidades}></PrescripcionEspecialidades>
      {especialidadClick && <ObraSocial2 clickHandler={clickHandlerObraSocial}></ObraSocial2>}
      {obraSocialClick && (<FormBasico3 formHandler={formHandler} obraSocialSelected={obraSocialSelected} especialidadSelected={especialidadSelected}></FormBasico3>)}
      {formFisioExtra && <FormFisioExtra formFisioHandler={formFisioHandler}></FormFisioExtra>}
      {formInterconsultaExtra && <FormInterconsultaExtra formInterconsultaHandler={formInterconsultaHandler}></FormInterconsultaExtra>}
      {formSubmited && <ApiMeli></ApiMeli>}
    </>

  )
}

