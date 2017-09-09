import './components/App.css'

import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Init from './components/Init'
import App from './components/App'
import Signup from './components/Signup'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(reducers);


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Init} />
                <Route path="/App" component={App} />
                <Route path="/Signup" component={Signup} />
            </div>
        </Router>
    </Provider>
    , document.getElementById('root')
);