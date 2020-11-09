import React, { Component } from 'react'
import converter from '../../converterMoeda'
import converterData from '../../converterData'


export default class PedidoTelaGrande extends Component {
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
                    <div className={"row item-historico " + this.preencherCorStatusPedido(pedido.desc_status_pedido) + " tela-g"}>
                        <div id="numero-pedido" className="col-12">
                            Pedido {pedido.id_pedido + ' - ' + pedido.nr_pedido}
                            <hr id="linha-pedido" />
                            <div className="row">
                                <div id="status-pedido" className="col-md-6 col-sm-12">
                                    <span>Status do pedido: {pedido.desc_status_pedido}</span>
                                </div>

                                <div id="qtd-itens-pedido" className="col-md-6 col-sm-12">
                                    <span>Quantidade de itens: {pedido.qtd_total_produtos}</span>
                                </div>
                            </div>

                            <div className="row">
                                <div id="data-pedido" className="col-md-6 col-sm-12">
                                    <span>Data do pedido: {converterData(pedido.data_pedido)}</span>
                                </div>

                                <div id="total-compra-historico" className="col-md-6 col-sm-12">
                                    <span>Total da compra: R$ {converter(parseFloat(pedido.vlr_total_pedido))}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                </>
            )
        )
       

        
    }
}