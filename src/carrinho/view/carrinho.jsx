import React from 'react'
import '../css/barra-progresso.css'
import '../css/styles.css'
import '../css/styles-barra-vermelha.css'
import '../css/styles-carrinho.css'
import Footer from '../../templates/footer/footer'
import Item from '../../components/itemcarrinho'
import Total from '../../components/totalcarrinho'



export default () => {

    return (

        <>
            <div class="row justify-content-center mb-5">
                <div id="img-centro" class="col-md-2 col-5 col-sm-3">
                    <a href="../../home/html/home_flex.html"><img src={require("../imagens/logo.png")} /></a>
                </div>
            </div>
            <div id="barra-vermelha" class="d-flex flex-md-row justify-content-between align-items-center mt-3">
                <div class="ml-md-4 mr-md-0 ml-sm-5 ml-5">

                    <div id="div-faleConosco" class="dropdown">
                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <img class="img-phone" src={require("../imagens/headphones.svg")} />
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">(11)4002-8922</a>
                            <a class="dropdown-item" href="#">example@email.com</a>
                        </div>
                    </div>

                    <img class="img-phone textos" src={require("../imagens/headphones.svg")} />
                    <h3 id="faleConosco">Fale conosco</h3>
                </div>
                <div class="ml-md-2 mt-md-0  textos">
                    <img class="img-icon-phone img-icon" src={require("../imagens/call.svg")} />
                    <h3 class="font-cab-phone textos">(11)4002-8922</h3>
                </div>
                <div class="ml-md-2 mt-md-0 textos">
                    <img class="img-icon-email" src={require("../imagens/email.svg")} />
                    <h3 class="font-cab-email">example@email.com</h3>
                </div>
                <div class="ml-md-auto mt-md-0">
                    <img class="img-icon-shield" src={require("../imagens/shield.png")} />
                    <h3 class="font-cab-shield">Site seguro</h3>
                </div>
            </div>

            <div class="d-flex flex-row justify-content-center mt-3 mb-3">
                <div>
                    <img id="img-progresso" src={require("../imagens/barra-de-progresso-1.png")} />
                </div>
            </div>

            <div class="conteiner d-flex justify-content-center align-items-center">
                <div class="d-flex justify-content-center align-items-stretch" id="carrinho">
                    <ul class="ul-width">
                        <Item/>
                    </ul>
                </div>
            </div>
            <hr />
            <div class="row mr-5">
                <div class="finalizar w-100">
                    <ul class="modo-coluna">
                        <li>
                            <div class="total">
                                <Total/>
                            </div>
                        </li>
                        <li>
                            <div class="div-btn-comprar mt-3">
                                {/* aqui não pode estar o id do cliente e pedido fixado,
                                como vai ficar no local storage, depois tem que arrumar as rotas */}
                                <a href="#/checkout/confirmar/dados/1/1">
                                    <button class="btn-comprar">Fechar carrinho</button>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <Footer />
        </>
    )

}