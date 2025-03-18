import React from 'react';
import { Button2 } from './Button2';

const GenericMenu = ({ items, activeKey, onItemClick }) => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-around py-5">
        {items.map((item) => (
          <div key={item.key} className="relative w-[160px] h-12 group mb-4">
            <Button2
              active={activeKey === item.key}
              clickHandler={() => onItemClick(item)}
            >
              {item.label}
            </Button2>
            {item.tooltip && (
              <div 
                className="absolute -top-10 right-0 bg-gray-200/80 text-xs p-1 rounded shadow opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ transitionDelay: '1s' }}
              >
                {item.tooltip}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenericMenu;
