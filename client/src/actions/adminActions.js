import api from '../services/api';

import {
  ADD_EMPLOYEE, 
  SHOW_EMPLOYEE, 
  LIST_EMPLOYEES,
  ADD_EMPLOYEE_FAILURE,
  OPEN_ADD_EMPLOYEE_DIALOG,
  CLOSE_ADD_EMPLOYEE_DIALOG
} from '../constants/actionTypes'

export const sendEmailToEmployee = () => {
    return dispatch => {
        
    }
}

export const closeAddEmployeeDialog = () => {
    return dispatch => {
        console.log("closeAddEmployeeDialog")
        return dispatch({type: CLOSE_ADD_EMPLOYEE_DIALOG})
    }
}


export const openAddEmployeeDialog = () => {
    return (dispatch) => {
        console.log("openAddEmployeeDialog")
        return dispatch({type: OPEN_ADD_EMPLOYEE_DIALOG})
    }
}

export const addEmployee = (data) => {
    return (dispatch) => {
        api.Admin.addEmployee({employee: data}).then( res => {
            dispatch(closeAddEmployeeDialog())
            return dispatch({
                type: ADD_EMPLOYEE,
                employee: res
            });
        }).catch(err => {
            return dispatch({
                type: ADD_EMPLOYEE_FAILURE,
                errors: err.response ? err.response.body : 'Try again'
            });
        })
    }
}

export const employees = () => {
    return (dispatch) => {
        api.Admin.employees().then( res => {
            return dispatch({
                type: LIST_EMPLOYEES,
                employees: res
            });
        }).catch(err => {
            console.log(err)
        })    
    }
}