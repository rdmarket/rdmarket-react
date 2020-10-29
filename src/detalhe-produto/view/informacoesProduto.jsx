import React from 'react'
import converter from '../../converterMoeda'


export default (props) => {

    const calcularPreco = (obj) =>{

        if(obj.status_desconto == 'ativo'){
            return obj.valor_venda - (obj.valor_venda * obj.p_desconto/100)
        }

        return  parseFloat(obj.valor_venda)

    }

    const adicionarCarrinho = (id, titulo, item) => {
        
        let display = document.getElementById("detalhe-campo");
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
            let url = props.path + props.produto.caminho_imagem;
            let preco = calcularPreco(item).toFixed(2); 
            carrinho.push({id, titulo, qtd, preco, url})
            localStorage.setItem("cart", JSON.stringify(carrinho))

            display.value = 0;
        }
    }

    const somar = ()=>{

        let vlr = document.getElementById('detalhe-campo')
        
        if(vlr.value == "")
          vlr.value=0;

        vlr.value = parseInt(vlr.value)+1

    }

    const subtrair = ()=>{

        let vlr = document.getElementById('detalhe-campo')
        
        if(vlr.value == "")
          vlr.value=0;
        
        if(vlr.value > 0)
            vlr.value = parseInt(vlr.value)-1

    }

    return (
        <>
            <div className="row">

                <div className="col-12 col-md-7">
                    <div className="titulo-produto mt-2">
                        <ul className="mt-4">
                            <h1 className="mt-2 tamanho-titulo">{props.produto.ds_produto}</h1>
                            {/* <span className="codigo-produto mt-3">Cod.: 123456</span> */}
                            <div className="imagem-maior mt-3" id="imagem-grande-responsivo">
                                <img src={props.path + props.produto.caminho_imagem} alt="..." className="img-thumbnail grande-img img-tamanho" />
                            </div>
                        </ul>
                        <ul className="mt-5">
                            <li className="preco">R$ {converter(calcularPreco(props.produto))}</li>
                        </ul>
                        <ul className="mt-5 qtde-carrinho d-flex">
                            <li><button onClick={()=>subtrair()} className="btn-qtde menos">-</button></li>
                            <li><ul className="display-qtde">
                                <li>Qtd:</li>
                                <input id="detalhe-campo" className="qtde-item tamanhoInput" placeholder='0' />
                            </ul></li>
                            <li><button onClick={()=>somar()} className="btn-qtde mais">+</button></li>
                            <li><button className="btn-cart ml-5" onClick={() => adicionarCarrinho(props.produto.id_produto, props.produto.ds_produto, props.produto)}><img id="cart-item" src={require("../imagens/cart-item.png")} /></button></li>
                            <li id="descricao" className="ml-1">Adicionar o item ao carrinho.</li>
                        </ul>
                        <div className="div-btn-comprar mt-5">
                            <a href="#/carrinho"><button className="btn-comprar">Ir para o carrinho</button></a>
                        </div>
                    </div>
                </div>
                <div className="row ml-2 mt-5 mb-5">
                    <ul>
                        <li><h4>Descrição do Produto</h4></li>
                        <li>{props.produto.ds_produto}</li>
                    </ul>
                </div>
            </div>
        </>
    )

}