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
import HistoricoPesquisa from './historico-compra/view/historico-pesquisa'
import Busca from './busca-produto/view/buscaProduto'
import Dados from './conta/views/dados/dados'
import EditarDados from './conta/views/dados/editarDados'
import Enderecos from './conta/views/enderecos/enderecos'
import AdicionarEndereco from './conta/views/enderecos/AdicionarEndereco'
import EditarEndereco from './conta/views/enderecos/editarEndereco'
import Cartoes from './conta/views/cartoes/cartoes'
import AdicionarCartao from './conta/views/cartoes/AdicionarCartao'
import EditarCartao from './conta/views/cartoes/editarCartao'
import EsqueciSenha from './recuperacao-senha/view/recuperarSenha'


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
                <Route path='/checkout/confirmar/dados' component={ConfirmaDados} />
                <Route path='/checkout/resumo' component={ResumoCompra} />
                <Route path='/historico' component={Historico} />
                <Route path='/historico-pesquisa/:num' component={HistoricoPesquisa} />
                <Route path='/busca/:keyword' component={Busca} />
                <Route path='/dados' component={Dados} />
                <Route path='/editarDados' component={EditarDados} />
                <Route path='/enderecos' component={Enderecos} />
                <Route path='/adicionarEndereco' component={AdicionarEndereco} />
                <Route path='/editarEndereco' component={EditarEndereco} />
                <Route path='/cartoes' component={Cartoes} />
                <Route path='/adicionarCartao' component={AdicionarCartao} />
                <Route path='/editarCartao' component={EditarCartao} />
                <Route path='/esqueciminhasenha' component={EsqueciSenha} />

                <Redirect from='*' to='/home' />
            </Router>
        </>
    )
    
}