import axios from 'axios';

const localhost = 'http://localhost:5000/';

export const getProductDetails = async (id) => {
    const URL = localhost + 'product/' + id
    let {data} = await axios.get(URL)
    return data;    
}

