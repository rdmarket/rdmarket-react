import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './home/css/home.css'
import Routes from './rotas'



ReactDOM.render(
  <>
    {localStorage.getItem("cart")==null?localStorage.setItem("cart", "[]"):false}
    <Routes />
  </>,
  document.getElementById('root')
);


