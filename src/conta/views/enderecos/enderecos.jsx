import React from 'react'
import '../../css/styles.css'
import '../../css/barra-vermelha.css'
import Header from '../../../templates/header/header'
import BarraVermelha from '../../componentes/barra-vermelha'
import CardEndereco from '../../componentes/card-endereco'
import Footer from '../../../templates/footer/footer'

export default () => {

  return (
    <>
      <Header />
      <BarraVermelha titulo="Meus endereços" />

      <div className="container">
        <div className="row justify-content-around">

          <CardEndereco tipo="Tipo de Endereço" logradouro="Rua do Sol" numero="123" complemento="-" bairro="Parque Veraneio" cidade="Ubatuba" estado="SP" cep="04567-000" />

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