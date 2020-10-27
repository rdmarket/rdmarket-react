import React, { Component } from 'react'
import OptionEndereco from './optionEndereco'
import { render } from '@testing-library/react';

export default class ConfirmaEndereco extends Component {


    constructor(props) {
        super(props)
        this.state = {
            id_endereco: 0, ds_tipo_endereco: "", num_cep: "",
            nm_rua: "", num_endereco: "", ds_complemento: "", nm_bairro: "",
            nm_cidade: "", nm_estado: ""
        }
    }

    mudarEstado = (e)=>{
        this.setState({...this.state,nm_estado: e
        })
    }
    mudarCep = (e)=>{
        this.setState({...this.state,num_cep: e
        })
    }
    mudarEndereco = (e) =>{
        this.setState({...this.state,num_endereco: e
        })
    }
    mudarCidade = (e)=>{
        this.setState({...this.state,nm_cidade: e
        })
    }
    mudarComplemento = (e)=>{
        this.setState({...this.state,ds_complemento: e
        })
    }
    mudarRua = (e)=>{
        this.setState({...this.state,nm_rua: e
        })
    }
    mudarInputs = () => {
        let str = document.getElementById("meuSelect").value;
        let flag = 0;
        let list = this.props.endereco.map(item => item)

        list.forEach(element => {
            let cond = element.nm_rua + " " + element.num_endereco;
            if (cond == str) {
                flag = 1;
                this.setState({
                    id_endereco: element.id_endereco, ds_tipo_endereco: element.ds_tipo_endereco, num_cep: element.num_cep,
                    nm_rua: element.nm_rua, num_endereco: element.num_endereco, ds_complemento: element.ds_complemento, nm_bairro: element.nm_bairro,
                    nm_cidade: element.nm_cidade, nm_estado: element.nm_estado
                })
            }

            if (flag == 0) {
                this.setState({
                    id_endereco: 0, ds_tipo_endereco: "", num_cep: "",
                    nm_rua: "", num_endereco: "", ds_complemento: "", nm_bairro: "",
                    nm_cidade: "", nm_estado: ""
                })
            }



        });



    }

    render() {
        return (
            <>
                <div className="col-md-5 mb-md-0 mb-5  ml-sm-4 ml-4 ml-md-5 mr-sm-4 mr-4 mr-md-3  borda-teste endereco-div">

                    <div className="row mb-3">

                        <div className="col-md-12 col-12 text-center confirma-endereco">
                            <h5>Confirmar Endereço</h5>
                        </div>
                        <input hidden id="id_endereco" type="text" value={this.state.id_endereco}/>
                    </div>

                    <div className="row mb-3">

                        <div className="col-md-12">
                            <h6>Selecionar o tipo de endereço</h6>
                            <select onChange={() => this.mudarInputs()} id="meuSelect">
                                <option>Novo Endereco</option>
                                <OptionEndereco endereco={this.props.endereco} />
                            </select>
                        </div>

                    </div>
                    <div className="row">

                        <div className="col-md-4 mb-3">
                            <h6>Estado</h6>
                            <select id="estado">
                                <option>{this.state.nm_estado}</option>
                                <option>SP</option>
                                <option>AM</option>
                                <option>RJ</option>
                                <option>SC</option>
                                <option>RN</option>
                                <option>PA</option>
                                <option>PE</option>
                                <option>AC</option>
                                <option>GO</option>
                                <option>CE</option>
                                <option>BA</option>
                                <option>SE</option>
                                <option>MT</option>
                                <option>RS</option>
                            </select>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h6>Tipo de endereço</h6>
                            <select id="tipo_endereco">
                                <option hidden={this.state.id_endereco==0?false:true}>{this.state.ds_tipo_endereco}</option>
                                <option hidden={this.state.id_endereco!=0?true:false}>Residencial</option>
                                <option hidden={this.state.id_endereco!=0?true:false}>Comercial</option>
                                <option hidden={this.state.id_endereco!=0?true:false}>Cobrança</option>
                                
                            </select>
                        </div>
                        <div className="col-md-8 mb-3">
                            <h6>Cidade</h6>
                            <input id="cidade" type="text" placeholder="Brasília" onChange={e=>this.mudarCidade(e.target.value)}
                             value={this.state.nm_cidade} />
                        </div>

                    </div>
                    <div className="row mb-3">

                        <div className="col-md-12">
                            <h6>Rua</h6>
                            <input id="rua" type="text" placeholder="Brasília" onChange={e=>this.mudarRua(e.target.value)} value={this.state.nm_rua} />
                        </div>

                    </div>
                    <div className="row mb-3">

                        <div className="col-md-10">
                            <h6>Numero endereço</h6>
                            <input id="num_endereco" type="text" placeholder="174" onChange={e=>this.mudarEndereco(e.target.value)} value={this.state.num_endereco} required />
                        </div>

                    </div>
                    <div className="row mb-3">

                        <div className="col-md-10">
                            <h6>CEP</h6>
                            <input id="cep" type="text" placeholder="XXXXX-XXX" onChange={e=>this.mudarCep(e.target.value)} value={this.state.num_cep} required />
                            <a id="link-cep" href="#">Descubra seu CEP</a>
                        </div>

                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <h6>Complemento</h6>
                            <input id="complemento" type="text" onChange={e=>this.mudarComplemento(e.target.value)} value={this.state.ds_complemento} placeholder="A" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <h6>Valor do frete: R$ 10,00</h6>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}