import React, { Component } from 'react';
import '../css/home.css'
import Header from '../../templates/header/header'
import Footer from '../../templates/footer/footer'
import Carousel from './carousel'
import Novidades from './novidades'
import Ofertas from './ofertas'
export default class Home extends Component {

    constructor(props){
        super(props)
        
    }

    state = {
        valor: 0
    }
    //tem que fazer a lógica do carrinho aqui :)
    somar = (n) => {
        // console.log(document.getElementById())
        this.setState({ valor: this.state.valor + 1 })
    }

    subtrair = () => {
        if (this.state.valor != 0)
            this.setState({ valor: this.state.valor - 1 })
    }

    aumentarValor=(e)=>{
        let id1 = document.getElementById("id_vlr1")
        let id2 = document.getElementById("id_vlr2")
        
        id1.innerHTML=parseInt(e) + parseInt(id1.innerHTML);
        id2.innerHTML= parseInt(e) + parseInt(id2.innerHTML);

        localStorage.setItem('qtd_cart',parseInt(e) + JSON.parse(localStorage.getItem('qtd_cart')))    
    }

    render() {
        return (
            <>
                
                <Header/>

                <Carousel />

                <div class="meu-jubo">
                    <h3>Novidades</h3>
                    <a href="#/novidades" className="btn-comprar-a">Mais novidades</a>
                </div>

                <Novidades func={e=>this.aumentarValor(e)} />
                
                <div className="meu-jubo">
                    <h3>Ofertas</h3>
                    <a href="#/descontos" className="btn-comprar-a">Mais ofertas</a>
                </div>
                
                <Ofertas func={e=>this.aumentarValor(e)} />

                

                <Footer />
            </>
        )
    }

}