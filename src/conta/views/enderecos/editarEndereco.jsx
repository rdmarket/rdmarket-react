import React from 'react'
import '../../css/styles.css'
import '../../css/barra-vermelha.css'
import Header from  '../../../templates/header/header'
import BarraVermelha from '../../componentes/barra-vermelha'
import Footer from  '../../../templates/footer/footer'

export default () => {

    return (
        <>
        <Header />
        <BarraVermelha titulo="Editar endereço" />

        <div className="container mt-5">
        <div className="row justify-content-center">
          <form className="col-10">
            <div className="row">
              <div className="form-group col-6">
                <label htmlFor="nome">CEP</label>
                <input type="tex" className="form-control" id="nome" placeholder="00000-000" />
              </div>
              <div className="form-group col-6">
                <label htmlFor="tipoEndereco">Tipo de Endereço</label>
                <select id="tipoEndereco" name="select-simples" className="ls-select form-control">
                  <option selected>Selecione uma opção</option>
                  <option value="Residencial">Residencial</option>
                  <option value="Comercial">Comercial</option>
                  <option value="Cobrança">Cobrança</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-9">
                <label htmlFor="endereco">Endereço</label>
                <input type="tex" className="form-control" id="endereco" />
              </div>
              <div className="form-group col-3">
                <label htmlFor="numero">Número</label>
                <input type="tex" className="form-control" id="numero" />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-4">
                <label htmlFor="complemento">Complemento</label>
                <input type="tex" className="form-control" id="complemento" />
              </div>
              <div className="form-group col-6">
                <label htmlFor="cidade">Cidade</label>
                <input type="tex" className="form-control" id="cidade" />
              </div>
              <div className="form-group col-2">
                <label htmlFor="estado">Estado</label>
                <select id="estado" className="ls-select form-control">
                  <option selected>Selecione</option>
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  <option value="AP">AP</option>
                  <option value="AM">AM</option>
                  <option value="BA">BA</option>
                  <option value="CE">CE</option>
                  <option value="DF">DF</option>
                  <option value="ES">ES</option>
                  <option value="GO">GO</option>
                  <option value="MA">MA</option>
                  <option value="MT">MT</option>
                  <option value="MS">MS</option>
                  <option value="MG">MG</option>
                  <option value="PA">PA</option>
                  <option value="PB">PB</option>
                  <option value="PR">PR</option>
                  <option value="PE">PE</option>
                  <option value="PI">PI</option>
                  <option value="RJ">RJ</option>
                  <option value="RN">RN</option>
                  <option value="RS">RS</option>
                  <option value="RO">RO</option>
                  <option value="RR">RR</option>
                  <option value="SC">SC</option>
                  <option value="SP">SP</option>
                  <option value="SE">SE</option>
                  <option value="TO">TO</option>
                </select>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-6">
                <div className="row justify-content-start">
                  <div className="col-3">
                    <a href="#/enderecos" type="button" className="btn btn-danger danger" style={{width: '100%'}}>Voltar</a>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row justify-content-end">
                  <div className="col-3">
                    <button type="reset" className="btn btn-secondary secondary">Limpar</button>
                  </div>
                  <div className="col-6">
                    <a type="button" className="btn btn-success" style={{width: '100%'}}>Salvar</a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

        <Footer />
        </>
    )

}