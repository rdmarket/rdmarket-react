
import React from 'react'
import '../css/historico.css'
import '../css/styles.css'

import Header from  '../../templates/header/header'
import Footer from  '../../templates/footer/footer'

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
        <div className="row item-historico em-processamento tela-g">
            <div id="numero-pedido" className="col-12">
                Pedido &lt nº do pedido &gt
                <hr id="linha-pedido"/>
                <div className="row">
                    <div id="status-pedido" className="col-md-6 col-sm-12">
                        <span>Status do pedido: &lt status &gt</span>
                    </div>

                    <div id="qtd-itens-pedido" className="col-md-6 col-sm-12">
                        <span>Quantidade de itens: &lt qtd R$ &gt</span>
                    </div>
                </div>

                <div className="row">
                    <div id="data-pedido" className="col-md-6 col-sm-12">
                        <span>Data do pedido: &lt dd/mm/aaaa &gt</span>
                    </div>

                    <div id="total-compra-historico" className="col-md-6 col-sm-12">
                        <span>Total da compra: &lt total R$ &gt</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Entregue */}
        <div className="row mt-4 item-historico entregue tela-g">
            <div id="numero-pedido" className="col-12">
                Pedido &lt nº do pedido &gt
                <hr id="linha-pedido"/>

                <div className="row">
                    <div id="status-pedido" className="col-md-6 col-sm-12">
                        <span>Status do pedido: &lt status &gt</span>
                    </div>

                    <div id="qtd-itens-pedido" className="col-md-6 col-sm-12">
                        <span>Quantidade de itens: &lt qtd R$ &gt</span>
                    </div>
                </div>

                <div className="row">
                    <div id="data-pedido" className="col-md-6 col-sm-12">
                        <span>Data do pedido: &lt dd/mm/aaaa &gt</span>
                    </div>

                    <div id="total-compra-historico" className="col-md-6 col-sm-12">
                        <span>Total da compra: &lt total R$ &gt</span>
                    </div>
                </div>
            </div>
        </div>

        {/* cancelado */}
        <div className="row mt-4 item-historico cancelado tela-g">
            <div id="numero-pedido" className="col-12">
                Pedido &lt nº do pedido &gt
                <hr id="linha-pedido"/>

                <div className="row">
                    <div id="status-pedido" className="col-md-6 col-sm-12">
                        <span>Status do pedido: &lt status &gt</span>
                    </div>

                    <div id="qtd-itens-pedido" className="col-md-6 col-sm-12">
                        <span>Quantidade de itens: &lt qtd R$ &gt</span>
                    </div>
                </div>

                <div className="row">
                    <div id="data-pedido" className="col-md-6 col-sm-12">
                        <span>Data do pedido: &lt dd/mm/aaaa &gt</span>
                    </div>

                    <div id="total-compra-historico" className="col-md-6 col-sm-12">
                        <span>Total da compra: &lt total R$ &gt</span>
                    </div>
                </div>
            </div>
        </div>


        {/* <!--versão tela pequena 1--> */}

        {/* <!------EM PROCESSAMENTO------> */}

        <div className="row item-historico em-processamento tela-p">
            <div className="col-12 numero-pedido">
                <div className="row justify-content-between">

                    <span className="titulos-pedido-pq">Número do pedido: </span>
                    <span className="conteudo-pedidos-pq">&nbsp;&lt nº do pedido &gt</span>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 status-pedido">
                <div className="row justify-content-between">

                    <span className="titulos-pedido-pq">Status do pedido: </span>
                    <span className="conteudo-pedidos-pq">&nbsp;&lt status &gt</span>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 data-pedido">
                <div className="row justify-content-between">

                    <span className="titulos-pedido-pq">Data do pedido: </span>
                    <span className="conteudo-pedidos-pq">&nbsp;&lt dd/mm/aaaa &gt</span>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 qtd-itens-pedido">
                <div className="row justify-content-between">

                    <span className="titulos-pedido-pq">Quantidade de itens: </span>
                    <span className="conteudo-pedidos-pq">&nbsp;&lt quantidade &gt</span>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 total-compra-historico">
                <div className="row justify-content-center">

                    <span>Total da compra: &lt R$ total &gt</span>

                </div>
            </div>
        </div>

        {/* <!------ENTREGUE-----> */}


        <div className="row mt-4 item-historico entregue tela-p">
            <div className="col-12 numero-pedido">
                <div className="row justify-content-between">

                    <span className="titulos-pedido-pq">Número do pedido: </span>
                    <span className="conteudo-pedidos-pq">&nbsp;&lt nº do pedido &gt</span>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 status-pedido">
                <div className="row justify-content-between">

                    <span className="titulos-pedido-pq">Status do pedido: </span>
                    <span className="conteudo-pedidos-pq">&nbsp;&lt status &gt</span>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 data-pedido">
                <div className="row justify-content-between">

                    <span className="titulos-pedido-pq">Data do pedido: </span>
                    <span className="conteudo-pedidos-pq">&nbsp;&lt dd/mm/aaaa &gt</span>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 qtd-itens-pedido">
                <div className="row justify-content-between">

                    <span className="titulos-pedido-pq">Quantidade de itens: </span>
                    <span className="conteudo-pedidos-pq">&nbsp;&lt quantidade &gt</span>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 total-compra-historico">
                <div className="row justify-content-center">

                    <span>Total da compra: &lt R$ total &gt</span>

                </div>
            </div>
        </div>

        {/* <!-----CANCELADO-----> */}


        <div className="row mt-4 item-historico cancelado tela-p">
            <div className="col-12 numero-pedido">
                <div className="row justify-content-between">

                    <span className="titulos-pedido-pq">Número do pedido: </span>
                    <span className="conteudo-pedidos-pq">&nbsp;&lt nº do pedido &gt</span>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 status-pedido">
                <div className="row justify-content-between">

                    <span className="titulos-pedido-pq">Status do pedido: </span>
                    <span className="conteudo-pedidos-pq">&nbsp;&lt status &gt</span>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 data-pedido">
                <div className="row justify-content-between">

                    <span className="titulos-pedido-pq">Data do pedido: </span>
                    <span className="conteudo-pedidos-pq">&nbsp;&lt dd/mm/aaaa &gt</span>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 qtd-itens-pedido">
                <div className="row justify-content-between">

                    <span className="titulos-pedido-pq">Quantidade de itens: </span>
                    <span className="conteudo-pedidos-pq">&nbsp;&lt quantidade &gt</span>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 total-compra-historico">
                <div className="row justify-content-center">

                    <span>Total da compra: &lt R$ total &gt</span>

                </div>
            </div>
        </div>

        <div className="row item-historico em-processamento tela-p2">
            <div className="col-12 numero-pedido">
                <div className="row justify-content-between">

                    <div className="col-12 titulos-pedido-pq">Número do pedido: </div>
                    <div className="col-12 conteudo-pedidos-pq">&nbsp;&lt nº do pedido &gt</div>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 status-pedido">
                <div className="row justify-content-between">

                    <div className="col-12 titulos-pedido-pq">Status do pedido: </div>
                    <div className="col-12 conteudo-pedidos-pq">&nbsp;&lt status &gt</div>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 data-pedido">
                <div className="row justify-content-between">

                    <div className="col-12 titulos-pedido-pq">Data do pedido: </div>
                    <div className="col-12 conteudo-pedidos-pq">&nbsp;&lt dd/mm/aaaa &gt</div>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 qtd-itens-pedido">
                <div className="row justify-content-between">

                    <div className="col-12 titulos-pedido-pq">Quantidade de itens: </div>
                    <div className="col-12 conteudo-pedidos-pq">&nbsp;&lt quantidade &gt</div>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 total-compra-historico">
                <div className="row justify-content-center">

                    <span className="titulos-pedido-pq">Total da compra: &lt R$ total &gt</span>

                </div>
            </div>
        </div>

        {/* <!------ENTREGUE-----> */}


        <div className="row mt-4 item-historico entregue tela-p2">
            <div className="col-12 numero-pedido">
                <div className="row justify-content-between">

                    <div className="col-12 titulos-pedido-pq">Número do pedido: </div>
                    <div className="col-12 conteudo-pedidos-pq">&nbsp;&lt nº do pedido &gt</div>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 status-pedido">
                <div className="row justify-content-between">

                    <div className="col-12 titulos-pedido-pq">Status do pedido: </div>
                    <div className="col-12 conteudo-pedidos-pq">&nbsp;&lt status &gt</div>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 data-pedido">
                <div className="row justify-content-between">

                    <div className="col-12 titulos-pedido-pq">Data do pedido: </div>
                    <div className="col-12 conteudo-pedidos-pq">&nbsp;&lt dd/mm/aaaa &gt</div>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 qtd-itens-pedido">
                <div className="row justify-content-between">

                    <div className="col-12 titulos-pedido-pq">Quantidade de itens: </div>
                    <div className="col-12 conteudo-pedidos-pq">&nbsp;&lt quantidade &gt</div>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 total-compra-historico">
                <div className="row justify-content-center">

                    <span className="titulos-pedido-pq">Total da compra: &lt R$ total &gt</span>

                </div>
            </div>
        </div>

        {/* <!-----CANCELADO-----> */}


        <div className="row mt-4 item-historico cancelado tela-p2">
            <div className="col-12 numero-pedido">
                <div className="row justify-content-between">

                    <div className="col-12 titulos-pedido-pq">Número do pedido: </div>
                    <div className="col-12 conteudo-pedidos-pq">&nbsp;&lt nº do pedido &gt</div>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 status-pedido">
                <div className="row justify-content-between">

                    <div className="col-12 titulos-pedido-pq">Status do pedido: </div>
                    <div className="col-12 conteudo-pedidos-pq">&nbsp;&lt status &gt</div>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 data-pedido">
                <div className="row justify-content-between">

                    <div className="col-12 titulos-pedido-pq">Data do pedido: </div>
                    <div className="col-12 conteudo-pedidos-pq">&nbsp;&lt dd/mm/aaaa &gt</div>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 qtd-itens-pedido">
                <div className="row justify-content-between">

                    <div className="col-12 titulos-pedido-pq">Quantidade de itens: </div>
                    <div className="col-12 conteudo-pedidos-pq">&nbsp;&lt quantidade &gt</div>
                    <hr className="linha-pedido"/>

                </div>
            </div>

            <div className="col-12 total-compra-historico">
                <div className="row justify-content-center">

                    <span className="titulos-pedido-pq">Total da compra: &lt R$ total &gt</span>

                </div>
            </div>
        </div>

    </div>
    <Footer />
</>

)

}
