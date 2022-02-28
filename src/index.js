import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter'
import './index.css';

import Mainpage from './Mainpage';
import Portfolio from './Portfolio';
import Experience from './Experience';


ReactDOM.render(
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
    <div id = "container">
      

      <Mainpage />
      <Portfolio /> 
      <Experience />
    </div>
      </BrowserRouter>


  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

