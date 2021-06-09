import React from "react";
import "./input.scss";

export const Input = ({ id, label, value, type, onChange }) => {
  return (
    <div className="inputLabel">
      <div className="label">
        <label>{label}</label>
      </div>
      <input
        required
        onChange={({ target }) => onChange(id, target.value)}
        value={value}
        type={type}
      />
    </div>
  );
};
