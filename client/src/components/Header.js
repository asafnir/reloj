import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
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
      <React.Fragment>
        <Button component={Link} to="/">Home</Button>
      </React.Fragment>
    );
  }

  return null;
};

class Header extends React.Component {
  render() {
    const { classes } = this.props;

    return (
        <AppBar position="static" color="default" className={classes.appBar}>
          <Toolbar>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            {this.props.appName.toLowerCase()}
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