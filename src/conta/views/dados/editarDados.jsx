import React from 'react'
import '../../css/styles.css'
import '../../css/barra-vermelha.css'
import Header from  '../../../templates/header/header'
import BarraVermelha from '../../componentes/barra-vermelha'
import Footer from  '../../../templates/footer/footer'

export default () => {

    return (
        <>
        <Header />
        <BarraVermelha titulo="Editar meus dados" />

        <div className="container mt-5">
        <div className="row justify-content-center">
          <form className="col-10">
            <div className="row">
              <div className="form-group col-6">
                <label htmlFor="nome">Nome:</label>
                <input type="tex" className="form-control" id="nome" />
              </div>
              <div className="form-group col-6">
                <label htmlFor="sobrenome">Sobrenome:</label>
                <input type="tex" className="form-control" id="sobrenome" />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-4">
                <label htmlFor="dataNascimento">Data de nascimento</label>
                <input type="date" className="form-control" id="dataNascimento" disabled />
              </div>
              <div className="form-group col-8">
                <label htmlFor="email">E-mail</label>
                <input type="email" className="form-control" id="email" />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-4">
                <label htmlFor="CPF">CPF</label>
                <input type="tel" className="form-control" id="CPF" placeholder="000.000.000-00" disabled />
              </div>
              <div className="form-group col-4">
                <label htmlFor="telefone">Telefone</label>
                <input type="tel" className="form-control" id="telefone" placeholder="(--)____-____" />
              </div>
              <div className="form-group col-4">
                <label htmlFor="celular">Celular</label>
                <input type="tel" className="form-control" id="celular" placeholder="(--)_____-____" />
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-6">
                <div className="row justify-content-start">
                  <div className="col-3">
                    <a href="#/dados" type="button" className="btn btn-danger danger" style={{width: '100%'}}>Voltar</a>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row justify-content-end">
                  <div className="col-3">
                    <button type="reset" className="btn btn-secondary secondary">Limpar</button>
                  </div>
                  <div className="col-6">
                    <a type="button" className="btn btn-success" style={{width: '100%'}}>Salvar</a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

        <Footer />
        </>
    )

}