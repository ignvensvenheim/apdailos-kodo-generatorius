import "./rules.css";
import sutrumpinimai from "../../data/sutrumpinimai.json";
import klaiduAprasymas from "../../data/klaiduAprasymas.json";
import SingleRuleBlock from "./SingleRuleBlock";
import apdailosPvz from "../../data/apdailosPvz.json";

function Rules() {
  return (
    <div className="rulesContainer">
      <SingleRuleBlock
        title={"Sutrumpinimai etiketėse"}
        subTitle1={"Sutrumpinimas"}
        subTitle2={"Reikšmė"}
        arrayToMap={sutrumpinimai}
      />
      <SingleRuleBlock
        title={"Klaidų aprašymas"}
        subTitle1={"Klaidų aprašymas"}
        subTitle2={"Teisingi kodai"}
        arrayToMap={klaiduAprasymas}
      />
      <SingleRuleBlock
        title={"Apdailos kodo pavyzdys"}
        subTitle1={"Pilnas kodas"}
        subTitle2={"jo pavyzdys - 10.07.17 gl.5 GR/UBH/KL"}
        arrayToMap={apdailosPvz}
      />
    </div>
  );
}

export default Rules;
