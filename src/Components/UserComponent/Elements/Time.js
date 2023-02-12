import React from "react";
import { useState, useEffect } from "react";

const Time = (props) => {
  const [label, setLabel] = useState("Time");

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };

  useEffect(() => {
    const field = {
      id: `Time_${props.id}`,
      type: "Time",
      label: label,
    };
    props.addFormConfiguration(field);
  });

  return (
    <div className="element-name">
      <h3 className="element-field-name">Time</h3>
      <input
        className="element-input min-width-input time-input"
        type="time"
        value={label}
        onChange={handleLabelChange}
      />
    </div>
  );
};

export default Time;
