import auth from './reducers/auth';
import admin from './reducers/admin';
import employee from './reducers/employee';
import common from './reducers/common';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
  router: connectRouter(history),
  auth,
  admin,
  employee,
  common,
});