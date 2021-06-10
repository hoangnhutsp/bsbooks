import axios from 'axios';
axios.defaults.withCredentials = true


const localhost = 'http://localhost:5000/category';

export const getCategoryLists = async () => {
    let URL = localhost;
    console.log(URL);
    let {data} = await axios.get(URL)

    return data;
}