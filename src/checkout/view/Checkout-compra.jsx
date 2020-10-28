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
import Footer from '../../templates/footer/footer'
import ConfirmaSucesso from './confirmacaoSucesso'
import LogoHeader from './logoHeader'
import BarraVermelha from './barraVermelha'
import BarraProgresso2 from './barraProgresso2';
import TabelaResumo from './tabelaResumo'
import ResumoEndereco from './resumoEndereco'
import axios from 'axios'

const API_CHECKOUT = 'http://rdmarket-laravel.test/api/realizarCompra/'



export default class CheckoutCompra extends Component {

    constructor(props) {
        super(props)
        this.state={conteudo:new Object}
    }

 
    download=(filename, text) => {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
  

    salvarDados = () => {

        axios.get(`${API_CHECKOUT}` + localStorage.getItem('id_pedido'))
        .then(response => {
            this.download("notaFiscal.txt",JSON.stringify(response.data));    
    })

        // console.log(this.state.conteudo)

        

        // $("#confirmacao_sucesso").show();
    }



    render() {
        this.salvarDados()
        return (
            <>
                
                <LogoHeader />

                <BarraVermelha />


                <BarraProgresso2 />

                <div className="container borda-container mt-3 ">

                    <div className="row mr-2 ml-2 mt-2 mb-3 borda-resumo-compra">
                        <div className="col-12 text-center">
                            <h5>Resumo da compra</h5>
                        </div>
                    </div>
                    <TabelaResumo />
                    <ResumoEndereco />

                </div>

                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="text-center col-md-6 col-sm-6 col-12 order-md-2 order-sm-2 order-2">
                            <a type="button" href="#/home" className="retornar">Ir para home</a>

                        </div>
                        <div className="text-center col-md-6 col-sm-6 col-12 mb-md-0 mb-sm-0 mb-4 order-md-2 order-sm-2 order-1">
                            <a type="button" href="#/historico" id="toggle" className="avancar">Ir para pedidos</a>
                        </div>
                    </div>

                </div>
                <Footer />
            </>

        )
    }

}