import React,{useState} from 'react'

import ResonanciaMenu from './ResonanciaMenu';
import EspecialidadResonanciaAbdomen from './EspecialidadResonanciaAbdomen';
import EspecialidadResonanciaCraneo from './EspecialidadResonanciaCraneo';
import EspecialidadResonanciaTorax from './EspecialidadResonanciaTorax';

export default function ImagenesResonancia({clickHandler}) {

  
  const [especialidadSelected, setEspecialidadSelected] = useState("");

  const [especialidadClick, setEspecialidadClick] = useState(false);
  const [obraSocialSelected, setObraSocialSelected] = useState(""); //osep, swiss, etc

  const [especialidadAbdomenHabilitacion,setEspecialidadAbdomenHabilitacion]=useState(false);
  const [especialidadCraneoHabilitacion,setEspecialidadCraneoHabilitacion]=useState(false);
  const [especialidadToraxHabilitacion,setEspecialidadToraxHabilitacion]=useState(false);

  function clickHandlerEspecialidades(especialidadName){
 
    console.log(`Resonancia Menu seleccionada es ${especialidadName}`)

    setEspecialidadSelected(especialidadName);
    setEspecialidadAbdomenHabilitacion(false)
    setEspecialidadCraneoHabilitacion(false)
    setEspecialidadToraxHabilitacion(false)
  

    if (!especialidadClick) {
      if (especialidadName==="craneo") {
        setEspecialidadCraneoHabilitacion(true)
      }else if(especialidadName==="torax y corazon"){
       setEspecialidadToraxHabilitacion(true)
      }else if(especialidadName==="abdomen y pelvis"){
        setEspecialidadAbdomenHabilitacion(true)
 
      }else 
      setEspecialidadClick(true);
    }else
    {
      setEspecialidadClick(false);

    }
  }
  return (
    <>
      <ResonanciaMenu clickHandler={clickHandlerEspecialidades} />
      {especialidadAbdomenHabilitacion && <EspecialidadResonanciaAbdomen especialidadPadre={especialidadSelected}></EspecialidadResonanciaAbdomen>}
      {especialidadCraneoHabilitacion && <EspecialidadResonanciaCraneo></EspecialidadResonanciaCraneo>}
      {especialidadToraxHabilitacion && <EspecialidadResonanciaTorax></EspecialidadResonanciaTorax>}
    </>


  )
}
