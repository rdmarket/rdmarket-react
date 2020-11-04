import React, { Component } from 'react'
import axios from 'axios'
import BodyContent from './bodyContent'

const API = 'http://rdmarket-laravel.test/api/produtos/listarNovidades';
const IMAGE_PATH = 'http://rdmarket-laravel.test/storage/';
export default class Novidades extends Component {
    constructor(props) {
        super(props)
        this.state = { novidades: [] }
    }
    componentDidMount() {
        this.preencherNovidades()
    }

    preencherNovidades = () => {

        axios.get(`${API}`)
            .then(resp => this.setState({ novidades: resp.data }))

    }

    calcularPreco = (obj) =>{

        if(obj.status_desconto == 'ativo'){
            return obj.valor_venda - (obj.valor_venda * obj.p_desconto/100)
        }

        return parseFloat(obj.valor_venda)

    }

    render() {
        let list = this.state.novidades.map((item) => item);

        return (
            <>
                <section className="linha1 all">

                    <BodyContent status={(new Object(list[0])).status_desconto} func={e=>this.props.func(e)} classe="item1" tipo="Novidades" id_produto={(new Object(list[0])).id_produto} path={`${IMAGE_PATH}` + (new Object(list[0])).caminho_imagem}
                        desc={(new Object(list[0])).ds_produto} vlr_original={((new Object(list[0])).valor_venda)} vlr={this.calcularPreco(new Object(list[0]))} />

                    <BodyContent status={(new Object(list[0])).status_desconto} func={e=>this.props.func(e)} classe="item2" tipo="Novidades" id_produto={(new Object(list[1])).id_produto} path={`${IMAGE_PATH}` + (new Object(list[1])).caminho_imagem}
                        desc={(new Object(list[1])).ds_produto} vlr_original={((new Object(list[1])).valor_venda)} vlr={this.calcularPreco(new Object(list[1]))} />

                    <BodyContent status={(new Object(list[0])).status_desconto} func={e=>this.props.func(e)} classe="item3" tipo="Novidades" id_produto={(new Object(list[2])).id_produto} path={`${IMAGE_PATH}` + (new Object(list[2])).caminho_imagem}
                        desc={(new Object(list[2])).ds_produto} vlr_original={((new Object(list[2])).valor_venda)} vlr={this.calcularPreco(new Object(list[2]))} />

                    <BodyContent status={(new Object(list[0])).status_desconto} func={e=>this.props.func(e)} classe="item4" tipo="Novidades" id_produto={(new Object(list[3])).id_produto} path={`${IMAGE_PATH}` + (new Object(list[3])).caminho_imagem}
                        desc={(new Object(list[3])).ds_produto} vlr_original={((new Object(list[3])).valor_venda)} vlr={this.calcularPreco(new Object(list[3]))} />
                
                
                <BodyContent status={(new Object(list[0])).status_desconto} func={e=>this.props.func(e)} classe="item5" tipo="Novidades" id_produto={(new Object(list[4])).id_produto} path={`${IMAGE_PATH}` + (new Object(list[4])).caminho_imagem}
                    desc={(new Object(list[4])).ds_produto} vlr_original={((new Object(list[4])).valor_venda)} vlr={this.calcularPreco(new Object(list[4]))} />
                
                </section>
                <section className="linha1 all">
                <BodyContent status={(new Object(list[0])).status_desconto} func={e=>this.props.func(e)} classe="item6" tipo="Novidades" id_produto={(new Object(list[5])).id_produto} path={`${IMAGE_PATH}` + (new Object(list[5])).caminho_imagem}
                    desc={(new Object(list[5])).ds_produto} vlr_original={((new Object(list[5])).valor_venda)} vlr={this.calcularPreco(new Object(list[5]))} />

                <BodyContent status={(new Object(list[0])).status_desconto} func={e=>this.props.func(e)} classe="item7" tipo="Novidades" id_produto={(new Object(list[6])).id_produto} path={`${IMAGE_PATH}` + (new Object(list[6])).caminho_imagem}
                    desc={(new Object(list[6])).ds_produto} vlr_original={((new Object(list[6])).valor_venda)} vlr={this.calcularPreco(new Object(list[6]))} />

                <BodyContent status={(new Object(list[0])).status_desconto} func={e=>this.props.func(e)} classe="item8" tipo="Novidades" id_produto={(new Object(list[7])).id_produto} path={`${IMAGE_PATH}` + (new Object(list[7])).caminho_imagem}
                    desc={(new Object(list[7])).ds_produto} vlr_original={((new Object(list[7])).valor_venda)} vlr={this.calcularPreco(new Object(list[7]))} />

                <BodyContent status={(new Object(list[0])).status_desconto} func={e=>this.props.func(e)} classe="item9" tipo="Novidades" id_produto={(new Object(list[8])).id_produto} path={`${IMAGE_PATH}` + (new Object(list[8])).caminho_imagem}
                    desc={(new Object(list[8])).ds_produto} vlr_original={((new Object(list[8])).valor_venda)} vlr={this.calcularPreco(new Object(list[8]))} />

                <BodyContent status={(new Object(list[0])).status_desconto} func={e=>this.props.func(e)} classe="item10" tipo="Novidades" id_produto={(new Object(list[9])).id_produto} path={`${IMAGE_PATH}` + (new Object(list[9])).caminho_imagem}
                    desc={(new Object(list[9])).ds_produto} vlr_original={((new Object(list[9])).valor_venda)} vlr={this.calcularPreco(new Object(list[9]))} />

            </section>
            </>
        )
    }
}