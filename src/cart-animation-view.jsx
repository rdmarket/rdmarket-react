import React, { Component } from 'react'
import './cart-animation.css'

export default class CartAnimation extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <>
                <div id="notification">
                    <h6 id="fonte-animacao">Item adicionado ao carrinho!</h6>
                </div>
            </>
        )
    }
}