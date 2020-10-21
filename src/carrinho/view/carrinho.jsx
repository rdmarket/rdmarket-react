import React from 'react'
import '../css/barra-progresso.css'
import '../css/styles.css'
import '../css/styles-barra-vermelha.css'
import '../css/styles-carrinho.css'
import Footer from '../../templates/footer/footer'

export default () => {

    return (

        <>
            <div className="row justify-content-center mb-5">
                <div id="img-centro" className="col-md-2 col-5 col-sm-3">
                    <a href="../../home/html/home_flex.html"><img src={require("../imagens/logo.png")} /></a>
                </div>
            </div>
            <div id="barra-vermelha" className="d-flex flex-md-row justify-content-between align-items-center mt-3">
                <div className="ml-md-4 mr-md-0 ml-sm-5 ml-5">

                    <div id="div-faleConosco" className="dropdown">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <img className="img-phone" src={require("../imagens/headphones.svg")} />
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">(11)4002-8922</a>
                            <a className="dropdown-item" href="#">example@email.com</a>
                        </div>
                    </div>

                    <img className="img-phone textos" src={require("../imagens/headphones.svg")} />
                    <h3 id="faleConosco">Fale conosco</h3>
                </div>
                <div className="ml-md-2 mt-md-0  textos">
                    <img className="img-icon-phone img-icon" src={require("../imagens/call.svg")} />
                    <h3 className="font-cab-phone textos">(11)4002-8922</h3>
                </div>
                <div className="ml-md-2 mt-md-0 textos">
                    <img className="img-icon-email" src={require("../imagens/email.svg")} />
                    <h3 className="font-cab-email">example@email.com</h3>
                </div>
                <div className="ml-md-auto mt-md-0">
                    <img className="img-icon-shield" src={require("../imagens/shield.png")} />
                    <h3 className="font-cab-shield">Site seguro</h3>
                </div>
            </div>

            <div className="d-flex flex-row justify-content-center mt-3 mb-3">
                <div>
                    <img id="img-progresso" src={require("../imagens/barra-de-progresso-1.png")} />
                </div>
            </div>

            <div className="conteiner d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-items-stretch" id="carrinho">
                    <ul className="ul-width">
                        <li>
                            <ul className="d-flex justify-content-around tamanho-carrinho">
                                <li>
                                    <div id="imagem-carrinho">
                                        <img src={require("../imagens/feijao.png")} alt="..." className="img-thumbnail grande-img" />
                                    </div>
                                </li>
                                <li><h1 className="tamanho-titulo mt-4">Feijão Carioca Kicaldo - Tipo 1 Pacote 1 Kg</h1></li>
                                <li className="preco mt-4">R$ 7,99</li>
                                <ul className="qtde-item-carrinho d-flex">
                                    <li><button className="btn-qtde menos mt-3">-</button></li>
                                    <li>
                                        <ul className="display-qtde text-center mt-1">
                                            <li className="qtde-item" id="descricao-qtde">Qtd:</li>
                                            <li className="qtde-item" id="qtde">1</li>
                                        </ul>
                                    </li>
                                    <li><button className="btn-qtde mais mt-3">+</button></li>
                                </ul>
                                <li><button className="btn-excluir mt-4"><img id="img-excluir" src={require("../imagens/lixo.png")} /></button></li>
                            </ul>
                        </li>
                        <li>
                            <ul className="d-flex justify-content-around tamanho-carrinho">
                                <li>
                                    <div id="imagem-carrinho">
                                        <img src={require("../imagens/feijao.png")} alt="..." className="img-thumbnail grande-img" />
                                    </div>
                                </li>
                                <li><h1 className="tamanho-titulo mt-4">Feijão Carioca Kicaldo - Tipo 1 Pacote 1 Kg</h1></li>
                                <li className="preco mt-4">R$ 7,99</li>
                                <ul className="qtde-item-carrinho d-flex">
                                    <li><button className="btn-qtde menos mt-3">-</button></li>
                                    <li>
                                        <ul className="display-qtde text-center mt-1">
                                            <li className="qtde-item" id="descricao-qtde">Qtd:</li>
                                            <li className="qtde-item" id="qtde">1</li>
                                        </ul>
                                    </li>
                                    <li><button className="btn-qtde mais mt-3">+</button></li>
                                </ul>
                                <li><button className="btn-excluir mt-4"><img id="img-excluir" src={require("../imagens/lixo.png")} /></button></li>
                            </ul>
                        </li>
                        <li>
                            <ul className="d-flex justify-content-around tamanho-carrinho">
                                <li>
                                    <div id="imagem-carrinho">
                                        <img src={require("../imagens/feijao.png")} alt="..." className="img-thumbnail grande-img" />
                                    </div>
                                </li>
                                <li><h1 className="tamanho-titulo mt-4">Feijão Carioca Kicaldo - Tipo 1 Pacote 1 Kg</h1></li>
                                <li className="preco mt-4">R$ 7,99</li>
                                <ul className="qtde-item-carrinho d-flex">
                                    <li><button className="btn-qtde menos mt-3">-</button></li>
                                    <li>
                                        <ul className="display-qtde text-center mt-1">
                                            <li className="qtde-item" id="descricao-qtde">Qtd:</li>
                                            <li className="qtde-item" id="qtde">1</li>
                                        </ul>
                                    </li>
                                    <li><button className="btn-qtde mais mt-3">+</button></li>
                                </ul>
                                <li><button className="btn-excluir mt-4"><img id="img-excluir" src={require("../imagens/lixo.png")} /></button></li>
                            </ul>
                        </li>
                        <li>
                            <ul className="d-flex justify-content-around tamanho-carrinho">
                                <li>
                                    <div id="imagem-carrinho">
                                        <img src={require("../imagens/feijao.png")} alt="..." className="img-thumbnail grande-img" />
                                    </div>
                                </li>
                                <li><h1 className="tamanho-titulo mt-4">Feijão Carioca Kicaldo - Tipo 1 Pacote 1 Kg</h1></li>
                                <li className="preco mt-4">R$ 7,99</li>
                                <ul className="qtde-item-carrinho d-flex">
                                    <li><button className="btn-qtde menos mt-3">-</button></li>
                                    <li>
                                        <ul className="display-qtde text-center mt-1">
                                            <li className="qtde-item" id="descricao-qtde">Qtd:</li>
                                            <li className="qtde-item" id="qtde">1</li>
                                        </ul>
                                    </li>
                                    <li><button className="btn-qtde mais mt-3">+</button></li>
                                </ul>
                                <li><button className="btn-excluir mt-4"><img id="img-excluir" src={require("../imagens/lixo.png")} /></button></li>
                            </ul>
                        </li>
                        <li>
                            <ul className="d-flex justify-content-around tamanho-carrinho">
                                <li>
                                    <div id="imagem-carrinho">
                                        <img src={require("../imagens/feijao.png")} alt="..." className="img-thumbnail grande-img" />
                                    </div>
                                </li>
                                <li><h1 className="tamanho-titulo mt-4">Feijão Carioca Kicaldo - Tipo 1 Pacote 1 Kg</h1></li>
                                <li className="preco mt-4">R$ 7,99</li>
                                <ul className="qtde-item-carrinho d-flex">
                                    <li><button className="btn-qtde menos mt-3">-</button></li>
                                    <li>
                                        <ul className="display-qtde text-center mt-1">
                                            <li className="qtde-item" id="descricao-qtde">Qtd:</li>
                                            <li className="qtde-item" id="qtde">1</li>
                                        </ul>
                                    </li>
                                    <li><button className="btn-qtde mais mt-3">+</button></li>
                                </ul>
                                <li><button className="btn-excluir mt-4"><img id="img-excluir" src={require("../imagens/lixo.png")} /></button></li>
                            </ul>
                        </li>
                        <li>
                            <ul className="d-flex justify-content-around tamanho-carrinho">
                                <li>
                                    <div id="imagem-carrinho">
                                        <img src={require("../imagens/feijao.png")} alt="..." className="img-thumbnail grande-img" />
                                    </div>
                                </li>
                                <li><h1 className="tamanho-titulo mt-4">Feijão Carioca Kicaldo - Tipo 1 Pacote 1 Kg</h1></li>
                                <li className="preco mt-4">R$ 7,99</li>
                                <ul className="qtde-item-carrinho d-flex">
                                    <li><button className="btn-qtde menos mt-3">-</button></li>
                                    <li>
                                        <ul className="display-qtde text-center mt-1">
                                            <li className="qtde-item" id="descricao-qtde">Qtd:</li>
                                            <li className="qtde-item" id="qtde">1</li>
                                        </ul>
                                    </li>
                                    <li><button className="btn-qtde mais mt-3">+</button></li>
                                </ul>
                                <li><button className="btn-excluir mt-4"><img id="img-excluir" src={require("../imagens/lixo.png")} /></button></li>
                            </ul>
                        </li>
                        <li>
                            <ul className="d-flex justify-content-around tamanho-carrinho">
                                <li>
                                    <div id="imagem-carrinho">
                                        <img src={require("../imagens/feijao.png")} alt="..." className="img-thumbnail grande-img" />
                                    </div>
                                </li>
                                <li><h1 className="tamanho-titulo mt-4">Feijão Carioca Kicaldo - Tipo 1 Pacote 1 Kg</h1></li>
                                <li className="preco mt-4">R$ 7,99</li>
                                <ul className="qtde-item-carrinho d-flex">
                                    <li><button className="btn-qtde menos mt-3">-</button></li>
                                    <li>
                                        <ul className="display-qtde text-center mt-1">
                                            <li className="qtde-item" id="descricao-qtde">Qtd:</li>
                                            <li className="qtde-item" id="qtde">1</li>
                                        </ul>
                                    </li>
                                    <li><button className="btn-qtde mais mt-3">+</button></li>
                                </ul>
                                <li><button className="btn-excluir mt-4"><img id="img-excluir" src={require("../imagens/lixo.png")} /></button></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="row mr-5">
                <div className="finalizar w-100">
                    <ul className="modo-coluna">
                        <li>
                            <div className="total">
                                <h2 id="valor">Total: R$ 100,00</h2>
                            </div>
                        </li>
                        <li>
                            <div className="div-btn-comprar mt-3">
                                <a href="../../checkout/html/checkout-pagamento.html">
                                    <button className="btn-comprar">Finalizar a compra</button>
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