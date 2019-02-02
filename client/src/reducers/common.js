import {
    APP_LOAD,
    REDIRECT,
    LOGOUT,
    SETTINGS_SAVED,
    LOGIN,
    REGISTER,
    HOME_PAGE_UNLOADED,
    PROFILE_PAGE_UNLOADED,
    PROFILE_FAVORITES_PAGE_UNLOADED,
    SETTINGS_PAGE_UNLOADED,
    LOGIN_PAGE_UNLOADED,
    REGISTER_PAGE_UNLOADED
  } from '../constants/actionTypes';
  
  const defaultState = {
    appName: 'reloj',
    token: null,
    viewChangeCounter: 0
  };
  
  export default (state = defaultState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };