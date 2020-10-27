import React, { Component } from 'react'
import OptionCartao from './optionCartao'

export default class FormaPagamento extends Component {

    constructor(props) {
        super(props)
        this.state = {
            num_cartao: "", num_cpf: "", nm_impresso: "",
            nm_bandeira: "", ds_tipo_cartao: "", show_parcela: false,
            show_ano: false, show_mes: false, show_cod: false
        }
    }

    devolverFinalCartao = (str) => {

        return str[str.length - 4] + str[str.length - 3] + str[str.length - 2] + str[str.length - 1]

    }

    mudarNumeroCartao = (e) => {
        this.setState({
            ...this.state, num_cartao: e
        })
    }
    mudarCpf = (e) => {
        this.setState({
            ...this.state, num_cpf: e
        })
    }
    mudarNomeTitular = (e) => {
        this.setState({
            ...this.state, nm_impresso: e
        })
    }

    mudarOptions = () => {

        let str = document.getElementById("selectCartao").value
        let finalDigit = this.devolverFinalCartao(str);
        let flag = 0;
        let listaCartao = this.props.cartao.map(item => item)

        listaCartao.forEach(element => {

            let cond = this.devolverFinalCartao(element.num_cartao);

            if (cond == finalDigit) {
                flag = 1;
                this.setState({
                    show_parcela: element.ds_tipo_cartao == "Débito" ? true : false, show_cod: true, show_mes: true, show_ano: true, num_cartao: "**** **** **** " + finalDigit, num_cpf: element.num_cpf, nm_impresso: element.nm_impresso,
                    nm_bandeira: element.nm_bandeira, ds_tipo_cartao: element.ds_tipo_cartao
                })
            }
        });

        if (flag == 0) {

            this.setState({
                num_cartao: "", num_cpf: "", nm_impresso: "",
                nm_bandeira: "", ds_tipo_cartao: this.devolverFinalCartao(str), show_parcela: finalDigit == "bito" ? true : false,
                show_ano: false, show_mes: false, show_cod: false
            })

        }

    }


    render() {

        return (
            <>
                <div className="col-md-5 ml-sm-4 ml-4 ml-md-0 mr-sm-4 mr-4 mr-md-0 borda-teste pagamento-div">

                    <div className="row mb-2">
                        <input hidden id="tipo_cartao" type="text" value={this.state.ds_tipo_cartao}/>
                    </div>

                    <div className="row mb-2">

                        <div className="col-12 text-center">
                            <h5>Forma de pagamento</h5>
                        </div>

                    </div>

                    <div className="row mb-2">

                        <div className="col-12">
                            <h6>Bandeiras aceitas</h6>
                            <img id="img-bandeiras" src={require("../imagens/bandeiras.png")} />
                        </div>

                    </div>
                    <div className="row">

                        <div className="col-12 mb-2">
                            <h6>Método de pagamento</h6>
                            <select id="selectCartao" onChange={() => this.mudarOptions()} required>
                                <option>Novo cartão de crédito</option>
                                <option>Novo cartão de débito</option>
                                <OptionCartao cartao={this.props.cartao} />
                            </select>
                        </div>

                    </div>
                    <div className="row mb-2">

                        <div className="col-12">
                            <h6>Número do cartão</h6>
                            <input id="num_cartao" value={this.state.num_cartao} onChange={e => this.mudarNumeroCartao(e.target.value)} type="text" placeholder="" required />
                        </div>

                    </div>
                    <div className="row mb-2">


                        <div hidden={this.state.show_mes} className="col-3 mb-2">
                            <h6>Mês</h6>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                        </div>

                        <div hidden={this.state.show_ano} className="col-4">
                            <h6>Ano</h6>
                            <select>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                                <option>2028</option>
                                <option>2029</option>
                                <option>2030</option>
                                <option>2031</option>
                                <option>2032</option>
                                <option>2033</option>
                                <option>2034</option>
                            </select>
                        </div>

                    </div>
                    <div hidden={this.state.show_cod} className="row mb-2">
                        <div className="col-7">
                            <h6>Código de segurança</h6>
                            <input type="text" placeholder="" required />
                        </div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-12">
                            <h6>CPF</h6>
                            <input id="num_cpf" value={this.state.num_cpf} onChange={e => this.mudarCpf(e.target.value)} type="text" placeholder="" required />
                        </div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-12">
                            <h6>Nome do titular</h6>
                            <input id="nm_titular" value={this.state.nm_impresso} onChange={e => this.mudarNomeTitular(e.target.value)} type="text" placeholder="" required />
                        </div>
                    </div>
                    <div hidden={this.state.show_parcela} className="row mb-2">
                        <div className="col-12"><h6>Número de parcelas</h6></div>
                        <div className="col-3">

                            <select id="num_parcelas">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>

                </div>
            </>
        )
    }

}