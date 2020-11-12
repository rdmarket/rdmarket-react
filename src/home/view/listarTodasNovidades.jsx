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
import ListagemProdutos from '../../categorias-produto/view/listagemProdutos'
import Pagination from "react-js-pagination";

const API = 'http://rdmarket-laravel.test/api/produtos/listarNovidades';
const IMAGE_PATH = 'http://rdmarket-laravel.test/storage/';



export default class AlimentosBasicos extends Component {

    constructor(props) {
        super(props)
        // this.state = { produtos: [],carrinho:0}
        this.state = { produtos: [], vlr: 0, isLoading: true, pg: 1 }
    }


    // teste = (e)=>{

    //     this.setState({carrinho:this.state.carrinho+e})
    // }

    componentWillMount() {
        this.obterDadosDeProduto();
    }

    obterDadosDeProduto(pageNumber = 1) {

        const url = `http://rdmarket-laravel.test/api/produtos/listarNovidadesPaginate/?page=${pageNumber}`;
        axios.get(url).then(resp => {
            // console.log(resp.data);
            this.setState({ produtos: resp.data, isLoading: false, pg: pageNumber })
            // console.log(this.state.produtos)

        });

    }

    nomeCategoria = () => {
        return "Novidades"
    }

    getQuantidade = () => {
        return [this.state.produtos.data.length, this.state.produtos.total]
    }

    aumentarValor = (e) => {
        let id1 = document.getElementById("id_vlr1")
        let id2 = document.getElementById("id_vlr2")

        id1.innerHTML = parseInt(e) + parseInt(id1.innerHTML);
        id2.innerHTML = parseInt(e) + parseInt(id2.innerHTML);

        localStorage.setItem('qtd_cart', parseInt(e) + JSON.parse(localStorage.getItem('qtd_cart')))
    }

    calcularPreco = (obj) => {

        if (obj.status_desconto == 'ativo') {
            return obj.valor_venda - (obj.valor_venda * obj.p_desconto / 100)
        }

        return obj.valor_venda

    }

    capturarFiltro = (n) => {


        const url = `http://rdmarket-laravel.test/api/produtos/listarNovidadesPaginate/?page=${this.state.pg}`;
        axios.get(url).then(resp => {
            // console.log(resp.data);

            // console.log(this.state.produtos)

            let aux = resp.data;

            for (let i = 0; i < aux.data.length; i++) {

                if (n == 1) {

                    if (!(parseFloat(this.calcularPreco(aux.data[i])) > 0 && parseFloat(this.calcularPreco(aux.data[i])) <= 10.0)) {
                        aux.data.splice(i, 1);
                        i--;
                    }
                }
                else if (n == 2) {

                    if (!(parseFloat(this.calcularPreco(aux.data[i])) > 10.0 && parseFloat(this.calcularPreco(aux.data[i])) <= 25.0)) {
                        aux.data.splice(i, 1);
                        i--;
                    }
                }
                else if (n == 3) {

                    if (!(parseFloat(this.calcularPreco(aux.data[i])) > 25.0 && parseFloat(this.calcularPreco(aux.data[i])) <= 50.0)) {
                        aux.data.splice(i, 1);
                        i--;
                    }
                }
                else if (n == 4) {

                    if (!(parseFloat(this.calcularPreco(aux.data[i])) > 50.0 && parseFloat(this.calcularPreco(aux.data[i])) <= 100.0)) {
                        aux.data.splice(i, 1);
                        i--;
                    }
                }
                else if (n == 5) {

                    if (!(parseFloat(this.calcularPreco(aux.data[i])) > 100.0)) {
                        aux.data.splice(i, 1);
                        i--;
                    }
                }
            }

            this.setState({ produtos: aux, isLoading: false })


        });
    }
    render() {
        let st = ">";

        if (this.state.isLoading) {
            return (<>
                <Header contador={this.state.vlr} />
                <CaminhoHeader st={st} path={"carregando"} />
            </>)
        }
        else {
            const { data, current_page, per_page, total } = this.state.produtos;
            return (
                <>
                    <Header contador={this.state.vlr} />
                    <CaminhoHeader st={st} path={this.nomeCategoria()} />
                    <Filtro func={(e) => this.capturarFiltro(e)} qtd={this.getQuantidade()} />
                    <section className="container-alimentos">
                        <ListagemProdutos func={e => this.aumentarValor(e)} caminho={IMAGE_PATH} produtos={data} />
                        <Pagination
                            activePage={current_page}
                            totalItemsCount={total}
                            itemsCountPerPage={per_page}
                            onChange={(pageNumber) => this.obterDadosDeProduto(pageNumber)}
                            itemClass="page-item"
                            linkClass="page-link"
                            firstPageText="Primeiro"
                            lastPageText="Último"
                        />
                    </section>
                    <Footer />
                </>
            )
        }
    }
}