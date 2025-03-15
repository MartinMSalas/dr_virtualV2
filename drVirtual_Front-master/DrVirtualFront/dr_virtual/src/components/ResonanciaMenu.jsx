import React from 'react'
import {Button2} from './Button2'
export default function ResonanciaMenu({clickHandler}) {
  return (
    <div className=" w-full  ">
      <div>
        <h2 className="text-center text-m font-bold p-8 text-rose-800 w">
          Por favor, seleccione el tipo de Resonancia Nuclear Magnetica
        </h2>
      </div>
      <div className=" flex justify-around py-5 ">
        <div className="relative  w-[160px] h-12 group">
          <Button2 clickHandler={()=>clickHandler("craneo")}>RNM de craneo, c. cervical y lumbar</Button2>
        </div>
        <div className="relative  w-[160px] h-12 group">
          <Button2 clickHandler={()=>clickHandler("torax y corazon")}>RNM de torax y corazon</Button2>
        </div>
      </div>
      <div className=" flex justify-around py-5 ">
        <div className="relative  w-[160px] h-12 group">
          <Button2 clickHandler={()=>clickHandler("abdomen y pelvis")}>RNM de abdomen y pelvis</Button2>
        </div>

      </div>
     
    </div>
  )
}
