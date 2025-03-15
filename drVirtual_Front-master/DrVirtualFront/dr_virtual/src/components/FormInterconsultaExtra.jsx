import React,{useState} from 'react'
import Button from './Button';
export default function FormInterconsultaExtra({formInterconsultaHandler}) {
  
  const [selectedInterConsulta, setSelectedInterConsulta] = useState();

  const handleChange = (e) => {
    //console.log(e.target.value)
    setSelectedInterConsulta(e.target.value);
  }
  return (

    <>
    
        <div className="">
          <h2 className="text-center text-m font-bold mb-8 text-rose-800 w" >
            Por favor, selecciona la especialidad para la interconsulta
          </h2>
        </div>
        <div className="grid grid-cols-2 ">

          <label >
            <input className='m-4'type="radio" value="TRAUMATOLOGIA" checked={selectedInterConsulta === "TRAUMATOLOGIA"} onChange={handleChange} />
            TRAUMATOLOGIA
          </label>
          <label>
            <input className='m-4' type="radio" value="REUMATOLOGIA" checked={selectedInterConsulta === "REUMATOLOGIA"} onChange={handleChange} />
            REUMATOLOGIA
          </label>
          <label>
            <input className='m-4' type="radio" value="ONCOLOGIA" checked={selectedInterConsulta === "ONCOLOGIA"} onChange={handleChange} />
            ONCOLOGIA
          </label>
          <label className='text-xs'>
            <input className='m-4 ' type="radio" value="INFECTOLOGIA" checked={selectedInterConsulta === "INFECTOLOGIA"} onChange={handleChange} />
            INFECTOLOGIA
          </label>
          <label>
            <input className='m-4' type="radio" value="NEUMOLOGIA" checked={selectedInterConsulta === "NEUMOLOGIA"} onChange={handleChange} />
            NEUMOLOGIA
          </label>
          <label>
            <input className='m-4' type="radio" value="IMAGENOLOGIA" checked={selectedInterConsulta === "IMAGENOLOGIA"} onChange={handleChange} />
            IMAGENOLOGIA
          </label>
          <label>
            <input className='m-4' type="radio" value="CIRUGIA" checked={selectedInterConsulta === "CIRUGIA"} onChange={handleChange} />
            CIRUGIA
          </label>
          <label>
            <input className='m-4' type="radio" value="PSIQUIATRIA" checked={selectedInterConsulta === "PSIQUIATRIA"} onChange={handleChange} />
            PSIQUIATRIA
          </label>
          <label>
            <input className='m-4' type="radio" value="MEDICINA - LABORAL" checked={selectedInterConsulta === "MEDICINA - LABORAL"} onChange={handleChange} />
            MEDICINA LABORAL
          </label>
          <label>
            <input className='m-4' type="radio" value="PEDIATRIA" checked={selectedInterConsulta === "PEDIATRIA"} onChange={handleChange} />
            PEDIATRIA
          </label>
          <label>
            <input className='m-4' type="radio" value="NEFROLOGIA" checked={selectedInterConsulta === "NEFROLOGIA"} onChange={handleChange} />
            NEFROLOGIA
          </label>
          <label>
            <input className='m-4' type="radio" value="MEDICINA - LEGAL" checked={selectedInterConsulta === "MEDICINA - LEGAL"} onChange={handleChange} />
            MEDICINA LEGAL
          </label>
          <label>
            <input className='m-4' type="radio" value="GINECOLOGIA" checked={selectedInterConsulta === "GINECOLOGIA"} onChange={handleChange} />
            GINECOLOGIA
          </label>
          <label>
            <input className='m-4' type="radio" value="UROLOGIA" checked={selectedInterConsulta === "UROLOGIA"} onChange={handleChange} />
            UROLOGIA
          </label>
          <label>
            <input className='m-4' type="radio" value="HEMATOLOGIA" checked={selectedInterConsulta === "HEMATOLOGIA"} onChange={handleChange} />
            HEMATOLOGIA
          </label>
          <label>
            <input className='m-4' type="radio" value="CARDIOLOGIA" checked={selectedInterConsulta === "CARDIOLOGIA"} onChange={handleChange} />
            CARDIOLOGIA
          </label>
          <label>
            <input className='m-4' type="radio" value="ENDOCRINOLOGIA" checked={selectedInterConsulta === "ENDOCRINOLOGIA"} onChange={handleChange} />
            ENDOCRINOLOGIA
          </label>
          <label>
            <input className='m-4' type="radio" value="OBSTETRICIA" checked={selectedInterConsulta === "OBSTETRICIA"} onChange={handleChange} />
            OBSTETRICIA
          </label>
          <label>
            <input className='m-4' type="radio" value="INMUNOLOGIA" checked={selectedInterConsulta === "INMUNOLOGIA"} onChange={handleChange} />
            INMUNOLOGIA
          </label>
          <label>
            <input className='m-4' type="radio" value="GERENTOLOGIA" checked={selectedInterConsulta === "GERENTOLOGIA"} onChange={handleChange} />
            GERENTOLOGIA
          </label>
          <label>
            <input className='m-4' type="radio" value="MEDICINA ESTETICA" checked={selectedInterConsulta === "MEDICINA ESTETICA"} onChange={handleChange} />
            MEDICINA ESTETICA
          </label>
          <label>
            <input className='m-4' type="radio" value="DERMATOLOGIA" checked={selectedInterConsulta === "DERMATOLOGIA"} onChange={handleChange} />
            DERMATOLOGIA
          </label>
          <label>
            <input className='m-4' type="radio" value="OTORRINOLARINGOLOGIA" checked={selectedInterConsulta === "OTORRINOLARINGOLOGIA"} onChange={handleChange} />
            OTORRINOLARINGOLOGIA
          </label>

        </div >
        <div className="m-10">
          <Button clickHandler={()=>formInterconsultaHandler(selectedInterConsulta)}>{selectedInterConsulta? `Seleccionaste ${selectedInterConsulta}`: "No se seleeciono nada"}</Button>
        </div>  
    </>
  )
}
