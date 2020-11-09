import React, { Component } from 'react'
import '../css/stylelogin.css'
import '../css/styles.css'
import '../css/styles-barra-vermelha.css'
import Header from '../../templates/header/header'
import Footer from '../../templates/footer/footer'
import { cpfMask } from '../mascaras';
import axios from 'axios';
import { browserHistory } from 'react-router'
import '../css/horus.css';
import {validaCpf} from '../Validacoes';

class login extends Component {
    // Mascara do CPF
    constructor(props) {
        super(props)

        this.state = { documentId: '' }
        this.handlechange = this.handlechange.bind(this)
    }

    handlechange(e) {
        this.setState({ documentId: cpfMask(e) })
        // console.log(cpfMask(e))
        this.num_cpf = cpfMask(e)
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.num_cpf, this.vlr_senha, typeof (this.num_cpf), typeof (this.vlr_senha))
        const data = {
            num_cpf: this.num_cpf,
            vlr_senha: this.vlr_senha,
        };
        axios.post('http://rdmarket-laravel.test/api/login', data)
            .then(res => {
                console.log(res)

                localStorage.setItem('token', JSON.stringify(res.data.access_token));
                localStorage.setItem('usuario', JSON.stringify(res.data.usuario));
                browserHistory.push('#/home')
                document.location.reload(true)
            })
            .catch(err => {
                console.log(err)
            })
    };

    state = {
        isPasswordShown: false
    };

    togglePasswordVisiblity = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
    };


    render() {
        const { documentId } = this.state
        const { isPasswordShown } = this.state;
        return (
            <>
                < Header />
                <form onSubmit={this.handleSubmit}>
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

                    {/* CONTAINER TELA GRANDE */}
                    <div className="container mt-5 tela-grande">
                        {/* CPF E SENHA */}
                        <div className="row">
                            <div className="col-5">
                                <h4>Faça seu login:</h4>
                                <div className="form-group">
                                    <label for="cpf" className="font-bold"> CPF:</label>
                                    <input type="text" className="form-control nome" id="cpf"
                                        placeholder="Ex: 000.000.000-00"                                        value={documentId}
                                        maxLength='14' 
                                        onChange={e => this.handlechange(e.target.value)}
                                        onBlur={() => validaCpf()}/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1" className="font-bold">Senha:</label>
                                    <input className="form-control" id="exampleInputPassword1"
                                        onChange={e => this.vlr_senha = e.target.value} type={isPasswordShown ? "text" : "password"} />

                                    <button type="button" className="fa fa-eye olho-horus" onClick={this.togglePasswordVisiblity}>
                                        <img width="20px" height="20px"
                                            src={require("../imagens/eye-icon.png")} />
                                    </button>
                                    < br />
                                    <a href="#/esqueciminhasenha" className="btn btn-link">Esqueci minha senha</a>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <button type="button" className="btn btn-danger col-3 col-lg-2">Limpar</button>
                                    <button type="submit" className="btn btn-success col-5 col-lg-4">Entrar</button>
                                </div>
                            </div>


                            <div className="col-2">
                                <div className="d-flex flex-column align-center align-self-center">

                                </div>
                            </div>

                            <div className="col-5 ">
                                <div className="row justify-content-center mt-5">
                                    <h4>Ainda não é nosso cliente?</h4>
                                    <a href="#/cadastro" type="button" className="btn btn-success col-12">Cadastre-se</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CONTAINER TELA PEQUENA */}
                    <div className="container tela-pequena mt-4">
                        <div className="row">
                            <div className="col-12">
                                <form>
                                    <h4>Faça seu login:</h4>
                                    {/* CPF E SENHA */}
                                    <div className="form-group col-12">
                                        <label for="cpf" className="font-bold">CPF:</label>
                                        <input type="text" className="form-control" id="cpf"
                                            placeholder="Ex: 000.000.000-00"
                                            value={documentId} maxLength='14' onChange={e => this.handlechange(e.target.value)} />
                                    </div>
                                    <div className="form-group col-10">
                                        <label for="exampleInputPassword1" className="font-bold">Senha:</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                            onChange={e => this.vlr_senha = e.target.value}
                                            type={isPasswordShown ? "text" : "password"} />
                                        <img width="20px" height="20px" className="fa fa-eye olho-horus"
                                            src={require("../imagens/eye-icon.png")} onClick={this.togglePasswordVisiblity} />
                                        < br />
                                        <a href="#/esqueciminhasenha" className="btn btn-link">Esqueci minha senha</a>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <button type="button" className="btn btn-danger col-3">Limpar</button>
                                        <button type="submit" href="#/home" className="btn btn-success col-6">Entrar</button>
                                    </div>
                                </form>
                                <hr />
                                <div className="d-flex justify-content-center">
                                    <button href="#/cadastro" type="submit" className="btn btn-success col-12">Cadastre-se</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <Footer />
            </>
        )
    }
}

export default login