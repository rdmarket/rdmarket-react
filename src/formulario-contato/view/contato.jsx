import React from 'react'
import '../css/contato.css'
import '../css/styles.css'
import Header from '../../templates/header/header'
import Footer from '../../templates/footer/footer'
import axios from 'axios'
import swal from 'sweetalert';
import { browserHistory } from 'react-router'

const API_EMAIL = 'http://rdmarket-laravel.test/api/email'

export default (props) => {

    const enviarFormularioContato = () => {
        let nome = document.getElementById("nome_completo").value;
        let email = document.getElementById("email_contato").value;
        let assunto = document.getElementById("assunto").value;
        let mensagem = document.getElementById("mensagem_corpo").value;


        axios.post(`${API_EMAIL}`, {
            "nome": nome,
            "email": email,
            "assunto": assunto,
            "mensagem": mensagem
        }).then(function (response) {
            swal("Email enviado com sucesso", "", "success")
                .then((value) => {
                    browserHistory.push('#/home')
                    document.location.reload(true)
                });
        }).catch(function (err) {
            alert("Preencha os dados corretamente");
        })


    }

    return (
        <>
            <Header />
            <div id="barra-vermelha" className="d-flex flex-md-row justify-content-between">
                <div className="ml-md-5 mr-md-0 ml-sm-4">
                    <img className="img-phone textos" src={require("../imagens/headphones.svg")} />
                    <span id="titulo-fale-conosco" className="pl-2">Fale conosco</span>
                </div>
            </div>

            <section>
                <div className="container contato">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="row justify-content-center formulario-contato">

                                <form className="tamanho-form-contato">
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Nome Completo*</label>
                                        <input type="text" className="form-control f-nome-completo" id="nome_completo"
                                            placeholder="Digite seu nome completo" required />
                                        <div className="alert alert-danger alert-nome-completo id-no-disp-1" role="alert">
                                            Este campo deve conter pelo menos 5 caracteres
                                </div>
                                        <div className="alert alert-danger alert-nomeComNumero id-no-disp-2" role="alert">
                                            Números ou caracteres especiais como (*, @, #, $, %, -, _, etc) não podem ser inseridos neste campo
                                </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Email*</label>
                                        <input type="email" className="form-control f-email" id="email_contato"
                                            placeholder="name@example.com" required />
                                        <div className="alert alert-danger alert-email id-no-disp-3" role="alert">
                                            Por favor, digite um email válido!
                                </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Assunto*</label>
                                        <input type="text" className="form-control f-assunto" id="assunto"
                                            placeholder="Digite o assunto do contato" required />
                                        <div className="alert alert-danger alert-assunto id-no-disp-4" role="alert">
                                            Este campo deve conter pelo menos 10 caracteres
                                </div>
                                        <div className="alert alert-danger alert-assuntoComNumero id-no-disp-5" role="alert">
                                            Números ou caracteres especiais como (*, @, #, $, %, -, _, etc) não podem ser inseridos neste campo
                                </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea1">Mensagem*</label>
                                        <textarea className="form-control f-mensagem" id="mensagem_corpo" rows="4"
                                            placeholder="Digite a sua mensagem" required></textarea>
                                        <div className="alert alert-danger alert-mensagem id-no-disp-6" role="alert">
                                            Campo de mensagem vazio! Por favor, insira a sua mensagem
                                </div>
                                    </div>
                                    <div className="retorno-contato">
                                        <span id="msg-retorno-contato">Retornaremos uma resposta no seu email.</span>
                                    </div>


                                    <div className="row justify-content-around bt-formulario-contato">
                                        <div className="col-md-5 col-sm-12">
                                            <button className="btn btn-primary bt-limpar" type="reset">Limpar</button>
                                        </div>
                                        <div className="col-md-5 col-sm-12">
                                            <button className="btn btn-primary bt-enviar" onClick={()=>enviarFormularioContato()} type="button">Enviar</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className="col-md-1 col-sm-0 empty"></div>
                        <br /><br /><br /><br />
                        <div className="col-md-5 col-sm-12 links-contato">
                            <div className="row">
                                <div className="col-12">
                                    <div className="titulo-central-atendimento alinha-texto">Central de atendimento</div>
                                    <div className="telefone-central pt-4 alinha-texto">
                                        <img className="img-phone-contato" src={require("../imagens/headphones-grey.svg")} />
                                        <span className="texto telefone">4002-8922</span>
                                    </div>
                                    <div className="texto pt-4 alinha-texto">Horários de atendimento</div>
                                    <div className="texto pt-3 alinha-texto">Seg. a Sex. das 08h às 20h - (exceto feriados)</div>
                                    <div className="email-contato pt-4 alinha-texto">
                                        <a className="link-email-atendimento" target="blank"
                                            href="mailto:sac@rdmarket.coml?subjetc=Email do site"><img className="img-email"
                                                src={require("../imagens/email-svg-grey.svg")} /> sac@rdmarket.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )

}