import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './redux/reducers'

import App from './App';
import { SocketProvider } from './SocketContext.js'

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        // Ignore write errors;
    }
};

const peristedState = loadState();

const store = createStore(
    reducers,
    peristedState,
    compose(applyMiddleware(thunk))
);

store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <SocketProvider>
        <App />
        </SocketProvider>
    </Provider>
    , document.getElementById('root')
);