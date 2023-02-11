import React from "react";
import "./Navbar.css";
import handleLogout from '../../Auth/HandleLogout.js';
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {

  const navigate=useNavigate();
  return (
    <div className="navbar-root">
      <nav className="navbar">
        <ul className="menu">
          <div>
            <li className="logo">
              <a className="navigate" onMouseOver={(event)=>{event.target.style.cursor='pointer'}}>
                Form Generator
              </a>
            </li>
          </div>
          <div className="menu">
            <li className="item">
              <a className="navigate" onClick={()=>{navigate('/user/home')}} onMouseOver={(event)=>{event.target.style.cursor='pointer'}}>
                Home
              </a>
            </li>
            <li className="item">
              <a className="navigate" onClick={()=>{navigate('/user/about')}} onMouseOver={(event)=>{event.target.style.cursor='pointer'}}>
                About Us
              </a>
            </li>
            <li className="item">
              <span className="navigate" onClick={()=>{navigate('/user/profile')}} onMouseOver={(event)=>{event.target.style.cursor='pointer'}}>
                User
              </span>
            </li>
            <li className="item">
              <a className="navigate" onMouseOver={(event)=>{event.target.style.cursor='pointer'}} onClick={async()=>{
                const flag=await handleLogout(props.email); 
                if(flag===true) navigate('/')
                else alert('error')
              }}>
                Logout
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
