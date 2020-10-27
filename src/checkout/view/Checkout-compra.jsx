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
import $ from 'jquery'
import Footer from  '../../templates/footer/footer'
import ConfirmaSucesso from './confirmacaoSucesso'
import LogoHeader from './logoHeader'
import BarraVermelha from './barraVermelha'
import BarraProgresso2 from './barraProgresso2';
import TabelaResumo from './tabelaResumo'
import ResumoEndereco from './resumoEndereco'
import axios from 'axios'

const API_PEDIDO = 'http://rdmarket-laravel.test/api/pedidos/'

export default class CheckoutCompra extends Component {

    constructor(props) {
        super(props)
        this.state = {pd: []}
        this.preencherPedido()
    }

    preencherPedido = () => {

        axios.get(`${API_PEDIDO}` + this.props.params.idpedido)
            .then(resp => this.setState({pd: resp.data }))

        
    }

    aparecer = ()=> $("#confirmacao_sucesso").show();    

    render() {
        console.log(this.state.pd[0])
        return (
            <>
                <ConfirmaSucesso />
                <LogoHeader />

                <BarraVermelha />

            
                <BarraProgresso2 /> 

                <div className="container borda-container mt-3 ">

                    <div className="row mr-2 ml-2 mt-2 mb-3 borda-resumo-compra">
                        <div className="col-12 text-center">
                            <h5>Resumo da compra</h5>
                        </div>
                    </div>
                    <TabelaResumo idpedido={this.props.params.idpedido} />
                   <ResumoEndereco total={this.state.pd[0]==undefined?0:this.state.pd[0].vlr_total_pedido}/>

                </div>

                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="text-center col-md-6 col-sm-6 col-12 order-md-2 order-sm-2 order-2">
                            <a type="button" href="#/checkout/confirmar/dados/1/1" className="retornar">Voltar</a>

                        </div>
                        <div className="text-center col-md-6 col-sm-6 col-12 mb-md-0 mb-sm-0 mb-4 order-md-2 order-sm-2 order-1">
                            <a onClick={()=>this.aparecer()} type="button" id="toggle" className="avancar">Finalizar Compra</a>
                        </div>
                    </div>

                </div>
                <Footer />
            </>

        )
    }

}