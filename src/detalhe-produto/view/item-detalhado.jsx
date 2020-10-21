import React from 'react'
import '../css/barra-progresso.css'
import '../css/styles.css'
import '../css/styles-barra-vermelha.css'
import '../css/styles-item-detalhado.css'
import Header from  '../../templates/header/header'
import Footer from  '../../templates/footer/footer'

export default () => {

    let str = ">";

    return (
        <>
            <Header />
            <article className="page-item">
                <nav className="barra-vermelha navbar navbar-expand">
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav diretorio ml-5">
                            <li className="nav-item active item-barra-vermelha">
                                <a className="nav-link texto-branco" href="#">Home {str}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link texto-branco item-barra-vermelha" href="#">Grãos e Cereais {str}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link texto-branco item-barra-vermelha" href="#">Feijão {str}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link texto-branco" id="titulo-item" href="#">Feijão Carioca Kicaldo - Tipo 1 Pacote 1 Kg</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-2 miniaturas-responsivo" id="container-imagem">
                            <div className="miniaturas mt-3">
                                <ul>
                                    <li><img src={require("../imagens/feijao.png")} alt="..." className="img-thumbnail pequenas-img mt-4" /></li>
                                    <li><img src={require("../imagens/feijao.png")} alt="..." className="img-thumbnail pequenas-img mt-4" /></li>
                                    <li><img src={require("../imagens/feijao.png")} alt="..." className="img-thumbnail pequenas-img mt-4" /></li>
                                    <li><img src={require("../imagens/feijao.png")} alt="..." className="img-thumbnail pequenas-img mt-4" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-5 col-lg-3 miniaturas-responsivo">
                            <div className="imagem-maior mt-3">
                                <img src={require("../imagens/feijao.png")} alt="..." className="img-thumbnail grande-img" />
                            </div>
                        </div>
                        <div className="col-12 col-md-7">
                            <div className="titulo-produto mt-2">
                                <ul className="mt-4">
                                    <h1 className="mt-2 tamanho-titulo">Feijão Carioca Kicaldo - Tipo 1 Pacote 1 Kg</h1>
                                    <span className="codigo-produto mt-3">Cod.: 123456</span>
                                    <div className="imagem-maior mt-3" id="imagem-grande-responsivo">
                                        <img src={require("../imagens/feijao.png")} alt="..." className="img-thumbnail grande-img" />
                                    </div>
                                </ul>
                                <ul className="mt-5">
                                    <li className="preco">R$ 7,99</li>
                                </ul>
                                <ul className="mt-5 qtde-carrinho d-flex">
                                    <li><button className="btn-qtde menos">-</button></li>
                                    <li><ul className="display-qtde">
                                        <li>Qtd:</li>
                                        <li className="qtde-item">1</li>
                                    </ul></li>
                                    <li><button className="btn-qtde mais">+</button></li>
                                    <li><button className="btn-cart ml-5"><img id="cart-item" src={require("../imagens/cart-item.png")} /></button></li>
                                    <li id="descricao" className="ml-1">Adicionar o item ao carrinho.</li>
                                </ul>
                                <div className="div-btn-comprar mt-5">
                                    <a href="../../carrinho/html/carrinho.html"><button className="btn-comprar">Ir para o carrinho</button></a>
                                </div>
                            </div>
                        </div>
                        <div className="row ml-2 mt-5 mb-5">
                            <ul>
                                <li><h4>Descrição do Produto</h4></li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi sem, vestibulum sit amet dignissim a, elementum ac diam. Vivamus sodales interdum quam, non blandit metus rutrum vitae. Proin non ante sit amet leo interdum condimentum at mattis purus. Cras faucibus purus ligula, sed efficitur odio semper nec. Integer ac placerat mauris. Sed non interdum sapien. Suspendisse luctus ipsum id nisl condimentum facilisis.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </>
    )
}