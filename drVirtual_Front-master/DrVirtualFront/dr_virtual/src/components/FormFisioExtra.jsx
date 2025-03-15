import React,{useState} from 'react'
import Button from './Button'
export default function FormFisioExtra({formFisioHandler}) {
  
  const [sesiones, setSesiones] = useState(0);

  const [sesionesClick, setSesionesClick] = useState(false);

  function handleSesionesClick(data){
    setSesiones(data);
    if (!sesionesClick) {
      setSesionesClick(true);
    } else {
      setSesionesClick(false);
    }
  }


  return (
      <div>      
        <div>
          <div>
            <h2 className="text-center text-m font-bold pt-1 text-rose-800 w" >
              Seleccione la cantidad de sesiones necesarias
             
            </h2>
          </div>

          <div className={`w-full flex justify-evenly p-7 form-group `}>
            
            
            <div></div>
            <div className="relative  w-28 group">
                    <Button clickHandler={()=> handleSesionesClick(1)}>1 Sesion</Button>                    
            </div>    
            <div className="relative w-28  group">
                    <Button clickHandler={()=> handleSesionesClick(5)}>5 Sesiones</Button>                   
            </div>  
            <div className="relative w-28 group">
                    <Button clickHandler={()=> handleSesionesClick(10)}>10 Sesiones</Button>                    
            </div>   
          </div>
        </div>

        {sesionesClick &&  
            <div className='w-full flex justify-center p-7'>
              <div className="relative  w-[240px] group">
                      <Button clickHandler={()=>formFisioHandler(sesiones)}>
                        <div>Prescripcion Fisioterapia OSEP</div>
                        {console.log(sesiones)}
                        <div> {sesiones} {sesiones == 1 ? "Sesion" : "Sesiones"} </div>
                      </Button>                      
                          
              </div>     
            </div>
        }  



    </div>
  )
}
