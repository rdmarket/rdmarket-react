import React from 'react'

export default (props) => {

    return (
        <>
            <div id="confirmacao_sucesso">
                <a href="#/checkout/resumo"><img id="img_xis" src={require("../imagens/xis.png")} /></a>
                <img id="img_sucesso" src={require("../imagens/sucesso.png")} />
                <h2 id="msg-texto">Compra realizada com sucesso!</h2>
                <h2 id="msg-texto">Obrigado por comprar conosco</h2>
                <h2 id="msg-texto">Nº pedido:  {props.num_pedido}</h2>
            </div>
        </>
    )

}