import React, { Component } from 'react'
import converter from '../../converterMoeda'
import converterData from '../../converterData'


export default class PedidoTelaPequenaDois extends Component {
    constructor(props) {
        super(props)
    }
    
    preencherCorStatusPedido = (status) => {
        if (status == "Em andamento") {
            return "em-processamento"
        } else if (status == "Entregue") {
            return "entregue"
        }
        return "cancelado"
    }

    render() {
        const { pedidos } = this.props;
        return (
            pedidos.map(pedido =>
                <>
                    <div className={"row item-historico " + this.preencherCorStatusPedido(pedido.desc_status_pedido) + " tela-p2"}>
                        <div className="col-12 numero-pedido">
                            <div className="row justify-content-between">

                                <div className="col-12 titulos-pedido-pq">Número do pedido: </div>
                                <div className="col-12 conteudo-pedidos-pq">&nbsp;{pedido.id_pedido + ' - ' + pedido.nr_pedido}</div>
                                <hr className="linha-pedido" />

                            </div>
                        </div>

                        <div className="col-12 status-pedido">
                            <div className="row justify-content-between">

                                <div className="col-12 titulos-pedido-pq">Status do pedido: </div>
                                <div className="col-12 conteudo-pedidos-pq">&nbsp;{pedido.desc_status_pedido}</div>
                                <hr className="linha-pedido" />

                            </div>
                        </div>

                        <div className="col-12 data-pedido">
                            <div className="row justify-content-between">

                                <div className="col-12 titulos-pedido-pq">Data do pedido: </div>
                                <div className="col-12 conteudo-pedidos-pq">&nbsp;{converterData(pedido.data_pedido)}</div>
                                <hr className="linha-pedido" />

                            </div>
                        </div>

                        <div className="col-12 qtd-itens-pedido">
                            <div className="row justify-content-between">

                                <div className="col-12 titulos-pedido-pq">Quantidade de itens: </div>
                                <div className="col-12 conteudo-pedidos-pq">&nbsp;{pedido.qtd_total_produtos}</div>
                                <hr className="linha-pedido" />

                            </div>
                        </div>

                        <div className="col-12 total-compra-historico">
                            <div className="row justify-content-center">

                                <span className="titulos-pedido-pq">Total da compra: R$ {converter(parseFloat(pedido.vlr_total_pedido))}</span>

                            </div>
                        </div>
                    </div>
                    <br />
                </>
            )
        )
       

        
    }
}