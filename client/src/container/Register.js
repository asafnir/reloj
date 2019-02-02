import ListErrors from '../components/Common/ListErrors';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { signup } from '../actions/authActions';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import LayoutBody from '../components/LayoutBody';
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

const mapStateToProps = state => ({ ...state.auth });

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      user: { 
        password: '',
        email: '',
        first_name: '',
        last_name: '',
        company: '',
        password_confirmation: ''
      }
    }
  }

  onChange = (key, ev) => {
    let user = {...this.state.user}
    user[key] = ev.target.value;
    this.setState({ user });
  }

  submitForm = ev => {
    ev.preventDefault();
    this.props.signup(this.state.user)
    // this.props.onSubmit(this.state.user);
  }

  render() {
    const { classes, errors } = this.props;
    const { email, password, password_confirmation, first_name, last_name, company } = this.state.user
    return (
      <LayoutBody margin marginBottom width="xsmall">
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Typography component="p">
              Create your account and start tracking your employee 
            </Typography>
            <ListErrors errors={errors} />
            <form className={classes.form} onSubmit={this.submitForm}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="company">Company name</InputLabel>
                <Input id="company" name="company" autoFocus value={company} onChange={(e) => this.onChange("company", e)} type="text"
                      placeholder="Company Name"
                      value={company}/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="first_name">First name</InputLabel>
                <Input id="first_name" name="first_name" autoFocus value={first_name} onChange={(e) => this.onChange("first_name", e)} type="text"
                      placeholder="First Name"
                      value={first_name}/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="last_name">Last Name</InputLabel>
                <Input id="last_name" name="last_name" autoFocus value={last_name} onChange={(e) => this.onChange("last_name", e)} type="text"
                      placeholder="First Name"
                      value={last_name}/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input id="email" name="email" autoComplete="email" autoFocus value={email} onChange={(e) => this.onChange("email", e)} />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" type="password" id="password" value={password} autoComplete="current-password" onChange={(e) => this.onChange("password", e)}/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="passwordConfirmation">Password Confirmation</InputLabel>
                <Input name="passwordConfirmation" type="password" id="passwordConfirmation" value={password_confirmation} autoComplete="current-password" onChange={(e) => this.onChange("password_confirmation", e)}/>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={this.props.inProgress}
              >
                Sign up
              </Button>
            </form>
          </Paper>
      </LayoutBody>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(connect(mapStateToProps, {signup}), withStyles(styles))(Register);