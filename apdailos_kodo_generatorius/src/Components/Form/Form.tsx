import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormSelect from "./FormSelect";
import pavirsiai from "../../data/pavirsiai.json";
import apdaila from "../../data/apdaila.json";
import blizgumas from "../../data/blizgumas.json";
import husPavirsiai from "../../data/husPavirsiai.json";
import husApdaila from "../../data/husApdaila.json";
import ncsApdaila from "../../data/ncsApdaila.json";
import { copyToClipboard } from "../../helpers/copyToClipboard";
import { buildStdDecorCode } from "../../helpers/buildStdDecorCode";
import { buildHusDecorCode } from "../../helpers/buildHusDecorCode";
import { buildPaintDecorCode } from "../../helpers/buildPaintDecorCode";
import { Bounce, ToastContainer } from "react-toastify";

interface FormData {
  Pavirsiai?: string;
  Apdaila?: string;
  Blizgumas?: string;
  Top?: string;
  Bottom?: string;
  Briaunos?: string;
}

interface FormProps {
  title: string;
  formType: "standard" | "hus" | "paint";
}

const UnifiedForm: React.FC<FormProps> = ({ title, formType }) => {
  const { register, handleSubmit } = useForm<FormData>();
  const [decorCode, setDecorCode] = useState<string | null>(null);

  const onSubmit = (data: FormData) => {
    let generatedCode: string | undefined;

    if (formType === "standard") {
      generatedCode = buildStdDecorCode({
        Pavirsiai: data.Pavirsiai || "",
        Apdaila: data.Apdaila || "",
        Blizgumas: data.Blizgumas || "",
      });
    } else if (formType === "hus") {
      generatedCode = buildHusDecorCode({
        Apdaila: data.Apdaila || "",
        Top: data.Top || "",
        Bottom: data.Bottom || "",
        Briaunos: data.Briaunos || "",
      });
    } else if (formType === "paint") {
      generatedCode = buildPaintDecorCode({
        Pavirsiai: data.Pavirsiai || "",
        Apdaila: data.Apdaila || "",
      });
    }

    setDecorCode(generatedCode || "");
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>{title}</h3>

        {formType === "standard" && (
          <>
            <FormSelect
              id="pavirsiai"
              label="Paviršiai"
              options={pavirsiai}
              registerOptions={register("Pavirsiai", { required: false })}
            />
            <FormSelect
              id="apdaila"
              label="Apdaila"
              options={apdaila}
              registerOptions={register("Apdaila", { required: false })}
            />
            <FormSelect
              id="blizgumas"
              label="Blizgumas"
              options={blizgumas}
              registerOptions={register("Blizgumas", { required: false })}
            />
          </>
        )}

        {formType === "hus" && (
          <>
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
            <p>* pagal nurodyta apdailą, jei nenurodyta tada apdaila gl.5</p>
          </>
        )}

        {formType === "paint" && (
          <>
            <FormSelect
              id="pavirsiai"
              label="Paviršiai"
              options={pavirsiai}
              registerOptions={register("Pavirsiai", { required: true })}
            />
            <FormSelect
              id="apdaila"
              label="Apdaila"
              options={ncsApdaila}
              registerOptions={register("Apdaila", { required: true })}
            />
          </>
        )}
        <input type="submit" value="Generuoti apdailos kodą" />
        <button
          type="button"
          onClick={() => {
            copyToClipboard(decorCode || "");
          }}
        >
          Kopijuoti kodą
        </button>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </form>

      {decorCode ? (
        <p className="decorCode">{decorCode}</p>
      ) : (
        <p className="decorCode">Pasirinkite savybes</p>
      )}
    </div>
  );
};

export default UnifiedForm;
