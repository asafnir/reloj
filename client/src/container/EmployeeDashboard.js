import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Timer from '../components/Common/Timer';
import PropTypes from 'prop-types';
import LayoutBody from '../components/LayoutBody';
import PunchButton from '../components/Employee/PunchButton';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import EmployeeAttendancesList from '../components/Employee/EmployeeAttendanceList';
import { startClock, stopClock } from '../actions/employeeActions';
import moment from 'moment';
import { Button } from '@material-ui/core';

const styles = theme => ({
  addButton: {
    float: 'right'
  },
  startTime: {
    display: 'block',
    right: '0',
    textAlign: 'center',
    color: '#333',
  }

})

const mapStateToProps = state => ({ 
  ...state,
  currentUser: state.auth.currentUser,
  attendance: state.employee.attendance
});

class EmployeesDashboard extends React.Component {
    state = {
        start: false
    }

    onClick = () => {
        if (this.state.start){
            this.props.stopClock({employee_id: this.props.currentUser.id});
        } else {
            this.props.startClock({employee_id: this.props.currentUser.id});
        }
        this.setState(prevState => ({
            start: !prevState.start
        }));
    }

    render() {
        const { classes, currentUser, attendance } = this.props;
        const { start } = this.state;
        
        return (
        <React.Fragment>
            <LayoutBody margin marginBottom width="large">
                <Grid container justify="flex-end">
                    <Grid item>
                        <Button color="primary" component={Link} to={{
                                            pathname: '/attendance',
                                            employee: currentUser
                                        }} > Attendances History -> </Button>
                    </Grid>
                </Grid>

                <Grid container justify="center" alignItems="center" spacing={16}>
                    <Grid item>
                    <h1 align="center">Hello {currentUser.first_name}</h1>
                    <h2>{ moment(Date.now()).format('MM/DD/YY LT') }</h2>
                    </Grid>
                </Grid>
                { start &&
                    <Grid style={{marginBottom: 20}} container spacing={32} justify="center" alignItems="center">
                        <Grid item>
                            <span className={classes.startTime}>{ moment(Date.now()).format('MM/DD/YY LT') }</span>
                            <span>Start Time</span>
                        </Grid>
                        <Grid item>
                            <Timer startedAt={Date.now}/>
                            <span>Duration</span>
                        </Grid>
                    </Grid>
                }
                <Grid container justify="center" alignItems="center">
                    <Grid item>
                        <PunchButton start={start} onClick={() => this.onClick}/>
                    </Grid>
                </Grid>
                { attendance &&
                    <Grid container style={{marginBottom: 20}} justify="center" alignItems="center">
                        <EmployeeAttendancesList attendances={[attendance]}/>
                    </Grid>
                }
            
            </LayoutBody>
        </React.Fragment>
    );
  }
}

EmployeesDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(connect(mapStateToProps, {startClock, stopClock}), withStyles(styles))(EmployeesDashboard);