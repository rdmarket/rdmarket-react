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


            <div className="container mt-5 tela-grande">
                <div className="row">
                    <form className="col-5">
                        <h4>Faça seu login:</h4>
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="font-bold">Email cadastrado:</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="ex: nome@gmail.com" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1" className="font-bold">Senha:</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                            <button type="button" className="btn btn-link">Esqueci minha senha:</button>
                        </div>

                        <div className="d-flex justify-content-between">
                            <button type="button" className="btn btn-danger col-3 col-lg-2">Limpar</button>
                            <button type="button" className="btn btn-success col-5 col-lg-4">Entrar</button>
                        </div>
                    </form>


                    <div className="col-2">
                        <div className="d-flex flex-column align-center align-self-center">

                        </div>
                    </div>

                    <div className="col-5 ">
                        <div className="row justify-content-center mt-5">
                            <h4>Ainda não é nosso cliente?</h4>
                            <a href="../../cadastro/html/cadastro.html" type="button" className="btn btn-success col-12">Cadastre-se</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container tela-pequena mt-4">
                <div className="row">
                    <div className="col-12">
                        <form>
                            <h4>Faça seu login:</h4>
                            <div className="form-group col-12">
                                <label for="exampleInputEmail1" className="font-bold">Email cadastrado:</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    placeholder="ex: nome@gmail.com" />
                            </div>
                            <div className="form-group col-12">
                                <label for="exampleInputPassword1" className="font-bold">Senha:</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                                <button type="button" className="btn btn-link">Esqueci minha senha:</button>
                            </div>

                            <div className="d-flex justify-content-between">
                                <button type="button" className="btn btn-danger col-3">Limpar</button>
                                <button type="button" className="btn btn-success col-6">Entrar</button>
                            </div>
                        </form>
                        <hr />
                        <div className="d-flex justify-content-center">
                            <a href="../../cadastro/html/cadastro.html" type="button" className="btn btn-success col-12">Cadastre-se</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}