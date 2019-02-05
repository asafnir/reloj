import api from '../services/api';

import {
  ATTENDANCES_LIST,
  START_CLOCK,
  STOP_CLOCK
} from '../constants/actionTypes'

export const startClock = ({employee_id, baseTime = 0}) => {
  return dispatch => {
    dispatch({ type: START_CLOCK, now: new Date().getTime(), baseTime: baseTime,});
    // api.Employee.startClock(employee_id).then(res => {
    //   dispatch({ type: START_CLOCK, now: new Date().getTime(), baseTime: baseTime,});
    //   console.log(res)
    // }).catch( err => console.log(err))
  }
}

export const stopClock = (employee_id) => {
  return dispatch => {
    dispatch({ type: STOP_CLOCK, now: new Date().getTime()});
    // api.Employee.startClock(employee_id).then(res => {
    //   dispatch({ type: START_CLOCK, now: new Date().getTime(), baseTime: baseTime,});
    //   console.log(res)
    // }).catch( err => console.log(err))
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