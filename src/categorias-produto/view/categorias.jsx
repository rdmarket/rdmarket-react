import React, { Component } from 'react'
import '../css/styles copy.css'
import '../css/styles-cat-alimentos.css'
import '../css/styles-filtro.css'
import '../css/styles-item-detalhado.css'
import '../css/styles-media-queries.css'
import Header from '../../templates/header/header'
import Footer from '../../templates/footer/footer'
import { render } from '@testing-library/react'
import axios from 'axios'
import CaminhoHeader from './caminhoHeader'
import Filtro from './filtro'
import ListagemProdutos from './listagemProdutos'

const API = 'http://rdmarket-laravel.test/api/produtos/listarPorTipo/';
const IMAGE_PATH = 'http://rdmarket-laravel.test/storage/';

export default class AlimentosBasicos extends Component {

    constructor(props) {
        super(props)
        this.state = { produtos: []}
    }
    componentDidMount() {
        
        this.preencherImagens()
    }
    componentWillReceiveProps(nextProps){
        this.props=nextProps
        this.preencherImagens()
    }
    preencherImagens = () => {
        
        axios.get(`${API}`+this.props.params.desc)
            .then(resp => this.setState({ produtos: resp.data }))

    }
    nomeCategoria = () =>{
       return  (new Object(this.state.produtos[0])).ds_categoria
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
                    <ListagemProdutos caminho={IMAGE_PATH} produtos={lista} />
                </section>
                <Footer />
            </>
        )
    }
}