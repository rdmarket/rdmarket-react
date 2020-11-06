import React from 'react'

export default props => {

    return (

        <div className="container">
        <div className="row justify-content-around">
          <div className="col-8 mt-5">
            <div className="card bg-light">
              <div className="card-header">
                <h5 style={{fontWeight: 'bold'}}>Resumo da conta</h5>
              </div>
              <div className="card-body">
                <div className="row justify-content-between ml-3">
                  <div className="col-5">
                    <div className="row">
                      <div className="card-text" style={{fontWeight: 'bold'}}>Nome Completo</div>
                    </div>
                    <div className="row">
                      <div className="card-text">{props.nome}</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row">
                      <div className="card-text" style={{fontWeight: 'bold'}}>Data de nascimento</div>
                    </div>
                    <div className="row">
                      <div className="card-text">{props.nascimento}</div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row">
                      <div className="card-text" style={{fontWeight: 'bold'}}>CPF</div>
                    </div>
                    <div className="row">
                      <div className="card-text">{props.cpf}</div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between mt-5 ml-3">
                  <div className="col-5">
                    <div className="row">
                      <div className="card-text" style={{fontWeight: 'bold'}}>Email</div>
                    </div>
                    <div className="row">
                      <div className="card-text">{props.email}</div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row">
                      <div className="card-text" style={{fontWeight: 'bold'}}>Telefone</div>
                    </div>
                    <div className="row">
                      <div className="card-text">{props.fixo}</div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row">
                      <div className="card-text" style={{fontWeight: 'bold'}}>Celular</div>
                    </div>
                    <div className="row">
                      <div className="card-text">{props.celular}</div>
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
    )
}