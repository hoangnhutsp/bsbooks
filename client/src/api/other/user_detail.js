import axios from 'axios';
axios.defaults.withCredentials = true


const localhost = 'http://localhost:5000/admin/user/';

export const getUserDetail = async (id) => {
    let URL = localhost + id
    console.log(URL);
    let {data} = await axios.get(URL)

    return data;
}