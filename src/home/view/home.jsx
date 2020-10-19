import React, { Component } from 'react';
import '../css/home.css'
import Header from '../../templates/header/header'
import Footer from '../../templates/footer/footer'
export default class Home extends Component {

    state = {
        valor: 0
    }
    //tem que fazer a lógica do carrinho aqui :)
    somar = (n) => {
        // console.log(document.getElementById())
        this.setState({ valor: this.state.valor + 1 })
    }

    subtrair = () => {
        if (this.state.valor != 0)
            this.setState({ valor: this.state.valor - 1 })
    }

    render() {
        return (
            <>
                <Header />
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={require("../../templates/imagens/carrossel-ajustado/carrossel2-removebg (3).jpg")} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={require("../../templates/imagens/carrossel-ajustado/carrossel2-removebg.jpg")} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={require("../../templates/imagens/carrossel-ajustado/carrossel2-removebg (3).png")} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                <div class="container2">
                    <section class="linha1 all">
                        <div class="item1">
                            <figure class="imagem">
                                <img src={require("../../templates/imagens/arroz_ajustado.jpg")} />
                                <figcaption>Arroz Tipo 1 CAMIL<br /> Pacote 5kg</figcaption>
                                <h3 class="h3-align-text">R$22,79</h3>
                                <div class="containerBotoes">
                                    <input type="button" class="menos" value="-" />
                                    <input type="text" class="quant" placeholder="0" />
                                    <input type="button" class="mais" value="+" />
                                    <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                                </div>
                            </figure>
                        </div>
                        <div class="item2">
                            <figure class="imagem">
                                <a href="../../detalhe-produto/html/item-detalhado.html">
                                    <img src={require("../../templates/imagens/imagens-ajustadas/feijao.jpg")} />
                                </a>
                                <figcaption>Feijão Carioca Tipo 1<br />KICALDO Pacote 1kg</figcaption>
                                <h3 class="h3-align-text">R$7,99</h3>
                                <div class="containerBotoes">
                                    <input type="button" class="menos" value="-" />
                                    <input type="text" class="quant" placeholder="0" />
                                    <input type="button" class="mais" value="+" />
                                    <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                                </div>
                            </figure>
                        </div>
                        <div class="item3">
                            <figure class="imagem">
                                <img src={require("../../templates/imagens/imagens-ajustadas/macarrao.jpg")} />
                                <figcaption>Macarrão Italiano BARILLA<br />Pacote 500g</figcaption>
                                <h3 class="h3-align-text">R$4,09</h3>
                                <div class="containerBotoes">
                                    <input type="button" class="menos" value="-" />
                                    <input type="text" class="quant" placeholder="0" />
                                    <input type="button" class="mais" value="+" />
                                    <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                                </div>
                            </figure>
                        </div>
                        <div class="item4">
                            <figure class="imagem">
                                <img src={require("../../templates/imagens/arroz_ajustado.jpg")} />
                                <figcaption>Arroz Tipo 1 CAMIL<br /> Pacote 5kg</figcaption>
                                <h3 class="h3-align-text">R$22,79</h3>
                                <div class="containerBotoes">
                                    <input type="button" class="menos" value="-" />
                                    <input type="text" class="quant" placeholder="0" />
                                    <input type="button" class="mais" value="+" />
                                    <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                                </div>
                            </figure>
                        </div>
                        <div class="item5">
                            <figure class="imagem">
                                <a href="../../detalhe-produto/html/item-detalhado.html">
                                    <img src={require("../../templates/imagens/imagens-ajustadas/feijao.jpg")} />
                                </a>
                                <figcaption>Feijão Carioca Tipo 1<br />KICALDO Pacote 1kg</figcaption>
                                <h3 class="h3-align-text">R$7,99</h3>
                                <div class="containerBotoes">
                                    <input type="button" class="menos" value="-" />
                                    <input type="text" class="quant" placeholder="0" />
                                    <input type="button" class="mais" value="+" />
                                    <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                                </div>

                            </figure>
                        </div>
                    </section>
                    <section class="linhaDois all">
                        <div class="item6">
                            <figure class="imagem">
                                <img src={require("../../templates/imagens/imagens-ajustadas/hgiene-escova-dentalwebp.jpg")} />
                                <figcaption>Escova Dental Oral-B<br />Antibacteriana<br />2 Unidades</figcaption>
                                <h3 class="h3-align-text">R$19,99</h3>
                                <div class="containerBotoes">
                                    <input type="button" class="menos" value="-" />
                                    <input type="text" class="quant" placeholder="0" />
                                    <input type="button" class="mais" value="+" />
                                    <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                                </div>
                            </figure>
                        </div>
                        <div class="item7">
                            <figure class="imagem">
                                <img src={require("../../templates/imagens/imagens-ajustadas/higiene-dove.png")} />
                                <figcaption>Sabonete Líquido Dove<br />Nutrição Profunda 200ml</figcaption>
                                <h3 class="h3-align-text">R$7,99</h3>
                                <div class="containerBotoes">
                                    <input type="button" class="menos" value="-" />
                                    <input type="text" class="quant" placeholder="0" />
                                    <input type="button" class="mais" value="+" />
                                    <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                                </div>
                            </figure>
                        </div>
                        <div class="item8">
                            <figure class="imagem">
                                <img src={require("../../templates/imagens/imagens-ajustadas/higiene-dove.jpg")} />
                                <figcaption>Kit com 3 Desodorante DOVE<br />Invisible Dry 150ml Cada</figcaption>
                                <h3 class="h3-align-text">R$50,97</h3>
                                <div class="containerBotoes">
                                    <input type="button" class="menos" value="-" />
                                    <input type="text" class="quant" placeholder="0" />
                                    <input type="button" class="mais" value="+" />
                                    <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                                </div>
                            </figure>
                        </div>
                        <div class="item9">
                            <figure class="imagem">
                                <img src={require("../../templates/imagens/imagens-ajustadas/higiene-nivea.jpeg")} />
                                <figcaption>Desodorante Roll On Nívea<br /> Dry Impact 50ml</figcaption>
                                <h3 class="h3-align-text">R$7,99</h3>
                                <div class="containerBotoes">
                                    <input type="button" class="menos" value="-" />
                                    <input type="text" class="quant" placeholder="0" />
                                    <input type="button" class="mais" value="+" />
                                    <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                                </div>
                            </figure>
                        </div>
                        <div class="item10">
                            <figure class="imagem">
                                <img src={require("../../templates/imagens/imagens-ajustadas/hgiene-escova-dentalwebp.jpg")} />
                                <figcaption>Escova Dental Oral-B<br />Antibacteriana<br />2 Unidades</figcaption>
                                <h3 class="h3-align-text">R$19,99</h3>
                                <div class="containerBotoes">
                                    <input type="button" class="menos" value="-" />
                                    <input type="text" class="quant" placeholder="0" />
                                    <input type="button" class="mais" value="+" />
                                    <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                                </div>
                            </figure>
                        </div>
                    </section>
                    <section class="linhaTres all">
                        <div class="item11">
                            <figure class="imagem">
                                <img src={require("../../templates/imagens/imagens-ajustadas/limpeza-brilhante.jpg")} />
                                <figcaption>Sabão Líquido Brilhante<br />Limpeza Total 3L</figcaption>
                                <h3 class="h3-align-text">R$22,99</h3>
                                <div class="containerBotoes">
                                    <input type="button" class="menos" value="-" />
                                    <input type="text" class="quant" placeholder="0" />
                                    <input type="button" class="mais" value="+" />
                                    <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                                </div>
                            </figure>
                        </div>
                        <div class="item12">
                            <figure class="imagem">
                                <img src={require("../../templates/imagens/imagens-ajustadas/limpeza-desinfetante.jpg")} />
                                <figcaption>Desinfetante KALIPTO<br />Marine 2 Litros</figcaption>
                                <h3 class="h3-align-text">R$9,49</h3>
                                <div class="containerBotoes">
                                    <input type="button" class="menos" value="-" />
                                    <input type="text" class="quant" placeholder="0" />
                                    <input type="button" class="mais" value="+" />
                                    <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                                </div>
                            </figure>
                        </div>
                        <div class="item13">
                            <figure class="imagem">
                                <img src={require("../../templates/imagens/imagens-ajustadas/Limpeza-omo.jpg")} />
                                <figcaption>Sabão em Pó Omo Leve<br />1,6kg Pague 1,4kg</figcaption>
                                <h3 class="h3-align-text">R$16,89</h3>
                                <div class="containerBotoes">
                                    <input type="button" class="menos" value="-" />
                                    <input type="text" class="quant" placeholder="0" />
                                    <input type="button" class="mais" value="+" />
                                    <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                                </div>
                            </figure>
                        </div>
                        <div class="item14">
                            <figure class="imagem">
                                <img src={require("../../templates/imagens/imagens-ajustadas/limpeza-brilhante.jpg")} />
                                <figcaption>Sabão Líquido Brilhante<br />Limpeza Total 3L</figcaption>
                                <h3 class="h3-align-text">R$22,99</h3>
                                <div class="containerBotoes">
                                    <input type="button" class="menos" value="-" />
                                    <input type="text" class="quant" placeholder="0" />
                                    <input type="button" class="mais" value="+" />
                                    <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                                </div>
                            </figure>
                        </div>
                        <div class="item15">
                            <figure class="imagem">
                                <img src={require("../../templates/imagens/imagens-ajustadas/limpeza-desinfetante.jpg")} />
                                <figcaption>Desinfetante KALIPTO<br />Marine 2 Litros</figcaption>
                                <h3 class="h3-align-text">R$9,49</h3>
                                <div class="containerBotoes">
                                    <input type="button" class="menos" value="-" />
                                    <input type="text" class="quant" placeholder="0" />
                                    <input type="button" class="mais" value="+" />
                                    <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                                </div>
                            </figure>
                        </div>

                    </section>
                    <section class="linhaQuatro all">
                        <div class="item16">
                            <figure class="imagem">
                                <img src={require("../../templates/imagens/arroz_ajustado.jpg")} />
                                <figcaption>Arroz Tipo 1 CAMIL<br /> Pacote 5kg</figcaption>
                                <h3 class="h3-align-text">R$22,99</h3>
                                <div class="containerBotoes">
                                    <input type="button" class="menos" value="-" />
                                    <input type="text" class="quant" placeholder="0" />
                                    <input type="button" class="mais" value="+" />
                                    <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                                </div>
                            </figure>
                        </div>
                        <div class="item17">
                            <figure class="imagem">
                                <img src={require("../../templates/imagens/imagens-ajustadas/feijao.jpg")} />
                                <figcaption>Feijão Carioca Tipo 1<br />KICALDO Pacote 1kg</figcaption>
                                <h3 class="h3-align-text">R$7,49</h3>
                                <div class="containerBotoes">
                                    <input type="button" class="menos" value="-" />
                                    <input type="text" class="quant" placeholder="0" />
                                    <input type="button" class="mais" value="+" />
                                    <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                                </div>
                            </figure>
                        </div>
                        <div class="item18">
                            <figure class="imagem">
                                <img src={require("../../templates/imagens/imagens-ajustadas/macarrao.jpg")} />
                                <figcaption>Macarrão Italiano BARILLA<br />Pacote 500g</figcaption>
                                <h3 class="h3-align-text">R$4,09</h3>
                                <div class="containerBotoes">
                                    <input type="button" class="menos" value="-" />
                                    <input type="text" class="quant" placeholder="0" />
                                    <input type="button" class="mais" value="+" />
                                    <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                                </div>
                            </figure>
                        </div>
                        <div class="item19">
                            <figure class="imagem">
                                <img src={require("../../templates/imagens/arroz_ajustado.jpg")} />
                                <figcaption>Arroz Tipo 1 CAMIL<br /> Pacote 5kg</figcaption>
                                <h3 class="h3-align-text">R$22,99</h3>
                                <div class="containerBotoes">
                                    <input type="button" class="menos" value="-" />
                                    <input type="text" class="quant" placeholder="0" />
                                    <input type="button" class="mais" value="+" />
                                    <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                                </div>
                            </figure>
                        </div>
                        <div class="item20">
                            <figure class="imagem">
                                <img src={require("../../templates/imagens/imagens-ajustadas/feijao.jpg")} />
                                <figcaption>Feijão Carioca Tipo 1<br />KICALDO Pacote 1kg</figcaption>
                                <h3 class="h3-align-text">R$7,49</h3>
                                <div class="containerBotoes">
                                    <input type="button" class="menos" value="-" />
                                    <input type="text" class="quant" placeholder="0" />
                                    <input type="button" class="mais" value="+" />
                                    <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                                </div>
                            </figure>
                        </div>
                    </section>

                </div>
                <Footer />
            </>
        )
    }

}