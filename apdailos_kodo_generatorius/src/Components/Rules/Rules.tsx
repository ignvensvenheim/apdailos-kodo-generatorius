import "./rules.css";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
// json files in lithuanian
import sutrumpinimai from "../../data/lt/sutrumpinimai.json";
import klaiduAprasymas from "../../data/lt/klaiduAprasymas.json";
import SingleRuleBlock from "./SingleRuleBlock";
import apdailosPvz from "../../data/lt/apdailosPvz.json";
//
// json files in english
import apdailosPvzEN from "../../data/en/apdailosPvzEN.json";
import sutrumpinimaiEN from "../../data/en/sutrumpinimaiEN.json";
import klaiduAprasymasEN from "../../data/en/klaiduAprasymasEN.json";
//

function Rules() {
  const context = useContext(LangContext);

  if (!context) {
    throw new Error("LangContext must be used within a LangProvider");
  }

  const { lang } = context;

  return (
    <div className="rulesContainer">
      <SingleRuleBlock
        title={
          lang === "lt" ? "Sutrumpinimai etiketėse" : "Abbreviations in labels"
        }
        arrayToMap={lang === "lt" ? sutrumpinimai : sutrumpinimaiEN}
      />
      <SingleRuleBlock
        title={
          lang === "lt"
            ? "Huseby/Foss kodo struktūra"
            : "Huseby/Foss code structure"
        }
        arrayToMap={lang === "lt" ? apdailosPvz : apdailosPvzEN}
      />
      <SingleRuleBlock
        title={
          lang === "lt" ? "Apdailos kodo struktūra" : "Decor code structure"
        }
        arrayToMap={lang === "lt" ? klaiduAprasymas : klaiduAprasymasEN}
      />
    </div>
  );
}

export default Rules;
