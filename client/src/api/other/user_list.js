import axios from 'axios';
axios.defaults.withCredentials = true


const localhost = 'http://localhost:5000/admin/user';

export const getUserLists = async () => {
    let URL = localhost;
    console.log(URL);
    let {data} = await axios.get(URL)

    return data;
}