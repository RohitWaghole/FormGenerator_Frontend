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
    <div>
      <h3>Time</h3>
      <input type="time" value={label} onChange={handleLabelChange} />
    </div>
  );
};

export default Time;
