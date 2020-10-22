import React from 'react'
import ListagemCategoria from './listagemCategoria'

export default () => {

    return (

        <>
            <div class="container tela-grande">
                <div class="d-flex justify-content-between mt-5">
                    <div class="borda-flex">
                        <a id="topo" href="../../home/html/home_flex.html"><img id="logo-img" src={require('../imagens/logo.png')}
                            type="img" /></a>

                    </div>
                    <div id="barra-pesquisa" class="borda-flex-tamanho">
                        <div class="input-group mb-3 mt-5">
                            <input type="text" class="form-control tamanhoInput" placeholder="pesquise seu produto"
                                aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary bt-header-pesquisa" type="button"
                                    id="button-addon2"><img width="20px" height="20px" src={require("../imagens/pesquisa.svg")} /></button>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5">
                        <a href="../../login/html/login.html"><button class="bt-header"><img class="img-icones"
                            src={require("../imagens/conta.svg")} /><span class="fonte-forte">Conta</span></button></a>
                    </div>
                    <div class="mt-5 ">

                        <div class="div-carrinho">
                            <a href="../../carrinho/html/carrinho.html"><button class="bt-header"><img class="img-icones"
                                src={require("../imagens/carrinho.svg")} /></button>
                            </a>
                        </div>
                        <div class="div-quantidade">
                            0
                </div>
                        <div class="div-fonte">
                            <span class="fonte-carrinho-total fonte-forte">Total: R$&lt total &gt</span>
                        </div>
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
                                            aria-labelledby="navbardDropdownMenuLink">
                                            <a class="dropdown-item itens-menu-show item-categoria" href="#">Ofertas</a>
                                            <a class="dropdown-item itens-menu-show item-categoria" href="#">Novidades</a>
                                            <a class="dropdown-item itens-menu-show item-categoria" href="#">Descontos</a>
                                           <ListagemCategoria/>
                                        </div>
                                    </li>
                                    <li class="nav-item itens-menu">
                                        <a href="#/descontos" class="nav-link">Ofertas</a>
                                    </li>
                                    <li class="nav-item itens-menu">
                                        <a href="#/novidades" class="nav-link">Novidades</a>
                                    </li>
                                    
                                    <li class="nav-item itens-menu">
                                        <a class="nav-link" href="../../formulario-contato/html/contato.html">Contato</a>
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
                                                href="../../login/html/login.html">Conta</a>
                                            <a class="dropdown-item itens-menu-show item-categoria" href="#">Ofertas</a>
                                            <a class="dropdown-item itens-menu-show item-categoria" href="#">Novidades</a>
                                            <a class="dropdown-item itens-menu-show item-categoria"
                                                href="../../formulario-contato/html/contato.html">Contato</a>
                                            <a class="dropdown-item item-categoria"
                                                href="../../historico-compra/html/historico.html">Meus pedidos</a>
                                            <span class="dropdown-item span-drop-down"
                                                href="#">Categorias</span>
                                            <ListagemCategoria/>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div class="borda-flex">
                        <a id="topo" href="../../home/html/home_flex.html"><img id="logo-img" src={require("../imagens/logo.png")}
                            type="img" /></a>
                    </div>
                    <div class="mt-4 carrinho-tela-pequena">
                        <div class="div-carrinho">
                            <a href="../../carrinho/html/carrinho.html"><button class="bt-header"><img class="img-icones"
                                src={require("../imagens/carrinho.svg")} /></button></a>
                        </div>
                        <div class="div-quantidade">
                            0
                </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div id="barra-pesquisa" class="borda-flex-tamanho">
                            <div class="input-group mt-2">
                                <input type="text" class="form-control tamanhoInput" placeholder="pesquise seu produto"
                                    aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary bt-header-pesquisa" type="button"
                                        id="button-addon2"><img width="20px" height="20px"
                                            src={require("../imagens/pesquisa.svg")} /></button>
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