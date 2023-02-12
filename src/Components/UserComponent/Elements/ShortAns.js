import React from "react";
import { useState, useEffect } from "react";

const ShortAns = (props) => {
  const [label, setLabel] = useState("");

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };

  useEffect(() => {
    const field = {
      id: `ShortAns_${props.id}`,
      type: "short_ans",
      label: label,
    };
    props.addFormConfiguration(field);
  });

  return (
    <div className="element-name">
      <input
        className="element-input element-gap element-border-style"
        value={label}
        placeholder="Type your question here"
        onChange={handleLabelChange}
      />
      <input className="element-input" type="text"></input>
    </div>
  );
};

export default ShortAns;
