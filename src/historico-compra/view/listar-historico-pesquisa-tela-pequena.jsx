import React, { Component } from 'react'
import converter from '../../converterMoeda'
import converterData from '../../converterData'


export default class PedidoTelaPequenaUm extends Component {
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
                    <div className={"row item-historico " + this.preencherCorStatusPedido(pedido.desc_status_pedido) + " tela-p"}>
                        <div className="col-12 numero-pedido">
                            <div className="row justify-content-between">

                                <span className="titulos-pedido-pq">Número do pedido: </span>
                                <span className="conteudo-pedidos-pq">&nbsp;{pedido.id_pedido + ' - ' + pedido.nr_pedido}</span>
                                <hr className="linha-pedido" />

                            </div>
                        </div>

                        <div className="col-12 status-pedido">
                            <div className="row justify-content-between">

                                <span className="titulos-pedido-pq">Status do pedido: </span>
                                <span className="conteudo-pedidos-pq">&nbsp;{pedido.desc_status_pedido}</span>
                                <hr className="linha-pedido" />

                            </div>
                        </div>

                        <div className="col-12 data-pedido">
                            <div className="row justify-content-between">

                                <span className="titulos-pedido-pq">Data do pedido: </span>
                                <span className="conteudo-pedidos-pq">&nbsp;{converterData(pedido.data_pedido)}</span>
                                <hr className="linha-pedido" />

                            </div>
                        </div>

                        <div className="col-12 qtd-itens-pedido">
                            <div className="row justify-content-between">

                                <span className="titulos-pedido-pq">Quantidade de itens: </span>
                                <span className="conteudo-pedidos-pq">&nbsp;{pedido.qtd_total_produtos}</span>
                                <hr className="linha-pedido" />

                            </div>
                        </div>

                        <div className="col-12 total-compra-historico">
                            <div className="row justify-content-center">

                                <span>Total da compra: R$ {converter(parseFloat(pedido.vlr_total_pedido))}</span>

                            </div>
                        </div>
                    </div>
                    <br />
                </>
            )
        )
       

        
    }
}