import React from 'react'

export default () => {

    return (

        <>
            <div id="barra-vermelha" className="d-flex flex-md-row justify-content-between align-items-center">
                <div className="ml-md-4 mr-md-0 ml-sm-5 ml-5">

                    <div id="div-faleConosco" className="dropdown">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <img className="img-phone" src={require("../imagens/headphones.svg")} />
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">(11)4002-8922</a>
                            <a className="dropdown-item" href="#">sac@rdmarket.com</a>
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
        </>

    )

}