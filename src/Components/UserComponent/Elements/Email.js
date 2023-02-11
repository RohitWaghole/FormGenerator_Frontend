import React from "react";
import { useState, useEffect } from "react";

const Email = (props) => {
  const [label, setLabel] = useState("Email");

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
      <h3>Email</h3>
      <input type="email" value={label} onChange={handleLabelChange} />
    </div>
  );
};

export default Email;
