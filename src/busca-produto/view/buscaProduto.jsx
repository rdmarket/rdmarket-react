import React, { Component } from 'react'
import axios from 'axios'
import CaminhoHeader from '../../categorias-produto/view/caminhoHeader'
import Filtro from '../../categorias-produto/view/filtro'
import ListagemProdutos from '../../categorias-produto/view/listagemProdutos'
import Header from '../../templates/header/header'
import Footer from '../../templates/footer/footer'

const API_BUSCA = 'http://rdmarket-laravel.test/api/produtos/listarPorPesquisa/';
const IMAGE_PATH = 'http://rdmarket-laravel.test/storage/';
export default class extends Component {

    constructor(props) {
        super(props)
        this.state = { dados: [] }

    }

    componentDidMount = () => {
        this.loadData();
    }

    componentWillReceiveProps(nextProps) {
        this.props = nextProps
        this.loadData()

    }

    loadData = () => {

        axios.get(`${API_BUSCA}` + this.props.params.keyword)
            .then(resp => {

                this.setState({ dados: resp.data });

            }).catch(resp => {
                    this.setState({ dados: [] })
                }
            )

    }
    aumentarValor = (e) => {
        let id1 = document.getElementById("id_vlr1")
        let id2 = document.getElementById("id_vlr2")

        id1.innerHTML = parseInt(e) + parseInt(id1.innerHTML);
        id2.innerHTML = parseInt(e) + parseInt(id2.innerHTML);

        localStorage.setItem('qtd_cart', parseInt(e) + JSON.parse(localStorage.getItem('qtd_cart')))
    }
    nomeCategoria = () => {
        return this.props.params.keyword
    }

    getQuantidade = () => {
        return this.state.dados.length
    }

    render() {
        let st = ">";
        const lista = this.state.dados;
        return (
            <>
                <Header contador={this.state.vlr} />
                <CaminhoHeader st={st} path={this.nomeCategoria()} />
                <Filtro qtd={this.getQuantidade()} />
                <section className="container-alimentos">
                    <ListagemProdutos func={e => this.aumentarValor(e)} caminho={IMAGE_PATH} produtos={lista} />
                </section>
                <Footer />
            </>
        )
    }
}