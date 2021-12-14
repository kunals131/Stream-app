import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import {Provider} from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk'
import App from './components/App'

import history from './history';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store= createStore(reducers, composeEnhacers(applyMiddleware(thunk)))

ReactDOM.render(
    <Router history={history}>
    <Provider store={store}>
    <App/>
    </Provider>
    </Router>
    
    
    
    , document.getElementById('root')
)


