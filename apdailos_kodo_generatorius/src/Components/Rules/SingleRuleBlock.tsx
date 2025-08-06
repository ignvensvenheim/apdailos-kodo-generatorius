import React, { useState } from "react";
import "./rules.css";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";

interface ArrayToMapItem {
  value: string;
  key: string;
}

interface SingleRuleBlockProps {
  title: string;
  arrayToMap: Array<ArrayToMapItem>;
}

const SingleRuleBlock: React.FC<SingleRuleBlockProps> = ({
  title,
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
          <div className="pContainer">
            {arrayToMap.map((el, index) => (
              <p key={index}>
                {el.key} -<span>{el.value}</span>
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleRuleBlock;
