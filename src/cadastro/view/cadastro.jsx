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



            <div className="container mt-5">
                <div className="row">
                    <form className="col-12">
                        <h4>Cliente, bem vindo!</h4>
                        <div className="row">
                            <div className="form-group col-6">
                                <label for="nome">Nome:</label>
                                <input type="text" className="form-control" id="nome" />
                            </div>
                            <div className="form-group col-6">
                                <label for="sobrenome">Sobrenome:</label>
                                <input type="tex" className="form-control" id="sobrenome" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-4">
                                <label for="dataNascimento">Data de nascimento</label>
                                <input type="date" className="form-control" id="dataNascimento" />
                            </div>
                            <div className="form-group col-8">
                                <label for="email">E-mail</label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-6">
                                <label for="telefone">Telefone</label>
                                <input type="tel" className="form-control" id="telefone" placeholder="(--)____-____" />
                            </div>
                            <div className="form-group col-6">
                                <label for="celular">Celular</label>
                                <input type="tel" className="form-control" id="celular" placeholder="(--)_____-____" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-6">
                                <label for="cep">CEP:</label>
                                <input type="number" className="form-control" id="cep" />
                            </div>
                            <div className="form-group col-6">
                                <label for="bairro">Bairro:</label>
                                <input type="text" className="form-control" id="bairro" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-12">
                                <label for="endereco">Endereço:</label>
                                <input type="tex" className="form-control" id="endereco" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-6">
                                <label for="cidade">Cidade:</label>
                                <input type="tex" className="form-control" id="cidade" />
                            </div>
                            <div className="form-group col-6">
                                <label for="estado">Estado:</label>
                                <input type="text" className="form-control" id="estado" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <button type="button" className="btn btn-danger col-2">Limpar</button>
                            <a href="../../home/html/home_flex.html" type="button" className="btn btn-success col-6">Salvar</a>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )

}