import React from 'react'
import '../css/styles.css'
import '../css/barra-vermelha.css'

export default props => {

  return (

    <div className="container-fluid">
      <div className="row barra-vermelha">
        <div className="ml-md-5 mr-md-0 ml-sm-5 ml-5 pedidos-tela-grande">
          <div id="bt-minha-conta" className="dropdown pedidos-tela-grande">
            <button className="btn dropdown-toggle fonte-minha-conta mb-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Minha conta
              </button>
            <div className="dropdown-menu dropdown-menu-barra-vermelha" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item dropdown-item-barra-vermelha hover-item" href="#/dados">Meus dados</a>
              <a className="dropdown-item dropdown-item-barra-vermelha hover-item" href="#/enderecos">Meus endereços</a>
              <a className="dropdown-item dropdown-item-barra-vermelha hover-item" href="#/cartoes">Meus cartões</a>
            </div>
            <span id="titulo-meus-pedidos" className="pl-5 pedidos-tela-grande">{props.titulo}</span>
          </div>
        </div>
        {/*versão para tela pequena 1 barra-vermelha*/}
        <div className="ml-md-5 mr-md-0 ml-sm-5 ml-5 pedidos-tela-pequena">
          <div id="bt-minha-conta" className="dropdown pedidos-tela-pequena">
            <button className="btn dropdown-toggle font-minha-conta mb-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Minha conta
              </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item hover-item" href="#/dados">Meus dados</a>
              <a className="dropdown-item hover-item" href="#/enderecos">Meus endereços</a>
              <a className="dropdown-item hover-item" href="#/cartoes">Meus cartões</a>
            </div>
            <span id="titulo-meus-pedidos" className="pl-5 pedidos-tela-pequena">{props.titulo}</span>
          </div>
        </div>
        {/*versão para tela pequena 2 barra vermelha */}
        <div className="col-12">
          <span id="titulo-meus-pedidos" className="ml-0 pedidos-tela-pequena-2">{props.titulo}</span>
        </div>
        <div className=" col-12  pedidos-tela-pequena-2">
          <div id="bt-minha-conta" className=" dropdown pedidos-tela-pequena-2">
            <button className="btn dropdown-toggle font-minha-conta mb-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Minha conta
              </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item hover-item" href="#/dados">Meu dados</a>
              <a className="dropdown-item hover-item" href="#/enderecos">Meus endereços</a>
              <a className="dropdown-item hover-item" href="#/cartoes">Meus cartões</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}