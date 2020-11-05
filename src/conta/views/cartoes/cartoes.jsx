import React from 'react'
import '../../css/styles.css'
import '../../css/barra-vermelha.css'
import Header from '../../../templates/header/header'
import BarraVermelha from '../../componentes/barra-vermelha'
import Cartao from '../../componentes/card-cartao'
import Footer from '../../../templates/footer/footer'

export default () => {

    return (
        <>
            <Header />
            <BarraVermelha titulo="Meus cartões" />

            <div className="container">
                <div className="row justify-content-around">
                    <Cartao titulo="Tipo de cartão" numero="1234.1234.1234.1234" cpf="111.111.111-11" nome="Priscila Perez" />
                </div>
                <div className="row justify-content-start mt-3">
                    <div className="col-4">
                        <a href="#/adicionarCartao" className="btn btn-success">Adicionar cartão</a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )

}