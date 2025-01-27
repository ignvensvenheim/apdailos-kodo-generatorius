import { buildStdDecorCode } from "./buildStdDecorCode";
import { buildHusDecorCode } from "./buildHusDecorCode";
import { buildPaintDecorCode } from "./buildPaintDecorCode";

interface FormData {
  Pavirsiai?: string;
  Apdaila?: string;
  Blizgumas?: string;
  Top?: string;
  Bottom?: string;
  Briaunos?: string;
  custom?: string;
}

export const handleFormSubmit = (
  formType: "standard" | "hus" | "paint",
  data: FormData
): string | undefined => {

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
      custom: data.custom || "",
    });
  }

  return generatedCode;
};
