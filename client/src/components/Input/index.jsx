import React from 'react';
import StyInput from './StyInput';
;


function Input(props) {

  const {name, value, type, label, placeholder, onChange, error} = props;

  return (
    <StyInput>
        <label className='input__label' htmlFor={name}>
            {label}
        </label>
        <input className='input' onChange={onChange} type={type} id={name} name={name} value={value} placeholder={placeholder}/>
        {error && <div className="input__error">{error}</div>}
    </StyInput>
  );
}

export default Input;
