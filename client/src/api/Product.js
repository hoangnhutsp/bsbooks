import axios from 'axios';

import {url} from './config'


export const getProducts = async () => {
    await axios.get(`${url}product`, {withCredentials: true})
}