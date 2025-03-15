import React from 'react'
import {Button2} from './Button2'
export default function EspecialidadEcografiaExtra ({clickHandler}) {


  return (
    <div className=" w-full  ">
      <div>
        <h2 className="text-center text-m font-bold p-8 text-rose-800 w">
          Por favor, seleccione el tipo de Ecografia
        </h2>
      </div>
      <div className=" flex justify-around py-5 ">
        <div className="relative  w-[160px] h-12 group">
          <Button2 clickHandler={()=>clickHandler("articular")}>Ecografia Articular y de partes blandas</Button2>
        </div>
        <div className="relative  w-[160px] h-12 group">
          <Button2 clickHandler={()=>clickHandler("abdomen")}>Ecografia de Abdomen</Button2>
        </div>
      </div>
      <div className=" flex justify-around py-5 ">
        <div className="relative  w-[160px] h-12 group">
          <Button2 clickHandler={()=>clickHandler("genitales")}>Ecografia de Genitales y Obstetricia</Button2>
        </div>
        <div className="relative  w-[160px] h-12 group">
          <Button2 clickHandler={()=>clickHandler("glandulas")}>Ecografia de Glandulas</Button2>
        </div>
      </div>
      <div className=" flex justify-around py-5 ">
        <div className="relative  w-[160px] h-12 group">
          <Button2 clickHandler={()=>clickHandler("renal")}>Ecografia Renal</Button2>
        </div>
        <div className="relative  w-[160px] h-12 group">
          <Button2 clickHandler={()=>clickHandler("venosa")}>Ecografia Venosa</Button2>
        </div>
      </div>
    </div>
    )
}
