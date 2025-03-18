"use client";
import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ options, value, onChange, placeholder = "Seleccione...", className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sort options numerically by value if possible
  const sortedOptions = [...options].sort((a, b) => Number(a.value) - Number(b.value));

  const handleOptionClick = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="block w-full py-2.5 px-2 text-sm text-gray-900 bg-emerald-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600"
      >
        {selectedOption ? selectedOption.label : placeholder}
      </button>
      {isOpen && (
        <ul
          className="absolute left-0 right-0 mt-1 max-h-60 overflow-auto bg-emerald-50 bg-opacity-90 backdrop-blur-md border border-gray-300 rounded-md z-50"
        >
          {sortedOptions.map((option, idx) => (
            <li
              key={idx}
              className="px-2 py-2 text-sm text-gray-900 hover:bg-blue-100 cursor-pointer"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
