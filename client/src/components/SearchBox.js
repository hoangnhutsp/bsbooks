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
        console.log('input click');
        ulRef.current.style.display = 'block';
    })
    document.addEventListener('click', (event) => {
      console.log('document click');
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
    history.push(`/product-details/${id}`)   
  }

  const queryChange = async e => {
    let q = e.target.value;
    setQuery(q)
    if (q !== ''){
      let data = await getSearchSuggestion(q);
      setOptions(
        data.product
      )
    } else setOptions([]);
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
        <ul id="results" className="list-group-search-box" ref={ulRef}>
        {/* <hr></hr> */}
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