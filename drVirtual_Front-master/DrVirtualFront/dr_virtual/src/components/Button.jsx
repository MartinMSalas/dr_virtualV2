import React from 'react'

const Button = props => {
  return (
    <div className="relative group ">
      {/* <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
          <button onClick={buttonRecetasClick} className="h-12 text-xs relative transition-all duration-500 bg-blue-400 group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
            Recetas
          </button> */}
      <div className="absolute transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse "></div>
      <button onClick={props.clickHandler} className=" h-12 text-xs relative transition-all duration-500 bg-blue-400 group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded ">
        {props.children}
      </button>
    </div>
  )
}

export default Button