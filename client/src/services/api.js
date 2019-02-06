import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

// const API_ROOT = 'http://' + (process.env.API_HOST || 'localhost') + '/api';
const API_ROOT = 'http://localhost:3000/api';

const responseBody = res => res.body;

let token = null;

const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
}

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) => 
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Auth = {
  current: () =>
    requests.get('/users/current'),
  login: ({email, password}) =>
    requests.post('/user/token', { auth: { email, password } }),
  employeeLogin: ({email, password}) =>
    requests.post('/employee/token', { auth: { email, password } }),
  register: (user) =>
    requests.post('/users', user ),
};

const Admin = {
  addEmployee: (employee) =>
    requests.post('/employees', employee ),
  employees: () => 
    requests.get('/employees'),
}

const Employee = {
  getAttendances: (employee_id) =>
    requests.get(`/employees/${employee_id}/attendances`),
  startClock: (employee_id) => 
    requests.post(`/employees/${employee_id}/attendances`),
  stopClock: (employee_id) => 
    requests.put(`/employees/${employee_id}/attendances`)
}

export default {
  Auth,
  Admin,
  Employee,
  setToken: _token => { token = _token; }
};