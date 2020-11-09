import '../css/historico.css'
import '../css/styles.css'
import Header from '../../templates/header/header'
import Footer from '../../templates/footer/footer'
import PedidosTelaGrande from './listar-historico-pesquisa-tela-grande'
import PedidosTelaPequena from './listar-historico-pesquisa-tela-pequena'
import PedidosTelaPequena2 from './listar-historico-pesquisa-tela-pequena-2'
import React, { Component } from 'react'
import axios from 'axios'

const API = "http://rdmarket-laravel.test/api/pedidos/pesquisarPedidoPorCliente/";

export default class PedidoPesquisaTelaGrande extends Component {
    

    constructor(props) {
        super(props)
        this.state = {pedidos: []}
        this.preencherPedido();
    }

    vericarBotao = (idInput, idBotao) => {
        let input = document.getElementById(idInput);
        let botao = document.getElementById(idBotao);

        if (!(input.value == "")){
            return botao.hidden = false
        }
        
        botao.hidden = true;
    }

    verificarLogado = () => {
        let nomeCliente = localStorage.getItem('usuario')

        if (nomeCliente == null) {
            return false
        }
        return true
    }

    componentWillReceiveProps(nextProps){
        this.props = nextProps
        this.preencherPedido();
    } 

    preencherPedido = () => {
        if (this.verificarLogado()) {
            var cliente = JSON.parse(localStorage.getItem('usuario'))
            axios.get(`${API}` + cliente.id_cliente + '/' + this.props.params.num)
                .then(resp => this.setState({ pedidos: resp.data }))
                .catch(erro => this.setState({pedidos: []}))
        }
        console.log(`${API}` + cliente.id_cliente + '/' + this.props.params.num)
    }
    
    retornarCliente = () => {
        let nomeCliente = localStorage.getItem('usuario')
        if (nomeCliente == null) {
            return 'Olá, Cliente!'
        }
        return 'Olá, ' + JSON.parse(nomeCliente).nm_cliente + '!'
    }
    

    registraPalavraChave = (input, botao) => {
        let elemento = document.getElementById(input);
        let campo = document.getElementById(botao);
        campo.href = "#/historico-pesquisa/" + elemento.value;    
    }   

    render () {
        return (
            <>
            <Header />
                <div className="container-fluid">
                    <div className="row barra-vermelha">
                        <div className="ml-md-5 mr-md-0 ml-sm-5 ml-5 pedidos-tela-grande">

                            <div id="bt-minha-conta" className="dropdown pedidos-tela-grande">
                                {/* <button className="btn dropdown-toggle fonte-minha-conta mb-2" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Minha conta
                        </button>
                        <div className="dropdown-menu dropdown-menu-barra-vermelha" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item dropdown-item-barra-vermelha hover-item" href="#">Alterar meus dados</a>
                            <a className="dropdown-item dropdown-item-barra-vermelha hover-item" href="#">Meus cartões</a>
                            <a className="dropdown-item dropdown-item-barra-vermelha hover-item" href="historico.html">Meus pedidos</a>
                        </div> */}


                                <span id="titulo-meus-pedidos" className="pl-5 pedidos-tela-grande">Meus pedidos</span>
                            </div>
                        </div>

                        <div className="mt-1 mr-5  pesquisa-pedido pedidos-tela-grande">
                            <div className="input-group tamanho-input-pedido">
                                <input type="text" className="form-control" id = "pesquisar1" placeholder="pesquise pelo nº do pedido"
                                    aria-label="Recipient's username" aria-describedby="botao-pesquisar1"
                                    onChange = {() => this.vericarBotao("pesquisar1", "botao-pesquisar1")} />
                                <div className="input-group-append">
                                <a hidden = "true" className="btn btn-outline-secondary bt-pesquisa-pedido"
                                            type="button"  onClick = {() => this.registraPalavraChave("pesquisar1", "botao-pesquisar1")}
                                            href = {"#/historico-pesquisa/" + this.props.params.num}
                                        id="botao-pesquisar1"><img width="20px" height="20px" src={require("../imagens/pesquisa.svg")} /></a>
                                </div>
                            </div>
                        </div>



                        <div className="ml-md-5 mr-md-0 ml-sm-5 ml-5 pedidos-tela-pequena">

                            <div id="bt-minha-conta" className="dropdown pedidos-tela-pequena">
                                <button className="btn dropdown-toggle font-minha-conta mb-2" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Minha conta
                        </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item hover-item" href="#">Alterar meus dados</a>
                                    <a className="dropdown-item hover-item" href="#">Meus cartões</a>
                                    <a className="dropdown-item hover-item" href="historico.html">Meus pedidos</a>
                                </div>


                                <span id="titulo-meus-pedidos" className="pl-5 pedidos-tela-pequena">Meus pedidos</span>
                            </div>
                        </div>


                        <div className="col-12">
                            <span id="titulo-meus-pedidos" className="ml-0 pedidos-tela-pequena-2">Meus pedidos</span>
                        </div>
                        <div className=" col-12  pedidos-tela-pequena-2">

                            <div id="bt-minha-conta" className=" dropdown pedidos-tela-pequena-2">
                                <button className="btn dropdown-toggle font-minha-conta mb-2" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Minha conta
                        </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item hover-item" href="#">Perfil</a>
                                    <a className="dropdown-item hover-item" href="#">Meus cartões</a>
                                    <a className="dropdown-item hover-item" href="historico.html">Meus pedidos</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container-fluid mt-4 mb-4">
                    <div className="row">
                        <div id="ola-cliente">{this.retornarCliente()}</div>
                    </div>
                </div>

                <div className="container-fluid pedidos-tela-pequena">
                <div className="input-group  ml-auto mr-auto tamanho-input-pedido">
                    <input type="text" className="form-control" placeholder="digite o nº do pedido"
                        aria-label="Recipient's username" aria-describedby="botao-pesquisar2" id="pesquisar2"
                        onChange = {() => this.vericarBotao("pesquisar2", "botao-pesquisar2")}/>
                    <div className="input-group-append">
                        <a hidden = "true" className="btn btn-outline-secondary bt-pesquisa-pedido" type="button" id="botao-pesquisar2"
                        onClick = {() => this.registraPalavraChave("pesquisar2", "botao-pesquisar2")}
                        href = {"#/historico-pesquisa/" + this.props.params.num}><img
                            width="20px" height="20px" src={require("../imagens/pesquisa.svg")} /></a>
                    </div>
                </div>

            </div>


            <div className="container-fluid pedidos-tela-pequena-2">
                <div className="input-group  ml-auto mr-auto tamanho-input-pedido">
                    <input type="text" className="form-control" placeholder="digite o nº do pedido"
                        aria-label="Recipient's username" aria-describedby="botao-pesquisar3" id="pesquisar3"
                        onChange = {() => this.vericarBotao("pesquisar3", "botao-pesquisar3")}/>
                    <div className="input-group-append">
                        <a hidden = "true" className="btn btn-outline-secondary bt-pesquisa-pedido" type="button" id="botao-pesquisar3"
                        onClick = {() => this.registraPalavraChave("pesquisar3", "botao-pesquisar3")}
                        href = {"#/historico-pesquisa/" + this.props.params.num}><img
                            width="20px" height="20px" src={require("../imagens/pesquisa.svg")} /></a>
                    </div>
                </div>
            </div>

                {/*em processamento  */}
                <div className="container mt-5 container-historico">
                   {this.state.pedidos[0] == null ? <h2>Nenhum pedido encontrado! Tente novamente. ;-;</h2> : <PedidosTelaGrande pedidos = {this.state.pedidos} />}
                   {this.state.pedidos[0] == null ? <h2></h2> : <PedidosTelaPequena pedidos = {this.state.pedidos} />}
                   {this.state.pedidos[0] == null ? <h2></h2> : <PedidosTelaPequena2 pedidos = {this.state.pedidos} />} 
                </div>
            <Footer />
        </>
        )
        
    }

       


}