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
      <button
        type="button"
        className="ruleTitle"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <span className="ruleTitleText">{title}</span>
        <span className="ruleIcon" aria-hidden="true">
          {expanded ? <CiSquareMinus size={24} /> : <CiSquarePlus size={24} />}
        </span>
      </button>
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
