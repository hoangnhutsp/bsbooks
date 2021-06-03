import React, { useState } from 'react';
import './SearchBox.css';

import {
  useHistory,
} from 'react-router-dom'

export default function SearchBox() {

  const [query, setQuery] = useState('');
  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/search?q=${query}`)

  };

  

  return (
    <form className="container-navbar-searchbox" onSubmit={submitHandler}>
      <div className="navbar-searchbox">
        <input className="navbar-search-input"
          type="text"
          name="q"
          id="q"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn-icon-search" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
}