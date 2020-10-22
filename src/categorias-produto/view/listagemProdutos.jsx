import React from 'react'

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

    const calcularPreco = (obj) =>{

        if(obj.status_desconto == 'ativo'){
            return obj.valor_venda - (obj.valor_venda * obj.p_desconto/100)
        }

        return obj.valor_venda

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
                    <h5>R$ {calcularPreco(item)}</h5>
                </div>
                <div className="container-dos-botoes">
                    <input type="button" onClick={()=>subtrair(item.id_produto)} className="menos" value="-" />
                    <input type="text" id={item.id_produto} className="quant" placeholder="0" />
                    <input type="button" onClick={()=>somar(item.id_produto)} className="mais" value="+" />
                    <input id="cart" type="image" src={require("../imagens/cart.png")} />
                </div>
            </article>
        </>
    ))

    )

}