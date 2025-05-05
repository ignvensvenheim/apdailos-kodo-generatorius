import "./rules.css";
import { useContext } from "react";
import { Context } from "../../context/Context";
// json files in lithuanian
import sutrumpinimai from "../../data/lt/text/sutrumpinimai.json";
import klaiduAprasymas from "../../data/lt/text/klaiduAprasymas.json";
import SingleRuleBlock from "./SingleRuleBlock";
import apdailosPvz from "../../data/lt/text/apdailosPvz.json";
//
// json files in english
import apdailosPvzEN from "../../data/en/text/apdailosPvzEN.json";
import sutrumpinimaiEN from "../../data/en/text/sutrumpinimaiEN.json";
import klaiduAprasymasEN from "../../data/en/text/klaiduAprasymasEN.json";
//

function Rules() {
  const context = useContext(Context);

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
