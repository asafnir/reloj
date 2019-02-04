import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { logout } from '../../actions/authActions';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class UserMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = (e) => {
    e.preventDefault();
    this.setState({ anchorEl: null });
    this.props.logout();
  }

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <React.Fragment>
        <Button component={Link} to="/dashboard">Dashbaord</Button>
        <IconButton
            aria-owns={open ? 'menu-appbar' : undefined}
            aria-haspopup="true"
            onClick={this.handleMenu}>
            <AccountCircle />
        </IconButton>
        <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            open={open}
            onClose={this.handleClose}
        >
            <MenuItem onClick={this.handleClose}>My account</MenuItem>
            <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
        </Menu>
      </React.Fragment>
    );
  }
}

UserMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(connect(null, {logout}), withStyles(styles))(UserMenu);