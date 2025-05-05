import React, { SetStateAction } from "react";
import "./form.css";
import { UseFormRegisterReturn } from "react-hook-form";
// import { useContextData } from "../../context/Context";

interface Option {
  bold?: number | undefined;
  key: string;
  value: string;
  image?: string;
}

interface FormSelectProps {
  setDecorCode?: React.Dispatch<SetStateAction<string | null>>;
  id?: string;
  label?: string;
  options: Option[];
  registerOptions?: UseFormRegisterReturn;
  customColorInput?: string;
  lang?: string;
  onSelectChange?: (id: string, value: string) => void;
}

const FormSelect: React.FC<FormSelectProps> = ({
  id,
  label,
  options,
  registerOptions,
  customColorInput,
  lang,
  onSelectChange,
}) => {
  // const { setInputValue } = useContextData();

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
            onChange={(e) => {
              console.log(id);
              if (onSelectChange && id) {
                onSelectChange(id, e.target.value);
              }
            }}
          >
            <option value="null" disabled selected></option>
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
