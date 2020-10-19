import React from 'react'
import '../css/stylelogin.css'
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


            <div class="container mt-5 tela-grande">
                <div class="row">
                    <form class="col-5">
                        <h4>Faça seu login:</h4>
                        <div class="form-group">
                            <label for="exampleInputEmail1" class="font-bold">Email cadastrado:</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="ex: nome@gmail.com" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1" class="font-bold">Senha:</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                            <button type="button" class="btn btn-link">Esqueci minha senha:</button>
                        </div>

                        <div class="d-flex justify-content-between">
                            <button type="button" class="btn btn-danger col-3 col-lg-2">Limpar</button>
                            <button type="button" class="btn btn-success col-5 col-lg-4">Entrar</button>
                        </div>
                    </form>


                    <div class="col-2">
                        <div class="d-flex flex-column align-center align-self-center">

                        </div>
                    </div>

                    <div class="col-5 ">
                        <div class="row justify-content-center mt-5">
                            <h4>Ainda não é nosso cliente?</h4>
                            <a href="../../cadastro/html/cadastro.html" type="button" class="btn btn-success col-12">Cadastre-se</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container tela-pequena mt-4">
                <div class="row">
                    <div class="col-12">
                        <form>
                            <h4>Faça seu login:</h4>
                            <div class="form-group col-12">
                                <label for="exampleInputEmail1" class="font-bold">Email cadastrado:</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    placeholder="ex: nome@gmail.com" />
                            </div>
                            <div class="form-group col-12">
                                <label for="exampleInputPassword1" class="font-bold">Senha:</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                                <button type="button" class="btn btn-link">Esqueci minha senha:</button>
                            </div>

                            <div class="d-flex justify-content-between">
                                <button type="button" class="btn btn-danger col-3">Limpar</button>
                                <button type="button" class="btn btn-success col-6">Entrar</button>
                            </div>
                        </form>
                        <hr />
                        <div class="d-flex justify-content-center">
                            <a href="../../cadastro/html/cadastro.html" type="button" class="btn btn-success col-12">Cadastre-se</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}