import React from 'react';

export default props =>
{
    let itens = JSON.parse(localStorage.getItem("cart"));
    let total = 0;
    itens.forEach(item => {
        total += (item.qtd * item.preco);
    });
    
    return <h2 id="valor">Total: R$ {total.toFixed(2)}</h2>;
    
}