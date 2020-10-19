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
            <article class="page-item">
                <nav class="barra-vermelha navbar navbar-expand">
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav diretorio ml-5">
                            <li class="nav-item active item-barra-vermelha">
                                <a class="nav-link texto-branco" href="#">Home {str}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link texto-branco item-barra-vermelha" href="#">Grãos e Cereais {str}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link texto-branco item-barra-vermelha" href="#">Feijão {str}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link texto-branco" id="titulo-item" href="#">Feijão Carioca Kicaldo - Tipo 1 Pacote 1 Kg</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="container">
                    <div class="row">
                        <div class="col-2 miniaturas-responsivo" id="container-imagem">
                            <div class="miniaturas mt-3">
                                <ul>
                                    <li><img src={require("../imagens/feijao.png")} alt="..." class="img-thumbnail pequenas-img mt-4" /></li>
                                    <li><img src={require("../imagens/feijao.png")} alt="..." class="img-thumbnail pequenas-img mt-4" /></li>
                                    <li><img src={require("../imagens/feijao.png")} alt="..." class="img-thumbnail pequenas-img mt-4" /></li>
                                    <li><img src={require("../imagens/feijao.png")} alt="..." class="img-thumbnail pequenas-img mt-4" /></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-5 col-lg-3 miniaturas-responsivo">
                            <div class="imagem-maior mt-3">
                                <img src={require("../imagens/feijao.png")} alt="..." class="img-thumbnail grande-img" />
                            </div>
                        </div>
                        <div class="col-12 col-md-7">
                            <div class="titulo-produto mt-2">
                                <ul class="mt-4">
                                    <h1 class="mt-2 tamanho-titulo">Feijão Carioca Kicaldo - Tipo 1 Pacote 1 Kg</h1>
                                    <span class="codigo-produto mt-3">Cod.: 123456</span>
                                    <div class="imagem-maior mt-3" id="imagem-grande-responsivo">
                                        <img src={require("../imagens/feijao.png")} alt="..." class="img-thumbnail grande-img" />
                                    </div>
                                </ul>
                                <ul class="mt-5">
                                    <li class="preco">R$ 7,99</li>
                                </ul>
                                <ul class="mt-5 qtde-carrinho d-flex">
                                    <li><button class="btn-qtde menos">-</button></li>
                                    <li><ul class="display-qtde">
                                        <li>Qtd:</li>
                                        <li class="qtde-item">1</li>
                                    </ul></li>
                                    <li><button class="btn-qtde mais">+</button></li>
                                    <li><button class="btn-cart ml-5"><img id="cart-item" src={require("../imagens/cart-item.png")} /></button></li>
                                    <li id="descricao" class="ml-1">Adicionar o item ao carrinho.</li>
                                </ul>
                                <div class="div-btn-comprar mt-5">
                                    <a href="../../carrinho/html/carrinho.html"><button class="btn-comprar">Ir para o carrinho</button></a>
                                </div>
                            </div>
                        </div>
                        <div class="row ml-2 mt-5 mb-5">
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