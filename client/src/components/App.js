import Header from './Common/Header';
import React from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import api from '../services/api';
import CssBaseline from '@material-ui/core/CssBaseline';
import { compose } from 'recompose';
import Home from '../container/Home';
import { current } from '../actions/authActions';
import Login from '../container/Login';
import Dashboard from '../container/Dashboard';
import Profile from '../container/Profile';
import Register from '../container/Register';
import Settings from '../container/Settings';

class App extends React.Component {
  
  componentWillMount() {
    const token = window.localStorage.getItem('token');
    if (token) {
      api.setToken(token);
      this.props.current()
      this.props.history.push("/");
    }
  }

  render() {
    const { currentUser, isAuthenticated = false } = this.props;
    const guestViews = (
      <React.Fragment>
        <Header appName='reloj' currentUser={currentUser} />  
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </React.Fragment>
    )
    const userViews = (
      <React.Fragment>
        <Header appName='reloj' currentUser={currentUser} />
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/dashboard" component={Dashboard}/>
      </React.Fragment>
    )
    return (
      <React.Fragment>
        <CssBaseline />
        <Router>
            {isAuthenticated && currentUser ? userViews : guestViews}
        </Router>
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

export default withRouter(connect(mapStateToProps, {current})(App))