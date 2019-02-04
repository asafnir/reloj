import {
    OPEN_ADD_EMPLOYEE_DIALOG,
    CLOSE_ADD_EMPLOYEE_DIALOG,
    LIST_EMPLOYEES,
    ADD_EMPLOYEE,
    ADD_EMPLOYEE_FAILURE
} from '../constants/actionTypes';

const initialState = {
    employees: null,
    employee: {},
    openAddEmployeeDialog: false,
    errors: null
}
export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_ADD_EMPLOYEE_DIALOG:
      return {
        ...state,
        openAddEmployeeDialog: true,
      };
    case CLOSE_ADD_EMPLOYEE_DIALOG:
      return {
        ...state,
        openAddEmployeeDialog: false
      };
    case LIST_EMPLOYEES:
      return {
        ...state,
        employees: action.employees
      };
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: action.error ? null : state.employees.concat(action.employee)
      };
    case ADD_EMPLOYEE_FAILURE:
      return {
        ...state,
        errors: action.errors
      }
    default:
      return state;
  }

  return state;
};