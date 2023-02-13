import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from '../Navbar/Navbar.js'
import formApi from "../../API/FormData";
import CreateForm from "../CreateForm/CreateForm";  
import "./Home.css";
import 'font-awesome/css/font-awesome.min.css';

const Home = (props) => {

  const [forms, setForms] = useState([]);
  const [showForm,setShowForm] = useState(false);
  const [formID,setFormID]=useState("")

  const navigate = useNavigate();

  const getForms = async () => {

    const querRes = await formApi.get('/getFormsByEmail', { params: { email: props.email } })

    console.log(querRes.data.data)
    setForms(querRes.data.data)
  }

  const handleDeleteForm=async(e)=>{
    const querRes = await formApi.delete('/deleteFormByID', { params: { email: props.email ,formID:e.target.id} })

    console.log(querRes.data.massage)
  }


  useEffect(() => {
    getForms();
  }, [])

  return (

    <div className="home-root">
      <Navbar />
    
      
      {!showForm ? <><div>
        <div className="container-left">

          <div className="main" style={{marginBottom:"20px"}}><span>Created Forms</span></div>          
          {
          forms?.map((form,index)=>{
            return <div className="subItem" key={index} style={{marginBottom:"20px"}} ><span id={form.formID} onClick={(e)=>{
              setFormID(e.target.id)
              setShowForm(true);
            }
          } className="boxFont">{form.formName}</span><i id={form.formID} className="fa fa-trash delete" onClick={handleDeleteForm} aria-hidden="true"></i></div>

          })}
        </div>
      </div >
      <div className="container" >
       <button className="createBtn" onClick={(e) => { 
        setShowForm(true)
        }}>Create New Form <i className="fa fa-solid fa-plus" aria-hidden="true"></i></button>
       </div></> : <CreateForm navigate={navigate} email={props.email} formID={formID}/>}
    </div >

  );
};



export default Home;
