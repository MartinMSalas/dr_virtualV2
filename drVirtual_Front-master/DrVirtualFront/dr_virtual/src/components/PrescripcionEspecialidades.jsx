import React from 'react'
import {Button2} from './Button2'

export default function PrescripcionEspecialidades({clickHandler}) {
  
  return (
    <div className=' w-full  '>
      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] h-12 group">
          <Button2 clickHandler={()=>clickHandler("fisioterapia")} >Fisioterapia y Kinesioterapia</Button2>
        </div>
        <div className="relative  w-[160px] h-12 group">
          <Button2 clickHandler={()=>clickHandler("electrocardiograma")} >Electrocardiograma</Button2>
        </div>     
      </div>

      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] group">                
          <Button2 clickHandler={()=>clickHandler("espirometria")}>Espirometria </Button2>
        </div>
        <div className="relative  w-[160px] group">
          <Button2 clickHandler={()=>clickHandler("ergometria")}>Ergometria</Button2>
        </div>     
      </div>
      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] group">
          <Button2 clickHandler={()=>clickHandler("interconsultas")}>Interconsultas con Especialista</Button2>
        </div>     
      </div>


    </div>
  )
}
