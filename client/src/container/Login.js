import ListErrors from '../components/Common/ListErrors';
import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../actions/authActions';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LayoutBody from '../components/LayoutBody';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },

})

const mapStateToProps = state => ({ 
  ...state.auth,
});

class Login extends React.Component {
  constructor() {
    super();
    this.state = { 
      password: '',
      email: ''
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.authenticate(this.state);
  }
  
  changeEmail = (ev) => {
    this.setState({email: ev.target.value})
  }

  changePassword = (ev) => {
    this.setState({password: ev.target.value})
  }
    

  render() {
    const { classes } = this.props;
    const {password, email} = this.state;
    
    return (
      <LayoutBody margin marginBottom width="xsmall">
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <ListErrors errors={this.props.errors} />
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus value={email} onChange={this.changeEmail}/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password" onChange={this.changePassword}/>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={this.props.inProgress}
            >
              Sign in
            </Button>
          </form>
        </Paper>
      </LayoutBody>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(connect(mapStateToProps, {authenticate}), withStyles(styles))(Login);