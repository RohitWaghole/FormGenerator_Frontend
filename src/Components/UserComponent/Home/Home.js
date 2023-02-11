import React from "react";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import "./Home.css";
import Navbar from '../Navbar/Navbar.js'
import formApi from "../../API/FormData";

const Home = (props) => {

  const [forms,setForms]=useState([]);

  const navigate=useNavigate();
  
  const getForms=async()=>{

    const querRes= await formApi.get('/getFormsByEmail',{params:{email:props.email}})

    console.log(querRes.data.data)
    setForms(querRes.data.data)
  }
  useEffect(()=>{
    getForms();
  },[])

  return (
    <div className="home-root">
      <Navbar/>

      <div>
        <ul>
          {forms.map((form,index)=>{
            return <li>Form {index+1} :{form.formID}</li>
          })}
        </ul>
      </div>
      <button onClick={()=>{navigate('/user/createNew')}}>Create New Form</button>
    </div>
  );
};



export default Home;
