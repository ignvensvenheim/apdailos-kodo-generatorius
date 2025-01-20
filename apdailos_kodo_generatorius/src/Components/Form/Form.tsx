import React from "react";
import { useForm } from "react-hook-form";
import FormSelect from "./FormSelect";
import pavirsiai from "../../data/pavirsiai.json";
import apdaila from "../../data/apdaila.json";
import blizgumas from "../../data/blizgumas.json";

interface FormData {
  Paviršiai: string;
  "Apdailos kodas": string;
  "Paviršiaus blizgumas": string;
}

const MyForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormSelect
        id="pavirsiai"
        label="Paviršiai"
        options={pavirsiai}
        registerOptions={register("Paviršiai", { required: true })}
      />
      <FormSelect
        id="apdailosKodas"
        label="Apdailos kodas"
        options={apdaila}
        registerOptions={register("Apdailos kodas", { required: true })}
      />
      <FormSelect
        id="blizgumas"
        label="Paviršiaus blizgumas"
        options={blizgumas}
        registerOptions={register("Paviršiaus blizgumas", { required: true })}
      />
      <button type="submit">Generuoti apdailos kodą</button>
    </form>
  );
};

export default MyForm;
