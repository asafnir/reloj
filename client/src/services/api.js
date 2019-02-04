import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://' + (process.env.API_HOST || 'localhost') + ':3000' + '/api';

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
    requests.get('/admins/current'),
  login: ({email, password}) =>
    requests.post('/admin/token', { auth: { email, password } }),
  register: (user) =>
    requests.post('/admins', user ),
  save: user =>
    requests.put('/user', { user })
};

const Admin = {
  addEmployee: (employee) =>
    requests.post('/employees', employee ),
  employees: () => 
    requests.get('/employees'),
}

const Profile = {
  get: username =>
    requests.get(`/profiles/${username}`),
};

export default {
  Auth,
  Admin,
  Profile,
  setToken: _token => { token = _token; }
};