import React from 'react'

export default (props) => {

    return (props.produtos.map(item => (

        <>
            <article className="item">
                <a href="#">
                    <img src={props.caminho + item.caminho_imagem} height="110px" />
                </a>
                <div className={item.ds_categoria}>
                    <a href="#">
                        <p>{item.ds_produto}</p>
                    </a>
                </div>
                <div className="preco-produto">
                    <h5>R$ {item.valor_venda}</h5>
                </div>
                <div className="container-dos-botoes">
                    <input type="button" className="menos" value="-" />
                    <input type="text" className="quant" placeholder="0" />
                    <input type="button" className="mais" value="+" />
                    <input id="cart" type="image" src={require("../imagens/cart.png")} />
                </div>
            </article>
        </>
    ))

    )

}