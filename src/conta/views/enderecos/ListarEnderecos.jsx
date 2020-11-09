import React, { Component } from 'react'
import CardEndereco from '../../componentes/card-endereco'
import axios from 'axios'


const API_LISTAR = "http://rdmarket-laravel.test/api/endereco/listarPorCliente/";

export default class ListarEnderecos extends Component {

    constructor(props) {
        super(props)
        this.state = { enderecos: [] }
        this.preencherEndereco();
    }

    preencherEndereco = () => {
        if (this.props.logado) {
            let cliente = JSON.parse(localStorage.getItem('usuario'))
            axios.get(`${API_LISTAR}` + cliente.id_cliente)
                .then(resp => this.setState({ enderecos: resp.data }))
        }
    }


    render() {
        const { enderecos } = this.state;

        return (

            enderecos.map(endereco =>
                <>

                    <CardEndereco tipo={endereco.ds_tipo_endereco} logradouro={endereco.nm_rua}numero={endereco.num_endereco} complemento={endereco.ds_complemento} bairro={endereco.nm_bairro} cidade={endereco.nm_cidade} estado={endereco.nm_estado} cep={endereco.num_cep} />

                </>
            )
        )
    }

}