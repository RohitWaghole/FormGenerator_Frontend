import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Preview = (props) => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <h2 style={{textAlign:"center", marginBottom:"20px"}}>Preview</h2>
      {
        location.state.map((field, index) => {
          return (
            <div key={index} style={{marginTop:"20px", width:"100%",textAlign:"center" , margin:"auto"}}>
              <label>{field.label}</label>
              <br/>
              <br/>
              <input type={field.type} />
              <br/>
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
              <br/>
              <hr/>
            </div>
          );
        })
      }
    </div>
  );
};

export default Preview;
