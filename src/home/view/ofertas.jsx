import React, { Component } from 'react'
import axios from 'axios'
import BodyContent from './bodyContent'


const API = 'http://rdmarket-laravel.test/api/produtos/listarDescontos';
const IMAGE_PATH = 'http://rdmarket-laravel.test/storage/';

export default class Ofertas extends Component {
    constructor(props) {
        super(props)
        this.state = { ofertas: [] }
    }
    componentDidMount() {
        this.preencherOfertas()
    }

    preencherOfertas = () => {

        axios.get(`${API}`)
            .then(resp => this.setState({ ofertas: resp.data }))

        
    }

    calcularPreco = (n,m) =>{
        n=parseFloat(n)
        m=parseFloat(m)
        m=100-m
        m=m/100
        return n*m
    }

    render() {
        let list = this.state.ofertas.map((item)=>item);

        return (
            <>
                <section className="linha1 all">

                    <BodyContent status={(new Object(list[0])).status_desconto} func={e=>this.props.func(e)} classe="item11" tipo="Ofertas" id_produto={(new Object(list[0])).id_produto} path={`${IMAGE_PATH}` + (new Object(list[0])).caminho_imagem}
                        desc={(new Object(list[0])).ds_produto} vlr_original={((new Object(list[0])).valor_venda)} vlr={this.calcularPreco((new Object(list[0])).valor_venda,(new Object(list[0])).p_desconto)} />

                    <BodyContent status={(new Object(list[0])).status_desconto} func={e=>this.props.func(e)} classe="item12" tipo="Ofertas" id_produto={(new Object(list[1])).id_produto} path={`${IMAGE_PATH}` + (new Object(list[1])).caminho_imagem}
                        desc={(new Object(list[1])).ds_produto} vlr_original={((new Object(list[1])).valor_venda)} vlr={this.calcularPreco((new Object(list[1])).valor_venda,(new Object(list[1])).p_desconto)} />

                    <BodyContent status={(new Object(list[0])).status_desconto} func={e=>this.props.func(e)} classe="item13" tipo="Ofertas" id_produto={(new Object(list[2])).id_produto} path={`${IMAGE_PATH}` + (new Object(list[2])).caminho_imagem}
                        desc={(new Object(list[2])).ds_produto} vlr_original={((new Object(list[2])).valor_venda)} vlr={this.calcularPreco((new Object(list[2])).valor_venda,(new Object(list[2])).p_desconto)} />

                    <BodyContent status={(new Object(list[0])).status_desconto} func={e=>this.props.func(e)} classe="item14" tipo="Ofertas" id_produto={(new Object(list[3])).id_produto} path={`${IMAGE_PATH}` + (new Object(list[3])).caminho_imagem}
                        desc={(new Object(list[3])).ds_produto} vlr_original={((new Object(list[3])).valor_venda)} vlr={this.calcularPreco((new Object(list[3])).valor_venda,(new Object(list[3])).p_desconto)} />


                    <BodyContent status={(new Object(list[0])).status_desconto} func={e=>this.props.func(e)} classe="item15" tipo="Ofertas" id_produto={(new Object(list[4])).id_produto} path={`${IMAGE_PATH}` + (new Object(list[4])).caminho_imagem}
                        desc={(new Object(list[4])).ds_produto} vlr_original={((new Object(list[4])).valor_venda)} vlr={this.calcularPreco((new Object(list[4])).valor_venda,(new Object(list[4])).p_desconto)} />

                </section>
                <section className="linha1 all">
                    <BodyContent status={(new Object(list[0])).status_desconto} func={e=>this.props.func(e)} classe="item16" tipo="Ofertas" id_produto={(new Object(list[5])).id_produto} path={`${IMAGE_PATH}` + (new Object(list[5])).caminho_imagem}
                        desc={(new Object(list[5])).ds_produto} vlr_original={((new Object(list[5])).valor_venda)} vlr={this.calcularPreco((new Object(list[5])).valor_venda,(new Object(list[5])).p_desconto)} />

                    <BodyContent status={(new Object(list[0])).status_desconto} func={e=>this.props.func(e)} classe="item17" tipo="Ofertas" id_produto={(new Object(list[6])).id_produto} path={`${IMAGE_PATH}` + (new Object(list[6])).caminho_imagem}
                        desc={(new Object(list[6])).ds_produto} vlr_original={((new Object(list[6])).valor_venda)} vlr={this.calcularPreco((new Object(list[6])).valor_venda,(new Object(list[6])).p_desconto)} />

                    <BodyContent status={(new Object(list[0])).status_desconto} func={e=>this.props.func(e)} classe="item18" tipo="Ofertas" id_produto={(new Object(list[7])).id_produto} path={`${IMAGE_PATH}` + (new Object(list[7])).caminho_imagem}
                        desc={(new Object(list[7])).ds_produto} vlr_original={((new Object(list[7])).valor_venda)} vlr={this.calcularPreco((new Object(list[7])).valor_venda,(new Object(list[7])).p_desconto)} />

                    <BodyContent status={(new Object(list[0])).status_desconto} func={e=>this.props.func(e)} classe="item19" tipo="Ofertas" id_produto={(new Object(list[8])).id_produto} path={`${IMAGE_PATH}` + (new Object(list[8])).caminho_imagem}
                        desc={(new Object(list[8])).ds_produto} vlr_original={((new Object(list[8])).valor_venda)} vlr={this.calcularPreco((new Object(list[8])).valor_venda,(new Object(list[8])).p_desconto)} />

                    <BodyContent status={(new Object(list[0])).status_desconto} func={e=>this.props.func(e)} classe="item20" tipo="Ofertas" id_produto={(new Object(list[9])).id_produto} path={`${IMAGE_PATH}` + (new Object(list[9])).caminho_imagem}
                        desc={(new Object(list[9])).ds_produto} vlr_original={((new Object(list[9])).valor_venda)} vlr={this.calcularPreco((new Object(list[9])).valor_venda,(new Object(list[9])).p_desconto)} />

                </section>
            </>
        )
    }
}