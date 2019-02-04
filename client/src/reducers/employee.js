import {
    ATTENDANCES_LIST,
    START_CLOCK,
    STOP_CLOCK,
} from '../constants/actionTypes';

const initialState = {
    attendances: null,
    startClock: false,
}

export default (state = initialState, action) => {
    console.log(action.type)
  switch (action.type) {
    case ATTENDANCES_LIST:
      return {
        ...state,
        attendances: action.attendances,
      };
    case START_CLOCK:
      return {
        ...state,
        startClock: action.status
      };
    case STOP_CLOCK:
      return {
        ...state,
        startClock: action.status
      };
    default:
      return state;
  }

  return state;
};