import React, { 
  useState,
  useEffect,
  useRef
} from 'react';
import './SearchBox.css';

import {
  useHistory,
} from 'react-router-dom'

import {getSearchSuggestion} from '../api/search/suggesstion'

export default function SearchBox() {

  const [query, setQuery] = useState('');
  const [options, setOptions] = useState([])
  let history = useHistory();

  const ulRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.addEventListener('click', (event) => {
      event.stopPropagation();
      ulRef.current.style.display = 'block'

    })
    document.addEventListener('click', (event) => {
      ulRef.current.style.display = 'none'
    })
  }, [])

  const submitHandler = (e) => {
    e.preventDefault();
    let path_current = window.location.pathname;
    history.push(`/search?q=${query}`)

    if(path_current === '/search'){
      window.location.reload();
    }
  };

  const selectProduct = (id) => {
    history.push(`/product/${id}`)   
  }

  const queryChange = async e => {
    let q = e.target.value;
    let data = await getSearchSuggestion(q);
    setQuery(q)
    setOptions(
      data.product
    )
  }

  const defaultOptions = [];
  for (let i = 0; i < 5; i++) {
    defaultOptions.push(`option ${i}`)
    defaultOptions.push(`peo ${i}`)

  }

  return (
    <form className="container-navbar-searchbox" onSubmit={submitHandler}>
      <div className="navbar-searchbox" >
        <input className="navbar-search-input"
          ref={inputRef}
          type="text"
          name="search-box"
          id="search-box"
          placeholder='Tim kiem sach hoac tac gia...'
          autoComplete="off"
          onChange={queryChange}
          value={query}
        />
        <button className="btn-icon-search" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div className="container-dropdown-search-box">
        <hr></hr>
        <ul id="results" className="list-group-search-box" ref={ulRef}>
        {
          options.map((option, idx) => {
            return (
              <div 
                type='button'
                key={idx} 
                className="search-suggestion-history-item"
                onClick={(e) => {
                  setQuery('');
                  selectProduct(option._id)
                }}
              >
               {option.name}
              </div>
            )
          })
        }
        </ul>

      </div>

    </form>
  );
}