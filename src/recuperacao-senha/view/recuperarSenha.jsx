import React, { Component } from 'react'
import '../css/style-senha.css'
import '../css/styles.css'
import '../css/styles-barra-vermelha.css'
import Header from '../../templates/header/header'
import Footer from '../../templates/footer/footer'
import axios from 'axios';
import { browserHistory } from 'react-router'
import swal from 'sweetalert';
import { cpfMask } from '../../login/mascaras';


const API_SENHA = 'http://rdmarket-laravel.test/api/buscarUsuario'

export default class RecuperarSenha extends Component {
    // Mascara do CPF
    constructor(props) {
        super(props)


    }

    handleCpf = (e) => {
        let a = document.getElementById("cpf");
        a.value = cpfMask(e)
    }

    enviarDados = () => {
        let cpf = document.getElementById("cpf");
        let email = document.getElementById("email");
        let senha = document.getElementById("senha");

        axios.post(`${API_SENHA}`, {
            "cpf": cpf.value,
            "email": email.value,
            "senha": senha.value
        }).then(function (response) {
            swal("Senha alterada com sucesso", "", "success")
                .then((value) => {
                    browserHistory.push('#/login')
                    document.location.reload(true)
                });
        }).catch(function (err) {
            alert("CPF ou email incorretos");
        })
    }

    render() {

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
                        <h3 className="font-cab-email">sac@rdmarket.com</h3>
                    </div>
                    <div className="ml-md-auto mt-md-0">
                        <img className="img-icon-shield" src={require("../imagens/shield.png")} />
                        <h3 className="font-cab-shield">Site seguro</h3>
                    </div>
                </div>



                <div className="container mt-5">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <form className="col-12">

                                {/* NOME, SOBRENOME E DATA DE NASCIMENTO */}
                                <div className="row justify-content-center">
                                    <div className="form-group col-4">
                                        <label for="nome">CPF cadastrado</label>
                                        <input onChange={e => this.handleCpf(e.target.value)} id="cpf" type="text" className="form-control"
                                        />
                                    </div>
                                    <div className="form-group col-5">
                                        <label for="sobrenome">Email cadastrado</label>
                                        <input id="email" type="email" className="form-control"
                                        />
                                    </div>
                                    <div className="form-group col-4">
                                        <label for="nome">Nova senha</label>
                                        <input id="senha" type="password" className="form-control"
                                        />
                                    </div>
                                    <div className="form-group col-5">
                                        <label for="sobrenome">Confirme a nova senha</label>
                                        <input type="password" className="form-control" />
                                    </div>
                                    <div className="form-group col-5">

                                        <button type="button" className="btn btn-danger col-md-4 col-sm-6">Limpar</button>
                                        <button onClick={() => this.enviarDados()} type="button" className="btn btn-success ml-md-2 col-md-7 col-sm-6">Atualizar senha</button>
                                    </div>

                                </div>


                            </form>
                        </div>
                    </form>
                </div>
                <Footer />
            </>
        )
    }
}