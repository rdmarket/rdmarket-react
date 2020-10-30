import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Routes from './rotas'



ReactDOM.render(
  <>
    {localStorage.getItem("cart")==null?localStorage.setItem("cart", "[]"):false}
    {localStorage.getItem("qtd_cart")==null?localStorage.setItem("qtd_cart", 0):false}
    <Routes />
  </>,
  document.getElementById('root')
);


