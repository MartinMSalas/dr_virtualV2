import React from "react"
import logoV from "../assets/logoVertical.png"

const ApiMeli = (props) => {
  function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div className=''>
       {alert("Success")}
            
      <div className='w-full flex  h-[300px] bg-amber-300  justify-center'>
            <div>
              <h2 className="text-center text-m pt-28 text-rose-800 w" >
                ACA va la api de Mercado Pago
              </h2>
            </div>
      </div>
      <div>
        <div className="flex justify-evenly py-5  pt-1  ">
          <img onClick={toTop} src={logoV } alt="logo" className="w-[64px] h-[64px] cursor-pointer"  />        
        </div>
        <div>
          <h2 className="text-center text-m font-bold pb-8 pt-1 text-rose-800 w" >
            Desea generar otra receta ? Presione para ir al inicio
          </h2>
        </div>
      </div>
    </div>
  )
};

export default ApiMeli;
