import React, { Component } from 'react'

import '../css/barra-progresso.css';
import '../css/botoes-checkout.css';
import '../css/confirma-compra.css';
import '../css/confirma-endereco.css';
import '../css/confirmacao.css';
import '../css/metodos-pagamento.css';
import '../css/styles.css';
import '../css/styles-barra-vermelha.css';
import '../css/sucesso-compra.css';
import LogoHeader from './logoHeader'
import BarraVermelha from './barraVermelha'
import BarraProgresso from './barraProgresso'
import ConfirmaEndereco from './confirmaEndereco'
import Footer from '../../templates/footer/footer'
import FormaPagamento from './formaPagamento'
import Botoes from './botoes'
import axios from 'axios'
import ConfirmaSucesso from './confirmacaoSucesso'
import $ from 'jquery'
import { browserHistory } from 'react-router'

const API_ENDERECO = 'http://rdmarket-laravel.test/api/endereco/listarCliente/';
const API_CARTAO = "http://rdmarket-laravel.test/api/devolverDadosCartao/"
const IMAGE_PATH = 'http://rdmarket-laravel.test/storage/';

export default class CheckoutPagamento extends Component {

    constructor(props) {
        super(props)
        this.state = { cartao: [], endereco: [], nr_pedido:0}
    }
    componentDidMount() {

        this.preencherDados()
    }

    preencherDados = () => {

        


        // devo substituir aqui o this.props.params.idcliente e this.props.params.idpedido
        // pelas variáveis que estão no local storage
        let cliente = JSON.parse(localStorage.getItem('usuario'))
        
        if(cliente == null){
            browserHistory.push('#/login')
            document.location.reload(true)
        }
        
        axios.get(`${API_ENDERECO}` + cliente.id_cliente)
            .then(resp => this.setState({ endereco: resp.data }))

        axios.get(`${API_CARTAO}` + cliente.id_cliente)
            .then(resp => this.setState({ cartao: resp.data }))

        // axios.get(`${API}`+this.props.params.desc)
        //     .then(resp => this.setState({ produtos: resp.data }))

    }

    enviarPedido=(nr)=>{

        this.setState({...this.state,nr_pedido:nr})

        $("#confirmacao_sucesso").show();
    }

    render() {

        const endereco = this.state.endereco;
        const cartao = this.state.cartao;

        return (

            <>
                <ConfirmaSucesso num_pedido={this.state.nr_pedido} />
                <LogoHeader />

                <BarraVermelha />

                <BarraProgresso />

                <div className="container">
                    <form>
                        <div className="row mt-5 fonts-texto">

                            <ConfirmaEndereco endereco={endereco} />
                            <FormaPagamento cartao={cartao} />

                        </div>

                        <Botoes enviarNumPedido={(e)=>this.enviarPedido(e)} />
                    </form>
                </div>
                <Footer />
            </>
        )
    }
}