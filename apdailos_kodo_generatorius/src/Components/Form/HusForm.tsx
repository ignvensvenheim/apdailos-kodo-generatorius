import React, { useState } from "react";
import FormSelect from "./FormSelect";
import { useForm } from "react-hook-form";
import { copyToClipboard } from "../../helpers/copyToClipboard";
import husApdaila from "../../data/husApdaila.json";
import husPavirsiai from "../../data/husPavirsiai.json";
import { buildHusDecorCode } from "../../helpers/buildHusDecorCode";

interface FormData {
  Apdaila: string;
  Top: string;
  Bottom: string;
  Briaunos: string;
}

interface FormProps {
  title: string;
}

const HusForm: React.FC<FormProps> = ({ title }) => {
  const { register, handleSubmit } = useForm<FormData>();
  const [decorHusCode, setDecorHusCode] = useState<string | null>(null);

  const onSubmit = (data: FormData) => {
    const generatedCode = buildHusDecorCode(data);
    setDecorHusCode(generatedCode);
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>{title}</h3>
        <FormSelect
          id="apdaila"
          label="Apdaila"
          options={husApdaila}
          registerOptions={register("Apdaila", { required: true })}
        />
        <FormSelect
          id="top"
          label="Top paviršius"
          options={husPavirsiai}
          registerOptions={register("Top", { required: true })}
        />
        <FormSelect
          id="bottom"
          label="Bottom paviršius"
          options={husPavirsiai}
          registerOptions={register("Bottom", { required: true })}
        />
        <FormSelect
          id="briaunos"
          label="Briaunos"
          options={husPavirsiai}
          registerOptions={register("Briaunos", { required: true })}
        />
        <input type="submit" value="Generuoti apdailos kodą" />
        <button onClick={() => copyToClipboard(decorHusCode)}>
          Kopijuoti kodą
        </button>
      </form>
      {decorHusCode ? (
        <p className="decorCode">{decorHusCode}</p>
      ) : (
        <p className="decorCode">Pasirinkite savybes</p>
      )}
    </div>
  );
};

export default HusForm;
