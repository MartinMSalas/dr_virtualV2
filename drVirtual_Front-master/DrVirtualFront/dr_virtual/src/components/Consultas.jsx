import React,{useState} from 'react'
import ObraSocial2 from './ObraSocial2'
import { FormBasico3 } from './FormBasico3';
import ApiMeli from './ApiMeli';
export const Consultas=()=> {

  const [obraSocialClick, setObraSocialClick] = useState(false);
  const [obraSocialSelected, setObraSocialSelected] = useState(""); //osep, swiss, etc
  const [formSubmited, setFormSubmited] = useState(false);

  const [data, setData] = useState({});
  
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
  
    if (!formSubmited) {
      setFormSubmited(true);
    } else {
      setFormSubmited(false);
    }
    console.log(data)

  }
  return (
    <>
      <ObraSocial2 clickHandler={clickHandlerObraSocial}></ObraSocial2>
      {obraSocialClick && (<FormBasico3 formHandler={formHandler} especialidadSelected={"Consulta"} obraSocialSelected={obraSocialSelected}></FormBasico3>)}
      {formSubmited && <ApiMeli></ApiMeli>}
    </>

  )
}

