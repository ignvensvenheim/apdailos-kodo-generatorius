export type Language = "lt" | "en";

export interface LocalizedText {
  lt: string;
  en: string;
}

export interface UnifiedOption {
  key: string;
  value: LocalizedText;
  bold?: number;
  bg?: string;
}

export interface UnifiedRuleEntry {
  key: LocalizedText;
  value: LocalizedText;
}

export const localizeOptions = (
  options: UnifiedOption[],
  language: Language
) => {
  return options.map((option) => ({
    ...option,
    value: option.value[language],
  }));
};

export const localizeRuleEntries = (
  entries: UnifiedRuleEntry[],
  language: Language
) => {
  return entries.map((entry) => ({
    key: entry.key[language],
    value: entry.value[language],
  }));
};
