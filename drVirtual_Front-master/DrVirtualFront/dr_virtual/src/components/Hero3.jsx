import React, {useState} from 'react'

import Button from '../components/Button'
import {Button2} from '../components/Button2'
import {logoV} from '../assets';
import { useScrollBy } from 'react-use-window-scroll';

import {Recetas} from '../components/Recetas'
import {Prescripcion} from '../components/Prescripcion'
import {ImagenesMedicas} from '../components/ImagenesMedicas'
import { Laboratorio } from './Laboratorio';
import { Consultas } from './Consultas';

import Hero3Menu from './Hero3Menu';

const Hero3 = () => {


  const scrollBy = useScrollBy();

  // primer nivel
  const [recetasClick,setRecetasClick] = useState(false)
  const [prescripcionClick,setPrescripcionClick] = useState(false)
  const [imagenesMedicasClick,setImagenesMedicasClick] = useState(false)
  const [laboratorioClick,setLaboratorioClick] = useState(false)
  const [consultasClick,setConsultasClick] = useState(false)

  function topButtonClick(){
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})

    setRecetasClick(false)
    
    setPrescripcionClick(false)
    

  }
  function clickHandlerMenu(data){
    if(data==="recetas"){
      buttonRecetasFirstLevelClick()
    }else if(data==="prescripcion"){
      buttonPrescripcionFirstLevelClick()
    }else if(data==="imagenes"){
      buttonImagenesMedicasFirstLevelClick()
    }else if(data==="laboratorio"){
      buttonLaboratorioFirstLevelClick()
    }
    else if(data==="consultas"){
      buttonConsultasFirstLevelClick()
    }


  }
  function buttonRecetasFirstLevelClick() {   
    setPrescripcionClick(false)
    setImagenesMedicasClick(false)
    setLaboratorioClick(false)
    setConsultasClick(false)

    console.log("recetasClick: ",recetasClick)
     if(!recetasClick){
      setRecetasClick(true)
    }else{
      setRecetasClick(false)
    }
    scrollBy({ top: 200, left: 0, behavior: "smooth" })
  }
  function buttonPrescripcionFirstLevelClick() {
    setRecetasClick(false)
    setImagenesMedicasClick(false)
    setLaboratorioClick(false)
    setConsultasClick(false)
     
    if(!prescripcionClick){
      setPrescripcionClick(true)      
    }else{
      setPrescripcionClick(false)
    }
    scrollBy({ top: 200, left: 0, behavior: "smooth" })
  }

  function buttonImagenesMedicasFirstLevelClick(){
    setRecetasClick(false)
    setPrescripcionClick(false)
    setLaboratorioClick(false)
    setConsultasClick(false)
    if(!imagenesMedicasClick){
      setImagenesMedicasClick(true)

    }else{
      setImagenesMedicasClick(false)
    }

  }
  function buttonLaboratorioFirstLevelClick(){
    setRecetasClick(false)
    setPrescripcionClick(false)
    setImagenesMedicasClick(false)
    setConsultasClick(false)
    if(!laboratorioClick){
      setLaboratorioClick(true)
    }else{
      setLaboratorioClick(false)
    }

  }
  function buttonConsultasFirstLevelClick(){
    setRecetasClick(false)
    setPrescripcionClick(false)
    setImagenesMedicasClick(false)
    setLaboratorioClick(false)
    if(!consultasClick){
      setConsultasClick(true)
    }else{
      setConsultasClick(false)
    }

  }
  // Funciones segundo nivel

  return (
    <>
    
      <Hero3Menu clickHandler={clickHandlerMenu}></Hero3Menu>
    
      { recetasClick && 
        <Recetas ></Recetas>
      }
      { prescripcionClick &&
        <Prescripcion ></Prescripcion>
      }
      { imagenesMedicasClick &&
        <ImagenesMedicas></ImagenesMedicas>
      }
      { laboratorioClick &&
        <Laboratorio></Laboratorio>
      }
      { consultasClick &&
        <Consultas></Consultas>
      }
    
    </>
    



      

    
  )
}

export default Hero3