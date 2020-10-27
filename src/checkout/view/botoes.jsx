import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'

const API_POST_ENDERECO = 'http://rdmarket-laravel.test/api/endereco'
const API_POST_CARTAO = 'http://rdmarket-laravel.test/api/checkout'
const API_POST_PEDIDO = 'http://rdmarket-laravel.test/api/pedidos/gerarPedido'

export default () => {

    const devolverFinalCartao = (str) => {

        return str[str.length - 4] + str[str.length - 3] + str[str.length - 2] + str[str.length - 1]

    }

    const getFormulario = () => {


        //esses são os valores do cartão
        let pagamento = document.getElementById("tipo_cartao").value
        let numero_cartao = document.getElementById("num_cartao").value
        let num_cpf = document.getElementById("num_cpf").value
        let num_parcelas = document.getElementById("num_parcelas").value
        let nm_impresso = document.getElementById("nm_titular").value
        let nm_tipo_cartao = document.getElementById("tipo_cartao").value
        let id_tipo_cartao = 0;

        if (pagamento == "dito") {
            id_tipo_cartao = 1;
        }
        else if (pagamento == "bito") {
            id_tipo_cartao = 2;
            num_parcelas = 1;
        }

        if (id_tipo_cartao != 0) {

            axios.post(`${API_POST_CARTAO}`, {
                "id_cliente": 1,
                "id_tipo_cartao": id_tipo_cartao,
                "num_cartao": numero_cartao,
                "num_cpf": num_cpf,
                "nm_impresso": nm_impresso,
                "nm_bandeira": "AUTOMATICO"
            })
                .then(function (response) {
                    //algo aqui?
                })

        }


        //esses são os valores do endereço
        let id_endereco = document.getElementById("id_endereco").value
        let tipoEndereco = document.getElementById("tipo_endereco").value
        let estado = document.getElementById("estado").value
        let nm_cidade = document.getElementById("cidade").value
        let nm_rua = document.getElementById("rua").value
        let num_cep = document.getElementById("cep").value
        let complemento = document.getElementById("complemento").value
        let num_endereco = document.getElementById("num_endereco").value

        let arrayCartao = []
        let arrayEndereco = []


        let adress;

        if (tipoEndereco == "Residencial")
            adress = 1;
        else if (tipoEndereco == "Comercial")
            adress = 2;
        else if (tipoEndereco == "Cobrança")
            adress = 3


        if (pagamento == "Crédito") {
            id_tipo_cartao = 1;
        }
        else if (pagamento == "Débito") {
            id_tipo_cartao = 2;
            num_parcelas = 1;
        }


        //se o endereço ainda não está cadastrado, então vai cadastrar um novo
        if (id_endereco == 0) {
            axios.post(`${API_POST_ENDERECO}`, {
                "id_tipo_endereco": adress,
                "num_cep": num_cep,
                "nm_rua": nm_rua,
                "num_endereco": num_endereco,
                "ds_complemento": complemento,
                "nm_bairro": "USE_CEP",
                "nm_cidade": nm_cidade,
                "nm_estado": estado
            })
                .then(function (response) {
                    id_endereco = response.data.id;
                    //aqui vou criar o pedido
                    axios.post(`${API_POST_PEDIDO}`, {
                        "id_cliente": 1,
                        "itens": JSON.parse(localStorage.getItem('cart')),
                        "id_forma_pagamento": id_tipo_cartao,
                        "id_endereco": id_endereco,
                        "nr_parcelas": num_parcelas
                    }).then(function (response) {
                        localStorage.setItem('id_pedido', response.data[0].id_pedido)
                        localStorage.setItem('cart', '[]')
                        document.location.reload(true);
                    })  
                })
        }
        else {

            //aqui vou criar o pedido
            axios.post(`${API_POST_PEDIDO}`, {
                "id_cliente": 1,
                "itens": JSON.parse(localStorage.getItem('cart')),
                "id_forma_pagamento": id_tipo_cartao,
                "id_endereco": id_endereco,
                "nr_parcelas": num_parcelas
            }).then(function (response) {
                localStorage.setItem('id_pedido', response.data[0].id_pedido)
                localStorage.setItem('cart', '[]')
                document.location.reload(true);
            })

        }









        arrayCartao.push(pagamento, numero_cartao, num_cpf, num_parcelas, nm_impresso, nm_tipo_cartao)
        arrayEndereco.push(tipoEndereco, estado, nm_cidade, nm_rua, num_cep, complemento, num_endereco)


        localStorage.setItem('arrayCartao', arrayCartao)
        localStorage.setItem('arrayEndereco', arrayEndereco)

        // return <Redirect to="/checkout/resumo" />



    }
    return (
        <>
            <div className="row justify-content-center mt-5">
                <div className="text-center col-md-3 col-sm-5 col-12 order-md-2 order-sm-2 order-2">
                    <a href="#/carrinho" className="retornar">Voltar</a>

                </div>
                <div className="text-center col-md-5 col-sm-6 col-12 mb-md-0 mb-sm-0 mb-4 order-md-2 order-sm-2 order-1">
                    <a onClick={() => getFormulario()} href="#/checkout/resumo/1" className="avancar">Confirmar Dados</a>
                </div>
            </div>
        </>
    )

}