import React from 'react'

export default (props) => {

    const calcularPreco = (n,m) =>{
        n=parseFloat(n)
        m=parseFloat(m)
        m=100-m
        m=m/100
        return n*m  
    }

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
                    <h5>R$ {calcularPreco(item.valor_venda,item.p_desconto)}</h5>
                </div>
                <div className="container-dos-botoes">
                    <input type="button" className="menos" value="-" />
                    <input type="text" className="quant" placeholder="0" />
                    <input type="button" className="mais" value="+" />
                    <input id="cart" type="image" src={require("../../categorias-produto/imagens/cart.png")} />
                </div>
            </article>
        </>
    ))

    )

}