import React from 'react'

export default () => {

    return (
        <>
            <div className="container-fluid">

                <div className="row justify-content-center mb-5">
                    <div id="img-centro" className="col-md-2 col-5 col-sm-3">
                        <a href="#/home"><img src={require("../imagens/logo.png")} /></a>
                    </div>
                </div>

                <div className="row mb-1">
                    <div id="barra-cinza" className="col-12">
                    </div>
                </div>

            </div>
        </>
    )

}