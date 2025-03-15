import React from 'react'
import {Button2} from './Button2'
export default function EcografiaGenitalesMenu({clickHandler}) {
  return (
    <div className=" w-full  ">
    <div>
      <h2 className="text-center text-m font-bold p-8 text-rose-800 w">
        Por favor, seleccione la especialidad
      </h2>
    </div>
    <div className=" flex justify-around py-5 ">
      <div className="relative  w-[160px] h-12 group">
        <Button2 clickHandler={()=>clickHandler("ginecologica")}>Ecografia Ginecologica</Button2>
      </div>
      <div className="relative  w-[160px] h-12 group">
        <Button2 clickHandler={()=>clickHandler("testicular")}>Ecografia de Vesiculo Testicular</Button2>
      </div>
    </div>
    <div className=" flex justify-around py-5 ">
      <div className="relative  w-[160px] h-12 group">
        <Button2 clickHandler={()=>clickHandler("prostatica")}>Ecografia Prostatica</Button2>
      </div>
      <div className="relative  w-[160px] h-12 group">
        <Button2 clickHandler={()=>clickHandler("obstetricia")}>Ecografia Obstetricia</Button2>
      </div>
    </div>

  </div>
  )
}
