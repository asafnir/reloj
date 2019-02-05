import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import EmployeeAttendanceList from './EmployeeAttendanceList';
import { Grid } from '@material-ui/core';

const styles = theme => ({
    mTop: {
        marginTop: 30,
    }
})

const mapStateToProps = state => ({ 
    attendances: state.employee.attendances
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

class Reports extends React.Component {
    

    render() {
        const { classes, attendances } = this.props;
        console.log(attendances)
        return (
            <Grid className={classes.mTop} container justify="center" alignItems="center">
                <Grid item>
                    <EmployeeAttendanceList attendances={attendances}/>
                </Grid>
            </Grid>
        );
    }
}

Reports.defaultProps = {
    attendances: []
}

Reports.propTypes = {
  classes: PropTypes.object.isRequired,
  attendances: PropTypes.array.isRequired
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(styles))(Reports);