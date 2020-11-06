import React from 'react'
import '../../css/styles.css'
import '../../css/barra-vermelha.css'
import Header from  '../../../templates/header/header'
import BarraVermelha from '../../componentes/barra-vermelha'
import ListarDados from './ListarDados'
import Footer from  '../../../templates/footer/footer'


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
        <BarraVermelha titulo="Meus dados" />

        <ListarDados logado={() => verificarLogado()}/>

        <Footer />
        </>
    )

}