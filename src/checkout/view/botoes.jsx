import React from 'react'

export default () =>{


    return(
        <>
            <div className="row justify-content-center mt-5">
                        <div className="text-center col-md-3 col-sm-5 col-12 order-md-2 order-sm-2 order-2">
                            <a href="#/carrinho" className="retornar">Voltar</a>

                        </div>
                        <div className="text-center col-md-5 col-sm-6 col-12 mb-md-0 mb-sm-0 mb-4 order-md-2 order-sm-2 order-1">
                            <a href="#/checkout/resumo" className="avancar">Confirmar Dados</a>
                        </div>
                    </div>
        </>
    )

}