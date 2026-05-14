import FormSelect, { FormSelectOption } from "./FormSelect";
import ColorBox from "../ColorBox/ColorBox";
import { FormSectionProps, SelectedValues } from "./formTypes";

interface StandardFormSectionProps extends FormSectionProps {
  selectedValues: SelectedValues;
  localizedPavirsiai: FormSelectOption[];
  localizedApdaila: FormSelectOption[];
  localizedBlizgumas: FormSelectOption[];
  filteredLocalizedMediena: FormSelectOption[];
  woodSelectDisabled: boolean;
  surfaceLabel: string;
  decorLabel: string;
  glossinessLabel: string;
  woodLabel: string;
  standardPreviewCode?: string;
  standardPreviewImage?: string;
  showMissingStandardPreview: boolean;
  noImageMessage: string;
  standardPreviewFileName?: string;
  downloadImageLabel: string;
}

function StandardFormSection({
  onSelectChange,
  register,
  selectedValues,
  localizedPavirsiai,
  localizedApdaila,
  localizedBlizgumas,
  filteredLocalizedMediena,
  woodSelectDisabled,
  surfaceLabel,
  decorLabel,
  glossinessLabel,
  woodLabel,
  standardPreviewCode,
  standardPreviewImage,
  showMissingStandardPreview,
  noImageMessage,
  standardPreviewFileName,
  downloadImageLabel,
}: StandardFormSectionProps) {
  return (
    <section>
      <section className="formRow">
        <div className="formField">
          <FormSelect
            onSelectChange={onSelectChange}
            id="pavirsiai"
            label={surfaceLabel}
            options={localizedPavirsiai}
            currentValue={selectedValues.pavirsiai}
            registerOptions={register("Pavirsiai", { required: false })}
          />
        </div>
        <div className="formField">
          <FormSelect
            onSelectChange={onSelectChange}
            id="apdaila"
            label={decorLabel}
            options={localizedApdaila}
            currentValue={selectedValues.apdaila}
            registerOptions={register("Apdaila", { required: false })}
          />
        </div>
      </section>
      <section className="formRow formRow--split">
        <div className="formField">
          <FormSelect
            onSelectChange={onSelectChange}
            id="blizgumas"
            label={glossinessLabel}
            options={localizedBlizgumas}
            currentValue={selectedValues.blizgumas}
            registerOptions={register("Blizgumas", { required: false })}
          />
        </div>
        <div className="formField">
          <FormSelect
            onSelectChange={onSelectChange}
            id="mediena"
            label={woodLabel}
            options={filteredLocalizedMediena}
            disabled={woodSelectDisabled}
            currentValue={selectedValues.mediena}
            registerOptions={register("Mediena", { required: false })}
          />
        </div>
      </section>
      <ColorBox
        colorCode={standardPreviewCode}
        imageUrl={standardPreviewImage}
        showColorFallback={false}
        noImageMessage={showMissingStandardPreview ? noImageMessage : undefined}
      />
      {standardPreviewImage ? (
        <a
          className="formDownloadLink btnCopyActive"
          href={standardPreviewImage}
          download={standardPreviewFileName}
        >
          {downloadImageLabel}
        </a>
      ) : null}
    </section>
  );
}

export default StandardFormSection;
