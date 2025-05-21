import "./form.css";
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
import mediena from "../../data/lt/data/mediena.json";
import medienaList from "../../data/lt/data/medienaList.json";
//
// json files in english
import pavirsiaiEN from "../../data/en/data/pavirsiaiEN.json";
import apdailaEN from "../../data/en/data/apdailaEN.json";
import husApdailaEN from "../../data/en/data/husApdailaEN.json";
import husPavirsiaiEN from "../../data/en/data/husPavirsiaiEN.json";
import ncsApdailaEN from "../../data/en/data/ncsApdailaEN.json";
import medienaEN from "../../data/en/data/medienaEN.json";
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
  Mediena?: string;
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
    mediena: "null",
    custom: "",
  });

  // context

  const { lang, stdImage, setStdImage, setShowStdSurfWarning } =
    useContextData();

  // image change

  useEffect(() => {
    const imageData = medienaList.find(
      (el) =>
        el.value === selectedValues.mediena && el.key === selectedValues.apdaila
    );

    const image = imageData?.image || "";

    setStdImage(image);
  }, [selectedValues]);

  // on submit to generate decor code

  const onSubmit = (data: FormData) => {
    data.custom ? setNcs(data.custom) : setNcs(data.Apdaila);
    const generatedCode = handleFormSubmit(formType, data);
    setDecorCode(generatedCode || "");
  };

  // check if selected values has All surfaces selected to throw info message

  const handleSelectChange = (id: string, value: string) => {
    setSelectedValues((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (value === "A") {
      setShowStdSurfWarning(true);
    }
  };

  // watch values to determine whether to let generate code or more fields selected needed

  useEffect(() => {
    let isFormValid = false;

    if (formType === "standard") {
      isFormValid =
        selectedValues["apdaila"] !== "null" &&
        selectedValues["pavirsiai"] !== "null" &&
        selectedValues["blizgumas"] !== "null";
    } else if (formType === "hus") {
      isFormValid =
        !!selectedValues["apdaila"] &&
        selectedValues["top"] !== "null" &&
        selectedValues["bottom"] !== "null" &&
        selectedValues["briaunos"] !== "null";
    } else if (formType === "paint") {
      const pavirsiaiSelected = selectedValues["pavirsiai"] !== "null";
      const apdailaSelected = selectedValues["apdaila"] !== "null";
      const customFilled = selectedValues["custom"]?.trim() !== "";

      isFormValid = pavirsiaiSelected && (apdailaSelected || customFilled);
    }

    setGenerateCodeDisabled(!isFormValid);
  }, [selectedValues, formType]);

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>{title}</h3>
        {/* Form type according to required data */}
        {formType === "standard" && (
          <section>
            <FormSelect
              onSelectChange={handleSelectChange}
              setDecorCode={setDecorCode}
              id="pavirsiai"
              label={lang === "lt" ? "Paviršiai" : "Surface"}
              options={lang === "lt" ? pavirsiai : pavirsiaiEN}
              registerOptions={register("Pavirsiai", { required: false })}
            />
            <section className="test">
              <div>
                <FormSelect
                  onSelectChange={handleSelectChange}
                  id="apdaila"
                  label={lang === "lt" ? "Apdaila" : "Decor"}
                  options={lang === "lt" ? apdaila : apdailaEN}
                  registerOptions={register("Apdaila", { required: false })}
                />{" "}
              </div>
              <div>
                <FormSelect
                  onSelectChange={handleSelectChange}
                  id="mediena"
                  label={lang === "lt" ? "Mediena" : "Wood"}
                  options={lang === "lt" ? mediena : medienaEN}
                  registerOptions={register("Mediena", { required: false })}
                />
              </div>
            </section>
            <FormSelect
              onSelectChange={handleSelectChange}
              id="blizgumas"
              label={lang === "lt" ? "Blizgumas" : "Glossiness"}
              options={blizgumas}
              registerOptions={register("Blizgumas", { required: false })}
            />
            <StdImageBox image={stdImage} />
          </section>
        )}
        {formType === "paint" && (
          <section>
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
              id="custom"
              onSelectChange={handleSelectChange}
              registerOptions={register("custom")}
              customColorInput="customColorInput"
              options={[]}
              lang={lang}
            />
            <ColorBox ncsCode={ncs} />
          </section>
        )}
        {formType === "hus" && (
          <section>
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
          </section>
        )}
        {/* ============================================== */}
        {/* Surface dropdown select */}
        <section className="copyGenerateButtons">
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
        </section>
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
      )}
      {/* ============================================== */}

      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
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
