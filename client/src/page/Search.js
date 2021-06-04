import React from 'react'
import { 
    useEffect,
} from 'react';

import {getSearchSuggestion} from '../api/search/suggesstion'

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] === variable) { return pair[1]; }
    }
    return (false);
}
function Search() {


     
    useEffect(async () => {
        let query = getQueryVariable('q') || '';
        query = query.replace("%20", " ") 
        let data = await getSearchSuggestion(query);
        console.log(data);
    }, [])
    
    return (
        <div>
            SEARCH
        </div>
    )
}

export default Search
