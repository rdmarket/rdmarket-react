import React, { Component } from 'react'
import ListagemCategoria from './listagemCategoria'
import '../css/styles.css'
import axios from 'axios'
import ListagemProdutos from '../../categorias-produto/view/listagemProdutos'
import ListagemProduto from '../../categorias-produto/view/listagemProdutos'



export default class Header extends Component {


    constructor(props) {
        super(props)
        this.state = { valor: parseInt(localStorage.getItem('qtdCarrinho')),keyword:''}
    }


    retornarCliente = () => {
        let nomeCliente = localStorage.getItem('usuario')

        if (nomeCliente == null) {
            return 'Conta'
        }
        return JSON.parse(nomeCliente).nm_cliente
    }


    capturarMudanca=(e)=>{
        this.setState({valor:this.state.valor,keyword:e})
        
    }

   

    logado=()=>{
        let cliente = localStorage.getItem('usuario')

        if(cliente==null){
            return true;
        }
        return false;
    }

    logout=()=>{

        localStorage.clear()
        document.location.reload(true)

    }

    aumentarValor=(e)=>{
        let id1 = document.getElementById("id_vlr1")
        let id2 = document.getElementById("id_vlr2")
        
        id1.innerHTML=parseInt(e) + parseInt(id1.innerHTML);
        id2.innerHTML= parseInt(e) + parseInt(id2.innerHTML);

        localStorage.setItem('qtd_cart',parseInt(e) + JSON.parse(localStorage.getItem('qtd_cart')))    
    }

    render() {
        return (

            <>
                <div class="container tela-grande">
                    <div class="d-flex justify-content-between mt-5">
                        <div class="borda-flex">
                            <a id="topo" href="#/home"><img id="logo-img" src={require('../imagens/logo.png')}
                                type="img" /></a>
                        </div>
                        <div id="barra-pesquisa" class="borda-flex-tamanho">
                            <div class="input-group mb-3 mt-5">
                                <input onChange={e=>this.capturarMudanca(e.target.value)} type="text" class="form-control tamanhoInput" placeholder="pesquise seu produto"
                                    aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <div class="input-group-append">
                                    <a href={"#/busca/"+this.state.keyword}  class="btn btn-outline-secondary bt-header-pesquisa" type="button"
                                        id="button-addon2"><img width="20px" height="20px" src={require("../imagens/pesquisa.svg")} /></a>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5">

                            <div className="dropdown">
                                <img className="img-icones" src={require("../imagens/conta.svg")} />
                                <a className="btn btn-secondary selectConta dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {this.retornarCliente()}
                                </a>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a hidden={!this.logado()} className="dropdown-item selectConta" href="#/login">Login</a>
                                    <a onClick={()=>this.logout()} hidden={this.logado()} className="dropdown-item selectConta" href="#/home">Logout</a>                                    
                                    <a className="dropdown-item selectConta" href="#/historico">Pedido</a>

                                </div>
                            </div>

                        </div>
                        <div class="mt-5 ">

                            <div class="div-carrinho">
                                <a href="#/carrinho"><button class="bt-header"><img class="img-icones"
                                    src={require("../imagens/carrinho.svg")} /></button>
                                </a>
                            </div>
                            <div id="id_vlr1" class="div-quantidade ml-3">
                                {localStorage.getItem('qtd_cart')}
                            </div>
                            {/* <div class="div-fonte">
                            <span class="fonte-carrinho-total fonte-forte">Total: R$ total</span>
                        </div> */}
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-12">
                            <nav class="navbar navbar-expand navbar-light">
                                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul class="navbar-nav menu">
                                        <li id="departamentos" class="nav-item dropdown">
                                            <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span class="navbar-toggler-icon fundo-ham"></span><span
                                                    id="categoria">Categorias</span>
                                            </a>
                                            <div class="dropdown-menu pt-0 pb-0 borda-none"
                                                aria-labelledby="navbardDropdownMenuLink" >
                                                <a class="dropdown-item itens-menu-show item-categoria" href="#">Ofertas</a>
                                                <a class="dropdown-item itens-menu-show item-categoria" href="#">Novidades</a>
                                                <a class="dropdown-item itens-menu-show item-categoria" href="#">Descontos</a>
                                                <ListagemCategoria />
                                            </div>
                                        </li>
                                        <li class="nav-item itens-menu">
                                            <a href="#/descontos" class="nav-link">Ofertas</a>
                                        </li>
                                        <li class="nav-item itens-menu">
                                            <a href="#/novidades" class="nav-link">Novidades</a>
                                        </li>


                                        <li class="nav-item itens-menu">
                                            <a class="nav-link" href="#/contato">Contato</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>


                <div class="container tela-pequena">
                    <div class="d-flex justify-content-between mt-5">
                        <div class="mt-2 cat">
                            <nav class="navbar navbar-expand navbar-light">
                                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul class="navbar-nav menu">
                                        <li id="departamentos" class="nav-item dropdown">
                                            <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span class="navbar-toggler-icon fundo-ham"></span>
                                                <span id="categoria">Categorias</span>
                                            </a>
                                            <div class="dropdown-menu pt-0 pb-0" aria-labelledby="navbarDropdownMenuLink">
                                                <a class="dropdown-item itens-menu-show item-categoria"
                                                    href="#/login">{this.retornarCliente()}</a>
                                                <a class="dropdown-item itens-menu-show item-categoria" href="#/descontos">Ofertas</a>
                                                <a class="dropdown-item itens-menu-show item-categoria" href="#/novidades">Novidades</a>
                                                <a class="dropdown-item itens-menu-show item-categoria"
                                                    href="#/contato">Contato</a>
                                                <a class="dropdown-item item-categoria"
                                                    href="#/home">Meus pedidos</a>
                                                <span class="dropdown-item span-drop-down"
                                                    href="#">Categorias</span>
                                                <ListagemCategoria />
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </nav>

                            <div id="id_vlr2" class="div-quantidade">
                                {localStorage.getItem('qtd_cart')}
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div id="barra-pesquisa" class="borda-flex-tamanho">
                                    <div class="input-group mt-2">
                                        <input onChange={e=>this.capturarMudanca(e.target.value)} type="text" class="form-control tamanhoInput" placeholder="pesquise seu produto"
                                            aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <div class="input-group-append">
                                            <a href={"#/busca/"+this.state.keyword}  class="btn btn-outline-secondary bt-header-pesquisa" type="button"
                                                id="button-addon2"><img width="20px" height="20px"
                                                    src={require("../imagens/pesquisa.svg")} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />

            </>
        )
    }
}