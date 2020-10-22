import React from 'react'

export default (props) =>{

    return(
        <>
            <article className="filtros">
                        <div className="text-products">
                        <p id="txt-produtos">Mostrando {props.qtd} de {props.qtd}</p>
                        </div>
                        <div className="dropdown-filtro">
                            <div className="btn-group-dp">
                                <button className="btn btn-secondary btn-sm dropdown-toggle bt-drop" type="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Filtrar por:
                        </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item " href="#">Até R$10,00</a>
                                    <a className="dropdown-item " href="#">Até R$20,00</a>
                                    <a className="dropdown-item " href="#">Até R$30,00</a>
                                </div>
                            </div>
                        </div>
                    </article>
        </>
    )

}