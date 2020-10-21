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
    <article className="page-item">
        <nav className="barra-vermelha navbar navbar-expand">
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav diretorio ml-5">
                    <li className="nav-item active item-barra-vermelha">
                        <a className="nav-link texto-branco" href="../../home/html/home_flex.html"><span className="text-white">Home {st} </span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link texto-branco item-barra-vermelha" href="alimentos-basicos.html"><span className="text-white">Alimentos básicos {st} </span></a>
                    </li>
                </ul>
            </div>
        </nav>
       </article>
        <section className="container-alimentos">
            <article className="filtros">
                <div className="text-products">
                    <p id="txt-produtos">Mostrando 6 de 6 produtos</p>
                </div>
                <div className="dropdown-filtro">
                    <div className="btn-group-dp">
                        <button className="btn btn-secondary btn-sm dropdown-toggle bt-drop" type="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filtrar por:
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item " href="#">Até R$10,00</a>
                            <a className="dropdown-item " href="#">Até R$20,00</a>
                            <a className="dropdown-item " href="#">Até R$30,00</a>
                        </div>
                    </div>
                </div>
            </article>
            <article className="item article1">
                <a href="../../detalhe-produto/html/item-detalhado.html">
                    <img src={require("../imagens/arroz_ajustado.jpg")} height="110px" />
                </a>
                <div className="descricao-produto">
                    <a href="../../detalhe-produto/html/item-detalhado.html">
                        <p>Arroz Tipo 1 CAMIL Pacote 5kg</p>
                    </a>
                </div>
                <div className="preco-produto">
                    <h5>R$22,99</h5>
                </div>
                <div className="container-dos-botoes">
                    <input type="button" className="menos" value="-"/>
                    <input type="button" className="quant" value="0"/>
                    <input type="button" className="mais" value="+"/>
                    <input id="cart" type="image" src={require("../imagens/cart.png")}/>
                </div>
            </article>
           
            <article className="item article2">
                <a href="../../detalhe-produto/html/item-detalhado.html">
                    <img src={require("../imagens/arroz_ajustado.jpg")} height="110px" />
                </a>
                <div className="descricao-produto">
                    <a href="../../detalhe-produto/html/item-detalhado.html">
                        <p>Arroz Tipo 1 CAMIL Pacote 5kg</p>
                    </a>
                </div>
                <div className="preco-produto">
                    <h5>R$22,99</h5>
                </div>
                <div className="container-dos-botoes">
                    <input type="button" className="menos" value="-"/>
                    <input type="button" className="quant" value="0"/>
                    <input type="button" className="mais" value="+"/>
                    <input id="cart" type="image" src={require("../imagens/cart.png")}/>
                </div>
            </article>
           
            <article className="item article3">
                <a href="../../detalhe-produto/html/item-detalhado.html">
                    <img src={require("../imagens/arroz_ajustado.jpg")} height="110px" />
                </a>
                <div className="descricao-produto">
                    <a href="../../detalhe-produto/html/item-detalhado.html">
                        <p>Arroz Tipo 1 CAMIL Pacote 5kg</p>
                    </a>
                </div>
                <div className="preco-produto">
                    <h5>R$22,99</h5>
                </div>
                <div className="container-dos-botoes">
                    <input type="button" className="menos" value="-"/>
                    <input type="button" className="quant" value="0"/>
                    <input type="button" className="mais" value="+"/>
                    <input id="cart" type="image" src={require("../imagens/cart.png")}/>
                </div>
            </article>
           
            <article className="item article4">
                <a href="../../detalhe-produto/html/item-detalhado.html">
                    <img src={require("../imagens/arroz_ajustado.jpg")} height="110px" />
                </a>
                <div className="descricao-produto">
                    <a href="../../detalhe-produto/html/item-detalhado.html">
                        <p>Arroz Tipo 1 CAMIL Pacote 5kg</p>
                    </a>
                </div>
                <div className="preco-produto">
                    <h5>R$22,99</h5>
                </div>
                <div className="container-dos-botoes">
                    <input type="button" className="menos" value="-"/>
                    <input type="button" className="quant" value="0"/>
                    <input type="button" className="mais" value="+"/>
                    <input id="cart" type="image" src={require("../imagens/cart.png")}/>
                </div>
            </article>
            
            <article className="item article5">
                <a href="../../detalhe-produto/html/item-detalhado.html">
                    <img src={require("../imagens/arroz_ajustado.jpg")} height="110px" />
                </a>
                <div className="descricao-produto">
                    <a href="../../detalhe-produto/html/item-detalhado.html">
                        <p>Arroz Tipo 1 CAMIL Pacote 5kg</p>
                    </a>
                </div>
                <div className="preco-produto">
                    <h5>R$22,99</h5>
                </div>
                <div className="container-dos-botoes">
                    <input type="button" className="menos" value="-"/>
                    <input type="button" className="quant" value="0"/>
                    <input type="button" className="mais" value="+"/>
                    <input id="cart" type="image" src={require("../imagens/cart.png")}/>
                </div>
            </article>
            
            <article className="item article6">
                <a href="../../detalhe-produto/html/item-detalhado.html">
                    <img src={require("../imagens/arroz_ajustado.jpg")} height="110px" />
                </a>
                <div className="descricao-produto">
                    <a href="../../detalhe-produto/html/item-detalhado.html">
                        <p>Arroz Tipo 1 CAMIL Pacote 5kg</p>
                    </a>
                </div>
                <div className="preco-produto">
                    <h5>R$22,99</h5>
                </div>
                <div className="container-dos-botoes">
                    <input type="button" className="menos" value="-"/>
                    <input type="button" className="quant" value="0"/>
                    <input type="button" className="mais" value="+"/>
                    <input id="cart" type="image" src={require("../imagens/cart.png")}/>
                </div>
            </article>
        </section>
        <Footer />
        </>
    )
}