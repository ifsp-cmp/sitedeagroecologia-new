import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as userActions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner2';

import './Cadastro.css';
import { checkValidity } from '../../shared/utility';

class Cadastro extends Component{
	
	state = {
		loginForm: {
			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Digite seu nome'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			phone: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Digite seu telefone'
				},
				value: '',
				validation: {
					required: true,
				},
				valid: false,
				touched: false
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Digite seu e-mail'
				},
				value: '',
				validation: {
					required: true,
					isEmail: true
				},
				valid: false,
				touched: false
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Senha - Minímo de 6 caracteres'
				},
				value: '',
				validation: {
					required: true,
					minLength: 6
				},
				valid: false,
				touched: false
			}
		},
		formIsValid: false,
	}

	inputChangedHandler(event, inputIdentifier) {
		const updatedLoginForm = {
			...this.state.loginForm
	  	}
		const updatedFormElement = {
			...updatedLoginForm[inputIdentifier]
		};
		updatedFormElement.value = event.target.value;
		updatedFormElement.valid = checkValidity(event.target.value, updatedFormElement.validation);
		updatedFormElement.touched = true;
		updatedLoginForm[inputIdentifier] = updatedFormElement;

		let formIsValid = true;
		for(let inputIdentifier in updatedLoginForm){
			// console.log(updatedLoginForm[inputIdentifier]);
			formIsValid = updatedLoginForm[inputIdentifier].valid && formIsValid;
		}

		this.setState({loginForm: updatedLoginForm, formIsValid: formIsValid});
	 }

	submitHandler = (event) => {
		event.preventDefault();
		console.log("Cheguei no submitHandler");
		const userData = {};
		for (let formElementIdentifier in this.state.loginForm) {
			userData[formElementIdentifier] = this.state.loginForm[formElementIdentifier].value;
		}
		// console.log("UserData:", userData);
		this.props.onAddUser( userData );
	}
	
	render(){

		// console.log('[Cadastro] UserData:', this.props.userData);

		const formElementArray = [];
		for (let key in this.state.loginForm){
			formElementArray.push({
				id: key,
				config: this.state.loginForm[key]
			});
		}
		// console.log(formElementArray);
		
		//Redireciona caso o usuário tenha sido cadastrado. 
		let redirect = this.props.isUserAuthenticated ? <Redirect to='/training' /> : null;
		let error = this.props.error ? <p className="alert-danger">{this.props.userMessage}</p>: null;
		console.log('[Cadastro Component] isUserAuthenticated:', this.props.isUserAuthenticated)

		let form = null;
		form = (
			<div>
				<form onSubmit={this.submitHandler}>
					{formElementArray.map(formElement => {
						let inputClass = ["Input"];
						if(!formElement.config.valid && formElement.config.touched){
							inputClass = ["Input", "Invalid"];
						};
						return (<input
							className={inputClass.join(" ")}
							key={formElement.id}
							id={formElement.id}
							type={formElement.config.elementConfig.type}
							placeholder={formElement.config.elementConfig.placeholder}
							value={formElement.config.value}
							onChange={(event) => this.inputChangedHandler(event, formElement.id)} />)
					})}
					<br />
					<button className="Button" disabled={!this.state.formIsValid}>Enviar</button>
				</form>
			</div>
		);

		if (this.props.loading) {
			form = <Spinner />;
		}

		return(
			<div className="Cadastro">
				<h3>Cadastro</h3>
				<p className="alert-warning">Todos os campos são obrigatórios</p>
				{error}
				{redirect}
				{form}
			</div>
		);
	};
}
	
const mapStateToProps = state => {
	return {
		userData: state.userData,
		loading: state.loading,
		isUserAuthenticated: state.userData.userId !== null,
		error: state.error,
		userMessage: state.userMessage
	};
}

const mapDispatchToProps = dispatch => {
	return{
		onAddUser: (userData) => dispatch(userActions.addUser(userData))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);