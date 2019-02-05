import Header from './Common/Header';
import React from 'react';
import { Route, withRouter , Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import api from '../services/api';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from '../container/Home';
import { current, currentEmployee } from '../actions/authActions';
import Login from '../container/Login';
import Dashboard from '../container/Dashboard';
import EmployeeDashboard from '../container/EmployeeDashboard';
import Register from '../container/Register';
import Attendance from '../container/Attendance';
import Reports from './Employee/Reports';

class App extends React.Component {
  
  componentWillMount() {
    const { history } = this.props;
    const token = window.localStorage.getItem('token');
    const currentUser = JSON.parse(window.localStorage.getItem('user'));
    console.log(currentUser)
    if (token && currentUser) {
      api.setToken(token);
      if (currentUser && currentUser.role === 'employee') { 
        this.props.currentEmployee();
        history.push("/")
      } else {
        this.props.current()
        history.push("/dashboard");
      }
    }
  }

  render() {
    const { currentUser, isAuthenticated = false } = this.props;
    const guestViews = (
      <React.Fragment>
        <Header appName='reloj' currentUser={currentUser} />  
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </React.Fragment>
    )
    const userViews = (
      <React.Fragment>
        <Header appName='reloj' currentUser={currentUser} />
          { currentUser && currentUser.role === "employee" ?
            <Switch>
              <Route exact path="/" component={EmployeeDashboard}/>
              <Route exact path="/reports" component={Reports}/>
              <Route exact path="/attendance" component={Attendance}/>
            </Switch>
            :
            <Switch>
              <Route exact path="/" component={Dashboard}/>
              <Route exact path="/dashboard" component={Dashboard}/>
              <Route exact path="/attendance" component={Attendance}/>
            </Switch>
          }
      </React.Fragment>
    )
    return (
      <React.Fragment>
        <CssBaseline />
        {isAuthenticated && currentUser ? userViews : guestViews}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    currentUser: state.auth.currentUser
  }
}

export default withRouter(connect(mapStateToProps, {current, currentEmployee})(App))