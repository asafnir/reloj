import React, { Component } from 'react';
import { startClock, stopClock } from '../../actions/employeeActions';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class ActionButton extends Component {
    state = { start: false };
  
    startClock = employee => event => {
      this.setState({ start: true });
      this.props.startClock({employee_id: this.props.employee.id});
    };

    stopClock = employee => event => {
        this.setState({ start: false });
        this.props.stopClock({employee_id: this.props.employee.id});
    };
  
    render() {
        const { employee } = this.props;
        const { start } = this.state;
        return (
            <React.Fragment>
                { start ?
                    <Button style={{marginRight: 10}} variant="contained" color="secondary" onClick={this.stopClock(employee)}>
                        Stop Clock
                    </Button>
                    :
                    <Button style={{marginRight: 10}} variant="contained" color="primary" onClick={this.startClock(employee)}>
                        Start Clock
                    </Button>
                }
            </React.Fragment>
        )
    }
}

export default connect(null, {startClock, stopClock})(ActionButton);