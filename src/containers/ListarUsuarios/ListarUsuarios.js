import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Modal from '../../components/UI/Modal/Modal';

import * as userActions from '../../store/actions/index';
import './ListarUsuarios.css';

class ListarUsuarios extends Component{

    state = {
        showModal: true
    }

    componentDidMount(){
        this.props.onGetUsers();
    }

    changeModal = () => {
        this.setState({ showModal: false });
    }

    render(){
        let listUsers = <p>Loading...</p>;
        let users = null;
        if(this.props.users){ users = this.props.users};
        if(this.props.users){
            users = this.props.users;
            listUsers = (
                <div>
                    {users.map(user => {
                        console.log("User"+user.nome);
                        return (<p
                            className={"teste"}
                            key={user.nome}
                            type={"text"}
                            placeholder={"Digite"}
                            >{user.nome} - {user.email}</p>)
                    })}
                </div>
            );
            console.log(listUsers);
        }
        return(
            <div>
                {/* <Modal show={this.state.showModal} modalClosed={this.changeModal}> */}
                    {listUsers}
                {/* </Modal> */}
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