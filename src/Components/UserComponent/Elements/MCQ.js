import React, { useEffect } from "react";
import { useState } from "react";

const MCQ = (props) => {
  const [options, setOptions] = useState(["Option 1"]);
  const [label, setLabel] = useState("Type your question here");

  var count = options.length;

  const handleAddOption = () => {
    setOptions([...options, `Option ${count + 1}`]);
  };

  const handleOptionChange = (e) => {
    var optionArray = options.slice();
    optionArray[e.target.id] = e.target.value;
    setOptions(optionArray);
  };

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };

  useEffect(() => {
    const field = {
      id: `MCQ_${props.id}`,
      type: "MCQ",
      label: label,
      options: options,
    };
    props.addFormConfiguration(field);
  });

  return (
    <div className="element-name">
      <input
        className="element-input element-border-style"
        placeholder="Type your question here"
        value={label}
        onChange={handleLabelChange}
      />

      <div id="options">
        {options.map((op, index) => {
          return (
            <div key={index} className="element-input">
              <input type="radio" value={op} name="options" />
              <span> </span>
              <label>
                <input
                  className="element-border-style"
                  value={op}
                  id={index}
                  placeholder="Enter your option"
                  onChange={handleOptionChange}
                />
              </label>
            </div>
          );
        })}

        <button className="button-60" onClick={handleAddOption}>
          Add Option
        </button>
      </div>
    </div>
  );
};

export default MCQ;
