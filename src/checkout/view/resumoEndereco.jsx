import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import converter from '../../converterMoeda'

const devolverFinalCartao = (str) => {

    return str[str.length - 4] + str[str.length - 3] + str[str.length - 2] + str[str.length - 1]

}

export default (props) => {


    let arrayEndereco = localStorage.getItem('arrayEndereco')
    let arrayCartao = localStorage.getItem('arrayCartao')

    arrayEndereco = arrayEndereco.split(",")
    arrayCartao = arrayCartao.split(",")

    let str = arrayCartao[0][0]

    if (str == "N") {
        let palavra = devolverFinalCartao(arrayCartao[0])
        let tipo = palavra == "bito" ? "Débito" : "Crédito"
        arrayCartao[5] = tipo;
    }

    console.log(arrayEndereco)
    console.log(arrayCartao)



    return (
        <>
            <div className="row mt-5 mr-2 ml-2 resumo-itens-final">

                <div className="row col-12  ml-md-5 ml-sm-0 justify-content-center">

                    <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                        <h5>CEP</h5>
                    </div>
                    <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                        <h5>{arrayEndereco[4]}</h5>
                    </div>

                </div>
                <div className="row col-12  ml-md-5 ml-sm-0 justify-content-center">

                    <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                        <h5>Rua</h5>
                    </div>
                    <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                        <h5>{arrayEndereco[3]}</h5>
                    </div>

                </div>
                <div className="row col-12  ml-md-5 ml-sm-0 justify-content-center">

                    <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                        <h5>Cidade</h5>
                    </div>
                    <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                        <h5>{arrayEndereco[2]}</h5>
                    </div>

                </div>
                <div className="row col-12  ml-md-5 ml-sm-0 justify-content-center">

                    <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                        <h5>Estado</h5>
                    </div>
                    <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                        <h5>{arrayEndereco[1]}</h5>
                    </div>

                </div>
                <div className="row col-12  ml-md-5 ml-sm-0 justify-content-center">

                    <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                        <h5>Frete</h5>
                    </div>
                    <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                        <h5>R$ 10,00</h5>
                    </div>

                </div>
                <div className="row col-12  ml-md-5 ml-sm-0 justify-content-center">

                    <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                        <h5>Valor Total</h5>
                    </div>
                    <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                        <h5>R$ {converter(parseFloat(props.total) + 10)}</h5>
                    </div>

                </div>
                <div className="row col-12  ml-md-5 ml-sm-0 justify-content-center">

                    <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                        <h5>Método de Pagamento</h5>
                    </div>
                    <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                        <h5>Cartão de {arrayCartao[5]}</h5>
                    </div>

                </div>

            </div>
        </>
    )

}