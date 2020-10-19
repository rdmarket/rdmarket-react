import React from 'react'
import '../css/styles copy.css'
import '../css/styles-cat-alimentos.css'
import '../css/styles-filtro.css'
import '../css/styles-item-detalhado.css'
import '../css/styles-media-queries.css'
import Header from  '../../templates/header/header'
import Footer from  '../../templates/footer/footer'

export default () => {

    let st = ">";

    return (
        <>
    <Header />
    <article class="page-item">
        <nav class="barra-vermelha navbar navbar-expand">
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav diretorio ml-5">
                    <li class="nav-item active item-barra-vermelha">
                        <a class="nav-link texto-branco" href="../../home/html/home_flex.html"><span class="text-white">Home {st} </span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link texto-branco item-barra-vermelha" href="alimentos-basicos.html"><span class="text-white">Alimentos básicos {st} </span></a>
                    </li>
                </ul>
            </div>
        </nav>
       </article>
        <section class="container-alimentos">
            <article class="filtros">
                <div class="text-products">
                    <p id="txt-produtos">Mostrando 6 de 6 produtos</p>
                </div>
                <div class="dropdown-filtro">
                    <div class="btn-group-dp">
                        <button class="btn btn-secondary btn-sm dropdown-toggle bt-drop" type="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filtrar por:
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item " href="#">Até R$10,00</a>
                            <a class="dropdown-item " href="#">Até R$20,00</a>
                            <a class="dropdown-item " href="#">Até R$30,00</a>
                        </div>
                    </div>
                </div>
            </article>
            <article class="item article1">
                <a href="../../detalhe-produto/html/item-detalhado.html">
                    <img src={require("../imagens/arroz_ajustado.jpg")} height="110px" />
                </a>
                <div class="descricao-produto">
                    <a href="../../detalhe-produto/html/item-detalhado.html">
                        <p>Arroz Tipo 1 CAMIL Pacote 5kg</p>
                    </a>
                </div>
                <div class="preco-produto">
                    <h5>R$22,99</h5>
                </div>
                <div class="container-dos-botoes">
                    <input type="button" class="menos" value="-"/>
                    <input type="button" class="quant" value="0"/>
                    <input type="button" class="mais" value="+"/>
                    <input id="cart" type="image" src={require("../imagens/cart.png")}/>
                </div>
            </article>
           
            <article class="item article2">
                <a href="../../detalhe-produto/html/item-detalhado.html">
                    <img src={require("../imagens/arroz_ajustado.jpg")} height="110px" />
                </a>
                <div class="descricao-produto">
                    <a href="../../detalhe-produto/html/item-detalhado.html">
                        <p>Arroz Tipo 1 CAMIL Pacote 5kg</p>
                    </a>
                </div>
                <div class="preco-produto">
                    <h5>R$22,99</h5>
                </div>
                <div class="container-dos-botoes">
                    <input type="button" class="menos" value="-"/>
                    <input type="button" class="quant" value="0"/>
                    <input type="button" class="mais" value="+"/>
                    <input id="cart" type="image" src={require("../imagens/cart.png")}/>
                </div>
            </article>
           
            <article class="item article3">
                <a href="../../detalhe-produto/html/item-detalhado.html">
                    <img src={require("../imagens/arroz_ajustado.jpg")} height="110px" />
                </a>
                <div class="descricao-produto">
                    <a href="../../detalhe-produto/html/item-detalhado.html">
                        <p>Arroz Tipo 1 CAMIL Pacote 5kg</p>
                    </a>
                </div>
                <div class="preco-produto">
                    <h5>R$22,99</h5>
                </div>
                <div class="container-dos-botoes">
                    <input type="button" class="menos" value="-"/>
                    <input type="button" class="quant" value="0"/>
                    <input type="button" class="mais" value="+"/>
                    <input id="cart" type="image" src={require("../imagens/cart.png")}/>
                </div>
            </article>
           
            <article class="item article4">
                <a href="../../detalhe-produto/html/item-detalhado.html">
                    <img src={require("../imagens/arroz_ajustado.jpg")} height="110px" />
                </a>
                <div class="descricao-produto">
                    <a href="../../detalhe-produto/html/item-detalhado.html">
                        <p>Arroz Tipo 1 CAMIL Pacote 5kg</p>
                    </a>
                </div>
                <div class="preco-produto">
                    <h5>R$22,99</h5>
                </div>
                <div class="container-dos-botoes">
                    <input type="button" class="menos" value="-"/>
                    <input type="button" class="quant" value="0"/>
                    <input type="button" class="mais" value="+"/>
                    <input id="cart" type="image" src={require("../imagens/cart.png")}/>
                </div>
            </article>
            
            <article class="item article5">
                <a href="../../detalhe-produto/html/item-detalhado.html">
                    <img src={require("../imagens/arroz_ajustado.jpg")} height="110px" />
                </a>
                <div class="descricao-produto">
                    <a href="../../detalhe-produto/html/item-detalhado.html">
                        <p>Arroz Tipo 1 CAMIL Pacote 5kg</p>
                    </a>
                </div>
                <div class="preco-produto">
                    <h5>R$22,99</h5>
                </div>
                <div class="container-dos-botoes">
                    <input type="button" class="menos" value="-"/>
                    <input type="button" class="quant" value="0"/>
                    <input type="button" class="mais" value="+"/>
                    <input id="cart" type="image" src={require("../imagens/cart.png")}/>
                </div>
            </article>
            
            <article class="item article6">
                <a href="../../detalhe-produto/html/item-detalhado.html">
                    <img src={require("../imagens/arroz_ajustado.jpg")} height="110px" />
                </a>
                <div class="descricao-produto">
                    <a href="../../detalhe-produto/html/item-detalhado.html">
                        <p>Arroz Tipo 1 CAMIL Pacote 5kg</p>
                    </a>
                </div>
                <div class="preco-produto">
                    <h5>R$22,99</h5>
                </div>
                <div class="container-dos-botoes">
                    <input type="button" class="menos" value="-"/>
                    <input type="button" class="quant" value="0"/>
                    <input type="button" class="mais" value="+"/>
                    <input id="cart" type="image" src={require("../imagens/cart.png")}/>
                </div>
            </article>
        </section>
        <Footer />
        </>
    )
}