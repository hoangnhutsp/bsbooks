import React from 'react'
import { useState } from 'react';
import { WelcomePage } from './page/WelcomePage';
import { PageChangerContext } from './_contexts';
import { NavBar } from './components/navbar';
import './App.scss';
import axios from 'axios';

function App() {
    const [page, setPage] = useState(<WelcomePage />);
    return (
        <div id='App' className='flex-container'>
        <PageChangerContext.Provider value={{ changePage: newPage => setPage(newPage) }}>
          <div className='flex-row'>
            <NavBar />
          </div>
          <div id='PageContent'>{page}</div>
        </PageChangerContext.Provider>
      </div>
    )
}

export default App
