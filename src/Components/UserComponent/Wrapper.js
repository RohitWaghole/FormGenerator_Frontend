import CreateForm from "./CreateForm/CreateForm"
import { useNavigate } from "react-router-dom"

const Wrapper=(props)=>{
    const navigate=useNavigate();

    return <CreateForm email={props.email} navigate={navigate} />

}

export default Wrapper