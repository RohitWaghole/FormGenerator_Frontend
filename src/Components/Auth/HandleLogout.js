import userApi from "../API/UserData.js";

const handleLogout = async (email) => {

    const apiRes = await userApi.post(`/logout`, { email: email })

    console.log(apiRes.data.massage)
    if (apiRes.data.status === true) {
        return true;
    }

    return false;
}


export default handleLogout