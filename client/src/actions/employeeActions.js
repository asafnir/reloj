import api from '../services/api';

import {
  ATTENDANCES_LIST
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

export const startClock = (employee_id) => {
  return dispatch => {
    api.Employee.startClock(employee_id).then(res => {
      console.log(res)
    }).catch( err => console.log(err))
  }
}

export const getAttendances = (employee_id) => {
  return dispatch => {
    api.Employee.getAttendances(employee_id).then(res => {
      return dispatch({
        type: ATTENDANCES_LIST,
        attendances: res
      });
    }).catch( err => {
      console.log(err)
    })
  }
}