import React from "react";
import { useState, useEffect } from "react";
import "./Elements.css";

const FullName = (props) => {
  const [label, setLabel] = useState("Name lable here");

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
      <input
        className="element-input element-gap element-border-style"
        value={label}
        placeholder="Name"
        onChange={handleLabelChange}
      />
      <input
        className="element-input element-border-style"
        placeholder="Enter your name here"
        type="text"
        // onChange={handleLabelChange}
        maxLength={60}
      />
    </div>
  );
};

export default FullName;
