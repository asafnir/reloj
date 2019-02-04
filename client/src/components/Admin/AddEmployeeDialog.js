import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';
import blue from '@material-ui/core/colors/blue';
import { closeAddEmployeeDialog, addEmployee } from '../../actions/adminActions';
import ListErrors from '../Common/ListErrors';

const styles = theme => ({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
});

const mapStateToProps = state => ({ 
    open: state.admin.openAddEmployeeDialog,
    errors: state.admin.errors
});

const mapDispatchToProps = dispatch => ({
    dispatch,
  });

class AddEmployeeDialog extends React.Component {
    
    state = {
        showPassword: false,
        employee: {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            password: '',
            password_confirmation: ''
        }
    }

    handleClose = () => {
        this.props.dispatch(closeAddEmployeeDialog())
    };

    handleChange = key => ev => {
        let employee = {...this.state.employee}
        if (key === 'password') employee.password_confirmation = ev.target.value;
        employee[key] = ev.target.value;
        this.setState({ employee });
    }
    
    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    cleanFields() {}
 
    addEmployee = () => {
        this.cleanFields()
        this.props.dispatch(addEmployee(this.state.employee))
    }

    render() {
        const { classes, open, errors } = this.props;
        const { first_name,
                last_name,
                email,
                password } = this.state.employee;
        
        console.log(this.props)
        return (
            <Dialog fullWidth={true} open={open} onClose={this.handleClose} aria-labelledby="add-employee-dialog">
                <DialogTitle>Add New Employee</DialogTitle>
                <List>
                    <ListItem>
                        <ListErrors errors={errors} />
                    </ListItem>
                    <ListItem>
                        <TextField
                            label="First Name"
                            type="name"
                            value={first_name}
                            onChange={this.handleChange('first_name')}
                            name="first_name"
                            autoComplete="first_name"
                            margin="normal"
                            variant="outlined"
                            className={classes.textField}
                            />
                        <TextField
                            label="Last Name"
                            type="name"
                            value={last_name}
                            onChange={this.handleChange('last_name')}
                            name="last_name"
                            autoComplete="last_name"
                            margin="normal"
                            variant="outlined"
                            className={classes.textField}
                            />
                    </ListItem>
                    <ListItem>
                        <TextField
                            label="Email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange('email')}
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                            className={classes.textField}
                            />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            className={classes.textField}
                            type={this.state.showPassword ? 'text' : 'password'}
                            label="Password"
                            value={password}
                            onChange={this.handleChange('password')}
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                    >
                                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                ),
                            }}
                        />
                    </ListItem>
                    <ListItem button onClick={this.addEmployee}>
                        <ListItemAvatar>
                            <Avatar>
                            <AddIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="add account" />
                    </ListItem>
                </List>
                
            </Dialog>
        )
    }
}

AddEmployeeDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(styles))(AddEmployeeDialog);