import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Preview = (props) => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <h2>Preview</h2>
      {
        location.state.map((field, index) => {
          return (
            <div key={index}>
              <label>{field.label}</label>
              <input type={field.type} />
              {
                field.options ?
                  <div>
                    {
                      field.options.map((op, index) => {
                        return (
                          <div key={index} className="element-input">
                            <input type="radio" value={op} name={op} />
                            <span> </span>
                            <label>
                              <input className="element-border-style" value={op} id={index} placeholder="Enter your option" />
                            </label>
                          </div>
                        );
                      })
                    }
                  </div>
                  : <></>
              }
            </div>
          );
        })
      }
    </div>
  );
};

export default Preview;
