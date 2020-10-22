import React, { Component } from 'react'
import axios from 'axios'

const API = 'http://rdmarket-laravel.test/api/produtos/listarCategorias';


export default class ListagemCategoria extends Component {

    constructor(props) {
        super(props)
        this.state = { categorias: [] }


    }
    componentDidMount() {
        this.preencherCategorias()
    }

   

    preencherCategorias = () => {

        axios.get(`${API}`)
            .then(resp => this.setState({ categorias: resp.data }))

    }

    render() {
        return this.state.categorias.map(item => (
            <a class="dropdown-item item-categoria" href={"#/categoria/"+item.id_categoria}>{item.ds_categoria}</a>
        )

        )
    }

}


    