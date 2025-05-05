import React, { SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormSelect from "./FormSelect";
// json files in lithuanian
import apdaila from "../../data/lt/data/apdaila.json";
import pavirsiai from "../../data/lt/data/pavirsiai.json";
import blizgumas from "../../data/lt/data/blizgumas.json";
import husPavirsiai from "../../data/lt/data/husPavirsiai.json";
import husApdaila from "../../data/lt/data/husApdaila.json";
import ncsApdaila from "../../data/lt/data/ncsApdaila.json";
//
// json files in english
import pavirsiaiEN from "../../data/en/data/pavirsiaiEN.json";
import apdailaEN from "../../data/en/data/apdailaEN.json";
import husApdailaEN from "../../data/en/data/husApdailaEN.json";
import husPavirsiaiEN from "../../data/en/data/husPavirsiaiEN.json";
import ncsApdailaEN from "../../data/en/data/ncsApdailaEN.json";
//
import { copyToClipboard } from "../../helpers/copyToClipboard";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { handleFormSubmit } from "../../helpers/formSubmitHandler";
import ColorBox from "../ColorBox/ColorBox";
import StdImageBox from "../StdImageBox/StdImageBox";
// Context
import { useContextData } from "../../context/Context";

interface FormData {
  setDecorCode?: React.Dispatch<SetStateAction<string | null>>;
  Pavirsiai?: string;
  Apdaila?: string;
  Blizgumas?: string;
  Top?: string;
  Bottom?: string;
  Briaunos?: string;
  custom?: string;
  onSelectChange: (id: string, value: string) => void;
}

interface FormProps {
  title: string;
  formType: "standard" | "hus" | "paint";
}

const UnifiedForm: React.FC<FormProps> = ({ title, formType }) => {
  const { register, handleSubmit } = useForm<FormData>();
  const [decorCode, setDecorCode] = useState<string | null>(null);
  const [ncs, setNcs] = useState<string>();
  const [generateCodeDisabled, setGenerateCodeDisabled] =
    useState<boolean>(true);
  const [selectedValues, setSelectedValues] = useState({
    apdaila: "null",
    pavirsiai: "null",
    blizgumas: "null",
    top: "null",
    bottom: "null",
    briaunos: "null",
  });

  const onSubmit = (data: FormData) => {
    data.custom ? setNcs(data.custom) : setNcs(data.Apdaila);
    const generatedCode = handleFormSubmit(formType, data);
    setDecorCode(generatedCode || "");
  };

  const { lang, stdImage, setShowStdSurfWarning } = useContextData();

  const handleSelectChange = (id: string, value: string) => {
    setSelectedValues((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (value === "A") {
      setShowStdSurfWarning(true);
    }
  };

  useEffect(() => {
    let requiredFields: string[] = [];

    if (formType === "standard") {
      requiredFields = ["apdaila", "pavirsiai", "blizgumas"];
    } else if (formType === "paint") {
      requiredFields = ["apdaila", "pavirsiai"];
    } else if (formType === "hus") {
      requiredFields = ["apdaila", "top", "bottom", "briaunos"];
    }

    const hasUnselected = requiredFields.some(
      (field) => selectedValues[field as keyof typeof selectedValues] === "null"
    );

    setGenerateCodeDisabled(hasUnselected);
  }, [selectedValues, formType, decorCode]);

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>{title}</h3>
        {/* Form type according to required data */}
        {formType === "standard" && (
          <>
            <FormSelect
              onSelectChange={handleSelectChange}
              setDecorCode={setDecorCode}
              id="pavirsiai"
              label={lang === "lt" ? "Paviršiai" : "Surface"}
              options={lang === "lt" ? pavirsiai : pavirsiaiEN}
              registerOptions={register("Pavirsiai", { required: false })}
            />
            <FormSelect
              onSelectChange={handleSelectChange}
              id="apdaila"
              label={lang === "lt" ? "Apdaila" : "Decor"}
              options={lang === "lt" ? apdaila : apdailaEN}
              registerOptions={register("Apdaila", { required: false })}
            />
            <FormSelect
              onSelectChange={handleSelectChange}
              id="blizgumas"
              label={lang === "lt" ? "Blizgumas" : "Glossiness"}
              options={blizgumas}
              registerOptions={register("Blizgumas", { required: false })}
            />
            {stdImage ? <StdImageBox image={stdImage} /> : ""}
          </>
        )}
        {formType === "paint" && (
          <>
            <FormSelect
              onSelectChange={handleSelectChange}
              setDecorCode={setDecorCode}
              id="pavirsiai"
              label={lang === "lt" ? "Paviršiai" : "Surface"}
              options={lang === "lt" ? pavirsiai : pavirsiaiEN}
              registerOptions={register("Pavirsiai")}
            />
            <FormSelect
              onSelectChange={handleSelectChange}
              id="apdaila"
              label={lang === "lt" ? "Standartinė apdaila" : "Standard decor"}
              options={lang === "lt" ? ncsApdaila : ncsApdailaEN}
              registerOptions={register("Apdaila")}
            />
            <FormSelect
              onSelectChange={handleSelectChange}
              registerOptions={register("custom")}
              customColorInput="customColorInput"
              options={[]}
              lang={lang}
            />
            <ColorBox ncsCode={ncs} />
          </>
        )}
        {formType === "hus" && (
          <>
            <FormSelect
              onSelectChange={handleSelectChange}
              id="apdaila"
              label={lang === "lt" ? "Apdaila" : "Decor"}
              options={lang === "lt" ? husApdaila : husApdailaEN}
              registerOptions={register("Apdaila", { required: true })}
            />
            <FormSelect
              onSelectChange={handleSelectChange}
              id="top"
              label={lang === "lt" ? "Top paviršius" : "Top surface"}
              options={lang === "lt" ? husPavirsiai : husPavirsiaiEN}
              registerOptions={register("Top", { required: true })}
            />
            <FormSelect
              onSelectChange={handleSelectChange}
              id="bottom"
              label={lang === "lt" ? "Bottom paviršius" : "Bottom surface"}
              options={lang === "lt" ? husPavirsiai : husPavirsiaiEN}
              registerOptions={register("Bottom", { required: true })}
            />
            <FormSelect
              onSelectChange={handleSelectChange}
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
        {/* ============================================== */}
        {/* Surface dropdown select */}
        <input
          className={
            !generateCodeDisabled ? "btnCopyActive" : "btnCopyDisabled"
          }
          type="submit"
          value={
            lang === "lt" ? "Generuoti apdailos kodą" : "Generate decor code"
          }
        />
        {/* ============================================== */}
        {/* Decor code copy button */}
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
        {/* ============================================== */}
      </form>
      {/* ============================================== */}
      {/* Generated decor code field */}
      {decorCode ? (
        <p className="decorCode">{decorCode}</p>
      ) : (
        <p className="decorCode">
          {lang === "lt" ? "Pasirinkite savybes" : "Select properties"}
        </p>
      )}{" "}
      {/* ============================================== */}
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
    </div>
  );
};

export default UnifiedForm;
