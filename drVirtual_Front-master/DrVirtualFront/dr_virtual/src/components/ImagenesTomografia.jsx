import React,{useState} from 'react'



import TomografiaMenu from './TomografiaMenu';
import EspecialidadTomografiaAbdomen from './EspecialidadTomografiaAbdomen';
import EspecialidadTomografiaCraneo from './EspecialidadTomografiaCraneo';
import EspecialidadTomografiaTorax from './EspecialidadTomografiaTorax';

export default function ImagenesTomografia({clickHandler}) {

  
  const [especialidadSelected, setEspecialidadSelected] = useState("");

  const [especialidadClick, setEspecialidadClick] = useState(false);
  const [obraSocialSelected, setObraSocialSelected] = useState(""); //osep, swiss, etc

  const [especialidadAbdomenHabilitacion,setEspecialidadAbdomenHabilitacion]=useState(false);
  const [especialidadCraneoHabilitacion,setEspecialidadCraneoHabilitacion]=useState(false);
  const [especialidadToraxHabilitacion,setEspecialidadToraxHabilitacion]=useState(false);

  function clickHandlerEspecialidades(especialidadName){
 
    console.log(`Eco Menu seleccionada es ${especialidadName}`)

    setEspecialidadSelected(especialidadName);
    setEspecialidadAbdomenHabilitacion(false)
    setEspecialidadCraneoHabilitacion(false)
    setEspecialidadToraxHabilitacion(false)

    if (!especialidadClick) {
      if (especialidadName==="abdomen y pelvis") {
        setEspecialidadAbdomenHabilitacion(true)
      }else if(especialidadName==="craneo y columna"){
       setEspecialidadCraneoHabilitacion(true)
      }else if(especialidadName==="torax"){
        setEspecialidadToraxHabilitacion(true)
 
      }else 
      setEspecialidadClick(true);
    }else
    {
      setEspecialidadClick(false);

    }
  }
  return (
    <>
      <TomografiaMenu clickHandler={clickHandlerEspecialidades} />
      {especialidadAbdomenHabilitacion && <EspecialidadTomografiaAbdomen especialidadPadre={especialidadSelected}></EspecialidadTomografiaAbdomen>}
      {especialidadCraneoHabilitacion && <EspecialidadTomografiaCraneo></EspecialidadTomografiaCraneo>}
      {especialidadToraxHabilitacion && <EspecialidadTomografiaTorax></EspecialidadTomografiaTorax>}
    </>


  )
}
