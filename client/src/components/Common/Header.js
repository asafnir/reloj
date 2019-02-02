import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import UserMenu from './UserMenu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Clock from './ClockLogo';
import PropTypes from 'prop-types';

const styles = theme => ({
  appBar: {
    position: 'relative',
    background : '#fff',
  },
  toolbarTitle: {
    flex: 1,
    color: '#333'
  },
  clock: {
    display: 'inline-block',
    verticalAlign: 'bottom',
    marginRight: 8
  }
})

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <React.Fragment>

        <Button component={Link} to="/">Home</Button>
        <Button component={Link} to="/login">login</Button>
        <Button component={Link} to="/register">Sign up</Button>
        
      </React.Fragment>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <UserMenu/>
    );
  }
  return null;
};

class Header extends React.Component {
  
  state = {
    date: new Date(),
  }

  render() {
    const { classes } = this.props;
    console.log(this.props)
    return (
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              <Clock className={classes.clock}/>
              {this.props.appName}
            </Typography>
          

          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);