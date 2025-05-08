import React, { SetStateAction } from "react";
import "./form.css";
import { UseFormRegisterReturn } from "react-hook-form";
import { useContextData } from "../../context/Context";

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
  const { setStdImage } = useContextData();

  const setImage = (id: string) => {
    const currentImage = options.find((obj) => obj.key === id);

    if (currentImage?.image) setStdImage(currentImage?.image);
  };

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

              setImage(e.target.value);
            }}
          >
            <option value="default" disabled>
              -
            </option>
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
