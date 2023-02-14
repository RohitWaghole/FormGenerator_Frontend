import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import resApi from "../../API/ResData";
import { useState } from "react";

const Response = () => {

    const [responses, setResponses] = useState([]);

    const { email, id } = useParams();


    const getResponses = async () => {
        const apiRes = await resApi.get('/getResponsesByID', { params: { formID: id } })
        if (apiRes.data.status === true) {
            setResponses(apiRes.data.data)
        }

        else {
            alert(apiRes.data.massage)
        }
    }

    return (
        <div>
            <Navbar email={email} />
            <h1>Responses</h1>
            <button onClick={getResponses}>click here</button>
            <div>
                {
                    responses?.map((response) => {
                        return  <div> 
                                    {
                                    response?.map((field) => {
                                        return <div> <div>{field.label}</div> <div>{field.ans}</div> <br></br> </div>
                                        })
                                    } 
                                    <hr></hr>
                                </div>

                    })
                }
            </div>
        </div>
    )
}


export default Response;