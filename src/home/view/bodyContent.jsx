import React from 'react'
import converter from '../../converterMoeda'
import '../../cart-animation.css'
import AnimacaoCarrinho from '../../cart-animation-view'
import animar from '../../cart-animation'

export default (props) => {

    const adicionarCarrinho = (id, titulo, vlr, props) => {

        animar()

        let display = document.getElementById(props.id_produto + "_" + props.tipo);
        let qtd = parseFloat(display.value);

        props.func(display.value)

        if (!qtd == 0) {
            let carrinho = JSON.parse(localStorage.getItem("cart"));
            let i = carrinho.findIndex(x => x.id === id);
            console.log(i)

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

            let url = props.path
            let preco = parseFloat(vlr).toFixed(2);
            carrinho.push({ id, titulo, qtd, preco, url })
            localStorage.setItem("cart", JSON.stringify(carrinho))

            display.value = 0;
        }

    }

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

    return (

        <>
            {/* #/detalhe/"+item.id_produto+"/"+item.ds_categoria */}
            <AnimacaoCarrinho />
            <div className={props.classe}>
                <figure className="imagem">
                    <a href={"#/detalhe/" + props.id_produto + "/" + props.tipo}><img className="img-size" src={props.path} /></a>
                    <figcaption className="espaco-descricao">{props.desc}</figcaption>
                    <h6 hidden={props.status=="desativado"?true:false} className="h3-align-text">De <strike>R${converter(parseFloat(props.vlr_original))}</strike></h6>
                    <h3 className="h3-align-text"><span hidden={props.status=="desativado"?true:false}>Por</span> R${converter(parseFloat(props.vlr.toFixed(2)))}</h3>
                    <div className="containerBotoes">
                        <input onClick={() => subtrair(props.id_produto + "_" + props.tipo)} type="button" className="menos" value="-" />
                        <input type="text" id={props.id_produto + "_" + props.tipo} className="quant" placeholder="0" />
                        <input onClick={() => somar(props.id_produto + "_" + props.tipo)} type="button" className="mais" value="+" />
                        <input type="image" onClick={() => adicionarCarrinho(props.id_produto, props.desc, props.vlr, props)} src={require("../../templates/imagens/cart.png")} id="cart-button" />
                    </div>
                </figure>
            </div>
        </>
    )
}