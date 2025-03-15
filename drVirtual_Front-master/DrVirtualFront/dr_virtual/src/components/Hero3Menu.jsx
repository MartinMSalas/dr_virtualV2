import React from 'react'

import {Button2} from './Button2'
export default function Hero3Menu({clickHandler}) {
  return (
    <div className=' w-full '>
      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] group">
          <Button2 clickHandler={()=>clickHandler("recetas")} >Recetas</Button2>
        </div>
        <div className="relative  w-[160px] group">
           <Button2 clickHandler={()=>clickHandler("prescripcion")} >Prescripcion</Button2>
        </div> 
      </div>
      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] group">
           <Button2 clickHandler={()=>clickHandler("laboratorio")} >Laboratorio</Button2>
        </div> 
        <div className="relative  w-[160px] group">
           <Button2 clickHandler={()=>clickHandler("consultas")} >Consultas</Button2>
        </div>    
      </div>
      <div className=' flex justify-around py-5 '>
       <div className="relative  w-[160px] group">
           <Button2 clickHandler={()=>clickHandler("imagenes")} >Imagenes Medicas</Button2>
        </div> 
      </div>
    </div>
  )
}
