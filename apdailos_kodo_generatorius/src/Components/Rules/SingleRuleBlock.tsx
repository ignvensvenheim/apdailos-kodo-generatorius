import React, { useState } from "react";
import "./rules.css";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";

interface ArrayToMapItem {
  value: string;
  key: string;
}

interface SingleRuleBlockProps {
  title: string;
  subTitle1: string;
  subTitle2: string;
  arrayToMap: Array<ArrayToMapItem>;
}

const SingleRuleBlock: React.FC<SingleRuleBlockProps> = ({
  title,
  subTitle1,
  subTitle2,
  arrayToMap,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="singleRuleContainer">
      <h2 className="ruleTitle" onClick={() => setExpanded(!expanded)}>
        {title}
        <span>
          {expanded ? <CiSquareMinus size={30} /> : <CiSquarePlus size={30} />}
        </span>
      </h2>
      <div>
        {expanded && (
          <div className="explContainer">
            <h4>
              {subTitle1} ir {subTitle2}
            </h4>
            <div className="pContainer">
              {arrayToMap.map((el, index) => (
                <p key={index}>
                  {el.key} <span>{el.value}</span>
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleRuleBlock;
