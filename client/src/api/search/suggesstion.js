import axios from 'axios';
axios.defaults.withCredentials = true


const localhost = 'http://localhost:5000/';

export const getSearchSuggestion = async (query) => {
    const URL = localhost + `product/search/suggestion?q=${query}`;

    console.log(URL);
    let {data} = await axios.get(URL)
    
    return data;

}

