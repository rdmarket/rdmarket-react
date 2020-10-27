import React, { Component } from 'react';


// var carrinho = [
//     {
//       "titulo": "Arroz",
//       "id": 1,
//       "preco": "7.99",
//       "qtd": "1"
//     },
//     {
//       "titulo": "Feijão",
//       "id": 2,
//       "preco": "10.00",
//       "qtd": "2"
//     },
//     {
//       "titulo": "Laranja",
//       "id": 3,
//       "preco": "10.00",
//       "qtd": "3"
//     },
//     {
//       "titulo": "Chocotone",
//       "id": 4,
//       "preco": "10.00",
//       "qtd": "4"
//     },
//     {
//       "titulo": "Leite",
//       "id": 5,
//       "preco": "10.00",
//       "qtd": "5"
//     },
//     {
//       "titulo": "Frango",
//       "id": 6,
//       "preco": "10.00",
//       "qtd": "6"
//     }
// ]

// localStorage.setItem ("cart", JSON.stringify(carrinho))
// localStorage.clear();


export default class Carrinho extends Component 
{
    constructor(props) {
        super(props)
        this.state = { itens: [] }
        this.refresh()
    }

    refresh = () => {
        this.setState(this.state.itens = JSON.parse(localStorage.getItem("cart")))
    }

    removerItem = (id) => {
        let i = this.state.itens.findIndex(x => x.id === id);// i = ao index do item.id que vamos exluir
        let itemParaRemover = [...this.state.itens]; // copia o state
        itemParaRemover.splice(i, 1); // passa o index do objeto que quer remomver 1 vez
        localStorage.setItem("cart", JSON.stringify(itemParaRemover)) //salva o novo State no LocalStorage
        this.refresh();
        document.location.reload(true);
        // this.state.itens.forEach(item => {
        //     this.atribuirQtd(item.id, item.qtd);          
        // });
             
    }

    inputQtd = (id) => {
        let elemento = document.getElementById(id);

        if (elemento.value >= 1 && elemento.value <= 99){
                        
            let i = this.state.itens.findIndex(x => x.id === id);// i = ao index do item.id que vamos substituir
            let itens = [...this.state.itens]; // copia o state
            var tirarItem = itens.filter(function(item) {
                return item.id == id;
            });

            tirarItem[0].qtd = elemento.value;
            console.log (tirarItem[0].qtd)
            itens.splice(i, 1, tirarItem[0]);
            localStorage.setItem("cart", JSON.stringify(itens));
            console.log(localStorage.getItem("cart"))

            this.refresh()
        }
    }

    
    aumentarQtd = (id) => {
        let elemento = document.getElementById(id);

        if (elemento.value <= 99){
            let aux = parseInt(elemento.value);
            aux += 1;
            elemento.value = aux;
            
            let i = this.state.itens.findIndex(x => x.id === id);// i = ao index do item.id que vamos substituir
            let itens = [...this.state.itens]; // copia o state
            var tirarItem = itens.filter(function(item) {
                return item.id == id;
            });

            let conversao = parseInt(tirarItem[0].qtd)
            conversao += 1;
            tirarItem[0].qtd = conversao;
            console.log (tirarItem[0].qtd)
            itens.splice(i, 1, tirarItem[0]);
            localStorage.setItem("cart", JSON.stringify(itens));

            
            this.refresh()
        }

        
    }

    diminuirQtd = (id) => {
        let elemento = document.getElementById(id);

        if (elemento.value >= 2){
            let aux = parseInt(elemento.value);
            aux -= 1;
            elemento.value = aux;

            let i = this.state.itens.findIndex(x => x.id === id);// i = ao index do item.id que vamos substituir
            let itens = [...this.state.itens]; // copia o state
            var tirarItem = itens.filter(function(item) {
                return item.id == id;
            });

            let conversao = parseInt(tirarItem[0].qtd)
            conversao -= 1;
            tirarItem[0].qtd = conversao;
            console.log (tirarItem[0].qtd)
            itens.splice(i, 1, tirarItem[0]);
            localStorage.setItem("cart", JSON.stringify(itens));
            console.log(localStorage.getItem("cart"))
            
            this.refresh()
        }
    }

    atribuirQtd = (id, qtd) => {
        let elemento = document.getElementById(id);
        elemento.value = qtd;
    }

    render(){
            const { itens } = this.state;
            
            return (
                itens.map(item => (  
                    
                    <li onLoad = {() => this.atribuirQtd(item.id,item.qtd)}>
                        <ul class="d-flex justify-content-around tamanho-carrinho">
                            <li>
                                <div id="imagem-carrinho">
                                    <img src={require("../carrinho/imagens/feijao.png")} alt="..." class="img-cart" />
                                </div>
                            </li>
                            <a type="hidden" value={item.id}/>
                            <li className="col-5"><h1 class="tamanho-titulo mt-4">{item.titulo}</h1></li>
                            <li class="valor mt-4">R$ {item.preco}</li>
                            <ul  class="d-flex">
                                <li><button class="btn-qtd menos mt-3" onClick = {() => this.diminuirQtd(item.id)}>-</button></li>
                                <li>
                                    <ul id="qtd-item-carrinho" class="caixa-qtd text-center mt-1">
                                        <li class="qtd-item" id="descricao-qtd">Qtd:</li>
                                        <li class="qtd-item" id="qtd"><input id={item.id} onChange = {() => this.inputQtd (item.id)} className="entrada-qtd" type="text"/></li>
                                    </ul>
                                </li>
                                <li><button class="btn-qtd mais mt-3" onClick = {() => this.aumentarQtd(item.id)}>+</button></li>
                            </ul>
                            <li><button class="btn-exclui mt-4" onClick = {()=>this.removerItem(item.id)}><img id="img-exclui" src={require("../carrinho/imagens/lixo.png")} /></button></li>
                        </ul>
                    </li>
                    
                    
                   
                ))
            )
            
    }
}