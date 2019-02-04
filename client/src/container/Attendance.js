import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import LayoutBody from '../components/LayoutBody';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import EmployeeAttendancesList from '../components/Employee/EmployeeAttendanceList';
import { getAttendances } from '../actions/employeeActions';

const styles = theme => ({
})

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
    const { classes, currentUser, attendances } = this.props;
    const { employee } = this.state;
    console.log(this.props)
    return (
      <React.Fragment>
        <LayoutBody margin marginBottom width="large">
            <h1>{employee.first_name} {employee.last_name} TimeCard</h1>
            {attendances && <EmployeeAttendancesList attendances={attendances}/>}
        </LayoutBody>
      </React.Fragment>
    );
  }
}

Attendance.propTypes = {
  classes: PropTypes.object.isRequired,
  employee: PropTypes.object.isRequired,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(styles))(Attendance);