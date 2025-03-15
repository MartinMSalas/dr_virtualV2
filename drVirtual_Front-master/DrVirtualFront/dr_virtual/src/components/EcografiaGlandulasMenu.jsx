import React from 'react'
import {Button2} from './Button2'
export default function EcografiaGlandulasMenu({clickHandler}) {
  return (
    <div className=" w-full  ">
    <div>
      <h2 className="text-center text-m font-bold p-8 text-rose-800 w">
        Por favor, seleccione la especialidad
      </h2>
    </div>
    <div className=" flex justify-around py-5 ">
      <div className="relative  w-[160px] h-12 group">
        <Button2 clickHandler={()=>clickHandler("mamaria")}>Ecografia Mamaria</Button2>
      </div>
      <div className="relative  w-[160px] h-12 group">
        <Button2 clickHandler={()=>clickHandler("tiroidea")}>Ecografia Tiroidea</Button2>
      </div>
    </div>
    

  </div>
  )
}
