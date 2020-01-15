import React from 'react';
import './Form.css';

const form = () => {
    return (
        <div className="card fundo">
            <div className="card-body fundo2">
                <h6 className="card-title titulo_form1">APOIE A COMUNIDADE</h6>
                <h4 className="card-subtitle titulo_form2">Mais diversidade e saúde com alimentos frescos e orgânicos na sua mesa!</h4><br></br>
                <p className="card-text">Texto introdutório sobre a comunidade, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor.</p><br></br>
                <form className="text-white">
                    <p>CIDADE/REGIÃO</p>
                    <label class="sr-only" for="state"><abbr title="Unidade Federativa">UF</abbr></label>
                    <select class="form-control fundo" id="state" name="state" >
                        <option>UF</option>
                        <option title="Acre" value="AL">AC</option>
                        <option title="Alagoas" value="AP">AL</option>
                        <option title="Amapá" value="AM">AP</option>
                        <option title="Amazonas" value="BA">AM</option>
                        <option title="Bahia" value="CE">BA</option>
                        <option title="Ceará" value="DF">CE</option>
                        <option title="Distrito Federal" value="ES">DF</option>
                        <option title="Espírito Santo" value="GO">ES</option>
                        <option title="Goiás" value="MA">GO</option>
                        <option title="Maranhão" value="MT">MA</option>
                        <option title="Mato Grosso" value="MS">MT</option>
                        <option title="Mato Grosso do Sul" value="MG">MS</option>
                        <option title="Minas Gerais" value="PA">MG</option>
                        <option title="Pará" value="PB">PA</option>
                        <option title="Paraíba" value="PR">PB</option>
                        <option title="Paraná" value="PE">PR</option>
                        <option title="Pernambuco" value="PI">PE</option>
                        <option title="Piauí" value="RJ">PI</option>
                        <option title="Rio de Janeiro" value="RN">RJ</option>
                        <option title="Rio Grande do Norte" value="RS">RN</option>
                        <option title="Rio Grande do Sul" value="RO">RS</option>
                        <option title="Rondônia" value="RR">RO</option>
                        <option title="Roraima" value="SC">RR</option>
                        <option title="Santa Catarina" value="SP">SC</option>
                        <option title="São Paulo" value="SE">SP</option>
                        <option title="Sergipe" value="TO">SE</option>
                        <option title="Tocantins">TO</option>
                    </select>
                    <p>NOME</p>
                    <input className="form-control fundo" type="text"></input>
                    <p>E-MAIL</p>
                    <input className="form-control fundo" type="text"></input>
                    <p>MENSAGEM</p>
                    <input className="form-control fundo" type="text"></input>
                    <input className="botao2" type="submit"></input>
                </form>
            </div>
        </div>
    );
}

export default form;