import React from 'react'
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Preview = (props) => {
  const location = useLocation();
  
  const {email}=useParams();

  return (
    <div>
      <Navbar email={email}/>
      <h2 style={{textAlign:"center", marginBottom:"20px"}}>Preview</h2>
      {
        location.state?.form.map((field, index) => {
          return (
            <div key={index} style={{marginTop:"20px", width:"100%",textAlign:"center" , margin:"auto"}}>
              <label>{field.label}</label>
              <br/>
              <br/>
              
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
                              <input readOnly className="element-border-style" value={op} id={index} placeholder="Enter your option" />
                            </label>
                            
                          </div>
                        );
                      })
                    }
                    
                  </div>
                  : <><input type={field.type} /></>
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
