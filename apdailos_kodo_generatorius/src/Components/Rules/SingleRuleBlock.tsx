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
    <div className="rulesContainer">
      <h2 className="rulesTitle" onClick={() => setExpanded(!expanded)}>
        {title}
        <span>
          {expanded ? <CiSquareMinus size={30} /> : <CiSquarePlus size={30} />}
        </span>
      </h2>
      <div>
        {expanded ? (
          <div className="explContainer">
            <div>
              <h4>{subTitle1}</h4>
              {arrayToMap.map((el, index) => (
                <p key={index}>{el.key}</p>
              ))}
            </div>
            <div>
              <h4>{subTitle2}</h4>
              {arrayToMap.map((el, index) => (
                <p key={index}>{el.value}</p>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SingleRuleBlock;
