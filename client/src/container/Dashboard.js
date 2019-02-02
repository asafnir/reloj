import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import LayoutBody from '../components/LayoutBody';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
})

const mapStateToProps = state => ({ 
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch => ({
});

class Dashboard extends React.Component {
  
  render() {
    const { classes, currentUser } = this.props;
    console.log(this.props)
    return (
      <LayoutBody margin marginBottom width="large">
        <h1>Hello {currentUser.first_name}</h1>
        <h4>Look like you don't have any eymplyee yet, start adding them</h4>
        <Button variant="outlined">
          Add Employees
        </Button>
      </LayoutBody>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps), withStyles(styles))(Dashboard);