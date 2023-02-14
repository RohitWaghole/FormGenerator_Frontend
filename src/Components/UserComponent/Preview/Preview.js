import React from 'react'
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Preview.css";

const Preview = (props) => {
  const location = useLocation();

  const { email } = useParams();

  return (
    <div>
      <Navbar email={email} />
      <div className="preview-root">
        <h2 className="preview-heading">Form Preview</h2>
        {location.state?.form.map((field, index) => {
          return (
            <div className="preview-card" key={index}>
              <label className="preview-label">{field.label}</label>

              {field.options ? (
                <div>
                  {field.options.map((op, index) => {
                    return (
                      <div
                        key={index}
                        className="element-input preview-option-label"
                      >
                        {field.type === "MCQ" ? (
                          <input type="radio" value={op} name={op} />
                        ) : (
                          <input type="checkbox" value={op} name={op} />
                        )}
                        <span> </span>
                        <label>
                          <input
                            readOnly
                            className="element-border-style preview-options"
                            value={op}
                            id={index}
                            placeholder="Enter your option"
                          />
                        </label>
                      </div>
                    );
                  })}
                </div>
              ) : field.type === "FileUpload" ? (
                <div className="element-name">
                  <input
                    className="element-input element-gap element-border-style preview-input preview-options"
                    type={"file"}
                    placeholder={`Enter your ${field.type}`}
                  />
                </div>
              ) : (
                <div className="element-name">
                  <input
                    className="element-input element-gap element-border-style preview-input preview-options"
                    type={field.type}
                    placeholder={`Enter your ${field.type}`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Preview;
