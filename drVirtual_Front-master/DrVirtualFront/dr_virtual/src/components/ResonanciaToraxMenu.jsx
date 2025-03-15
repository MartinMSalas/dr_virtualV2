import React from 'react'
import {Button2} from './Button2'
export default function ResonanciaToraxMenu({clickHandler}) {
  return (
    <div className=" w-full  ">
      <div>
        <h2 className="text-center text-m font-bold p-8 text-rose-800 w">
          Por favor, seleccione la zona de la Resonancia Nuclear Magnetica
        </h2>
      </div>
      <div className=" flex justify-around py-5 ">
        <div className="relative  w-[160px] h-12 group">
          <Button2 clickHandler={()=>clickHandler("abdomen")}>RNM de torax</Button2>
        </div>
        <div className="relative  w-[160px] h-12 group">
          <Button2 clickHandler={()=>clickHandler("pelvis")}>RNM de corazon</Button2>
        </div>
      </div>

    </div>
  )
}