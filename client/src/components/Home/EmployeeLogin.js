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
    image: {
        width: 'auto',
        height: 450,
        float: 'right'
    }
});

class EmployeeLogin extends React.Component {
    state = {
        email: '',
        password: ''
    }

    render() {
        const { classes } = this.props;
        const { email, password } = this.state;
        return (
            <Paper>
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
        );
    }
}

EmployeeLogin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployeeLogin);