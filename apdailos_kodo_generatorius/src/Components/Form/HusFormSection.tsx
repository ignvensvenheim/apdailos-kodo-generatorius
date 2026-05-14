import FormSelect, { FormSelectOption } from "./FormSelect";
import { FormSectionProps, SelectedValues } from "./formTypes";

interface HusFormSectionProps extends FormSectionProps {
  selectedValues: SelectedValues;
  localizedHusApdaila: FormSelectOption[];
  localizedHusPavirsiai: FormSelectOption[];
  decorLabel: string;
  topSurfaceLabel: string;
  bottomSurfaceLabel: string;
  edgesLabel: string;
  husNoteLabel: string;
}

function HusFormSection({
  onSelectChange,
  register,
  selectedValues,
  localizedHusApdaila,
  localizedHusPavirsiai,
  decorLabel,
  topSurfaceLabel,
  bottomSurfaceLabel,
  edgesLabel,
  husNoteLabel,
}: HusFormSectionProps) {
  return (
    <section>
      <FormSelect
        onSelectChange={onSelectChange}
        id="apdaila"
        label={decorLabel}
        options={localizedHusApdaila}
        currentValue={selectedValues.apdaila}
        registerOptions={register("Apdaila", { required: true })}
      />
      <FormSelect
        onSelectChange={onSelectChange}
        id="top"
        label={topSurfaceLabel}
        options={localizedHusPavirsiai}
        currentValue={selectedValues.top}
        registerOptions={register("Top", { required: true })}
      />
      <FormSelect
        onSelectChange={onSelectChange}
        id="bottom"
        label={bottomSurfaceLabel}
        options={localizedHusPavirsiai}
        currentValue={selectedValues.bottom}
        registerOptions={register("Bottom", { required: true })}
      />
      <FormSelect
        onSelectChange={onSelectChange}
        id="briaunos"
        label={edgesLabel}
        options={localizedHusPavirsiai}
        currentValue={selectedValues.briaunos}
        registerOptions={register("Briaunos", { required: true })}
      />
      <p className="formNote">{husNoteLabel}</p>
    </section>
  );
}

export default HusFormSection;
