import React from "react";
import { useState, useEffect } from "react";

const Date = (props) => {
  const [label, setLabel] = useState("Date");

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };

  useEffect(() => {
    const field = {
      id: `Date_${props.id}`,
      type: "date",
      label: label,
    };
    props.addFormConfiguration(field);
  });

  return (
    <div className="element-name">
      <h3 className="element-field-name">Date</h3>
      <input className="element-input min-width-input" type="date"></input>
    </div>
  );
};

export default Date;
