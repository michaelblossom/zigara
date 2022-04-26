import React, { useState, useRef } from "react";
import { BsEye } from "react-icons/bs";
const Input = ({
  type,
  placeholder,
  error,
  onChange,
  onClick,
  name,
  icon,
  onPasswordToggle,
  value,
  className,
}) => {
  return (
    <div className="border  px-1 py-2 border-gray-400 flex items-center justify-end rounded">
      <input
        type={type}
        placeholder={placeholder}
        error={error}
        onChange={onChange}
        name={name}
        onClick={onClick}
        value={value}
        className={className}
      />
      {icon && (
        <span
          className="px-4 flex items-center justify-center"
          onClick={onPasswordToggle}
        >
          {icon}
        </span>
      )}
    </div>
  );
};

export default Input;
