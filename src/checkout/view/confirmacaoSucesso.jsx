import React from 'react'

export default () => {

    return (
        <>
            <div id="confirmacao_sucesso">
                <a href="#/historico"><img id="img_xis" src={require("../imagens/xis.png")} /></a>
                <img id="img_sucesso" src={require("../imagens/sucesso.png")} />
                <h2 id="msg-texto">Compra realizada com sucesso!</h2>
            </div>
        </>
    )

}