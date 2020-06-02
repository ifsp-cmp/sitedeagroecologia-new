import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

    submitHandler = (event) => {
        event.preventDefault();
        console.log("cheguei no submit");
        // console.log("Cheguei no submitHandler");
        // const userData = {};
        // for (let formElementIdentifier in this.state.loginForm) {
        // 	userData[formElementIdentifier] = this.state.loginForm[formElementIdentifier].value;
        // }
        // // console.log("UserData:", userData);
        // this.props.onAddUser( userData );
    }

    render() {
        return (
            <div className="Form" >
                <div className="fundo2">
                    <h6 className="titulo_form1">Mais informações?</h6>
                    <h4 className="titulo_form2">Escreva pra gente !!!</h4><br></br>
                    {/* <form className="text-white" action="http://localhost:5000/site-de-agroecologia-new/us-central1/emailViaForm" method="post"> */}
                    <form className="text-white" action="https://us-central1-site-de-agroecologia-new.cloudfunctions.net/emailViaForm" method="post">
                        <p>NOME</p>
                        <input className="form-control fundo" type="text" name="nome"></input>
                        <p>E-MAIL</p>
                        <input className="form-control fundo" type="text" name="email"></input>
                        <p>CIDADE</p>
                        <input className="form-control fundo" type="text" name="cidade"></input>
                        <p>ESTADO</p>
                        <select className="form-control fundo" id="state" name="estado" >
                            <option title="Acre" value="AL" name="estado">AC</option>
                            <option title="Alagoas" value="AP" name="estado">AL</option>
                            <option title="Amapá" value="AM" name="estado">AP</option>
                            <option title="Amazonas" value="BA" name="estado">AM</option>
                            <option title="Bahia" value="CE" name="estado">BA</option>
                            <option title="Ceará" value="DF" name="estado">CE</option>
                            <option title="Distrito Federal" value="ES" name="estado">DF</option>
                            <option title="Espírito Santo" value="GO" name="estado">ES</option>
                            <option title="Goiás" value="MA" name="estado">GO</option>
                            <option title="Maranhão" value="MT" name="estado">MA</option>
                            <option title="Mato Grosso" value="MS" name="estado">MT</option>
                            <option title="Mato Grosso do Sul" value="MG" name="estado">MS</option>
                            <option title="Minas Gerais" value="PA" name="estado">MG</option>
                            <option title="Pará" value="PB" name="estado">PA</option>
                            <option title="Paraíba" value="PR" name="estado">PB</option>
                            <option title="Paraná" value="PE" name="estado">PR</option>
                            <option title="Pernambuco" value="PI" name="estado">PE</option>
                            <option title="Piauí" value="RJ" name="estado">PI</option>
                            <option title="Rio de Janeiro" value="RN" name="estado">RJ</option>
                            <option title="Rio Grande do Norte" value="RS" name="estado">RN</option>
                            <option title="Rio Grande do Sul" value="RO" name="estado">RS</option>
                            <option title="Rondônia" value="RR" name="estado">RO</option>
                            <option title="Roraima" value="SC" name="estado">RR</option>
                            <option title="Santa Catarina" value="SP" name="estado">SC</option>
                            <option title="São Paulo" value="SE" name="estado">SP</option>
                            <option title="Sergipe" value="TO" name="estado">SE</option>
                            <option title="Tocantins" name="estado">TO</option>
                        </select>
                        <p>MENSAGEM</p>
                        <input className="form-control fundo" type="text" name="mensagem"></input>
                        <p>ATUAÇÃO (Produtor, Consumidor, etc.) </p>
                        <input className="form-control fundo" type="text" name="cidade"></input>
                        <input className="botao2" value="Enviar" type="submit"></input>
                    </form>
                </div>
            </div>
        );
    }
}

// export default form;
export default Form;