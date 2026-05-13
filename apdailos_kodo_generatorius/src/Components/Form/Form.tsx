import "./form.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import FormSelect from "./FormSelect";
import apdaila from "../../data/shared/options/apdaila.json";
import blizgumas from "../../data/shared/options/blizgumas.json";
import husApdaila from "../../data/shared/options/husApdaila.json";
import husPavirsiai from "../../data/shared/options/husPavirsiai.json";
import mediena from "../../data/shared/options/mediena.json";
import medienaImages from "../../data/shared/options/medienaImages.json";
import ncsApdaila from "../../data/shared/options/ncsApdaila.json";
import pavirsiai from "../../data/shared/options/pavirsiai.json";
import { localizeOptions } from "../../data/shared/localizeData";
import { copyToClipboard } from "../../helpers/copyToClipboard";
import { resolveMedienaImage } from "../../helpers/resolveMedienaImage";
import { toast } from "react-toastify";
import { handleFormSubmit } from "../../helpers/formSubmitHandler";
import ColorBox from "../ColorBox/ColorBox";
import { useContextData } from "../../context/Context";

interface FormData {
  Pavirsiai?: string;
  Apdaila?: string;
  Blizgumas?: string;
  Mediena?: string;
  Top?: string;
  Bottom?: string;
  Briaunos?: string;
  custom?: string;
}

interface FormProps {
  title: string;
  formType: "standard" | "hus" | "paint";
}

function UnifiedForm({ title, formType }: FormProps) {
  const { register, handleSubmit } = useForm<FormData>();
  const { t, i18n } = useTranslation();
  const { setStdImage, setShowStdSurfWarning } = useContextData();
  const [decorCode, setDecorCode] = useState<string | null>(null);
  const [useCustomColorCode, setUseCustomColorCode] = useState(false);
  const [hasChangedAfterGeneration, setHasChangedAfterGeneration] =
    useState(false);
  const [generateCodeDisabled, setGenerateCodeDisabled] = useState(true);
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

  const isLt = (i18n.resolvedLanguage ?? i18n.language).startsWith("lt");
  const language = isLt ? "lt" : "en";
  const localizedPavirsiai = localizeOptions(pavirsiai, language);
  const localizedApdaila = localizeOptions(apdaila, language);
  const localizedBlizgumas = localizeOptions(blizgumas, language);
  const localizedHusApdaila = localizeOptions(husApdaila, language);
  const localizedHusPavirsiai = localizeOptions(husPavirsiai, language);
  const localizedMediena = localizeOptions(mediena, language);
  const localizedNcsApdaila = localizeOptions(ncsApdaila, language);
  const availableWoodKeysForDecor =
    selectedValues.apdaila !== "null"
      ? new Set(
          medienaImages
            .filter((entry) => entry.decorKey === selectedValues.apdaila)
            .map((entry) => entry.woodKey),
        )
      : null;
  const filteredLocalizedMediena =
    availableWoodKeysForDecor === null
      ? localizedMediena
      : localizedMediena.filter((option) =>
          availableWoodKeysForDecor.has(option.key),
        );
  const woodSelectDisabled =
    selectedValues.apdaila !== "null" && filteredLocalizedMediena.length === 0;

  const standardPreviewMatch = medienaImages.find((el) => {
    return (
      el.woodKey === selectedValues.mediena &&
      el.decorKey === selectedValues.apdaila
    );
  });

  const standardPreviewImage = resolveMedienaImage(standardPreviewMatch?.image);
  const showMissingStandardPreview =
    selectedValues.apdaila !== "null" &&
    selectedValues.mediena !== "null" &&
    !standardPreviewMatch;
  const standardPreviewFileName = standardPreviewMatch?.image
    ?.split("/")
    .pop();

  useEffect(() => {
    setStdImage(standardPreviewImage ?? "");
  }, [standardPreviewImage, setStdImage]);

  useEffect(() => {
    if (
      formType !== "standard" ||
      selectedValues.mediena === "null" ||
      availableWoodKeysForDecor === null ||
      availableWoodKeysForDecor.has(selectedValues.mediena)
    ) {
      return;
    }

    setSelectedValues((prev) => ({ ...prev, mediena: "null" }));

    if (decorCode !== null) {
      setDecorCode(null);
      setHasChangedAfterGeneration(true);
    }
  }, [
    availableWoodKeysForDecor,
    decorCode,
    formType,
    selectedValues.mediena,
  ]);

  const standardPreviewCode =
    selectedValues.apdaila !== "null" ? selectedValues.apdaila : undefined;
  const paintPreviewCode =
    useCustomColorCode && selectedValues.custom.trim() !== ""
      ? selectedValues.custom
      : selectedValues.apdaila !== "null"
        ? selectedValues.apdaila
        : undefined;

  const onSubmit = (data: FormData) => {
    const generatedCode = handleFormSubmit(formType, data);
    setDecorCode(generatedCode || "");
  };

  const handleSelectChange = (id: string, value: string) => {
    setSelectedValues((prev) => {
      const updated = { ...prev, [id]: value };
      if (decorCode !== null) {
        setDecorCode(null);
        setHasChangedAfterGeneration(true);
      }
      return updated;
    });

    if (value === "A") {
      setShowStdSurfWarning(true);
    }
  };

  const handleCustomColorCodeToggle = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const shouldUseCustomColorCode = event.target.checked;
    setUseCustomColorCode(shouldUseCustomColorCode);

    if (!shouldUseCustomColorCode) {
      setSelectedValues((prev) => ({ ...prev, custom: "" }));
    }

    if (decorCode !== null) {
      setDecorCode(null);
      setHasChangedAfterGeneration(true);
    }
  };

  useEffect(() => {
    let isFormValid = false;

    if (formType === "standard") {
      isFormValid =
        selectedValues.apdaila !== "null" &&
        selectedValues.pavirsiai !== "null" &&
        selectedValues.blizgumas !== "null";
    } else if (formType === "hus") {
      isFormValid =
        selectedValues.apdaila !== "null" &&
        selectedValues.top !== "null" &&
        selectedValues.bottom !== "null" &&
        selectedValues.briaunos !== "null";
    } else if (formType === "paint") {
      const pavirsiaiSelected = selectedValues.pavirsiai !== "null";
      const apdailaSelected = selectedValues.apdaila !== "null";
      const customFilled =
        useCustomColorCode && selectedValues.custom.trim() !== "";

      isFormValid = pavirsiaiSelected && (apdailaSelected || customFilled);
    }

    setGenerateCodeDisabled(!isFormValid);
  }, [selectedValues, formType, useCustomColorCode]);

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="page__title">{title}</h3>
        {formType === "standard" && (
          <section>
            <section className="formRow">
              <div className="formField">
                <FormSelect
                  onSelectChange={handleSelectChange}
                  setDecorCode={setDecorCode}
                  id="pavirsiai"
                  label={t("fields.surface")}
                  options={localizedPavirsiai}
                  currentValue={
                    selectedValues.pavirsiai === "null"
                      ? "default"
                      : selectedValues.pavirsiai
                  }
                  registerOptions={register("Pavirsiai", { required: false })}
                />
              </div>
              <div className="formField">
                <FormSelect
                  onSelectChange={handleSelectChange}
                  id="apdaila"
                  label={t("fields.decor")}
                  options={localizedApdaila}
                  currentValue={
                    selectedValues.apdaila === "null"
                      ? "default"
                      : selectedValues.apdaila
                  }
                  registerOptions={register("Apdaila", { required: false })}
                />
              </div>
            </section>
            <section className="formRow formRow--split">
              <div className="formField">
                <FormSelect
                  onSelectChange={handleSelectChange}
                  id="blizgumas"
                  label={t("fields.glossiness")}
                  options={localizedBlizgumas}
                  currentValue={
                    selectedValues.blizgumas === "null"
                      ? "default"
                      : selectedValues.blizgumas
                  }
                  registerOptions={register("Blizgumas", { required: false })}
                />
              </div>
              <div className="formField">
                <FormSelect
                  onSelectChange={handleSelectChange}
                  id="mediena"
                  label={t("fields.wood")}
                  options={filteredLocalizedMediena}
                  disabled={woodSelectDisabled}
                  currentValue={
                    selectedValues.mediena === "null"
                      ? "default"
                      : selectedValues.mediena
                  }
                  registerOptions={register("Mediena", { required: false })}
                />
              </div>
            </section>
            <ColorBox
              colorCode={standardPreviewCode}
              imageUrl={standardPreviewImage}
              showColorFallback={false}
              noImageMessage={
                showMissingStandardPreview
                  ? t("preview.noImageAvailable")
                  : undefined
              }
            />
            {standardPreviewImage ? (
              <a
                className="formDownloadLink btnCopyActive"
                href={standardPreviewImage}
                download={standardPreviewFileName}
              >
                {t("actions.downloadImage")}
              </a>
            ) : null}
          </section>
        )}
        {formType === "paint" && (
          <section>
            <section className="formRow formRow--double">
              <div className="formField">
                <FormSelect
                  onSelectChange={handleSelectChange}
                  setDecorCode={setDecorCode}
                  id="pavirsiai"
                  label={t("fields.surface")}
                  options={localizedPavirsiai}
                  currentValue={
                    selectedValues.pavirsiai === "null"
                      ? "default"
                      : selectedValues.pavirsiai
                  }
                  registerOptions={register("Pavirsiai")}
                />
              </div>
              <div className="formField">
                <FormSelect
                  onSelectChange={handleSelectChange}
                  id="apdaila"
                  label={t("fields.standardDecor")}
                  options={localizedNcsApdaila}
                  currentValue={
                    selectedValues.apdaila === "null"
                      ? "default"
                      : selectedValues.apdaila
                  }
                  registerOptions={register("Apdaila")}
                />
              </div>
            </section>
            <label className="formCheckbox">
              <input
                type="checkbox"
                checked={useCustomColorCode}
                onChange={handleCustomColorCodeToggle}
              />
              <span>{t("fields.useCustomColorCode")}</span>
            </label>
            {useCustomColorCode ? (
              <FormSelect
                id="custom"
                onSelectChange={handleSelectChange}
                currentValue={selectedValues.custom}
                registerOptions={register("custom")}
                customColorInput="customColorInput"
                options={[]}
              />
            ) : null}
            <p className="formNote">{t("form.standardPaintGloss")}</p>

            <ColorBox colorCode={paintPreviewCode} />
          </section>
        )}
        {formType === "hus" && (
          <section>
            <FormSelect
              onSelectChange={handleSelectChange}
              id="apdaila"
              label={t("fields.decor")}
              options={localizedHusApdaila}
              currentValue={
                selectedValues.apdaila === "null"
                  ? "default"
                  : selectedValues.apdaila
              }
              registerOptions={register("Apdaila", { required: true })}
            />
            <FormSelect
              onSelectChange={handleSelectChange}
              id="top"
              label={t("fields.topSurface")}
              options={localizedHusPavirsiai}
              currentValue={
                selectedValues.top === "null" ? "default" : selectedValues.top
              }
              registerOptions={register("Top", { required: true })}
            />
            <FormSelect
              onSelectChange={handleSelectChange}
              id="bottom"
              label={t("fields.bottomSurface")}
              options={localizedHusPavirsiai}
              currentValue={
                selectedValues.bottom === "null"
                  ? "default"
                  : selectedValues.bottom
              }
              registerOptions={register("Bottom", { required: true })}
            />
            <FormSelect
              onSelectChange={handleSelectChange}
              id="briaunos"
              label={t("fields.edges")}
              options={localizedHusPavirsiai}
              currentValue={
                selectedValues.briaunos === "null"
                  ? "default"
                  : selectedValues.briaunos
              }
              registerOptions={register("Briaunos", { required: true })}
            />
            <p className="formNote">{t("form.husNote")}</p>
          </section>
        )}
        <section className="copyGenerateButtons">
          <input
            className={
              !generateCodeDisabled ? "btnCopyActive" : "btnCopyDisabled"
            }
            type="submit"
            value={t("actions.generateDecorCode")}
          />
          <button
            className={decorCode ? "btnCopyActive" : "btnCopyDisabled"}
            type="button"
            onClick={() => {
              copyToClipboard(decorCode || "");
              toast(t("toast.codeCopied"));
            }}
          >
            {t("actions.copyDecorCode")}
          </button>
        </section>
      </form>
      {decorCode ? (
        <p className="decorCode">{decorCode}</p>
      ) : hasChangedAfterGeneration ? (
        <p className="decorCode">{t("decorCode.regenerate")}</p>
      ) : (
        <p className="decorCode">{t("decorCode.selectProperties")}</p>
      )}
    </div>
  );
}

export default UnifiedForm;
