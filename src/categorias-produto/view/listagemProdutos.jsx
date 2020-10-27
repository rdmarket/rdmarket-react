import React from 'react'
import converter from '../../converterMoeda'

export default (props) => {

    const calcularPreco = (obj) =>{

        if(obj.status_desconto == 'ativo'){
            return obj.valor_venda - (obj.valor_venda * obj.p_desconto/100)
        }

        return obj.valor_venda

    }

    const adicionarCarrinho = (id, titulo, item) => {
        let display = document.getElementById(id);
        let qtd = parseFloat (display.value);

        if (!qtd == 0){
            let carrinho = JSON.parse(localStorage.getItem("cart"));
            let i = carrinho.findIndex(x => x.id === id);
            
            console.log (i)

            if (i>= 0){
                let tirarItem = carrinho.filter(function(x) {
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

            let preco = calcularPreco(item).toFixed(2); 
            carrinho.push({id, titulo, qtd, preco})
            localStorage.setItem("cart", JSON.stringify(carrinho))

            display.value = 0;
        }
    }

    const somar = (id) =>{
        
        let display = document.getElementById(id);


        if(display.value=="")
            display.value=0
        
    
        display.value = parseInt(display.value)+1
    }

    const subtrair = (id) =>{
        let display = document.getElementById(id);
        
        if(display.value==" ")
            display.value=0
        
        if(display.value > 0)
           display.value = parseInt(display.value)-1
    }

    return (props.produtos.map(item => (

        <>
            <article className="item">
                <a href={"#/detalhe/"+item.id_produto+"/"+item.ds_categoria}>
                    <img src={props.caminho + item.caminho_imagem} height="110px" />
                </a>
                <div className={item.ds_categoria}>
                    <a href={"#/detalhe/"+item.id_produto+"/"+item.ds_categoria}>
                        <p>{item.ds_produto}</p>
                    </a>
                </div>
                <div className="preco-produto">
                    <h5>R$ {converter(calcularPreco(item))}</h5>
                </div>
                <div className="container-dos-botoes">
                    <input type="button" onClick={()=>subtrair(item.id_produto)} className="menos" value="-" />
                    <input type="text" id={item.id_produto} className="quant" placeholder="0"/>
                    <input type="button" onClick={()=>somar(item.id_produto)} className="mais" value="+" />
                    <input id="cart" type="image" onClick={() => adicionarCarrinho(item.id_produto, item.ds_produto, item)} src={require("../imagens/cart.png")} />
                </div>
            </article>
        </>
    ))

    )

}