import React from 'react'


export default () => {

    return(
    <footer class="page-footer font-small blue mt-5 pt-4 footer-container">
        <div class="container-fluid text-center text-md-left">
            <div class="row">
                <div class="col-md-3 col-xs-6 mb-md-0 mb-3 coluna-footer footer-textos">
                    <h5 class="titulo-footer">Institucional</h5>

                    <ul class="list-unstyled">
                        <li>
                            <a class="link-footer" href="#!">Quem somos</a>
                        </li>
                        <li>
                            <a class="link-footer" href="#!">Política de privacidade</a>
                        </li>
                        <li>
                            <a class="link-footer" href="#!">Código de conduta</a>
                        </li>
                        <li>
                            <a class="link-footer" href="#!">Sustentabilidade</a>
                        </li>
                        <li>
                            <a class="link-footer" href="#topo">Voltar ao topo</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-3 mb-md-0 col-xs-6 mb-3 coluna-footer footer-textos">
                    <h5 class="titulo-footer">Ajuda</h5>

                    <ul class="list-unstyled">
                        <li>
                            <a class="link-footer" href="#!">F.A.Q-Privacidade de dados</a>
                        </li>
                        <li>
                            <a class="link-footer" href="#!">Como pagar</a>
                        </li>
                        <li>
                            <a class="link-footer" href="#!">Como retirar</a>
                        </li>
                        <li>
                            <a class="link-footer" href="#!">Política de troca e devolução</a>
                        </li>
                        <li>
                            <a class="link-footer" href="#!">F.A.Q</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-3 mb-md-0 col-xs-6 mb-3 coluna-footer footer-textos">
                    <h5 class="titulo-footer">Canal do Cliente</h5>

                    <ul class="list-unstyled">
                        <li>
                            <a class="link-footer" href="#!">Fale conosco</a>
                        </li>
                        <li>
                            <span>4002-8922</span>
                        </li>
                        <li>
                            <span>Horários de atendimento</span>
                        </li>
                        <li>
                            <span>Seg. a Sex. das 8h às 20h - (exceto feriados)</span>
                        </li>
                    </ul>
                </div>
                <div class="col-md-3 mb-md-0 col-xs-6 mb-3 coluna-footer">
                    <h5 class="titulo-footer">Redes sociais</h5>
                    <a target="blank" href="https://pt-br.facebook.com/"><img src={require("../imagens/logo-facebook.png")}
                            width="40px" height="40px"/></a>
                    <a target="blank" href="https://www.instagram.com/?hl=pt-br"><img
                            src={require("../imagens/logo-instagram.png")} width="40px" height="40px"/></a>
                    <a target="blank" href="https://twitter.com/login?lan=pt"><img src={require("../imagens/logo-twitter.png")}
                            width="40px" height="40px"/></a>
                </div>
            </div>
            <div class="footer-copyright text-center py-3 copiryght">
                <span>© 2020 Todos os direitos reservados</span>
            </div>
        </div>
    </footer>
    )

}