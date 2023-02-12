import React from "react";
import { useState, useEffect } from "react";
import "./Elements.css";

const FullName = (props) => {
  const [label, setLabel] = useState("");

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
    <div className="element-name">
      <h3 className="element-field-name">Name</h3>
      <input
        className="element-input element-border-style"
        placeholder="Enter your name here"
        type="text"
        value={label}
        onChange={handleLabelChange}
        maxLength={60}
      />
    </div>
  );
};

export default FullName;
