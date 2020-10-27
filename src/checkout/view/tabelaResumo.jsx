import React, { Component } from 'react'
import axios from 'axios'
import ItensTabelaResumo from './itensTabelaResumo'

//aqui tem que colocar o id_pedido do local storage
const API_CHECKOUT_ITENS = 'http://rdmarket-laravel.test/api/devolverResumo/'

export default class TabelaResumo extends Component {

    //Aqui vai puxar os itens do carrinho e listar
    constructor(props) {
        super(props)
        this.state = { itens: [] }
    }

    componentDidMount() {
        this.preencherItens()
    
    }

    preencherItens = () => {


        axios.get(`${API_CHECKOUT_ITENS}` + localStorage.getItem('id_pedido')
        )
            .then(resp => this.setState({ itens: resp.data }))

            
    }

    render() {
        // console.log(this.state.itens)
        return (
            <>
                <div className="row overflow-auto ml-2 mr-2 horizontal-scrollable scrollbar-success scroll-bar">

                    <ItensTabelaResumo itens={this.state.itens} />

                </div>
            </>
        )
    }

}