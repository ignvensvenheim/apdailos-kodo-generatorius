import React, { useContext } from "react";
import "./form.css";
import { UseFormRegisterReturn } from "react-hook-form";
import { DefaultInputValContext } from "../../context/DefaultInputValContext";

interface Option {
  bold?: number | undefined;
  key: string;
  value: string;
}

interface FormSelectProps {
  id?: string;
  label?: string;
  options: Option[];
  registerOptions?: UseFormRegisterReturn;
  customColorInput?: string;
  lang?: string;
}

const FormSelect: React.FC<FormSelectProps> = ({
  id,
  label,
  options,
  registerOptions,
  customColorInput,
  lang,
}) => {
  const context = useContext(DefaultInputValContext);

  if (!context) {
    throw new Error("LangContext must be used within a LangProvider");
  }

  const { setDefaultInputVal } = context;

  return (
    <>
      {customColorInput ? (
        <>
          <label htmlFor="custom">
            {lang === "lt"
              ? "Nestandartinis apdailos kodas"
              : "Custom color code"}
          </label>
          <input id="custom" type="text" {...registerOptions} maxLength={10} />
        </>
      ) : (
        <>
          <label htmlFor={id}>{label}</label>
          <select
            id={id}
            {...registerOptions}
            onChange={(e) => setDefaultInputVal(e.target.value)}
          >
            {options.map((option, index) => (
              <option
                key={index}
                value={option.key}
                style={{ fontWeight: option.bold }}
              >
                {option.value}
              </option>
            ))}
          </select>
        </>
      )}
    </>
  );
};

export default FormSelect;
