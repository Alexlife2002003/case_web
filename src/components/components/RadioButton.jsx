
import React from 'react';
import "./style.css"
const RadioButton = ({ id, value, label, onChange }) => {
  return (
    <div>
      <input
        type="radio"
        id={id}
        value={value}
        onChange={onChange}
      />
      <label className="RB-label" htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
