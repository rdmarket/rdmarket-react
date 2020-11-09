import React from 'react'
import '../../css/styles.css'
import '../../css/barra-vermelha.css'
import Header from '../../../templates/header/header'
import BarraVermelha from '../../componentes/barra-vermelha'
import Footer from '../../../templates/footer/footer'
import axios from 'axios'
import swal from 'sweetalert';
import { browserHistory } from 'react-router'

// const API_EDITAR = 'http://rdmarket-laravel.test/api/cartao/editarCartao/';
const API_ATUALIZAR = 'http://rdmarket-laravel.test/api/cartao/atualizarCartao/';

export default () => {

    const atualizarCartao = () => {

        let cliente = JSON.parse(localStorage.getItem('usuario'));
        let tipoCartao = document.getElementById('tipoCartao').value;
        let numeroCartao = document.getElementById('numeroCartao').value;
        let cpfTitular = document.getElementById('cpfTitular').value;
        let nomeTitular = document.getElementById('nomeTitular').value;
        let bandeira ='AUTOMATICO';


        axios.post(`${API_ATUALIZAR}`, {

            "id_cliente": cliente.id_cliente,
            "id_tipo_cartao": tipoCartao,
            "num_cartao": numeroCartao,
            "num_cpf": cpfTitular,
            "nm_impresso": nomeTitular,
            "nm_bandeira": bandeira
        })
            .then(function (response) {
                swal("Cartão atualizado com sucesso!", "", "success")
                    .then((value) => {
                        browserHistory.push('#/cartoes')
                        document.location.reload(true)
                    });
            }).catch(function (response) {

                alert('Ocorreu um erro, tente novamente');
            });
    }


    return (
        <>
            <Header />
            <BarraVermelha titulo="Editar cartão" />

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <form className="col-9">
                        <div className="row justify-content-start">
                            <div className="form-group col-8">
                                <label htmlFor="numeroCartao">Número do cartão</label>
                                <input type="tex" className="form-control" id="numeroCartao" placeholder="0000.0000.0000.0000" />
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="tipoCartao">Tipo de Cartão</label>
                                <select id="tipoCartao" name="select-simples" className="ls-select form-control">
                                    <option selected>Selecione uma opção</option>
                                    <option value="Débito">Débito</option>
                                    <option value="Crédito">Crédito</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="mesValidade">Mês validade</label>
                                <select id="mesValidade" name="select-simples" className="ls-select form-control">
                                    <option selected>Selecione</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="anoValidade">Ano validade</label>
                                <select id="anoValidade" name="select-simples" className="ls-select form-control">
                                    <option selected>Selecione</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                </select>
                            </div>
                            <div className="form-group col-5">
                                <label htmlFor="cpfTitular">CPF do titular</label>
                                <input type="tex" className="form-control" id="cpfTitular" placeholder="000.000.000-00" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-8">
                                <label htmlFor="nomeTitular">Nome do titular</label>
                                <input type="tex" className="form-control" id="nomeTitular" />
                            </div>
                            <div className="col-2 align-self-center mt-3">
                                <button type="reset" className="btn btn-secondary secondary">Limpar</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row justify-content-center">
                    <div className="col-9">
                        <div className="row justify-content-between">
                            <div className="col-2">
                                <a href="#/cartoes" type="button" className="btn btn-danger danger" style={{ width: '100%' }}>Voltar</a>
                            </div>
                            <div className="col-4">
                                <a type="button" className="btn btn-success" style={{ width: '100%' }} onClick={ () => atualizarCartao()}>Salvar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )

}