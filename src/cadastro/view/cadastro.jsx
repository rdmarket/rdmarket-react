import React from 'react'
import '../css/style-cadastro.css'
import '../css/styles.css'
import '../css/styles-barra-vermelha.css'
import Header from  '../../templates/header/header'
import Footer from  '../../templates/footer/footer'

export default () => {

    return (
        <>
        <Header />
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



            <div class="container mt-5">
                <div class="row">
                    <form class="col-12">
                        <h4>Cliente, bem vindo!</h4>
                        <div class="row">
                            <div class="form-group col-6">
                                <label for="nome">Nome:</label>
                                <input type="text" class="form-control" id="nome" />
                            </div>
                            <div class="form-group col-6">
                                <label for="sobrenome">Sobrenome:</label>
                                <input type="tex" class="form-control" id="sobrenome" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-4">
                                <label for="dataNascimento">Data de nascimento</label>
                                <input type="date" class="form-control" id="dataNascimento" />
                            </div>
                            <div class="form-group col-8">
                                <label for="email">E-mail</label>
                                <input type="email" class="form-control" id="email" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-6">
                                <label for="telefone">Telefone</label>
                                <input type="tel" class="form-control" id="telefone" placeholder="(--)____-____" />
                            </div>
                            <div class="form-group col-6">
                                <label for="celular">Celular</label>
                                <input type="tel" class="form-control" id="celular" placeholder="(--)_____-____" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-6">
                                <label for="cep">CEP:</label>
                                <input type="number" class="form-control" id="cep" />
                            </div>
                            <div class="form-group col-6">
                                <label for="bairro">Bairro:</label>
                                <input type="text" class="form-control" id="bairro" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-12">
                                <label for="endereco">Endereço:</label>
                                <input type="tex" class="form-control" id="endereco" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-6">
                                <label for="cidade">Cidade:</label>
                                <input type="tex" class="form-control" id="cidade" />
                            </div>
                            <div class="form-group col-6">
                                <label for="estado">Estado:</label>
                                <input type="text" class="form-control" id="estado" />
                            </div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <button type="button" class="btn btn-danger col-2">Limpar</button>
                            <a href="../../home/html/home_flex.html" type="button" class="btn btn-success col-6">Salvar</a>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )

}