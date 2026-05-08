import "./rules.css";
import { useTranslation } from "react-i18next";
import sutrumpinimai from "../../data/shared/rules/sutrumpinimai.json";
import klaiduAprasymas from "../../data/shared/rules/klaiduAprasymas.json";
import SingleRuleBlock from "./SingleRuleBlock";
import apdailosPvz from "../../data/shared/rules/apdailosPvz.json";
import { localizeRuleEntries } from "../../data/shared/localizeData";

function Rules() {
  const { t, i18n } = useTranslation();
  const language = (i18n.resolvedLanguage ?? i18n.language).startsWith("lt")
    ? "lt"
    : "en";

  return (
    <div className="rulesContainer">
      <SingleRuleBlock
        title={t("rules.abbreviations")}
        arrayToMap={localizeRuleEntries(sutrumpinimai, language)}
      />
      <SingleRuleBlock
        title={t("rules.husStructure")}
        arrayToMap={localizeRuleEntries(apdailosPvz, language)}
      />
      <SingleRuleBlock
        title={t("rules.decorStructure")}
        arrayToMap={localizeRuleEntries(klaiduAprasymas, language)}
      />
    </div>
  );
}

export default Rules;
