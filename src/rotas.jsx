import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Home from './home/view/home';
import Cat from './categorias-produto/view/categorias';
import Novidade from './home/view/listarTodasNovidades'
import Descontos from './home/view/listarTodosDescontos'
import Detalhe from './detalhe-produto/view/item-detalhado'
import Login from './login/view/login'
import Contato from './formulario-contato/view/contato'
import Cadastro from './cadastro/view/cadastro'
import Carrinho from './carrinho/view/carrinho'
import ConfirmaDados from './checkout/view/Checkout-pagamento'
import ResumoCompra from './checkout/view/Checkout-compra'
import Historico from './historico-compra/view/historico'



export default props => {

    return (

        <>
            <Router history={hashHistory}>
                <Route path='/home' component={Home} />
                <Route path='/categoria/:desc' component={Cat} />
                <Route path='/novidades' component={Novidade} />
                <Route path='/descontos' component={Descontos} />
                <Route path='/login' component={Login} />
                <Route path='/detalhe/:desc/:path' component={Detalhe} />
                <Route path='/contato' component={Contato} />
                <Route path='/cadastro' component={Cadastro} />
                <Route path='/carrinho' component={Carrinho} />
                <Route path='/checkout/confirmar/dados/:idcliente/:idpedido' component={ConfirmaDados} />
                <Route path='/checkout/resumo/:idcliente/:idpedido' component={ResumoCompra} />
                <Route path='/historico' component={Historico} />
                <Redirect from='*' to='/home' />
            </Router>
        </>
    )

}