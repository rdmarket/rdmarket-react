import React, { Component } from 'react'
import '../css/style-cadastro.css'
import '../css/styles.css'
import '../css/styles-barra-vermelha.css'
import Header from '../../templates/header/header'
import Footer from '../../templates/footer/footer'
import { cpfMask, validadata, validarSenha } from '../../login/mascaras';
import axios from 'axios';
import { browserHistory } from 'react-router'
import swal from 'sweetalert';


class cadastro extends Component {
    // Mascara do CPF
    constructor(props) {
        super(props)

        this.state = { documentId: '' }
        this.handlechange = this.handlechange.bind(this)
    }

    handlechange(e) {
        this.setState({ documentId: cpfMask(e) })
        this.num_cpf = cpfMask(e)
    }
    // IMPLEMENTAÇÃO DO LOGIN 
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            nm_cliente: this.nm_cliente,
            sobrenome: this.sobrenome,
            num_cpf: this.num_cpf,
            data_nascimento: this.data_nascimento,
            vlr_senha: this.vlr_senha,
            num_cep: this.num_cep,
            nm_rua: this.nm_rua,
            num_endereco: this.num_endereco,
            ds_complemento: this.ds_complemento,
            nm_bairro: this.nm_bairro,
            nm_cidade: this.nm_cidade,
            nm_estado: this.nm_estado,
            ds_email: this.ds_email,
            num_celular: this.num_celular,
            num_fixo: this.num_fixo,
            id_tipo_endereco: this.id_tipo_endereco

        };

        axios.post('http://rdmarket-laravel.test/api/cadastrar', data).then(
            res => {
                
                swal("Cadastro realizado com sucesso!","","success")
                    .then((value) => {
                        browserHistory.push('#/login')
                        document.location.reload(true)
                    });
            }
        ).catch(
            err => {
                alert(err)
                console.log(err);
            }
        )
    };

    state = {
        isPasswordShown: false
    };

    togglePasswordVisiblity = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
    };


    render() {
        const { documentId } = this.state
        const { isPasswordShown } = this.state;
        return (
            <>
                <Header />
                <div id="barra-vermelha" className="d-flex flex-md-row justify-content-between align-items-center mt-3">
                    <div className="ml-md-4 mr-md-0 ml-sm-5 ml-5">

                        <div id="div-faleConosco" className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <img className="img-phone" src={require("../imagens/headphones.svg")} />
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">(11)4002-8922</a>
                                <a className="dropdown-item" href="#">example@email.com</a>
                            </div>
                        </div>

                        <img className="img-phone textos" src={require("../imagens/headphones.svg")} />
                        <h3 id="faleConosco">Fale conosco</h3>
                    </div>
                    <div className="ml-md-2 mt-md-0  textos">
                        <img className="img-icon-phone img-icon" src={require("../imagens/call.svg")} />
                        <h3 className="font-cab-phone textos">(11)4002-8922</h3>
                    </div>
                    <div className="ml-md-2 mt-md-0 textos">
                        <img className="img-icon-email" src={require("../imagens/email.svg")} />
                        <h3 className="font-cab-email">sac@rdmarket.com</h3>
                    </div>
                    <div className="ml-md-auto mt-md-0">
                        <img className="img-icon-shield" src={require("../imagens/shield.png")} />
                        <h3 className="font-cab-shield">Site seguro</h3>
                    </div>
                </div>



                <div className="container mt-5">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <form className="col-12">
                                <h4>Cliente, bem vindo!</h4>

                                {/* NOME, SOBRENOME E DATA DE NASCIMENTO */}
                                <div className="row">
                                    <div className="form-group col-4">
                                        <label for="nome">Nome:</label>
                                        <input type="text" className="form-control" id="nome"
                                            onChange={e => this.nm_cliente = e.target.value} />
                                    </div>
                                    <div className="form-group col-5">
                                        <label for="sobrenome">Sobrenome:</label>
                                        <input type="text" className="form-control" id="sobrenome"
                                            onChange={e => this.sobrenome = e.target.value} />
                                    </div>
                                    <div className="form-group col-3">
                                        <label for="dataNascimento">Data de nascimento</label>
                                        <input type="date" className="form-control" id="nascimento"
                                            onChange={e => this.data_nascimento = e.target.value}
                                            onBlur={validadata} />
                                    </div>
                                </div>
                                {/* EMAIL E CPF */}
                                <div className="row">
                                    <div className="form-group col-md-8">
                                        <label htmlFor="exampleInputEmail1">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="name@example.com"
                                            onChange={e => this.ds_email = e.target.value}
                                            pattern="[^. ][A-Za-z0-9.]*[^. ][@][A-Za-z0-9.]*[^. ]" />
                                    </div>
                                    <div className="form-group col-4">
                                        <label for="cpf">CPF</label>
                                        <input type="text" className="form-control" id="cpf"
                                            placeholder="Ex: 000.000.000-00"
                                            value={documentId} onChange={e => this.handlechange(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-4">
                                        <label for="telefone">Telefone</label>
                                        <input type="tel" className="form-control" id="telefone" placeholder="Ex.: (00) 0000-0000"
                                            onChange={e => this.num_fixo = e.target.value} />
                                    </div>
                                    <div className="form-group col-4">
                                        <label for="celular">Celular</label>
                                        <input type="tel" className="form-control" id="celular" placeholder="Ex.: (00) 00000-0000"
                                            onChange={e => this.num_celular = e.target.value} />
                                    </div>
                                    <div className="form-group col-4">
                                        <label for="cep">CEP:</label>
                                        <input type="text" className="form-control" id="cep"
                                            onChange={e => this.num_cep = e.target.value} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-2">
                                        <label htmlFor="estado">Estado:</label>
                                        <select className="ls-select form-control"
                                            onClick={e => this.nm_estado = e.target.value}>
                                            <option value="AC">AC</option>
                                            <option value="AL">AL</option>
                                            <option value="AP">AP</option>
                                            <option value="AM">AM</option>
                                            <option value="BA">BA</option>
                                            <option value="CE">CE</option>
                                            <option value="DF">DF</option>
                                            <option value="ES">ES</option>
                                            <option value="GO">GO</option>
                                            <option value="MA">MA</option>
                                            <option value="MT">MT</option>
                                            <option value="MS">MS</option>
                                            <option value="MG">MG</option>
                                            <option value="PA">PA</option>
                                            <option value="PB">PB</option>
                                            <option value="PR">PR</option>
                                            <option value="PE">PE</option>
                                            <option value="PI">PI</option>
                                            <option value="RJ">RJ</option>
                                            <option value="RN">RN</option>
                                            <option value="RS">RS</option>
                                            <option value="RO">RO</option>
                                            <option value="RR">RR</option>
                                            <option value="SC">SC</option>
                                            <option value="SP">SP</option>
                                            <option value="SE">SE</option>
                                            <option value="TO">TO</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-5">
                                        <label for="cidade">Cidade:</label>
                                        <input type="tex" className="form-control" id="cidade"
                                            onChange={e => this.nm_cidade = e.target.value} />
                                    </div>
                                    <div className="form-group col-5">
                                        <label for="bairro">Bairro:</label>
                                        <input type="text" className="form-control" id="bairro"
                                            onChange={e => this.nm_bairro = e.target.value} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-6">
                                        <label for="endereco">Endereço:</label>
                                        <input type="text" className="form-control" id="endereco"
                                            onChange={e => this.nm_rua = e.target.value} />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="numeroRua">Número</label>
                                        <input type="text" className="form-control" id="numeroRua"
                                            onChange={e => this.num_endereco = e.target.value} />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="complemento">Complemento</label>
                                        <input type="text" className="form-control" id="complemento"
                                            onChange={e => this.ds_complemento = e.target.value} />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="tipo_endereco">Tipo endereço:</label>
                                        <select name="select-simples" class="ls-select form-control"
                                            onClick={e => this.id_tipo_endereco = e.target.value}>
                                            <option value="Residencial">Residencial</option>
                                            <option value="Comercial">Comercial</option>
                                            <option value="Cobrança">Cobrança</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="senha">Senha
                                        <span id="impForcaSenha"></span></label>
                                        <input type="password" className="form-control" id="senha"
                                            onChange={e => this.vlr_senha = e.target.value}
                                            type={isPasswordShown ? "text" : "password"} />
                                        <img width="20px" height="20px" className="fa fa-eye olho-horus"
                                            src={require("../imagens/eye-icon.png")} onClick={this.togglePasswordVisiblity} />
                                        < br />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="confirmeSenha">Confirme a senha</label>
                                        <input type="password" className="form-control" id="senhaConf"
                                            onBlur={validarSenha} />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <button type="button" className="btn btn-danger col-2">Limpar</button>
                                    <button type="submit" href="#/login" className="btn btn-success">Cadastrar</button>
                                </div>
                            </form>
                        </div>
                    </form>
                </div>
                <Footer />
            </>
        )
    }
}
export default cadastro