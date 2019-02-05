import {
    ATTENDANCES_LIST,
    START_CLOCK,
    STOP_CLOCK,
    RESET_CLOCK
} from '../constants/actionTypes';

const initialState = {
    attendances: null,
    startClock: false,
    startedAt: undefined,
    stoppedAt: undefined,
    baseTime: undefined,
}

export default (state = initialState, action) => {
    console.log(action.type)
  switch (action.type) {
    case ATTENDANCES_LIST:
      return {
        ...state,
        attendances: action.attendances,
      };
      case RESET_CLOCK:
      return {
        ...state,
        baseTime: 0,
        startedAt: state.startedAt ? action.now : undefined,
        stoppedAt: state.stoppedAt ? action.now : undefined
      };
    case START_CLOCK:
      return {
        ...state,
        baseTime: action.baseTime,
        startedAt: action.now,
        stoppedAt: undefined
      };
    case STOP_CLOCK:
      return {
        ...state,
        stoppedAt: action.now
      }
    default:
      return state;
  }

  return state;
};