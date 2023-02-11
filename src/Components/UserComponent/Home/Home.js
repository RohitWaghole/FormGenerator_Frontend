import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar/Navbar.js'

const Home = (props) => {

  const navigate=useNavigate();

  console.log("email :",props.email)

  return (
    <div className="home-root">
      <Navbar/>
      <button onClick={()=>{navigate('/user/createNew')}}>Create New Form</button>
    </div>
  );
};



export default Home;
