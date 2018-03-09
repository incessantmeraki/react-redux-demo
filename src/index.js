import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import configureStore from './configureStore'

const store = configureStore()

const jsx = (
    <Provider store = {store}>
        <App />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
