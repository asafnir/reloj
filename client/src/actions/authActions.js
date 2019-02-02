import api from '../services/api';
import { push } from 'react-router-redux';
import {history} from '../store';
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

const authSuccess = (user) => {
  return {
    type: AUTHENTICATION_SUCCESS,
    payload: {
      user: user,
      token: user.token
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
  const newUser = user
  return (dispatch) => {
    dispatch(authRequest)
    api.Auth.register({admin: user}).then(res => {
      dispatch(authSuccess(res.user)).then(() => history.push('/'))
    }).catch(err => {
      dispatch(authFailure(err.response.body))
    })
  }
}

export const authenticate = (credentials) => {
  return dispatch => {
    dispatch(authRequest())
    api.Auth.login(credentials).then(res => {
      const token = res.jwt;
      api.setToken(token);
      api.Auth.current().then(res => {
        dispatch(authSuccess(res.user))
        return true;
      })
    }).catch( err => {
      dispatch(authFailure({user: 'not found'}))  
    })
  }
}

export const current = () => {
  return dispatch => {
    api.Auth.current().then(res => {
      dispatch(authSuccess(res.user))
    }).catch( err => {
      dispatch(authFailure({user: 'not found'}))  
    })
  }
}