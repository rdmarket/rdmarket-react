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


    render() {
        let list = this.state.novidades.map((item) => item);

        return (
            <>
                <section className="linha1 all">

                    <BodyContent classe="item1" path={`${IMAGE_PATH}` + (new Object(list[0])).caminho_imagem}
                        desc={(new Object(list[0])).ds_produto} vlr={(new Object(list[0])).valor_venda} />

                    <BodyContent classe="item2" path={`${IMAGE_PATH}` + (new Object(list[1])).caminho_imagem}
                        desc={(new Object(list[1])).ds_produto} vlr={(new Object(list[1])).valor_venda} />

                    <BodyContent classe="item3" path={`${IMAGE_PATH}` + (new Object(list[2])).caminho_imagem}
                        desc={(new Object(list[2])).ds_produto} vlr={(new Object(list[2])).valor_venda} />

                    <BodyContent classe="item4" path={`${IMAGE_PATH}` + (new Object(list[3])).caminho_imagem}
                        desc={(new Object(list[3])).ds_produto} vlr={(new Object(list[3])).valor_venda} />
                
                
                <BodyContent classe="item5" path={`${IMAGE_PATH}` + (new Object(list[4])).caminho_imagem}
                    desc={(new Object(list[4])).ds_produto} vlr={(new Object(list[4])).valor_venda} />
                
                </section>
                <section className="linha1 all">
                <BodyContent classe="item6" path={`${IMAGE_PATH}` + (new Object(list[5])).caminho_imagem}
                    desc={(new Object(list[5])).ds_produto} vlr={(new Object(list[5])).valor_venda} />

                <BodyContent classe="item7" path={`${IMAGE_PATH}` + (new Object(list[6])).caminho_imagem}
                    desc={(new Object(list[6])).ds_produto} vlr={(new Object(list[6])).valor_venda} />

                <BodyContent classe="item8" path={`${IMAGE_PATH}` + (new Object(list[7])).caminho_imagem}
                    desc={(new Object(list[7])).ds_produto} vlr={(new Object(list[7])).valor_venda} />

                <BodyContent classe="item9" path={`${IMAGE_PATH}` + (new Object(list[8])).caminho_imagem}
                    desc={(new Object(list[8])).ds_produto} vlr={(new Object(list[8])).valor_venda} />

                <BodyContent classe="item10" path={`${IMAGE_PATH}` + (new Object(list[9])).caminho_imagem}
                    desc={(new Object(list[9])).ds_produto} vlr={(new Object(list[9])).valor_venda} />

            </section>
            </>
        )
    }
}