import React from 'react'

export default (props) => {

    return (
        <>
            <article className="filtros">
                <div className="text-products">
                    <p id="txt-produtos">Mostrando {props.qtd} de {props.qtd}</p>
                </div>
                <div className="dropdown-filtro">
                    <div className="btn-group-dp">
                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filtrar por:
                        </button>
                        <div className="dropdown-menu bt-filtro">
                            <a type="button" onClick={e=>props.func(1)} className="dropdown-item" >De R$0,01 até R$10,00</a>
                            <a type="button" onClick={e=>props.func(2)} className="dropdown-item" >De R$10,00 até R$25,00</a>
                            <a type="button" onClick={e=>props.func(3)} className="dropdown-item" >De R$25,00 até R$50,00</a>
                            <a type="button" onClick={e=>props.func(4)} className="dropdown-item" >De R$50,00 até R$100,00</a>
                            <a type="button" onClick={e=>props.func(5)} className="dropdown-item" >Acima de R$100,00</a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}