
import React from 'react'
import '../css/historico.css'
import '../css/styles.css'
import Header from  '../../templates/header/header'
import Footer from  '../../templates/footer/footer'
import PedidosTelaGrande from './listar-historico-tela-grande'
import PedidosTelaPequena1 from './listar-historico-tela-pequena'
import PedidosTelaPequena2 from './listar-historico-tela-pequena-2'

export default () => {
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
                    <input type="text" className="form-control" placeholder="pesquise pelo nº do pedido"
                        aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary bt-pesquisa-pedido" type="button"
                            id="button-addon2"><img width="20px" height="20px" src={require("../imagens/pesquisa.svg")}/></button>
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
            <div id="ola-cliente">Olá, Cliente!</div>
        </div>
    </div>
    
    <div className="container-fluid pedidos-tela-pequena">
        <div className="input-group  ml-auto mr-auto tamanho-input-pedido">
            <input type="text" className="form-control" placeholder="digite o nº do pedido"
                aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary bt-pesquisa-pedido" type="button" id="button-addon2"><img
                        width="20px" height="20px" src={require("../imagens/pesquisa.svg")}/></button>
            </div>
        </div>

    </div>

  
    <div className="container-fluid pedidos-tela-pequena-2">
        <div className="input-group  ml-auto mr-auto tamanho-input-pedido">
            <input type="text" className="form-control" placeholder="digite o nº do pedido"
                aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary bt-pesquisa-pedido" type="button" id="button-addon2"><img
                        width="20px" height="20px" src={require("../imagens/pesquisa.svg")}/></button>
            </div>
        </div>
    </div>

        {/*em processamento  */}
    <div className="container mt-5 container-historico">
        <PedidosTelaGrande/>


        {/* <!--versão tela pequena 1--> */}
        <PedidosTelaPequena1/>
        
        {/* <!--versão tela pequena 2--> */}
        <PedidosTelaPequena2/>
        
    </div>
    <Footer />
</>

)

}
