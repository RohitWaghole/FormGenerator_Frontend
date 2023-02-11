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
    <div>
      <input value={label} onChange={handleLabelChange} />
      <br></br>
      <input type="date"></input>
    </div>
  );
};

export default Date;
