
import React from 'react'
import '../css/historico.css'
import '../css/styles.css'

import Header from  '../../templates/header/header'
import Footer from  '../../templates/footer/footer'

export default () => {
    return (

        <>
        <Header />
    <div class="container-fluid">
        <div class="row barra-vermelha">
            <div class="ml-md-5 mr-md-0 ml-sm-5 ml-5 pedidos-tela-grande">

                <div id="bt-minha-conta" class="dropdown pedidos-tela-grande">
                    <button class="btn dropdown-toggle fonte-minha-conta mb-2" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Minha conta
                    </button>
                    <div class="dropdown-menu dropdown-menu-barra-vermelha" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item dropdown-item-barra-vermelha hover-item" href="#">Alterar meus dados</a>
                        <a class="dropdown-item dropdown-item-barra-vermelha hover-item" href="#">Meus cartões</a>
                        <a class="dropdown-item dropdown-item-barra-vermelha hover-item" href="historico.html">Meus pedidos</a>
                    </div>


                    <span id="titulo-meus-pedidos" class="pl-5 pedidos-tela-grande">Meus pedidos</span>
                </div>
            </div>

            <div class="mt-1 mr-5  pesquisa-pedido pedidos-tela-grande">
                <div class="input-group tamanho-input-pedido">
                    <input type="text" class="form-control" placeholder="pesquise pelo nº do pedido"
                        aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary bt-pesquisa-pedido" type="button"
                            id="button-addon2"><img width="20px" height="20px" src={require("../imagens/pesquisa.svg")}/></button>
                    </div>
                </div>
            </div>

           

            <div class="ml-md-5 mr-md-0 ml-sm-5 ml-5 pedidos-tela-pequena">

                <div id="bt-minha-conta" class="dropdown pedidos-tela-pequena">
                    <button class="btn dropdown-toggle font-minha-conta mb-2" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Minha conta
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item hover-item" href="#">Alterar meus dados</a>
                        <a class="dropdown-item hover-item" href="#">Meus cartões</a>
                        <a class="dropdown-item hover-item" href="historico.html">Meus pedidos</a>
                    </div>


                    <span id="titulo-meus-pedidos" class="pl-5 pedidos-tela-pequena">Meus pedidos</span>
                </div>
            </div>

            
            <div class="col-12">
                <span id="titulo-meus-pedidos" class="ml-0 pedidos-tela-pequena-2">Meus pedidos</span>
            </div>
            <div class=" col-12  pedidos-tela-pequena-2">

                <div id="bt-minha-conta" class=" dropdown pedidos-tela-pequena-2">
                    <button class="btn dropdown-toggle font-minha-conta mb-2" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Minha conta
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item hover-item" href="#">Perfil</a>
                        <a class="dropdown-item hover-item" href="#">Meus cartões</a>
                        <a class="dropdown-item hover-item" href="historico.html">Meus pedidos</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="container-fluid mt-4 mb-4">
        <div class="row">
            <div id="ola-cliente">Olá, Cliente!</div>
        </div>
    </div>
    
    <div class="container-fluid pedidos-tela-pequena">
        <div class="input-group  ml-auto mr-auto tamanho-input-pedido">
            <input type="text" class="form-control" placeholder="digite o nº do pedido"
                aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <div class="input-group-append">
                <button class="btn btn-outline-secondary bt-pesquisa-pedido" type="button" id="button-addon2"><img
                        width="20px" height="20px" src={require("../imagens/pesquisa.svg")}/></button>
            </div>
        </div>

    </div>

  
    <div class="container-fluid pedidos-tela-pequena-2">
        <div class="input-group  ml-auto mr-auto tamanho-input-pedido">
            <input type="text" class="form-control" placeholder="digite o nº do pedido"
                aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <div class="input-group-append">
                <button class="btn btn-outline-secondary bt-pesquisa-pedido" type="button" id="button-addon2"><img
                        width="20px" height="20px" src={require("../imagens/pesquisa.svg")}/></button>
            </div>
        </div>
    </div>

        {/*em processamento  */}
    <div class="container mt-5 container-historico">
        <div class="row item-historico em-processamento tela-g">
            <div id="numero-pedido" class="col-12">
                Pedido &lt nº do pedido &gt
                <hr id="linha-pedido"/>
                <div class="row">
                    <div id="status-pedido" class="col-md-6 col-sm-12">
                        <span>Status do pedido: &lt status &gt</span>
                    </div>

                    <div id="qtd-itens-pedido" class="col-md-6 col-sm-12">
                        <span>Quantidade de itens: &lt qtd R$ &gt</span>
                    </div>
                </div>

                <div class="row">
                    <div id="data-pedido" class="col-md-6 col-sm-12">
                        <span>Data do pedido: &lt dd/mm/aaaa &gt</span>
                    </div>

                    <div id="total-compra-historico" class="col-md-6 col-sm-12">
                        <span>Total da compra: &lt total R$ &gt</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Entregue */}
        <div class="row mt-4 item-historico entregue tela-g">
            <div id="numero-pedido" class="col-12">
                Pedido &lt nº do pedido &gt
                <hr id="linha-pedido"/>

                <div class="row">
                    <div id="status-pedido" class="col-md-6 col-sm-12">
                        <span>Status do pedido: &lt status &gt</span>
                    </div>

                    <div id="qtd-itens-pedido" class="col-md-6 col-sm-12">
                        <span>Quantidade de itens: &lt qtd R$ &gt</span>
                    </div>
                </div>

                <div class="row">
                    <div id="data-pedido" class="col-md-6 col-sm-12">
                        <span>Data do pedido: &lt dd/mm/aaaa &gt</span>
                    </div>

                    <div id="total-compra-historico" class="col-md-6 col-sm-12">
                        <span>Total da compra: &lt total R$ &gt</span>
                    </div>
                </div>
            </div>
        </div>

        {/* cancelado */}
        <div class="row mt-4 item-historico cancelado tela-g">
            <div id="numero-pedido" class="col-12">
                Pedido &lt nº do pedido &gt
                <hr id="linha-pedido"/>

                <div class="row">
                    <div id="status-pedido" class="col-md-6 col-sm-12">
                        <span>Status do pedido: &lt status &gt</span>
                    </div>

                    <div id="qtd-itens-pedido" class="col-md-6 col-sm-12">
                        <span>Quantidade de itens: &lt qtd R$ &gt</span>
                    </div>
                </div>

                <div class="row">
                    <div id="data-pedido" class="col-md-6 col-sm-12">
                        <span>Data do pedido: &lt dd/mm/aaaa &gt</span>
                    </div>

                    <div id="total-compra-historico" class="col-md-6 col-sm-12">
                        <span>Total da compra: &lt total R$ &gt</span>
                    </div>
                </div>
            </div>
        </div>


        {/* <!--versão tela pequena 1--> */}

        {/* <!------EM PROCESSAMENTO------> */}

        <div class="row item-historico em-processamento tela-p">
            <div class="col-12 numero-pedido">
                <div class="row justify-content-between">

                    <span class="titulos-pedido-pq">Número do pedido: </span>
                    <span class="conteudo-pedidos-pq">&nbsp;&lt nº do pedido &gt</span>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 status-pedido">
                <div class="row justify-content-between">

                    <span class="titulos-pedido-pq">Status do pedido: </span>
                    <span class="conteudo-pedidos-pq">&nbsp;&lt status &gt</span>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 data-pedido">
                <div class="row justify-content-between">

                    <span class="titulos-pedido-pq">Data do pedido: </span>
                    <span class="conteudo-pedidos-pq">&nbsp;&lt dd/mm/aaaa &gt</span>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 qtd-itens-pedido">
                <div class="row justify-content-between">

                    <span class="titulos-pedido-pq">Quantidade de itens: </span>
                    <span class="conteudo-pedidos-pq">&nbsp;&lt quantidade &gt</span>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 total-compra-historico">
                <div class="row justify-content-center">

                    <span>Total da compra: &lt R$ total &gt</span>

                </div>
            </div>
        </div>

        {/* <!------ENTREGUE-----> */}


        <div class="row mt-4 item-historico entregue tela-p">
            <div class="col-12 numero-pedido">
                <div class="row justify-content-between">

                    <span class="titulos-pedido-pq">Número do pedido: </span>
                    <span class="conteudo-pedidos-pq">&nbsp;&lt nº do pedido &gt</span>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 status-pedido">
                <div class="row justify-content-between">

                    <span class="titulos-pedido-pq">Status do pedido: </span>
                    <span class="conteudo-pedidos-pq">&nbsp;&lt status &gt</span>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 data-pedido">
                <div class="row justify-content-between">

                    <span class="titulos-pedido-pq">Data do pedido: </span>
                    <span class="conteudo-pedidos-pq">&nbsp;&lt dd/mm/aaaa &gt</span>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 qtd-itens-pedido">
                <div class="row justify-content-between">

                    <span class="titulos-pedido-pq">Quantidade de itens: </span>
                    <span class="conteudo-pedidos-pq">&nbsp;&lt quantidade &gt</span>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 total-compra-historico">
                <div class="row justify-content-center">

                    <span>Total da compra: &lt R$ total &gt</span>

                </div>
            </div>
        </div>

        {/* <!-----CANCELADO-----> */}


        <div class="row mt-4 item-historico cancelado tela-p">
            <div class="col-12 numero-pedido">
                <div class="row justify-content-between">

                    <span class="titulos-pedido-pq">Número do pedido: </span>
                    <span class="conteudo-pedidos-pq">&nbsp;&lt nº do pedido &gt</span>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 status-pedido">
                <div class="row justify-content-between">

                    <span class="titulos-pedido-pq">Status do pedido: </span>
                    <span class="conteudo-pedidos-pq">&nbsp;&lt status &gt</span>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 data-pedido">
                <div class="row justify-content-between">

                    <span class="titulos-pedido-pq">Data do pedido: </span>
                    <span class="conteudo-pedidos-pq">&nbsp;&lt dd/mm/aaaa &gt</span>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 qtd-itens-pedido">
                <div class="row justify-content-between">

                    <span class="titulos-pedido-pq">Quantidade de itens: </span>
                    <span class="conteudo-pedidos-pq">&nbsp;&lt quantidade &gt</span>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 total-compra-historico">
                <div class="row justify-content-center">

                    <span>Total da compra: &lt R$ total &gt</span>

                </div>
            </div>
        </div>

        <div class="row item-historico em-processamento tela-p2">
            <div class="col-12 numero-pedido">
                <div class="row justify-content-between">

                    <div class="col-12 titulos-pedido-pq">Número do pedido: </div>
                    <div class="col-12 conteudo-pedidos-pq">&nbsp;&lt nº do pedido &gt</div>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 status-pedido">
                <div class="row justify-content-between">

                    <div class="col-12 titulos-pedido-pq">Status do pedido: </div>
                    <div class="col-12 conteudo-pedidos-pq">&nbsp;&lt status &gt</div>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 data-pedido">
                <div class="row justify-content-between">

                    <div class="col-12 titulos-pedido-pq">Data do pedido: </div>
                    <div class="col-12 conteudo-pedidos-pq">&nbsp;&lt dd/mm/aaaa &gt</div>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 qtd-itens-pedido">
                <div class="row justify-content-between">

                    <div class="col-12 titulos-pedido-pq">Quantidade de itens: </div>
                    <div class="col-12 conteudo-pedidos-pq">&nbsp;&lt quantidade &gt</div>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 total-compra-historico">
                <div class="row justify-content-center">

                    <span class="titulos-pedido-pq">Total da compra: &lt R$ total &gt</span>

                </div>
            </div>
        </div>

        {/* <!------ENTREGUE-----> */}


        <div class="row mt-4 item-historico entregue tela-p2">
            <div class="col-12 numero-pedido">
                <div class="row justify-content-between">

                    <div class="col-12 titulos-pedido-pq">Número do pedido: </div>
                    <div class="col-12 conteudo-pedidos-pq">&nbsp;&lt nº do pedido &gt</div>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 status-pedido">
                <div class="row justify-content-between">

                    <div class="col-12 titulos-pedido-pq">Status do pedido: </div>
                    <div class="col-12 conteudo-pedidos-pq">&nbsp;&lt status &gt</div>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 data-pedido">
                <div class="row justify-content-between">

                    <div class="col-12 titulos-pedido-pq">Data do pedido: </div>
                    <div class="col-12 conteudo-pedidos-pq">&nbsp;&lt dd/mm/aaaa &gt</div>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 qtd-itens-pedido">
                <div class="row justify-content-between">

                    <div class="col-12 titulos-pedido-pq">Quantidade de itens: </div>
                    <div class="col-12 conteudo-pedidos-pq">&nbsp;&lt quantidade &gt</div>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 total-compra-historico">
                <div class="row justify-content-center">

                    <span class="titulos-pedido-pq">Total da compra: &lt R$ total &gt</span>

                </div>
            </div>
        </div>

        {/* <!-----CANCELADO-----> */}


        <div class="row mt-4 item-historico cancelado tela-p2">
            <div class="col-12 numero-pedido">
                <div class="row justify-content-between">

                    <div class="col-12 titulos-pedido-pq">Número do pedido: </div>
                    <div class="col-12 conteudo-pedidos-pq">&nbsp;&lt nº do pedido &gt</div>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 status-pedido">
                <div class="row justify-content-between">

                    <div class="col-12 titulos-pedido-pq">Status do pedido: </div>
                    <div class="col-12 conteudo-pedidos-pq">&nbsp;&lt status &gt</div>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 data-pedido">
                <div class="row justify-content-between">

                    <div class="col-12 titulos-pedido-pq">Data do pedido: </div>
                    <div class="col-12 conteudo-pedidos-pq">&nbsp;&lt dd/mm/aaaa &gt</div>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 qtd-itens-pedido">
                <div class="row justify-content-between">

                    <div class="col-12 titulos-pedido-pq">Quantidade de itens: </div>
                    <div class="col-12 conteudo-pedidos-pq">&nbsp;&lt quantidade &gt</div>
                    <hr class="linha-pedido"/>

                </div>
            </div>

            <div class="col-12 total-compra-historico">
                <div class="row justify-content-center">

                    <span class="titulos-pedido-pq">Total da compra: &lt R$ total &gt</span>

                </div>
            </div>
        </div>

    </div>
    <Footer />
</>

)

}
