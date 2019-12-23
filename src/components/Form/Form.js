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
                    <select className="form-control fundo">
                        <option>----</option>
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