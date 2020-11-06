import React from 'react'
import '../../css/styles.css'
import '../../css/barra-vermelha.css'
import Header from '../../../templates/header/header'
import BarraVermelha from '../../componentes/barra-vermelha'
import ListarCartoes from './ListarCartoes'
import Footer from '../../../templates/footer/footer'

export default () => {

    const verificarLogado = () => {
        let nomeCliente = localStorage.getItem('usuario')
    
        if (nomeCliente == null) {
            return false
        }
        return true
    }

    return (
        <>
            <Header />
            <BarraVermelha titulo="Meus cartões" />

            <div className="container">
                <div className="row justify-content-center">
                    <ListarCartoes logado={() => verificarLogado()} />
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