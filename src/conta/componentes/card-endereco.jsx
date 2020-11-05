import React from 'react'
import '../css/styles.css'

export default props => {

    return (
        <div className="col-5 mt-5">
            <div className="card bg-light">
                <div className="card-header">
                    <h5>{props.tipo}</h5>
                </div>
                <div className="card-body">
                    <div className="row justify-content-start ml-3">
                        <div className="col-9">
                            <div className="row">
                                <div classname="card-text" style={{ fontWeight: 'bold' }}>Logradouro</div>
                            </div>
                            <div className="row">
                                <div classname="card-text" >{props.logradouro}</div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="row">
                                <div classname="card-text" style={{ fontWeight: 'bold' }}>Número</div>
                            </div>
                            <div className="row">
                                <div classname="card-text" >{props.numero}</div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-start mt-2 ml-3">
                        <div className="col-7">
                            <div className="row">
                                <div classname="card-text" style={{ fontWeight: 'bold' }}>Complemento</div>
                            </div>
                            <div className="row">
                                <div classname="card-text" >{props.complemento}</div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="row">
                                <div classname="card-text" style={{ fontWeight: 'bold' }}>Bairro</div>
                            </div>
                            <div className="row">
                                <div classname="card-text" >{props.bairro}</div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-start mt-2 ml-3">
                        <div className="col-9">
                            <div className="row">
                                <div classname="card-text" style={{ fontWeight: 'bold' }}>Cidade</div>
                            </div>
                            <div className="row">
                                <div classname="card-text" >{props.cidade}</div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="row">
                                <div classname="card-text" style={{ fontWeight: 'bold' }}>Estado</div>
                            </div>
                            <div className="row">
                                <div classname="card-text" >{props.estado}</div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-start mt-2 ml-3">
                        <div className="col-9">
                            <div className="row">
                                <div classname="card-text" style={{ fontWeight: 'bold' }}>CEP</div>
                            </div>
                            <div className="row">
                                <div classname="card-text" >{props.cep}</div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-start mt-2">
                        <div className="col-2">
                            <a href="#/editarEndereco" className="btn btn-secondary secondary">Editar</a>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-danger danger">Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}