import api from '../services/api';

import {

} from '../constants/actionTypes'

export const employeeAuthenticate = (credentials) => {
    return dispatch => {
      api.Auth.employeeLogin(credentials).then(res => {
        const token = res.jwt;
        api.setToken(token);
        // api.Auth.current().then(res => {
        //   dispatch(authSuccess(res.user))
        //   dispatch(push('/dashboard'))
        // })
      }).catch( err => {
        // dispatch(authFailure({user: 'not found'}))  
      })
    }
  }