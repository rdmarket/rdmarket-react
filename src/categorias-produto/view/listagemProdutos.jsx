import React, { Component } from 'react'
import converter from '../../converterMoeda'


export default class ListagemProduto extends Component {

    constructor(props) {
        super(props)

        this.state = { valor_total: 0 }
    }

    calcularPreco = (obj) => {

        if (obj.status_desconto == 'ativo') {
            return obj.valor_venda - (obj.valor_venda * obj.p_desconto / 100)
        }

        return obj.valor_venda

    }


    adicionarCarrinho = (id, titulo, item) => {

        let display = document.getElementById(id);
        let qtd = parseFloat(display.value);

        // this.addDisplay(parseInt(display.value));
        // alert(this.state.valor_total)
        this.props.func(display.value)

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


            let url = this.props.caminho + item.caminho_imagem
            let preco = this.calcularPreco(item).toFixed(2);
            carrinho.push({ id, titulo, qtd, preco, url })
            localStorage.setItem("cart", JSON.stringify(carrinho))

            display.value = 0;
        }
    }

    somar = (id) => {

        let display = document.getElementById(id);


        if (display.value == "")
            display.value = 0


        display.value = parseInt(display.value) + 1
    }

    subtrair = (id) => {
        let display = document.getElementById(id);

        if (display.value == " ")
            display.value = 0

        if (display.value > 0)
            display.value = parseInt(display.value) - 1
    }

    render() {
        return (this.props.produtos.map(item => (

            <>
                <article className="item">
                    <a href={"#/detalhe/" + item.id_produto + "/" + item.ds_categoria}>
                        <img src={this.props.caminho + item.caminho_imagem} height="110px" />
                    </a>
                    <div className={item.ds_categoria + " col-5"}>
                        <a href={"#/detalhe/" + item.id_produto + "/" + item.ds_categoria}>
                            <p>{item.ds_produto}</p>
                        </a>
                    </div>
                    <div className="preco-produto">
                        <h5>R$ {converter(this.calcularPreco(item))}</h5>
                    </div>
                    <div className="container-dos-botoes">
                        <input type="button" onClick={() => this.subtrair(item.id_produto)} className="menos" value="-" />
                        <input type="text" id={item.id_produto} className="quant" placeholder="0" />
                        <input type="button" onClick={() => this.somar(item.id_produto)} className="mais" value="+" />
                        <input id="cart" type="image" onClick={() => this.adicionarCarrinho(item.id_produto, item.ds_produto, item)} src={require("../imagens/cart.png")} />
                    </div>
                </article>
            </>
        ))

        )
    }

}
