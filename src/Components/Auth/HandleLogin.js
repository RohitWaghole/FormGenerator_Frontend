import userApi from "../API/UserData.js";


const handleLogin = async (userCred) => {

    const res = await userApi.post('/login', userCred);
    
    if(res.data.status===true){
        localStorage.setItem(userCred.email, res.data.token)
        return true;
    }
    else{
        alert(res.data.massage)
    }
    
    console.log(res.data.massage)
    return false;
}

export default handleLogin;