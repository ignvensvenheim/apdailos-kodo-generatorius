import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormSelect from "./FormSelect";
import pavirsiai from "../../data/pavirsiai.json";
import apdaila from "../../data/apdaila.json";
import blizgumas from "../../data/blizgumas.json";
import { copyToClipboard } from "../../helpers/copyToClipboard";
import { buildDecorCode } from "../../helpers/buildDecorCode";

interface FormData {
  Pavirsiai: string;
  Apdaila: string;
  Blizgumas: string;
  decorCode?: string;
}

const MyForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [decorCode, setDecorCode] = useState<string | null>(null);

  const onSubmit = (data: FormData) => {
    const generatedCode = buildDecorCode(data);
    setDecorCode(generatedCode);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormSelect
          id="pavirsiai"
          label="Paviršiai"
          options={pavirsiai}
          registerOptions={register("Pavirsiai", { required: true })}
        />
        <FormSelect
          id="apdaila"
          label="Apdaila"
          options={apdaila}
          registerOptions={register("Apdaila", { required: true })}
        />
        <FormSelect
          id="blizgumas"
          label="Blizgumas"
          options={blizgumas}
          registerOptions={register("Blizgumas", { required: true })}
        />
        <input type="submit" value="Generuoti apdailos kodą" />
      </form>
      <p>{decorCode}</p>
      <button onClick={() => copyToClipboard(decorCode)}>Kopijuoti kodą</button>
    </>
  );
};

export default MyForm;
