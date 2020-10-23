import React from 'react'

export default () => {

    return (
        <>
            <div className="col-md-5 ml-sm-4 ml-4 ml-md-0 mr-sm-4 mr-4 mr-md-0 borda-teste pagamento-div">

                <div className="row mb-2">

                    <div className="col-12 text-center">
                        <h5>Forma de pagamento</h5>
                    </div>

                </div>

                <div className="row mb-2">

                    <div className="col-12">
                        <h6>Bandeiras aceitas</h6>
                        <img id="img-bandeiras" src={require("../imagens/bandeiras.png")} />
                    </div>

                </div>
                <div className="row">

                    <div className="col-12 mb-2">
                        <h6>Método de pagamento</h6>
                        <select required>
                            <option>Cartão de crédito</option>
                            <option>Cartão de débito</option>
                            <option>Vale alimentação</option>
                        </select>
                    </div>

                </div>
                <div className="row mb-2">

                    <div className="col-12">
                        <h6>Número do cartão</h6>
                        <input type="text" placeholder="" required />
                    </div>

                </div>
                <div className="row mb-2">


                    <div className="col-3 mb-2">
                        <h6>Mês</h6>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                    </div>

                    <div className="col-4">
                        <h6>Ano</h6>
                        <select>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                            <option>2031</option>
                            <option>2032</option>
                            <option>2033</option>
                            <option>2034</option>
                        </select>
                    </div>

                </div>
                <div className="row mb-2">
                    <div className="col-7">
                        <h6>Código de segurança</h6>
                        <input type="text" placeholder="" required />
                    </div>
                </div>
                <div className="row mb-2">

                    <div className="col-12">
                        <h6>Nome do titular</h6>
                        <input type="text" placeholder="" required />
                    </div>

                </div>
                <div className="row mb-2">
                    <div className="col-12"><h6>Número de parcelas</h6></div>
                    <div className="col-3">

                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                    </div>
                </div>

            </div>
        </>
    )

}