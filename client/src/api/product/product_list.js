import axios from 'axios';

const localhost = 'http://localhost:5000/product';

export const getProductLists = async (query) => {
    let URL = localhost + query;
    console.log(URL);
    let {data} = await axios.get(URL)

    console.log(data);
    return data;
}

