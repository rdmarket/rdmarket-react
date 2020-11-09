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
import { browserHistory } from 'react-router'
import converter from '../../converterMoeda';

const API_CHECKOUT = 'http://rdmarket-laravel.test/api/realizarCompra/'



export default class CheckoutCompra extends Component {

    constructor(props) {
        super(props)
        this.state={conteudo:new Object}
    }

 
    download=(filename, text) => {

    let _nota = JSON.parse(text);
    console.log(JSON.parse(text));

     let html_tag_begin = "<html>";
     let html_tag_end = "</html>";
     
     let head_tag_begin = "<head>";
     let head_tag_end = "</head>";

     let style_tag_begin = "<style>";
     let style_tag_end = "</style>"

     let style_content="body{background-color:#C81E21}"+
     "ul{text-decoration: none;list-style: none;padding:10}"+
     "div{text-align:center;width:400px;"+
     "position:relative;left:35%;background-color:white;padding:10px;border:3px dotted #323132}"+
     "li{border-bottom:1px solid #686180;margin:0;padding:0;color:#323132}"+
     "h3{color:#323132}"+
     "h4{color:#323132}"+
     "h2{color:#323132}"+
     "h1{color:#77D353}";
     

     let body_tag_begin = "<body>";
     let body_tag_end = "</body>";

     let content="<h1 style='text-align:center'>RD Market</h1><div><h3> Data de emissão: "+_nota.dt_emissao+"</h3><hr/>";
     
     content+="<ul>";
     _nota.itens_nota.forEach(element => {
        content+="<li>"+element.ds_produto+" R$ "+ converter( parseFloat(element.vl_unitario))+" x"+element.qt_item+"</li>";
     });
     content+="</ul>"
     content+="<h4> Número da nota: "+_nota.nr_nf+"</h4><hr/>";
     content+="<h4> Valor total da compra: R$"+ converter(parseFloat(_nota.vl_nota))+"</h4>"
     content+="<hr/><h2> Volte sempre </h2></div>";
     content=html_tag_begin+head_tag_begin+style_tag_begin+style_content+style_tag_end+head_tag_end+
             body_tag_begin+content+body_tag_end+html_tag_end;

    
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename+".html");
  
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

        let cliente = localStorage.getItem('usuario');

        if(cliente == null){
            browserHistory.push('#/login')
            document.location.reload(true)
        }


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