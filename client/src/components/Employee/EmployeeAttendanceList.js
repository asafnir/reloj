import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TableRow, Paper, TableHead, TableCell, TableBody, Table } from '@material-ui/core';
import moment from 'moment';

const mapDispatchToProps = dispatch => ({
  dispatch,
});

class EmployeeAttendancesList extends React.Component {
    
    getDiff = (attendance) => {
        const start = moment(attendance.created_at);
        const end = moment(attendance.end);
        return end.diff(start, 'minutes')
    }


    render() {
        const { attendances } = this.props;

        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Day</TableCell>
                            <TableCell>Time</TableCell>
                            <TableCell>In</TableCell>
                            <TableCell>Out</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {attendances && attendances.map(attendance => (
                            <TableRow key={attendance.id}>
                                <TableCell>{moment(attendance.created_at).format('MM/DD/YY')}</TableCell>
                                <TableCell>{moment(attendance.created_at).format('dddd')}</TableCell>
                                <TableCell>
                                    { 
                                        attendance.end && this.getDiff(attendance)
                                    }
                                </TableCell>
                                <TableCell>{moment(attendance.created_at).format('HH:mm')}</TableCell>
                                <TableCell>
                                    {attendance.end ? 
                                        moment(attendance.end).format('HH:mm')
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

EmployeeAttendancesList.defaultProps = {
    attendances: []
}

EmployeeAttendancesList.propTypes = {
  attendances: PropTypes.array.isRequired
};

export default connect(null, mapDispatchToProps)(EmployeeAttendancesList);