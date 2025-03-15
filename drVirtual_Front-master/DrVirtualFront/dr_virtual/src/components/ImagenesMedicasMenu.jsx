import React from 'react'
import {Button2} from './Button2'

export default function ImagenesMedicasMenu({clickHandler}) {
  
  return (
    <div className=' w-full  '>
      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] h-12 group">
          <Button2 clickHandler={()=>clickHandler("radiografias")} >Radiografias</Button2>
        </div>
        <div className="relative  w-[160px] h-12 group">
          <Button2 clickHandler={()=>clickHandler("ecografias")} >Ecografias</Button2>
        </div>     
      </div>

      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] group">                
          <Button2 clickHandler={()=>clickHandler("tomografias")}>Tomografia Axial Computada </Button2>
        </div>
        <div className="relative  w-[160px] group">
          <Button2 clickHandler={()=>clickHandler("resonancias")}>Resonancia Nuclear Magnetica</Button2>
        </div>     
      </div>



    </div>
  )
}
