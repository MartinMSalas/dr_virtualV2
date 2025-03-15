import  { useState } from "react";
import {Button2} from "./Button2";
import FormBasico from "./FormBasico";


const ObraSocial = ({clickHandler}) => {




  return (
    <div>
      <div className=" w-full  ">
        <div>
          <h2 className="text-center text-m font-bold pt-1 text-rose-800 w">
            Por favor, seleccione su obra social
          </h2>
        </div>
        <div className=" flex justify-around py-5 ">
          <div className="relative  w-[160px] h-12 group">
            <Button2 clickHandler={()=>clickHandler("OSEP")}>OSEP</Button2>
          </div>
          <div className="relative  w-[160px] h-12 group">
            <Button2 clickHandler={()=>clickHandler("OSEP")}>OSEP</Button2>
          </div>
        </div>
        <div className=" flex justify-around py-5 ">
          <div className="relative  w-[160px] h-12 group">
            <Button2 clickHandler={()=>clickHandler("OSEP")}>OSEP</Button2>
          </div>
          <div className="relative  w-[160px] h-12 group">
            <Button2 clickHandler={()=>clickHandler("OSEP")}>OSEP</Button2>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ObraSocial;
