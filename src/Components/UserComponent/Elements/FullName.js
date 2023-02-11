import React from "react";
import { useState, useEffect } from "react";

const FullName = (props) => {
  const [label, setLabel] = useState("Enter your name here");

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };

  useEffect(() => {
    const field = {
      id: `FullName_${props.id}`,
      type: "FullName",
      label: label,
    };
    props.addFormConfiguration(field);
  });

  return (
    <div>
      <h3>Name</h3>
      <input type="text" value={label} onChange={handleLabelChange} />
    </div>
  );
};

export default FullName;
