import api from '../services/api';
import Header from './Header';
import React from 'react';
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes';
import CssBaseline from '@material-ui/core/CssBaseline';
import { compose } from 'recompose';
import withStyles from '@material-ui/core/styles/withStyles';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';
import Settings from './Settings';
import store from '../store';
import { push } from 'react-router-redux';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
})

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
  }};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
});

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo);
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }

  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      api.setToken(token);
    }

    this.props.onLoad(token ? api.Auth.current() : null, token);
  }

  render() {
    const { classes } = this.props;
    if (this.props.appLoaded) {
      return (
        <React.Fragment>
          <CssBaseline />
  
          <Header appName={this.props.appName} currentUser={this.props.currentUser} />
          <main className={classes.main}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/settings" component={Settings} />
              <Route path="/@:username" component={Profile} />
            </Switch>
          </main>
        </React.Fragment>
      );
    }
    return (
      <div>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser} />
      </div>
    );
  }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(styles))(App);