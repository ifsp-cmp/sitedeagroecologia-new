import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from '../../components/UI/Modal/Modal';

import * as userActions from '../../store/actions/index';
import './ListarUsuarios.css';

class ListarUsuarios extends Component{

    state = {
        showModal: true
    }

    componentDidMount(){
        console.log("cheguei no didmount");
        // this.props.onGetUsers();
    }

    changeModal = () => {
        this.setState({ showModal: false });
    }

    render(){
        // console.log(this.props.users);
        let listUsers = <p>Loading...</p>;
        let users = null;
        if(this.props.users){ users = this.props.users};
        // console.log("Propsusers", this.props.users);
        // console.log("Users", users);
        if(this.props.users){
            listUsers = (
                <div>
                    {users.map(user => {
                        return (<p
                            className={"teste"}
                            key={user.nome}
                            type={"text"}
                            placeholder={"Digite"}
                            >{user.name} - {user.phone}</p>)
                    })}
                </div>
            );
        }
        return(
            <div>
                <Modal show={this.state.showModal} modalClosed={this.changeModal}>
                    {listUsers}
                </Modal>
            </div>
        );
    };
}

const mapStateToProps = state => {
	return {
		users: state.users,
        error: state.error
	};
}

const mapDispatchToProps = dispatch => {
	return{
		onGetUsers: () => dispatch(userActions.getUsers())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListarUsuarios);