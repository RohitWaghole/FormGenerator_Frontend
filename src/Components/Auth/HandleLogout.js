import userApi from "../API/UserData.js";

const handleLogout = async (username) => {

    const apiRes = await userApi.post(`/logout`, { username: username })

    console.log(apiRes.data.massage)
    if (apiRes.data.status === true) {
        return true;
    }

    return false;
}


export default handleLogout