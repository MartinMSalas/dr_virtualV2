import React, {useState} from 'react'

import Button from './Button'
import {Button2} from './Button2'
import {logoV} from '../assets';
import { useScrollBy } from 'react-use-window-scroll';

import {Recetas} from './Recetas'
import {Prescripcion} from './Prescripcion'
import {ImagenesMedicas} from './ImagenesMedicas'
import Hero3Menu from './Hero3Menu';

const Hero4 = () => {


  const scrollBy = useScrollBy();

  // primer nivel
  const [recetasClick,setRecetasClick] = useState(false)
  const [prescripcionClick,setPrescripcionClick] = useState(false)
  const [imagenesMedicasClick,setImagenesMedicasClick] = useState(false)


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
    }
  }
  function buttonRecetasFirstLevelClick() {   

    setPrescripcionClick(false)
    setImagenesMedicasClick(false)

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
    if(!imagenesMedicasClick){
      setImagenesMedicasClick(true)

    }else{
      setImagenesMedicasClick(false)
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
    
    </>
    



      

    
  )


export default Hero4