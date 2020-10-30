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

export default class Categorias extends Component {

    constructor(props) {
        super(props)
        this.state = { produtos: [],vlr:0}
    }
    componentDidMount() {
        
        this.preencherImagens()
    }
    componentWillReceiveProps(nextProps){
        this.props=nextProps
        this.preencherImagens()

        this.state.produtos.forEach(element => {
            document.getElementById(element.id_produto).value=0
        });
    }
    
    preencherImagens = () => {
        
        axios.get(`${API}`+this.props.params.desc)
            .then(resp => this.setState({ produtos: resp.data,vlr:this.state.vlr }))
            

    }
    nomeCategoria = () =>{
       return  (new Object(this.state.produtos[0])).ds_categoria
    }

    getQuantidade = () => {
        return this.state.produtos.length
    }

    aumentarValor=(e)=>{
        let id1 = document.getElementById("id_vlr1")
        let id2 = document.getElementById("id_vlr2")
        
        id1.innerHTML=parseInt(e) + parseInt(id1.innerHTML);
        id2.innerHTML= parseInt(e) + parseInt(id2.innerHTML);

        localStorage.setItem('qtd_cart',parseInt(e) + JSON.parse(localStorage.getItem('qtd_cart')))    }

    render() {
        let st = ">";
        const lista = this.state.produtos;
        return (
            <>
                <Header contador={this.state.vlr} />
                <CaminhoHeader st={st} path={this.nomeCategoria()}/>
                <Filtro qtd={this.getQuantidade()} />
                <section className="container-alimentos">
                    <ListagemProdutos func={e=>this.aumentarValor(e)}  caminho={IMAGE_PATH} produtos={lista} />
                </section>
                <Footer />
            </>
        )
    }
}