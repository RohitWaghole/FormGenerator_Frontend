import React from "react";
import { useState, useEffect } from "react";

const Phone = (props) => {
  const [label, setLabel] = useState("9999999999");

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
      <h3>Phone</h3>
      <input value={label} onChange={handleLabelChange} />
    </div>
  );
};

export default Phone;
