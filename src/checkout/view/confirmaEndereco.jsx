import React, { Component } from 'react'
import OptionEndereco from './optionEndereco'
import { render } from '@testing-library/react';

export default class ConfirmaEndereco extends Component {


    // constructor(props) {
    //     super(props)
    //     this.state = {id_endereco:0,id_tipo_endereco:0,num_cep:""}
    // }

//         let id_endereco = 0;
// "id_tipo_endereco" = 1,
//     "num_cep" = "11740000",
//     "nm_rua" = "jose de alencar",
//     "num_endereco" = "174",
//     "ds_complemento" = "condominio",
//     "nm_bairro" = "area verde",
//     "nm_cidade" = "são bernardo",
//     "nm_estado" = "são paulo",

    teste = () => {
    let str = document.getElementById("meuSelect").value;

    // let list = props.endereco.map(item => item)

    // list.forEach(element => {
    //     let cond = element.nm_rua + " " + element.num_endereco;
    //     if (cond == str) {

    //     }
    // });

    // alert(str)

}

render(){
    return (
        <>
            <div className="col-md-5 mb-md-0 mb-5  ml-sm-4 ml-4 ml-md-5 mr-sm-4 mr-4 mr-md-3  borda-teste endereco-div">

                <div className="row mb-3">

                    <div className="col-md-12 col-12 text-center confirma-endereco">
                        <h5>Confirmar Endereço</h5>
                    </div>

                </div>

                <div className="row mb-3">

                    <div className="col-md-12">
                        <h6>Selecionar o tipo de endereço</h6>
                        <select onChange={() => this.teste()} id="meuSelect">
                            <OptionEndereco endereco={this.props.endereco} />
                        </select>
                    </div>

                </div>
                <div className="row">

                    <div className="col-md-4 mb-3">
                        <h6>Estado</h6>
                        <select>
                            <option>SP</option>
                            <option>RJ</option>
                            <option>MT</option>
                            <option>AM</option>
                            <option>AC</option>
                            <option>PR</option>
                        </select>
                    </div>
                    <div className="col-md-8 mb-3">
                        <h6>Cidade</h6>
                        <input type="text" placeholder="Brasília" />
                    </div>

                </div>
                <div className="row mb-3">

                    <div className="col-md-12">
                        <h6>Rua</h6>
                        <input type="text" placeholder="Brasília" />
                    </div>

                </div>
                <div className="row mb-3">

                    <div className="col-md-10">
                        <h6>CEP</h6>
                        <input type="text" placeholder="XXXXX-XXX" required />
                        <a id="link-cep" href="#">Descubra seu CEP</a>
                    </div>

                </div>
                <div className="row mb-3">
                    <div className="col-md-12">
                        <h6>Complemento</h6>
                        <input type="text" placeholder="A" />
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