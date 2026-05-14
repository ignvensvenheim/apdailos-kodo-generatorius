import { ChangeEvent } from "react";
import FormSelect, { FormSelectOption } from "./FormSelect";
import ColorBox from "../ColorBox/ColorBox";
import { FormSectionProps, SelectedValues } from "./formTypes";

interface PaintFormSectionProps extends FormSectionProps {
  selectedValues: SelectedValues;
  localizedPavirsiai: FormSelectOption[];
  localizedNcsApdaila: FormSelectOption[];
  useCustomColorCode: boolean;
  onCustomColorCodeToggle: (event: ChangeEvent<HTMLInputElement>) => void;
  paintPreviewCode?: string;
  surfaceLabel: string;
  standardDecorLabel: string;
  useCustomColorCodeLabel: string;
  standardPaintGlossLabel: string;
}

function PaintFormSection({
  onSelectChange,
  register,
  selectedValues,
  localizedPavirsiai,
  localizedNcsApdaila,
  useCustomColorCode,
  onCustomColorCodeToggle,
  paintPreviewCode,
  surfaceLabel,
  standardDecorLabel,
  useCustomColorCodeLabel,
  standardPaintGlossLabel,
}: PaintFormSectionProps) {
  return (
    <section>
      <section className="formRow formRow--double">
        <div className="formField">
          <FormSelect
            onSelectChange={onSelectChange}
            id="pavirsiai"
            label={surfaceLabel}
            options={localizedPavirsiai}
            currentValue={selectedValues.pavirsiai}
            registerOptions={register("Pavirsiai")}
          />
        </div>
        <div className="formField">
          <FormSelect
            onSelectChange={onSelectChange}
            id="apdaila"
            label={standardDecorLabel}
            labelNote={standardPaintGlossLabel}
            options={localizedNcsApdaila}
            disabled={useCustomColorCode}
            currentValue={selectedValues.apdaila}
            registerOptions={register("Apdaila")}
          />
        </div>
      </section>
      <label className="formCheckbox">
        <input
          type="checkbox"
          checked={useCustomColorCode}
          onChange={onCustomColorCodeToggle}
        />
        <span>{useCustomColorCodeLabel}</span>
      </label>
      {useCustomColorCode ? (
        <FormSelect
          id="custom"
          onSelectChange={onSelectChange}
          currentValue={selectedValues.custom}
          registerOptions={register("custom")}
          customColorInput="customColorInput"
          options={[]}
        />
      ) : null}
      <ColorBox colorCode={paintPreviewCode} />
    </section>
  );
}

export default PaintFormSection;
