import ListErrors from '../Common/ListErrors';
import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../../actions/authActions';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        paddingTop: 50,
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    background: {
        backgroundColor: '#fff', // Average color of the background image.
        backgroundPosition: 'center',
    },
    h5: {
        marginBottom: theme.spacing.unit * 4,
        [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing.unit * 2,
        },
    },
    submit: {
        marginTop: theme.spacing.unit * 2,
    }
});

const mapStateToProps = state => ({ 
    ...state.auth,
});

class EmployeeLogin extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await this.props.authenticate(this.state);
    }

    render() {
        const { classes } = this.props;
        const { email, password } = this.state;
        return (
            <Paper className={classes.paper}>
                <ListErrors errors={this.props.errors} />
                <form className={classes.form} onSubmit={this.handleSubmit}>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input id="email" name="email" autoComplete="email" value={email} autoFocus onChange={ev => this.setState({email: ev.target.value})}/>
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input name="password" type="password" id="password" autoComplete="current-password" onChange={ev => this.setState({password: ev.target.value})}/>
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
        );
    }
}

EmployeeLogin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(connect(mapStateToProps, {authenticate}), withStyles(styles))(EmployeeLogin);