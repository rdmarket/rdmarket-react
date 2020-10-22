import React from 'react'

export default (props) =>{

    return(
        <>
            <article className="page-item">
                    <nav className="barra-vermelha navbar navbar-expand">
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav diretorio ml-5">
                                <li className="nav-item active item-barra-vermelha">
                                    <a className="nav-link texto-branco" href="#/home"><span className="text-white">Home {props.st} </span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link texto-branco item-barra-vermelha" href="#"><span className="text-white">{props.path} {props.st} </span></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </article>
        </>
    )

}