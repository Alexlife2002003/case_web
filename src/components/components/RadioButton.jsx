
import React from 'react';
import "./style.css"
const RadioButton = ({ id, name, value, label, onChange }) => {
  return (
    <div>
      <input
        type="radio"
        id={id}
        name={name}
        value={label}
        onChange={onChange}
      />
      <label className="RB-label" htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
