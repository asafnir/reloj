import React from 'react';
import { connect } from 'react-redux';
import LayoutBody from '../components/LayoutBody';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import EmployeeAttendancesList from '../components/Employee/EmployeeAttendanceList';
import { getAttendances } from '../actions/employeeActions';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({ 
  ...state,
  currentUser: state.auth.currentUser,
  attendances: state.employee.attendances
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

class Attendance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: props.location.employee   
        }
    }

    componentDidMount() {
        let employee_id = this.state.employee ? this.state.employee.id : this.props.history.push('/');
        this.props.dispatch(getAttendances(employee_id));
    }


  render() {
    const { attendances } = this.props;
    const { employee } = this.state;
    return (
      <React.Fragment>
        <LayoutBody margin marginBottom width="large">
            <Button component={Link} to='/'>Back</Button>
            <h1>{employee.first_name} {employee.last_name} TimeCard</h1>
            {attendances && <EmployeeAttendancesList attendances={attendances}/>}
        </LayoutBody>
      </React.Fragment>
    );
  }
}

Attendance.propTypes = {
  employee: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Attendance);