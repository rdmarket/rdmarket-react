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
        <BarraVermelha titulo="Meus dados" />

        <div className="container">
        <div className="row justify-content-around">
          <div className="col-8 mt-5">
            <div className="card bg-light">
              <div className="card-header">
                <h5 style={{fontWeight: 'bold'}}>Resumo da conta</h5>
              </div>
              <div className="card-body">
                <div className="row justify-content-between ml-3">
                  <div className="col-2">
                    <div className="row">
                      <div className="card-text" style={{fontWeight: 'bold'}}>Nome</div>
                    </div>
                    <div className="row">
                      <div className="card-text">Priscila</div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row">
                      <div className="card-text" style={{fontWeight: 'bold'}}>Sobrenome</div>
                    </div>
                    <div className="row">
                      <div className="card-text">Perez Passos</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row">
                      <div className="card-text" style={{fontWeight: 'bold'}}>Data de nascimento</div>
                    </div>
                    <div className="row">
                      <div className="card-text">09/08/1997</div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row">
                      <div className="card-text" style={{fontWeight: 'bold'}}>CPF</div>
                    </div>
                    <div className="row">
                      <div className="card-text">453.493.298-71</div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between mt-5 ml-3">
                  <div className="col-5">
                    <div className="row">
                      <div className="card-text" style={{fontWeight: 'bold'}}>Email</div>
                    </div>
                    <div className="row">
                      <div className="card-text">priscilaperezpassos@outlook.com</div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row">
                      <div className="card-text" style={{fontWeight: 'bold'}}>Telefone</div>
                    </div>
                    <div className="row">
                      <div className="card-text">(11) 3853-7888</div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row">
                      <div className="card-text" style={{fontWeight: 'bold'}}>Celular</div>
                    </div>
                    <div className="row">
                      <div className="card-text">(11) 975682669</div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-start mt-5">
                  <div className="col-5">
                    <a href="#/editarDados" className="btn btn-secondary secondary">Editar meus dados</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <Footer />
        </>
    )

}