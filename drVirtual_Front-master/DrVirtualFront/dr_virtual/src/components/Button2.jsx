import React from "react";
import "./css/button2.css";

export const Button2 = ({ children, clickHandler, active }) => {
  const baseClass =
    "button2 w-full text-xs h-12 px-2 py-1 rounded transition-all duration-300 active:brightness-75";
  const activeClass = active ? "bg-blue-600" : "bg-blue-400";
  return (
    <div className="w-full">
      <button onClick={clickHandler} className={`${baseClass} ${activeClass}`}>
        {children}
      </button>
    </div>
  );
};
