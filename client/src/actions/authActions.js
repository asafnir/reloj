import api from '../services/api';
import { push } from 'react-router-redux';
import {
  AUTHENTICATION_FAILURE, 
  AUTHENTICATION_REQUEST, 
  AUTHENTICATION_SUCCESS,
  LOGOUT
} from '../constants/actionTypes'

const authRequest = () => {
  return {
    type: AUTHENTICATION_REQUEST
  }
}

const authSuccess = (data) => {
  return {
    type: AUTHENTICATION_SUCCESS,
    payload: {
      user: data.user,
      token: data.token
    }
  }
}

const authFailure = (errors) => {
  return {
    type: AUTHENTICATION_FAILURE,
    payload: {
      errors: errors
    }
  }
}

export const logout = () => {
  return dispatch => {
    localStorage.clear();
    dispatch(push('/'))
    return dispatch({
      type: LOGOUT
    });
  }
}

export const signup = (user) => {
  return (dispatch) => {
    dispatch(authRequest)
    api.Auth.register({user: user}).then(res => {
      dispatch(authSuccess(res))
      dispatch(push('/dashboard'))
    }).catch(err => {
      dispatch(authFailure(err.response ? err.response.body : {server: 'problem try again later '} ))
    })
  }
}

export const authenticate = (credentials) => {
  return dispatch => {
    dispatch(authRequest())
    api.Auth.login(credentials).then(res => {
      console.log(res)
      const token = res.jwt;
      api.setToken(token);
      api.Auth.current().then(res => {
        console.log(res)
        dispatch(authSuccess(res))
        dispatch(push('/'))
      })
    }).catch( err => {
      dispatch(authFailure({user: 'not found'}))  
    })
  }
}

export const current = () => {
  return dispatch => {
    api.Auth.current().then(res => {
      dispatch(authSuccess(res))
    }).catch( err => {
      dispatch(authFailure({user: 'not found'}))  
    })
  }
}