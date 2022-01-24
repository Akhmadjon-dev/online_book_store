import React from 'react';

import Sty from './StyBtn';



function Button({ title, onClick, type, disabled, className, radius, color, height }) {

  return (
    <Sty
        onClick={onClick} 
        disabled={disabled ? disabled : false } 
        type={type ? type : 'button'}
        className={className}
        radius={radius}
        height={height}
        color={color}
        >
            {title}
    </Sty>
  );
}

export default Button;
