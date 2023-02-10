import React from "react";
import { useState, useEffect } from "react";

const LongAns = (props) => {
  const [label, setLabel] = useState("Type your question here");

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };

  useEffect(() => {
    const field = {
      id: `LongAns_${props.id}`,
      type: "LongAns",
      label: label,
    };
    props.addFormConfiguration(field);
  });

  return (
    <div>
      <input value={label} onChange={handleLabelChange} />
      <br></br>
      <textarea name="text" rows="10" cols="30"></textarea>
    </div>
  );
};

export default LongAns;
