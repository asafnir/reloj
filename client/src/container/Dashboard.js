import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import {Button, Grid, CircularProgress} from '@material-ui/core';
import PropTypes from 'prop-types';
import LayoutBody from '../components/LayoutBody';
import withStyles from '@material-ui/core/styles/withStyles';
import AddEmployeeDialog from '../components/Admin/AddEmployeeDialog';
import { openAddEmployeeDialog, employees } from '../actions/adminActions';
import EmployeesList from '../components/Admin/EmployeesList';
import moment from 'moment';

const styles = theme => ({
  addButton: {
    float: 'right'
  }
})

const mapStateToProps = state => ({ 
  ...state,
  currentUser: state.auth.currentUser,
  employees: state.admin.employees
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

class Dashboard extends React.Component {
  
  openAddEmployeeDialog = () => {
    this.props.dispatch(openAddEmployeeDialog())
  }

  componentDidMount() {
    this.props.dispatch(employees());
  }


  render() {
    const { classes, currentUser, employees } = this.props;
    return (
      <React.Fragment>
        <LayoutBody margin marginBottom width="large">
          <Grid container>
            <Grid item xs={6}>
              <h1>Hello {currentUser.first_name}</h1>
              <h3>{ moment(Date.now()).format('MM/DD/YY LT') }</h3>
            </Grid>
            <Grid item xs={6}>
              <Button className={classes.addButton} variant="outlined" onClick={this.openAddEmployeeDialog}>
                Add Employees
              </Button>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              { 
                employees == null ?
                  <CircularProgress/>
                :
                  employees.length ? 
                    <EmployeesList employees={employees}/>
                  :
                  <div>
                    <h4>Look like you don't have any eymplyee yet, start adding them</h4>
                  </div>
              }
            </Grid>
          </Grid>
        </LayoutBody>
        
      <AddEmployeeDialog/>
    </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(styles))(Dashboard);