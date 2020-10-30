import React, { Component } from 'react'
import '../css/barra-progresso.css'
import '../css/styles.css'
import '../css/styles-barra-vermelha.css'
import '../css/styles-item-detalhado.css'
import Header from '../../templates/header/header'
import Footer from '../../templates/footer/footer'
import CaminhoHeader from '../../categorias-produto/view/caminhoHeader'
import InformacaoProduto from './informacoesProduto'
import ImagemProduto from './imagensProduto'
import axios from 'axios'

const API = 'http://rdmarket-laravel.test/api/produtos/';
const IMAGE_PATH = 'http://rdmarket-laravel.test/storage/';

export default class ItemDetalhe extends Component {


    constructor(props) {
        super(props)
        this.state = { produto: []}
    }
    componentDidMount() {
        
        this.preencherProduto()
    }
    componentWillReceiveProps(nextProps){
        this.props=nextProps
        this.preencherProduto()
    }
    preencherProduto = () => {
        
        axios.get(`${API}`+this.props.params.desc)
            .then(resp => this.setState({ produto: resp.data }))

    }
    nomeCategoria = () =>{
       return this.props.params.path+">"+(new Object(this.state.produto[0])).ds_produto
    }

    aumentarValor=(e)=>{
        let id1 = document.getElementById("id_vlr1")
        let id2 = document.getElementById("id_vlr2")
        
        id1.innerHTML=parseInt(e) + parseInt(id1.innerHTML);
        id2.innerHTML= parseInt(e) + parseInt(id2.innerHTML);

        localStorage.setItem('qtd_cart',parseInt(e) + JSON.parse(localStorage.getItem('qtd_cart')))    
    }

    render() {
        let st = ">";
        
        const obj = new Object(this.state.produto[0])
        return (

            <>
                <Header />
                <article className="page-item">
                    <CaminhoHeader st={st} path={this.nomeCategoria()} />
                    <div className="container">
                        <ImagemProduto path_image={IMAGE_PATH+obj.caminho_imagem} />
                        <InformacaoProduto func={e=>this.aumentarValor(e)} produto={obj} path={IMAGE_PATH}/>
                    </div>
                </article>
                <Footer />
            </>
        )
    }
}