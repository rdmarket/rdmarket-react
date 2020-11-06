import React from 'react'

export default props => {

    return (

        <div className="col-4 mt-5">
            <div className="card bg-light">
                <div className="card-header">
                    <h5>{props.tipo}</h5>
                </div>
                <div className="card-body">
                    <div className="row justify-content-start ml-3">
                        <div className="col-6">
                            <div className="row">
                                <div classname="card-text" style={{ fontWeight: 'bold' }}>Número do cartão</div>
                            </div>
                            <div className="row">
                                <div classname="card-text" >{props.numero}</div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-start mt-3 ml-3">
                        <div className="col-6">
                            <div className="row">
                                <div classname="card-text" style={{ fontWeight: 'bold' }}>CPF do titular</div>
                            </div>
                            <div className="row">
                                <div classname="card-text" >{props.cpf}</div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-start mt-3 ml-3">
                        <div className="col-6">
                            <div className="row">
                                <div classname="card-text" style={{ fontWeight: 'bold' }}>Nome do titular</div>
                            </div>
                            <div className="row">
                                <div classname="card-text" >{props.nome}</div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-start mt-3">
                        <div className="col-3">
                            <a href="#/editarCartao" className="btn btn-secondary secondary">Editar</a>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-danger danger">Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}