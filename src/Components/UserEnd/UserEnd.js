import formApi from "../API/FormData";
import resApi from '../API/ResData.js'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const UserEnd = (props) => {

    const [form, setForm] = useState([])

    const { id } = useParams()
    const formID = id

    const getForm = async () => {

        const apiRes = await formApi.get('/getFormByID', { params: { formID: formID } })

        setForm(apiRes.data.data.fields)
    }

    const handleAnswerChange = (e) => {

        var objIndex = form.findIndex(
            (obj) => obj.id === e.target.id
        );

        form[objIndex].ans = e.target.value;
        console.log(form)
    }

    const hanadleSubmit=async(e)=>{
        e.preventDefault();
        const apiRes=await resApi.post('/saveresponse',{data:form,formID:formID})
        console.log(apiRes.data)

        if(apiRes.data.status===true){
            alert(apiRes.data.massage)
        }
    }


    useEffect(() => {
        getForm()
    }, [])

    return (
        <div>
            <h1>User End</h1>

            <div>
                {
                    form?.map((field, index) => {
                        return (
                            <div key={index} style={{ marginTop: "20px", width: "100%", textAlign: "center", margin: "auto" }}>
                                <label>{field.label}</label>
                                <br />
                                <br />

                                <br />
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
                                        : <><input type={field.type} id={field.id} onChange={(e) => { handleAnswerChange(e) }} /></>
                                }
                                <br />
                                <hr />
                            </div>
                        );
                    })
                }
            </div>
            <button style={{ textAlign: "center", margin: "auto" }} onClick={(e)=>{hanadleSubmit(e)}}>Submit</button>
        </div>
    )

}


export default UserEnd