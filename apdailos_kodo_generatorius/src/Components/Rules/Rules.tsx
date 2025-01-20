import "./rules.css";
import sutrumpinimai from "../../data/sutrumpinimai.json";
import klaiduAprasymas from "../../data/klaiduAprasymas.json";
import SingleRuleBlock from "./SingleRuleBlock";

function Rules() {
  return (
    <>
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
    </>
  );
}

export default Rules;
