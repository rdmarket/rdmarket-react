import React from 'react'
import '../css/contato.css'
import '../css/styles.css'
import Header from  '../../templates/header/header'
import Footer from  '../../templates/footer/footer'

export default () => {

    return (
        <>
        <Header />
            <div id="barra-vermelha" class="d-flex flex-md-row justify-content-between">
                <div class="ml-md-5 mr-md-0 ml-sm-4">
                    <img class="img-phone textos" src={require("../imagens/headphones.svg")} />
                    <span id="titulo-fale-conosco" class="pl-2">Fale conosco</span>
                </div>
            </div>

            <section>
                <div class="container contato">
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <div class="row justify-content-center formulario-contato">

                                <form class="tamanho-form-contato">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Nome Completo*</label>
                                        <input type="text" class="form-control f-nome-completo" id="exampleFormControlInput1"
                                            placeholder="Digite seu nome completo" required />
                                        <div class="alert alert-danger alert-nome-completo id-no-disp-1"  role="alert">
                                            Este campo deve conter pelo menos 5 caracteres
                                </div>
                                        <div class="alert alert-danger alert-nomeComNumero id-no-disp-2"  role="alert">
                                            Números ou caracteres especiais como (*, @, #, $, %, -, _, etc) não podem ser inseridos neste campo
                                </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Email*</label>
                                        <input type="email" class="form-control f-email" id="exampleFormControlInput1"
                                            placeholder="name@example.com" required />
                                        <div class="alert alert-danger alert-email id-no-disp-3"  role="alert">
                                            Por favor, digite um email válido!
                                </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Assunto*</label>
                                        <input type="text" class="form-control f-assunto" id="exampleFormControlInput1"
                                            placeholder="Digite o assunto do contato" required />
                                        <div class="alert alert-danger alert-assunto id-no-disp-4"  role="alert">
                                            Este campo deve conter pelo menos 10 caracteres
                                </div>
                                        <div class="alert alert-danger alert-assuntoComNumero id-no-disp-5"  role="alert">
                                            Números ou caracteres especiais como (*, @, #, $, %, -, _, etc) não podem ser inseridos neste campo
                                </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Mensagem*</label>
                                        <textarea class="form-control f-mensagem" id="exampleFormControlTextarea1" rows="4"
                                            placeholder="Digite a sua mensagem" required></textarea>
                                        <div class="alert alert-danger alert-mensagem id-no-disp-6"  role="alert">
                                            Campo de mensagem vazio! Por favor, insira a sua mensagem
                                </div>
                                    </div>
                                    <div class="retorno-contato">
                                        <span id="msg-retorno-contato">Retornaremos uma resposta no seu email.</span>
                                    </div>


                                    <div class="row justify-content-around bt-formulario-contato tela-g">
                                        <div>
                                            <button class="btn btn-primary bt-limpar" type="reset">Limpar</button>
                                        </div>
                                        <div>
                                            <button class="btn btn-primary bt-enviar" type="submit">Enviar</button>
                                        </div>
                                    </div>


                                    <div class="row justify-content-around bt-formulario-contato tela-m">
                                        <div>
                                            <button class="btn btn-primary bt-limpar" type="reset">Limpar</button>
                                        </div>
                                        <div>
                                            <button class="btn btn-primary bt-enviar" type="submit">Enviar</button>
                                        </div>
                                    </div>


                                    <div class="row justify-content-around bt-formulario-contato tela-p">
                                        <div>
                                            <button class="btn btn-primary bt-limpar" type="reset">Limpar</button>
                                        </div>
                                        <div>
                                            <button class="btn btn-primary bt-enviar" type="submit">Enviar</button>
                                        </div>
                                    </div>


                                    <div class="row justify-content-around bt-formulario-contato tela-p2">
                                        <div>
                                            <button class="btn btn-primary bt-limpar" type="reset">Limpar</button>
                                        </div>
                                        <div>
                                            <button class="btn btn-primary bt-enviar" type="submit">Enviar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>


                        <div class="col-md-1 col-sm-0 empty"></div>
                        <br /><br /><br /><br />
                        <div class="col-md-5 col-sm-12 links-contato">
                            <div class="row">
                                <div class="col-12">
                                    <div class="titulo-central-atendimento alinha-texto">Central de atendimento</div>
                                    <div class="telefone-central pt-4 alinha-texto">
                                        <img class="img-phone-contato" src={require("../imagens/headphones-grey.svg")} />
                                        <span class="texto telefone">4002-8922</span>
                                    </div>
                                    <div class="texto pt-4 alinha-texto">Horários de atendimento</div>
                                    <div class="texto pt-3 alinha-texto">Seg. a Sex. das 08h às 20h - (exceto feriados)</div>
                                    <div class="email-contato pt-4 alinha-texto">
                                        <a class="link-email-atendimento" target="blank"
                                            href="mailto:example@email.coml?subjetc=Email do site"><img class="img-email"
                                                src={require("../imagens/email-svg-grey.svg")} /> example@email.com</a>
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