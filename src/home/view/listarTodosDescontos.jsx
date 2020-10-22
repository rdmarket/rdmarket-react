import React, { Component } from 'react'
import '../../categorias-produto/css/styles copy.css'
import '../../categorias-produto/css/styles-cat-alimentos.css'
import '../../categorias-produto/css/styles-filtro.css'
import '../../categorias-produto/css/styles-media-queries.css'
import Header from '../../templates/header/header'
import Footer from '../../templates/footer/footer'
import { render } from '@testing-library/react'
import axios from 'axios'
import CaminhoHeader from '../../categorias-produto/view/caminhoHeader'
import Filtro from '../../categorias-produto/view/filtro'
import ListagemDesconto from './listagemDescontos'

const API = 'http://rdmarket-laravel.test/api/produtos/listarDescontos';
const IMAGE_PATH = 'http://rdmarket-laravel.test/storage/';

export default class ListarTodosDescontos extends Component {

    constructor(props) {
        super(props)
        this.state = { produtos: []}
    }
    componentDidMount() {
        
        this.preencherProdutos()
    }
    
    preencherProdutos = () => {
        axios.get(`${API}`)
            .then(resp => this.setState({ produtos: resp.data }))

    }
    nomeCategoria = () =>{
       return "Descontos"
    }

    getQuantidade = () => {
        return this.state.produtos.length
    }

    render() {
        let st = ">";
        const lista = this.state.produtos;
        return (
            <>
                <Header />
                <CaminhoHeader st={st} path={this.nomeCategoria()}/>
                <Filtro qtd={this.getQuantidade()} />
                <section className="container-alimentos">
                    <ListagemDesconto caminho={IMAGE_PATH} produtos={lista} />
                </section>
                <Footer />
            </>
        )
    }
}