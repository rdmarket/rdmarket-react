import React from 'react'
import converter from '../../converterMoeda'
import '../../cart-animation.css'
import AnimacaoCarrinho from '../../cart-animation-view'
import animar from '../../cart-animation'

export default (props) => {

    const somar = (id) => {

        let display = document.getElementById(id);


        if (display.value == "")
            display.value = 0


        display.value = parseInt(display.value) + 1
    }

    const subtrair = (id) => {
        let display = document.getElementById(id);

        if (display.value == " ")
            display.value = 0

        if (display.value > 0)
            display.value = parseInt(display.value) - 1
    }

    const calcularPreco = (n, m) => {
        n = parseFloat(n)
        m = parseFloat(m)
        m = 100 - m
        m = m / 100
        return n * m
    }

    const adicionarCarrinho = (id, titulo, item) => {
        animar()
        let display = document.getElementById(id);
        let qtd = parseFloat(display.value);

        props.func(display.value)

        if (!qtd == 0) {
            let carrinho = JSON.parse(localStorage.getItem("cart"));
            let i = carrinho.findIndex(x => x.id === id);



            if (i >= 0) {
                let tirarItem = carrinho.filter(function (x) {
                    return x.id == id;
                });
                let conversao = parseInt(tirarItem[0].qtd);
                conversao += qtd;
                tirarItem[0].qtd = conversao;
                carrinho.splice(i, 1, tirarItem[0]);
                localStorage.setItem("cart", JSON.stringify(carrinho));
                display.value = 0;
                return true;
            }
            let url = props.caminho + item.caminho_imagem
            let preco = calcularPreco(item.valor_venda, item.p_desconto).toFixed(2);
            carrinho.push({ id, titulo, qtd, preco, url })
            localStorage.setItem("cart", JSON.stringify(carrinho))

            display.value = 0;
        }
    }

    return (props.produtos.map(item => (

        <>
            <AnimacaoCarrinho />
            <article className="item">
                <a href={"#/detalhe/" + item.id_produto + "/" + item.ds_categoria}>
                    <img src={props.caminho + item.caminho_imagem} height="110px" />
                </a>
                <div className={item.ds_categoria + " col-5"}>
                    <a href={"#/detalhe/" + item.id_produto + "/" + item.ds_categoria}>
                        <p>{item.ds_produto}</p>
                    </a>
                </div>
                <div className="preco-produto">
                    <h6>De <strike> R$ {converter(parseFloat(item.valor_venda))}</strike></h6>
                    <h5><span>Por</span> R$ {converter(calcularPreco(item.valor_venda, item.p_desconto))}</h5>
                </div>
                <div className="container-dos-botoes">
                    <input type="button" onClick={() => subtrair(item.id_produto)} className="menos" value="-" />
                    <input type="text" id={item.id_produto} className="quant" placeholder="0" />
                    <input type="button" onClick={() => somar(item.id_produto)} className="mais" value="+" />
                    <input id="cart" type="image" onClick={() => adicionarCarrinho(item.id_produto, item.ds_produto, item)} src={require("../../categorias-produto/imagens/cart.png")} />
                </div>
            </article>
        </>
    ))

    )

}