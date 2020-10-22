import React from 'react'


export default (props) => {

    return (
        <>
            <div className="col-2 miniaturas-responsivo" id="container-imagem">
                {/* <div className="miniaturas mt-3">
                    <ul>
                        <li><img src={props.path_image} alt="..." className="img-thumbnail pequenas-img mt-4" /></li>
                        <li><img src={props.path_image} alt="..." className="img-thumbnail pequenas-img mt-4" /></li>
                        <li><img src={props.path_image} alt="..." className="img-thumbnail pequenas-img mt-4" /></li>
                        <li><img src={props.path_image} alt="..." className="img-thumbnail pequenas-img mt-4" /></li>
                    </ul>
                </div> */}
            </div>
            <div className="col-5 col-lg-3 miniaturas-responsivo">
                <div className="imagem-maior mt-3">
                    <img src={props.path_image} alt="..." className="img-thumbnail grande-img" />
                </div>
            </div>
        </>
    )

}