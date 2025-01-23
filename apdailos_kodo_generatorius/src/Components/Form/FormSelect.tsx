import React from "react";
import "./form.css";
import { UseFormRegisterReturn } from "react-hook-form";
interface Option {
  key: string;
  value: string;
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
        {options.map((option) => (
          <option key={option.key} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>
    </>
  );
};

export default FormSelect;
