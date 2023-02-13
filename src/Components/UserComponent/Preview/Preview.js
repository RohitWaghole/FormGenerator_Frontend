import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Preview = (props) => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <h2>Preview</h2>
      {location.state.map((field, index) => {
        return (
          <div key={index}>
            <label>{field.label}</label>
            <input type={field.type} />
          </div>
        );
      })}
    </div>
  );
};

export default Preview;
