import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import converter from '../../converterMoeda'

export default (props) => {


    return props.itens.map(item =>

        <div className="row col-12 borda-compra-itens">

            <div className="col-md-3 col-6">
                <h6>{item.ds_produto}</h6>
            </div>
            <div className="col-md-3 col-6">
                <h6>R$ {converter(parseFloat(item.vlr_total_item_pedido))}</h6>
            </div>
            <div className="col-md-3 col-6">
                <h6>{item.qtd_item_produto}x</h6>
            </div>
            <div className="col-md-3 col-6">
                <h6>{item.ds_categoria}</h6>
            </div>

        </div>

    )
}