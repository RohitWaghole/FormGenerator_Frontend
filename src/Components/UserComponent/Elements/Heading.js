import React from "react";
import { useState, useEffect } from "react";

const Heading = (props) => {
  const [label, setLabel] = useState("Heading");

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };

  useEffect(() => {
    const field = {
      id: `Heading_${props.id}`,
      type: "heading",
      label: label,
    };
    props.addFormConfiguration(field);
  });

  return (
    <div>
      <input type="text" value={label} onChange={handleLabelChange} />
    </div>
  );
};

export default Heading;
