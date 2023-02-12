import React from "react";
import { useState, useEffect } from "react";

const Phone = (props) => {
  const [label, setLabel] = useState("");

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };

  useEffect(() => {
    const field = {
      id: `Phone_${props.id}`,
      type: "Phone",
      label: label,
    };
    props.addFormConfiguration(field);
  });

  return (
    <div>
      <h3 className="element-field-name">Phone</h3>
      <input
        className="element-input min-width-input element-border-style"
        placeholder="9999999999"
        value={label}
        onChange={handleLabelChange}
      />
    </div>
  );
};

export default Phone;
