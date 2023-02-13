import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Preview.css";
import FullName from "../Elements/FullName";

const Preview = (props) => {
  const location = useLocation();

  return (
    <div className="container-preview">
      <Navbar />
      <div className="preview-container">
        <h2 className="preview-heading">Form Preview</h2>
        {location.state.map((field, index) => {
          return (
            <div className="preview-elements added-elements" key={index}>
              <label className="element-input preview-lable">
                {field.label}
              </label>
              <div>
                {field.type === "FullName" ||
                field.type === "Email" ||
                field.type === "Address" ? (
                  <input
                    className="preview-input element-border-style"
                    type={field.type}
                    placeholder={`Enter your ${field.type} here`}
                  />
                ) : field.type === "date" || field.type === "Time" ? (
                  <input
                    className="element-input min-width-input time-input"
                    type={field.type}
                  ></input>
                ) : field.type === "Phone" ? (
                  <input
                    type="number"
                    className="element-input min-width-input element-border-style"
                    placeholder="9999999999"
                    // onChange={handleLabelChange}
                  />
                ) : field.type === "LongAns" ? (
                  <textarea
                    className="element-input"
                    name="text"
                    rows="10"
                    cols="30"
                  ></textarea>
                ) : field.type == "FileUpload" ? (
                  <input
                    className="element-input min-width-input"
                    type="file"
                  ></input>
                ) : field.type === "Checkbox" ? (
                  <h2>checkbox</h2>
                ) : field.type === "short_ans" ? (
                  <input
                    className="preview-input element-border-style"
                    type={field.type}
                    placeholder={`Enter your answer here`}
                  />
                ) : (
                  <h2>Else condition executed</h2>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Preview;
