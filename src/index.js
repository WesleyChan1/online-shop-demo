import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

import Products from './components/products.js';
import Intro from './components/intro.js';

ReactDOM.render(
    <React.StrictMode>
    <div className="container-fluid">
        <div className="row text-center">
            <div className="col-6">
                <Intro/>
            </div>
        </div>
        <App/>
        <Products/>
    </div>
</React.StrictMode>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
