import React, { Component } from 'react';
import '../css/home.css'
import Header from '../../templates/header/header'
import Footer from '../../templates/footer/footer'
import Carousel from './carousel'
import Novidades from './novidades'
import Ofertas from './ofertas'
export default class Home extends Component {

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

    render() {
        return (
            <>
                <Header />

                <Carousel />

                <div class="meu-jubo">
                    <h3>Novidades</h3>
                    <button class="btn-comprar">Mais novidades</button>
                </div>
                <Novidades />
                
                <div className="meu-jubo">
                    <h3>Ofertas</h3>
                    <button className="btn-comprar">Mais ofertas</button>
                </div>
                
                <Ofertas />


                <Footer />
            </>
        )
    }

}