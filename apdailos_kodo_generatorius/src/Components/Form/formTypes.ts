import { UseFormRegister } from "react-hook-form";

export const DEFAULT_SELECT_VALUE = "default";

export interface FormData {
  Pavirsiai?: string;
  Apdaila?: string;
  Blizgumas?: string;
  Mediena?: string;
  Top?: string;
  Bottom?: string;
  Briaunos?: string;
  custom?: string;
}

export interface SelectedValues {
  apdaila: string;
  pavirsiai: string;
  blizgumas: string;
  top: string;
  bottom: string;
  briaunos: string;
  mediena: string;
  custom: string;
}

export interface FormSectionProps {
  onSelectChange: (id: string, value: string) => void;
  register: UseFormRegister<FormData>;
}

export type FormType = "standard" | "hus" | "paint";
