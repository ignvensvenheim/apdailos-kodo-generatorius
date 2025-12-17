import React, { SetStateAction } from "react";
import "./form.css";
import { UseFormRegisterReturn } from "react-hook-form";

interface Option {
  bold?: number | undefined;
  bg?: string | undefined;
  key: string;
  value: string;
  image?: string;
  mediena?: string;
  apdaila?: string;
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
  return (
    <>
      {customColorInput ? (
        <>
          <label htmlFor="custom">
            {lang === "lt"
              ? "Nestandartinis apdailos kodas"
              : "Custom color code"}
          </label>
          <input
            id="custom"
            type="text"
            {...registerOptions}
            maxLength={10}
            onChange={(e) => {
              if (onSelectChange && id) {
                onSelectChange(id, e.target.value);
              }
            }}
          />
        </>
      ) : (
        <>
          <label htmlFor={id}>{label}</label>
          <select
            defaultValue={"default"}
            id={id}
            {...registerOptions}
            onChange={(e) => {
              if (onSelectChange && id) {
                onSelectChange(id, e.target.value);
              }
            }}
          >
            <option value="default" disabled>
              -
            </option>
            {options.map((option, index) => (
              <option
                className={option.bg}
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
