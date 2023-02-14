import React from 'react'
import Navbar from "../Navbar/Navbar";
import { useLocation,useParams } from "react-router-dom";


const Publish=(props)=>{
    const location=useLocation();
    const {email}=useParams();

    const hostname=window.location.hostname
    const port=window.location.port
    const formID=location.state.formID

    return(
        <div>
            <Navbar email={email}/>
            <h1>Publish Form</h1>
            <div>
                <h2>Generated Link :</h2>
                <a>{`http://${hostname}:${port}/userend/${formID}`}</a>
            </div>
        </div>
    )
}


export default Publish;