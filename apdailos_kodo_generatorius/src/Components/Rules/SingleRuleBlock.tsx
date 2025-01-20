import React, { useState } from "react";

interface ArrayToMapItem {
  label: string;
  value: string;
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
    <div>
      <h2 onClick={() => setExpanded(!expanded)}>{title}</h2>
      {expanded &&
        arrayToMap.map((el, index) => (
          <div key={index}>
            <p>
              {el.value} {el.label}
            </p>
          </div>
        ))}
    </div>
  );
};

export default SingleRuleBlock;
