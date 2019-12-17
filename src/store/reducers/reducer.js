import * as actionTypes from '../actions/actionsTypes';
// import firebaseSetup from '../../firebaseSetup';

const initialState = {
  userData:{
    name: null,
    phone: null,
    email: null,
    password: null,
    userId: null,
    videoTime: 0,
    whatchedVideo: false,
  },
  users: null,
  error: false,
  userMessage: null,
  loading: false,
  authRedirect: '/'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER_START:
    return {
      ...state,
      loading: true
    }
    case actionTypes.ADD_USER_SUCCESS:
    return {
      ...state,
      userData: action.userData,
      loading: false
    }
    case actionTypes.ADD_USER_FAIL:
    return {
      ...state,
      loading: false
    }
    case actionTypes.LOGIN_START:
    return {
      ...state,
      loading: true
    }
    case actionTypes.LOGIN_FAIL:
    return {
      ...state,
      error: action.error,
      loading: false
    }
    case actionTypes.LOGIN_SUCCESS:
    return {
      ...state,
      userData: action.userData,
      error: null,
      loading: false
    }
    case actionTypes.LOGOUT:
      return {
        ...state,
        userData: action.userData,
        loading: false
      }
    case actionTypes.FORGOT_PASSWORD_START:
      return {
        ...state,
        error: null,
        loading: true
      }    
    case actionTypes.FORGOT_PASSWORD_SUCCESS:
        return {
          ...state,
          error: null,
          loading: false,
          userMessage: action.userMessage
        } 
    case actionTypes.FORGOT_PASSWORD_FAIL:
      return {
        ...state,
        error: null,
        loading: false,
        userMessage: action.userMessage
      } 
    case actionTypes.LIST_USERS:
    // console.log(action);
    return{
      ...state,
      users: action.users,
      error: false,
      loading: false
    }
    case actionTypes.LIST_USERS_FAIL:
    return{
      ...state,
      error: true,
      loading: false
    }
    default:
      return state;
  }
}

export default reducer;