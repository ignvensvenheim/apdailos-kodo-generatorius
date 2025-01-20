import React from "react";
import "./form.css";
import { UseFormRegisterReturn } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps {
  id: string;
  label: string;
  options: Option[];
  registerOptions: UseFormRegisterReturn;
}

const FormSelect: React.FC<FormSelectProps> = ({
  id,
  label,
  options,
  registerOptions,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id} {...registerOptions}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default FormSelect;
