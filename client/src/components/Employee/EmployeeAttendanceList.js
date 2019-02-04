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
import moment from 'moment';

const styles = theme => ({
})

const mapStateToProps = state => ({ 
   
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

class EmployeeAttendancesList extends React.Component {
  
  render() {
    const { classes, attendances } = this.props;
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Day</TableCell>
                        <TableCell>Start at Time</TableCell>
                        <TableCell>In</TableCell>
                        <TableCell>Out</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {attendances.map(attendance => (
                        <TableRow key={attendance.id}>
                            <TableCell>{moment(attendance.created_at).format('MM/DD/YY')}</TableCell>
                            <TableCell>{moment(attendance.created_at).format('dddd')}</TableCell>
                            <TableCell>{moment(attendance.created_at).format('HH:mm')}</TableCell>
                            <TableCell>{moment(attendance.created_at).format('HH:mm')}</TableCell>
                            <TableCell>
                                {attendance.end ? 
                                    moment(attendance.created_at).format('dddd')
                                    :
                                    "Still open"
                                }
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
  }
}

EmployeeAttendancesList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(styles))(EmployeeAttendancesList);