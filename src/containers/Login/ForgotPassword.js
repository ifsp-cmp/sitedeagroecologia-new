import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner2';

import './ForgotPassword.css';

class ForgotPassword extends Component  {
    
    state = {
        email: null
    }

    submitHandler = (event) => {
        event.preventDefault();
        // console.log("Cheguei no submitHandler");
        this.props.onForgotPassword(event.target.email.value);
    }

    render(){
        let html = (
            <form onSubmit={this.submitHandler}>
                <input
                    type='email'
                    id='email'
                    placeholder='Digite seu e-mail aqui' 
                />
                <button className="Button" >Enviar</button>
                {this.props.userMessage ? <p className='alert-warning'>{this.props.userMessage}</p> : null}
            </form>
        );

        if (this.props.loading) {
			html = <Spinner />;
		}
        return (
           <div className='ForgotPassword'>
               <h3>Esqueci minha senha</h3>
               <p>Digite seu e-mail cadastrado abaixo para receber informações sobre como reiniciar sua senha.</p>
               {html}
           </div>
        )
    }
};

const mapStateToProps = state => {
	return {
		error: state.error,
        loading: state.loading,
        userMessage: state.userMessage
	}
}

const mapDispatchToProps = dispatch => {
	return{
		onForgotPassword: (email) => dispatch(userActions.forgotPassword(email))
	}
}
    
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);