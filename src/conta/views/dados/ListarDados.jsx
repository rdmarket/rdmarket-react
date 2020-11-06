import React, { Component } from 'react'
import CardDados from '../../componentes/card-dados'
import axios from 'axios'
import converterData from '../../../converterData'


const API_LISTAR = "http://rdmarket-laravel.test/api/cliente/listarDados/";

export default class ListarDados extends Component {

    constructor(props) {
        super(props)
        this.state = { dados: [] }
        this.preencherDados();
    }

    preencherDados = () => {
        if (this.props.logado) {
            let cliente = JSON.parse(localStorage.getItem('usuario'))
            axios.get(`${API_LISTAR}` + cliente.id_cliente)
                .then(resp => this.setState({ dados: resp.data }))
        }
    }


    render() {
        const { dados } = this.state;

        return (

            dados.map(dado =>
                <>

                    <CardDados nome={dado.nm_cliente} nascimento ={converterData(dado.data_nascimento)} cpf={dado.num_cpf} email={dado.ds_email} fixo={dado.num_fixo} celular={dado.num_celular}/>

                </>
            )
        )
    }

}