import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.css";
import Navbar from '../Navbar/Navbar.js'
import formApi from "../../API/FormData";
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
const Home = (props) => {

  const [forms, setForms] = useState([]);

  const navigate = useNavigate();

  const getForms = async () => {

    const querRes = await formApi.get('/getFormsByEmail', { params: { email: props.email } })

    console.log(querRes.data.data)
    setForms(querRes.data.data)
  }
  useEffect(() => {
    getForms();
  }, [])

  return (

    <div className="home-root">
      <Navbar />

      <div>

        <div className="container-left">
          <div className="main"><span>Created Forms</span></div>
          <div className="subItem"><span className="boxFont">Form 1 <i className="fa fa-trash" aria-hidden="true"></i></span></div>
          <div className="subItem"><span className="">Form 2</span></div>
          <div className="subItem"><span className="boxFont">Form 3</span></div>
        </div>

        <div className="container">
          <button className="createBtn" onClick={() => { navigate('/user/createNew') }}>Create New Form </button>
        </div>

      </div>
      <ul>
        {forms.map((form, index) => {
          return <li>Form {index + 1} :{form.formID}</li>
        })}
      </ul>
    </div>


  );
};



export default Home;
