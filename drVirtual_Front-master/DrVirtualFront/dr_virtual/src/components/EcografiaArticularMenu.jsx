import React from 'react'
import {Button2} from './Button2'
export default function EcografiaArticularMenu({clickHandler}) {
  return (
    <div className=" w-full  ">
      <div>
        <h2 className="text-center text-m font-bold p-8 text-rose-800 w">
          Por favor, seleccione la especialidad
        </h2>
      </div>
      <div className=" flex justify-around py-5 ">
        <div className="relative  w-[160px] h-12 group">
          <Button2 clickHandler={()=>clickHandler("articular")}>Ecografia Articular</Button2>
        </div>
        <div className="relative  w-[160px] h-12 group">
          <Button2 clickHandler={()=>clickHandler("muscular")}>Ecografia Muscular</Button2>
        </div>
      </div>
      <div className=" flex justify-around py-5 ">
        <div className="relative  w-[160px] h-12 group">
          <Button2 clickHandler={()=>clickHandler("partes blandas")}>Ecografia de partes blandas</Button2>
        </div>

      </div>

    </div>
  )
}
