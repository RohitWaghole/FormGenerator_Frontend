import React from "react";
import { useState, useEffect } from "react";
import "./Elements.css";

const Heading = (props) => {
  const [name, setName] = useState("Untitled Form");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    props.addFormName(name);
  }, [name]);

  return (
    <div>
      <input
        className="element-input element-heading "
        type="text"
        onChange={handleNameChange}
        placeholder="Heading"
        size={37}
      />
    </div>
  );
};

export default Heading;
