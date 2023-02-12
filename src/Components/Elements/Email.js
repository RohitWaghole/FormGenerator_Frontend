import React from "react";
import { useState, useEffect } from "react";

const Email = (props) => {
  const [label, setLabel] = useState("");

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };

  useEffect(() => {
    const field = {
      id: `Email_${props.id}`,
      type: "Email",
      label: label,
    };
    props.addFormConfiguration(field);
  });

  return (
    <div>
      <h3 className="element-field-name">Email</h3>
      <input
        className="element-input element-border-style"
        placeholder="example@example.com"
        type="email"
        value={label}
        onChange={handleLabelChange}
        size={40}
      />
    </div>
  );
};

export default Email;
