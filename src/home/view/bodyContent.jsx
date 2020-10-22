import React from 'react'

export default (props) =>{

    return (
        <>
            <div className={props.classe}>
                        <figure className="imagem">
                            <img src={props.path} />
                            <figcaption>{props.desc}</figcaption>
                            <h3 className="h3-align-text">R${props.vlr}</h3>
                            <div className="containerBotoes">
                                <input type="button" className="menos" value="-" />
                                <input type="text" className="quant" placeholder="0" />
                                <input type="button" className="mais" value="+" />
                                <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                            </div>
                        </figure>
                    </div>
        </>

    )

}