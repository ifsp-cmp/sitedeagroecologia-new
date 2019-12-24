import * as actionsTypes from './actionsTypes';

export const removeUser = (userId) => {
    return {
        type: actionsTypes.REMOVE_USER,
        userId: userId
    };
};

export const loginSuccess = ( userData ) => {
    return {
        type: actionsTypes.LOGIN_SUCCESS,
        userData: userData
    };
};

export const loginFail = ( errorMessage ) => {
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
    // return dispatch => {
    //     dispatch(loginStart());
    //     firebase.auth().signInWithEmailAndPassword(email, password)
    //     .then(function( data ){
    //         // console.log("Usuário logado com sucesso");
    //         // console.log( data );
    //         // console.log(data.user.uid);
    //         let docRef = firebase.firestore().collection("users").doc(data.user.uid);
    //         docRef.get()
    //         .then(function(doc) {
    //             if (doc.exists) {
    //                 // console.log("Document data:", doc.data());
    //                 let userData = doc.data();
    //                 userData.userId = data.user.uid;
    //                 // console.log(userData);
    //                 dispatch(loginSuccess( userData ));
    //             } else {
    //                 // doc.data() will be undefined in this case
    //                 // console.log("No such document!");
    //             }
    //         })
    //         .catch(function(error) {
    //             console.log("Error getting document:", error);
    //         });
    //     })
    //     .catch(function(error) {
    //         //var errorCode = error.code;
    //         let errorMessage = error.message;
    //         // console.log(errorMessage);
    //         // console.log(errorCode);
    //         dispatch(loginFail(errorMessage));
    //     });
    // }
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

export const forgotPasswordSuccess = ( msg ) => {
    return {
        type: actionsTypes.FORGOT_PASSWORD_SUCCESS,
        userMessage: msg
    };
}

export const forgotPasswordFail = ( msg ) => {
    return {
        type: actionsTypes.FORGOT_PASSWORD_FAIL,
        userMessage: msg
    }; 
}

export const forgotPassword = ( email ) => {
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

export const listUser =( users ) => {
    return {
        type: actionsTypes.LIST_USERS,
        users: users
    };
}

export const addUserSuccess = (userData) => {
    return {
        type: actionsTypes.ADD_USER_SUCCESS,
        userData: userData
    };
}

export const addUserFail = ( error ) => {
    return {
        type: actionsTypes.ADD_USER_FAIL,
        error: error
    };
}

export const addUserStart = () => {
    return {
        type: actionsTypes.ADD_USER_START
    }
}

export const addUser = ( userData ) => {
    console.log("Cheguei");
    return dispatch => {
        console.log('[Adduser] UserData:', userData);
        // dispatch(addUserStart());
        // // console.log(userData);
        // let userEmail = userData.email;
        // let userPassword = userData.password;
        // firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
        // .then(function( res ){
        //     console.log("Retorno da criação do usuário:", res)
        //     // console.log(res.user.uid);
        //     // console.log("Usuário criado com sucesso");
        //     firebase.firestore().collection("users").doc(res.user.uid).set({
        //         name: userData.name,
        //         phone: userData.phone,
        //         email: userData.email,
        //         videoTime: 0,
        //         timestamp: firebase.firestore.FieldValue.serverTimestamp()
        //     })
        //     .then(function(docRef) {
        //         // console.log("Dados armazenados com sucesso");
        //         userData.userId = res.user.uid;
        //         userData.videoTime = 0;
        //         dispatch(addUserSuccess(userData));
        //     })
        //     .catch(function(error) {
        //         console.error("Erro ao incluir o usuário: ", error);
        //         dispatch(addUserFail(error)); 
        //     });
        // })
        // .catch(function(error) {
        //     let errorCode = error.code;
        //     let errorMessage = error.message;
        //     console.log(errorCode);
        //     console.log(errorMessage);
        //     dispatch(addUserFail(error));
        // });
    }
}

export const listUsersFail =( error ) => {
    return {
        type: actionsTypes.LIST_USERS_FAIL,
        error: error
    };
}

export const getUsers = () =>{
    // // console.log("Get Users from actions");
    // let users = [];
    // return dispatch => {
    //     firebase.firestore().collection("users").get()
    //     .then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             // console.log(doc.id);
    //             // console.log(doc.data().name);
    //             const user = doc.data();
    //             users.push(user);
    //         });
    //         dispatch(listUser(users));
    //     })
    //     .catch(function(error){
    //         // console.log(error);
    //         dispatch(listUsersFail(error));
    //     });
    // };
}

