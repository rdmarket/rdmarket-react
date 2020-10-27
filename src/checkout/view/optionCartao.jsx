import React from 'react'

export default (props) => {

    const devolverFinal = (str) => {

        return str[str.length-4]+str[str.length-3]+str[str.length-2]+str[str.length-1]

    }

    return (
        
          props.cartao.map(item => (
              
            <option>Cartao final: {devolverFinal(item.num_cartao)}</option>
        )

    ))
}