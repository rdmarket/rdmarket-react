import React from 'react'
import '../../css/styles.css'
import '../../css/barra-vermelha.css'
import Header from '../../../templates/header/header'
import BarraVermelha from '../../componentes/barra-vermelha'
import ListarEnderecos from './ListarEnderecos'
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
      <BarraVermelha titulo="Meus endereços" />

      <div className="container">
        <div className="row justify-content-around">

          <ListarEnderecos logado={() => verificarLogado()} />

        </div>
        <div className="row justify-content-start mt-3">
            <div className="col-3">
              <a href="#/adicionarEndereco" className="btn btn-success">Adicionar endereço</a>
            </div>
          </div>
      </div>

      <Footer />
    </>
  )

}