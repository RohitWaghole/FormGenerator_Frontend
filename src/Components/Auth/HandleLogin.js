import userApi from "../API/UserData.js";


const handleLogin = async (userCred) => {

    console.log(userCred)
    const res = await userApi.post('/login', userCred);
    
    if(res.data.status===true){
        console.log(res.data.massage)
        localStorage.setItem(userCred.username, res.data.token)
        return true;
    }
    
    console.log(res.data.massage)
    return false;
}

export default handleLogin;