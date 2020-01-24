import * as actionsTypes from './actionsTypes';
import axios from 'axios';
import crypto from 'crypto';

export const removeUser = (userId) => {
    return {
        type: actionsTypes.REMOVE_USER,
        userId: userId
    };
};

export const loginSuccess = (userData) => {
    return {
        type: actionsTypes.LOGIN_SUCCESS,
        userData: userData
    };
};

export const loginFail = (errorMessage) => {
    return {
        type: actionsTypes.LOGIN_FAIL,
        error: errorMessage
    };
};

export const logout = () => {
    // firebase.auth().signOut()
    // .then(function() {
    //     console.log("Usuário signout");
    // })
    // .catch(function(error) {
    //     console.log("Erro no  signout");
    // });
    // let userData = {};
    // userData.name = null;
    // userData.phone = null;
    // userData.userId = null;
    // userData.videoTime = 0;
    // return {
    //     type: actionsTypes.LOGOUT,
    //     userData: userData
    // };
}

export const loginStart = () => {
    return {
        type: actionsTypes.LOGIN_START
    };
};

export const login = (email, password) => {
    return dispatch => {
        dispatch(loginStart());
        let passwordCrypt = crypto.createHash("md5").update(password).digest("hex");
        axios.post('http://localhost:3210/login',
            {
                email: email,
                password: passwordCrypt
            }
        ).then(res => {
            // const usuarios = res.data;
            // console.log(usuarios);
            // dispatch(listUsers(users));
        })
    }
}

export const verifyLogin = () => {
    // return dispatch => {
    //     // console.log('[Verify login]');
    //     dispatch(loginStart());
    //     firebase.auth().onAuthStateChanged(user => {
    //         // console.log('[App Component] UID ', user.uid);         
    //         // console.log('[App Component] Email ', user.email);
    //         if(user){
    //             console.log('[Users Store]',user.uid);
    //             let docRef = firebase.firestore().collection("users").doc(user.uid);
    //             docRef.get()
    //             .then(function(doc) {
    //                 if (doc.exists) {
    //                     // console.log("Document data:", doc.data());
    //                     let userData = doc.data();
    //                     userData.userId = user.uid;
    //                     // console.log(userData);
    //                     dispatch(loginSuccess( userData ));
    //                 } else {
    //                     // doc.data() will be undefined in this case
    //                     // console.log("No such document!");
    //                 }
    //             })
    //             .catch(function(error) {
    //                 console.log("Error getting document:", error);
    //             });

    //         } 
    //         else {
    //             dispatch(logout());
    //         }
    //     });
    // }
}

export const forgotPasswordStart = () => {
    return {
        type: actionsTypes.FORGOT_PASSWORD_START
    };
}

export const forgotPasswordSuccess = (msg) => {
    return {
        type: actionsTypes.FORGOT_PASSWORD_SUCCESS,
        userMessage: msg
    };
}

export const forgotPasswordFail = (msg) => {
    return {
        type: actionsTypes.FORGOT_PASSWORD_FAIL,
        userMessage: msg
    };
}

export const forgotPassword = (email) => {
    // return dispatch => {
    //     // console.log("Cheguei no action adduser");
    //     dispatch(forgotPasswordStart());
    //     console.log(email);
    //     firebase.auth().sendPasswordResetEmail(email).then(function() {
    //         dispatch(forgotPasswordSuccess('E-mail enviado com sucesso. Consulte seu e-mail para resetar a senha.'));
    //     }).catch(function(error) {
    //         dispatch(forgotPasswordFail('Erro ao enviar e-mail. Confira o endereço de e-mail.'));
    //     });  
    // };
}

export const listUsers = (users) => {
    return {
        type: actionsTypes.LIST_USERS,
        users: users
    };
}

export const addUserSuccess = (userData, userMessage) => {
    return {
        type: actionsTypes.ADD_USER_SUCCESS,
        userData: userData,
        userMessage: userMessage
    };
}

export const addUserFail = (userMessage) => {
    return {
        type: actionsTypes.ADD_USER_FAIL,
        userMessage: userMessage
    };
}

export const addUserStart = () => {
    return {
        type: actionsTypes.ADD_USER_START
    }
}

export const addUser = (userData) => {
    return dispatch => {
        dispatch(addUserStart());
        let passwordCrypt = crypto.createHash("md5").update(userData.password).digest("hex");
        console.log(passwordCrypt);
        axios.post('http://localhost:3210/data',
            {
                userName: userData.name,
                userEmail: userData.email,
                userPhone: userData.phone,
                userPassword: passwordCrypt
            }
        ).then(res => {
            console.log(res);
            if (res.data.errorMessage) {
                console.log('Erro ao armazenar os dados');
                console.log(res.data.errorMessage);
                dispatch(addUserFail(res.data.errorMessage));
            } else {
                alert("Dados armazenados com sucesso");
                dispatch(addUserSuccess(userData, 'Dados Armazenados Com Sucesso!'));
            }
        }).catch(function (error) {
            console.log(error);
            dispatch(addUserFail('Servidor de dados com erro. Verifique se ele está operando corretamente.'));
        });
    }
}

export const listUsersFail = (error) => {
    return {
        type: actionsTypes.LIST_USERS_FAIL,
        error: error
    };
}

export const getUsers = () => {
    console.log("Get Users from actions");
    let users = [];
    return dispatch => {
        console.log("Teste");
        axios.get('http://localhost:3210/data')
            .then(res => {
                const usuarios = res.data;
                console.log(usuarios);
                usuarios.forEach(element => {
                    users.push(element);
                });
                dispatch(listUsers(users));
            })

        // firebase.firestore().collection("users").get()
        // .then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         // console.log(doc.id);
        //         // console.log(doc.data().name);
        //         const user = doc.data();
        //         users.push(user);
        //     });
        //     dispatch(listUser(users));
        // })
        // .catch(function(error){
        //     // console.log(error);
        //     dispatch(listUsersFail(error));
        // });
    };
}


