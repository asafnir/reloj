import {
    LOGIN,
    REGISTER,  
    AUTHENTICATION_REQUEST,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILURE,
    LOGOUT,  
  } from '../constants/actionTypes';

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  inProgress: false,
  currentUser: null,
  token: null,
  errors: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null
      };
    case REGISTER:
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        isAuthenticating: false,
        currentUser: null,
        inProgress: false,
        token: null
    };
    case AUTHENTICATION_REQUEST:
      return {
        ...state,
        isAuthenticating: true,
        inProgress: true
      };
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isAuthenticating: false,
        currentUser: action.payload.user,
        token: action.payload.token
      };
    case AUTHENTICATION_FAILURE:
      return {
        isAuthenticated: false,
        isAuthenticating: false,
        inProgress: false,
        currentUser: null,
        token: null,
        errors: action.payload.errors || []
      };
    default:
      return state;
  }

  return state;
};