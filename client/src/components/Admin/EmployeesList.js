import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';

const styles = theme => ({
})

const mapStateToProps = state => ({ 
   
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

class EmployeesList extends React.Component {
  
  render() {
    const { classes, employees } = this.props;
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell >Last Name</TableCell>
                        <TableCell >Email</TableCell>
                        <TableCell >Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map(employee => (
                        <TableRow key={employee.id}>
                            <TableCell>{employee.first_name}</TableCell>
                            <TableCell>{employee.last_name}</TableCell>
                            <TableCell>{employee.email}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary">
                                   Start Clock
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
  }
}

EmployeesList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(styles))(EmployeesList);