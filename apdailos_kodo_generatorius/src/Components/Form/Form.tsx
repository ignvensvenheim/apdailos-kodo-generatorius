import "./form.css";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
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
import { handleFormSubmit } from "../../helpers/formSubmitHandler";
import { useContextData } from "../../context/Context";
import HusFormSection from "./HusFormSection";
import PaintFormSection from "./PaintFormSection";
import StandardFormSection from "./StandardFormSection";
import {
  DEFAULT_SELECT_VALUE,
  FormData,
  FormType,
  SelectedValues,
} from "./formTypes";

interface FormProps {
  title: string;
  formType: FormType;
}

const initialSelectedValues: SelectedValues = {
  apdaila: DEFAULT_SELECT_VALUE,
  pavirsiai: DEFAULT_SELECT_VALUE,
  blizgumas: DEFAULT_SELECT_VALUE,
  top: DEFAULT_SELECT_VALUE,
  bottom: DEFAULT_SELECT_VALUE,
  briaunos: DEFAULT_SELECT_VALUE,
  mediena: DEFAULT_SELECT_VALUE,
  custom: "",
};

const isChosen = (value: string) => value !== DEFAULT_SELECT_VALUE;

const getIsFormValid = (
  formType: FormType,
  selectedValues: SelectedValues,
  useCustomColorCode: boolean,
) => {
  if (formType === "standard") {
    return (
      isChosen(selectedValues.apdaila) &&
      isChosen(selectedValues.pavirsiai) &&
      isChosen(selectedValues.blizgumas)
    );
  }

  if (formType === "hus") {
    return (
      isChosen(selectedValues.apdaila) &&
      isChosen(selectedValues.top) &&
      isChosen(selectedValues.bottom) &&
      isChosen(selectedValues.briaunos)
    );
  }

  const customFilled =
    useCustomColorCode && selectedValues.custom.trim() !== "";

  return isChosen(selectedValues.pavirsiai) &&
    (isChosen(selectedValues.apdaila) || customFilled);
};

const getDecorCodeMessage = (
  decorCode: string | null,
  hasChangedAfterGeneration: boolean,
  regenerateLabel: string,
  selectPropertiesLabel: string,
) => {
  if (decorCode) {
    return decorCode;
  }

  if (hasChangedAfterGeneration) {
    return regenerateLabel;
  }

  return selectPropertiesLabel;
};

function UnifiedForm({ title, formType }: FormProps) {
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const { t, i18n } = useTranslation();
  const { setStdImage, setShowStdSurfWarning } = useContextData();
  const [decorCode, setDecorCode] = useState<string | null>(null);
  const [useCustomColorCode, setUseCustomColorCode] = useState(false);
  const [hasChangedAfterGeneration, setHasChangedAfterGeneration] =
    useState(false);
  const [selectedValues, setSelectedValues] =
    useState<SelectedValues>(initialSelectedValues);

  const language = (i18n.resolvedLanguage ?? i18n.language).startsWith("lt")
    ? "lt"
    : "en";

  const localizedPavirsiai = localizeOptions(pavirsiai, language);
  const localizedApdaila = localizeOptions(apdaila, language);
  const localizedBlizgumas = localizeOptions(blizgumas, language);
  const localizedHusApdaila = localizeOptions(husApdaila, language);
  const localizedHusPavirsiai = localizeOptions(husPavirsiai, language);
  const localizedMediena = localizeOptions(mediena, language);
  const localizedNcsApdaila = localizeOptions(ncsApdaila, language);

  const availableWoodKeysForDecor = isChosen(selectedValues.apdaila)
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
    isChosen(selectedValues.apdaila) && filteredLocalizedMediena.length === 0;

  const standardPreviewMatch = medienaImages.find(
    (entry) =>
      entry.woodKey === selectedValues.mediena &&
      entry.decorKey === selectedValues.apdaila,
  );
  const standardPreviewImage = resolveMedienaImage(standardPreviewMatch?.image);
  const standardPreviewFileName = standardPreviewMatch?.image
    ?.split("/")
    .pop();
  const standardPreviewCode = isChosen(selectedValues.apdaila)
    ? selectedValues.apdaila
    : undefined;
  const showMissingStandardPreview =
    isChosen(selectedValues.apdaila) &&
    isChosen(selectedValues.mediena) &&
    !standardPreviewMatch;

  const paintPreviewCode =
    useCustomColorCode && selectedValues.custom.trim() !== ""
      ? selectedValues.custom
      : isChosen(selectedValues.apdaila)
        ? selectedValues.apdaila
        : undefined;

  const isFormValid = getIsFormValid(
    formType,
    selectedValues,
    useCustomColorCode,
  );

  const clearGeneratedCode = () => {
    if (decorCode === null) {
      return;
    }

    setDecorCode(null);
    setHasChangedAfterGeneration(true);
  };

  useEffect(() => {
    setStdImage(standardPreviewImage ?? "");
  }, [standardPreviewImage, setStdImage]);

  useEffect(() => {
    if (
      formType !== "standard" ||
      !isChosen(selectedValues.mediena) ||
      availableWoodKeysForDecor === null ||
      availableWoodKeysForDecor.has(selectedValues.mediena)
    ) {
      return;
    }

    setSelectedValues((prev) => ({
      ...prev,
      mediena: DEFAULT_SELECT_VALUE,
    }));
    clearGeneratedCode();
  }, [
    availableWoodKeysForDecor,
    decorCode,
    formType,
    selectedValues.mediena,
  ]);

  const onSubmit = (data: FormData) => {
    const generatedCode = handleFormSubmit(formType, data);
    setDecorCode(generatedCode || "");
  };

  const handleSelectChange = (id: string, value: string) => {
    setSelectedValues((prev) => ({ ...prev, [id]: value }));
    clearGeneratedCode();

    if (id === "pavirsiai") {
      setShowStdSurfWarning(value === "A");
    }
  };

  const handleCustomColorCodeToggle = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const shouldUseCustomColorCode = event.target.checked;

    setUseCustomColorCode(shouldUseCustomColorCode);
    if (!shouldUseCustomColorCode) {
      setSelectedValues((prev) => ({ ...prev, custom: "" }));
      setValue("custom", "");
    }

    clearGeneratedCode();
  };

  const decorCodeMessage = getDecorCodeMessage(
    decorCode,
    hasChangedAfterGeneration,
    t("decorCode.regenerate"),
    t("decorCode.selectProperties"),
  );

  return (
    <div className={`formContainer formContainer--${formType}`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="page__title">{title}</h3>

        {formType === "standard" ? (
          <StandardFormSection
            onSelectChange={handleSelectChange}
            register={register}
            selectedValues={selectedValues}
            localizedPavirsiai={localizedPavirsiai}
            localizedApdaila={localizedApdaila}
            localizedBlizgumas={localizedBlizgumas}
            filteredLocalizedMediena={filteredLocalizedMediena}
            woodSelectDisabled={woodSelectDisabled}
            surfaceLabel={t("fields.surface")}
            decorLabel={t("fields.decor")}
            glossinessLabel={t("fields.glossiness")}
            woodLabel={t("fields.wood")}
            standardPreviewCode={standardPreviewCode}
            standardPreviewImage={standardPreviewImage}
            showMissingStandardPreview={showMissingStandardPreview}
            noImageMessage={t("preview.noImageAvailable")}
            standardPreviewFileName={standardPreviewFileName}
            downloadImageLabel={t("actions.downloadImage")}
          />
        ) : null}

        {formType === "paint" ? (
          <PaintFormSection
            onSelectChange={handleSelectChange}
            register={register}
            selectedValues={selectedValues}
            localizedPavirsiai={localizedPavirsiai}
            localizedNcsApdaila={localizedNcsApdaila}
            useCustomColorCode={useCustomColorCode}
            onCustomColorCodeToggle={handleCustomColorCodeToggle}
            paintPreviewCode={paintPreviewCode}
            surfaceLabel={t("fields.surface")}
            standardDecorLabel={t("fields.standardDecor")}
            useCustomColorCodeLabel={t("fields.useCustomColorCode")}
            standardPaintGlossLabel={t("form.standardPaintGloss")}
          />
        ) : null}

        {formType === "hus" ? (
          <HusFormSection
            onSelectChange={handleSelectChange}
            register={register}
            selectedValues={selectedValues}
            localizedHusApdaila={localizedHusApdaila}
            localizedHusPavirsiai={localizedHusPavirsiai}
            decorLabel={t("fields.decor")}
            topSurfaceLabel={t("fields.topSurface")}
            bottomSurfaceLabel={t("fields.bottomSurface")}
            edgesLabel={t("fields.edges")}
            husNoteLabel={t("form.husNote")}
          />
        ) : null}

        <section className="copyGenerateButtons">
          <input
            className={isFormValid ? "btnCopyActive" : "btnCopyDisabled"}
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
      <p className="decorCode">{decorCodeMessage}</p>
    </div>
  );
}

export default UnifiedForm;
