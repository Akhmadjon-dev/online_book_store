import React from 'react';

import Sty from './StyBtn';



function Button({ title, onClick, type, disabled, className }) {

  return (
    <Sty
        onClick={onClick} 
        disabled={disabled ? disabled : false } 
        type={type ? type : 'button'}
        className={className}
        >
            {title}
    </Sty>
  );
}

export default Button;
