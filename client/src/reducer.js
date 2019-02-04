import auth from './reducers/auth';
import common from './reducers/common';
import home from './reducers/home';
import profile from './reducers/profile';
import admin from './reducers/admin';
import employee from './reducers/employee';
import settings from './reducers/settings';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
  router: connectRouter(history),
  auth,
  admin,
  employee,
  common,
  home,
  profile,
  settings,
});