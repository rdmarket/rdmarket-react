import React, { Component } from 'react'
import CardCartao from '../../componentes/card-cartao'
import axios from 'axios'


const API_LISTAR = "http://rdmarket-laravel.test/api/cartao/listarPorCliente/";

export default class ListarCartoes extends Component {

    constructor(props) {
        super(props)
        this.state = { cartoes: [] }
        this.preencherCartao();
    }

    preencherCartao = () => {
        if (this.props.logado) {
            let cliente = JSON.parse(localStorage.getItem('usuario'))
            axios.get(`${API_LISTAR}` + cliente.id_cliente)
                .then(resp => this.setState({ cartoes: resp.data }))
        }
    }


    render() {
        const { cartoes } = this.state;

        return (

            cartoes.map(cartao =>
                <>

                    <CardCartao tipo={cartao.ds_tipo_cartao} numero={cartao.num_cartao} cpf={cartao.num_cpf} nome={cartao.nm_impresso} />

                </>
            )
        )
    }

}