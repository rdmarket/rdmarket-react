import React, { Component } from 'react'
import axios from 'axios'

const API = 'http://rdmarket-laravel.test/api/produtos/listarBanner';
const IMAGE_PATH = 'http://rdmarket-laravel.test/storage/';

export default class ListarCarousel extends Component {

    constructor(props) {
        super(props)
        this.state = { imagens: [] }
    }
    componentDidMount() {
        this.preencherImagens()
    }

    preencherImagens = () => {

        axios.get(`${API}`)
            .then(resp => this.setState({ imagens: resp.data }))

    }

    render() {
        let list = this.state.imagens.map((item) => item);

        return (
            <>
                <div className="carousel-item active">
                    <img src={`${IMAGE_PATH}` + (new Object(list[0])).caminho_imagem} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={`${IMAGE_PATH}` + (new Object(list[1])).caminho_imagem} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={`${IMAGE_PATH}` + (new Object(list[2])).caminho_imagem} className="d-block w-100" alt="..." />
                </div>
            </>
        )
    }

}