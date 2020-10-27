import React from 'react'
import converter from  '../../converterMoeda'

export default (props) =>{

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

    return (
        
         <>
         {/* #/detalhe/"+item.id_produto+"/"+item.ds_categoria */}
            <div className={props.classe}>
                        <figure className="imagem">
                            <a href={"#/detalhe/"+props.id_produto+"/"+props.tipo}><img className="img-size" src={props.path} /></a>
                            <figcaption>{props.desc}</figcaption>
                            <h3 className="h3-align-text">R${converter(parseFloat(props.vlr))}</h3>
                            <div className="containerBotoes">
                                <input onClick={()=>subtrair(props.id_produto+"_"+props.tipo)} type="button" className="menos" value="-" />
                                <input type="text" id={props.id_produto+"_"+props.tipo} className="quant" placeholder="0" />
                                <input onClick={()=>somar(props.id_produto+"_"+props.tipo)} type="button" className="mais" value="+" />
                                <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                            </div>
                        </figure>
                    </div>
        </>
    )
}