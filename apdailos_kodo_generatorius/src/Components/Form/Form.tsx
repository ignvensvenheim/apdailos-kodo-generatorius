import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import FormSelect from "./FormSelect";
// json files in lithuanian
import apdaila from "../../data/lt/apdaila.json";
import pavirsiai from "../../data/lt/pavirsiai.json";
import blizgumas from "../../data/lt/blizgumas.json";
import husPavirsiai from "../../data/lt/husPavirsiai.json";
import husApdaila from "../../data/lt/husApdaila.json";
import ncsApdaila from "../../data/lt/ncsApdaila.json";
//
// json files in english
import pavirsiaiEN from "../../data/en/pavirsiaiEN.json";
import apdailaEN from "../../data/en/apdailaEN.json";
import husApdailaEN from "../../data/en/husApdailaEN.json";
import husPavirsiaiEN from "../../data/en/husPavirsiaiEN.json";
import ncsApdailaEN from "../../data/en/ncsApdailaEN.json";
//
import { copyToClipboard } from "../../helpers/copyToClipboard";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { LangContext } from "../../context/LangContext";
import { handleFormSubmit } from "../../helpers/formSubmitHandler";
import ColorBox from "../ColorBox/ColorBox";

interface FormData {
  Pavirsiai?: string;
  Apdaila?: string;
  Blizgumas?: string;
  Top?: string;
  Bottom?: string;
  Briaunos?: string;
  custom?: string;
}

interface FormProps {
  title: string;
  formType: "standard" | "hus" | "paint";
}

const UnifiedForm: React.FC<FormProps> = ({ title, formType }) => {
  const { register, handleSubmit } = useForm<FormData>();
  const [decorCode, setDecorCode] = useState<string | null>(null);
  const [ncs, setNcs] = useState<string>();

  const onSubmit = (data: FormData) => {
    data.custom ? setNcs(data.custom) : setNcs(data.Apdaila);
    const generatedCode = handleFormSubmit(formType, data);
    setDecorCode(generatedCode || "");
  };

  const context = useContext(LangContext);

  if (!context) {
    throw new Error("LangContext must be used within a LangProvider");
  }

  const { lang } = context;

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>{title}</h3>

        {formType === "standard" && (
          <>
            <FormSelect
              id="pavirsiai"
              label={lang === "lt" ? "Paviršiai" : "Surface"}
              options={lang === "lt" ? pavirsiai : pavirsiaiEN}
              registerOptions={register("Pavirsiai", { required: false })}
            />
            <FormSelect
              id="apdaila"
              label={lang === "lt" ? "Apdaila" : "Decor"}
              options={lang === "lt" ? apdaila : apdailaEN}
              registerOptions={register("Apdaila", { required: false })}
            />
            <FormSelect
              id="blizgumas"
              label={lang === "lt" ? "Blizgumas" : "Glossiness"}
              options={blizgumas}
              registerOptions={register("Blizgumas", { required: false })}
            />
          </>
        )}

        {formType === "hus" && (
          <>
            <FormSelect
              id="apdaila"
              label={lang === "lt" ? "Apdaila" : "Decor"}
              options={lang === "lt" ? husApdaila : husApdailaEN}
              registerOptions={register("Apdaila", { required: true })}
            />
            <FormSelect
              id="top"
              label={lang === "lt" ? "Top paviršius" : "Top surface"}
              options={lang === "lt" ? husPavirsiai : husPavirsiaiEN}
              registerOptions={register("Top", { required: true })}
            />
            <FormSelect
              id="bottom"
              label={lang === "lt" ? "Bottom paviršius" : "Bottom surface"}
              options={lang === "lt" ? husPavirsiai : husPavirsiaiEN}
              registerOptions={register("Bottom", { required: true })}
            />
            <FormSelect
              id="briaunos"
              label={lang === "lt" ? "Briaunos" : "Edges"}
              options={lang === "lt" ? husPavirsiai : husPavirsiaiEN}
              registerOptions={register("Briaunos", { required: true })}
            />
            <p>
              {lang === "lt"
                ? "* pagal nurodyta apdailą, jei nenurodyta tada apdaila gl.5"
                : "* according to decor selected, if not selected then decor is gl.5"}
            </p>
          </>
        )}
        {formType === "paint" && (
          <>
            <FormSelect
              id="pavirsiai"
              label={lang === "lt" ? "Paviršiai" : "Surface"}
              options={lang === "lt" ? pavirsiai : pavirsiaiEN}
              registerOptions={register("Pavirsiai")}
            />
            <FormSelect
              id="apdaila"
              label={lang === "lt" ? "Standartinė apdaila" : "Standard decor"}
              options={lang === "lt" ? ncsApdaila : ncsApdailaEN}
              registerOptions={register("Apdaila")}
            />
            <FormSelect
              registerOptions={register("custom")}
              customColorInput="customColorInput"
              options={[]}
              lang={lang}
            />

            <ColorBox ncsCode={ncs} />
          </>
        )}
        <input
          type="submit"
          value={
            lang === "lt" ? "Generuoti apdailos kodą" : "Generate decor code"
          }
        />
        <button
          className={decorCode ? "btnCopyActive" : "btnCopyDisabled"}
          type="button"
          onClick={() => {
            copyToClipboard(decorCode || "");
            if (lang === "lt") toast("Kodas nukopijuotas");
            if (lang === "en") toast("Code copied");
          }}
        >
          {lang === "lt" ? "Kopijuoti kodą" : "Copy decor code"}
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
        <p className="decorCode">
          {lang === "lt" ? "Pasirinkite savybes" : "Select properties"}
        </p>
      )}
    </div>
  );
};

export default UnifiedForm;
