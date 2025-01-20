import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormSelect from "./FormSelect";
import pavirsiai from "../../data/pavirsiai.json";
import apdaila from "../../data/apdaila.json";
import blizgumas from "../../data/blizgumas.json";

interface FormData {
  Pavirsiai: string;
  Apdaila: string;
  Blizgumas: string;
  decorCode?: string;
}

const MyForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [decorCode, setDecorCode] = useState<string | null>(null);

  const copyToClipboard = () => {
    if (decorCode) {
      navigator.clipboard.writeText(decorCode);
    }
  };

  const buildDecorCode = (data: {
    Pavirsiai: string;
    Apdaila: string;
    Blizgumas: string;
  }) => {
    const paviršiai =
      data.Pavirsiai && data.Pavirsiai !== "null"
        ? data.Pavirsiai.split(" - ")[0]
        : "";
    const apdaila =
      data.Apdaila && data.Apdaila !== "null"
        ? data.Apdaila.split(" - ")[0]
        : "";
    const blizgumas =
      data.Blizgumas && data.Blizgumas !== "null" ? data.Blizgumas : "";

    let generatedCode = "";

    if (paviršiai && apdaila) {
      generatedCode = `${paviršiai}=${apdaila} ${blizgumas}`;
    } else if (blizgumas) {
      generatedCode = `${blizgumas}`;
    }

    setDecorCode(generatedCode);
  };

  const onSubmit = (data: FormData) => {
    buildDecorCode(data);
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
      <button onClick={copyToClipboard}>Kopijuoti kodą</button>
    </>
  );
};

export default MyForm;
