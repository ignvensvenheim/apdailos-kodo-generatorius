import sutrumpinimai from "../../data/sutrumpinimai.json";
import klaiduAprasymas from "../../data/klaiduAprasymas.json";
import SingleRuleBlock from "./SingleRuleBlock";

function Rules() {
  return (
    <>
      <SingleRuleBlock
        title={"Sutrumpinimai etiketėse"}
        arrayToMap={sutrumpinimai}
      />
      <SingleRuleBlock
        title={"Klaidų aprašymas"}
        arrayToMap={klaiduAprasymas}
      />
    </>
  );
}

export default Rules;
