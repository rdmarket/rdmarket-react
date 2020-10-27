import React from 'react'
import converter from '../../converterMoeda'

export default (props) => {

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
                <a href={"#/detalhe/"+item.id_produto+"/"+item.ds_categoria}>
                     <img src={props.caminho + item.caminho_imagem} height="110px" />
                </a>
                <div className={item.ds_categoria}>
                    <a href={"#/detalhe/"+item.id_produto+"/"+item.ds_categoria}>
                        <p>{item.ds_produto}</p>
                    </a>
                </div>
                <div className="preco-produto">
                    <h5>R$ {converter(calcularPreco(item.valor_venda,item.p_desconto))}</h5>
                </div>
                <div className="container-dos-botoes">
                    <input type="button" onClick={()=>subtrair(item.id_produto)} className="menos" value="-" />
                    <input type="text" id={item.id_produto} className="quant" placeholder="0" />
                    <input type="button" onClick={()=>somar(item.id_produto)} className="mais" value="+" />
                    <input id="cart" type="image" src={require("../../categorias-produto/imagens/cart.png")} />
                </div>
            </article>
        </>
    ))

    )

}