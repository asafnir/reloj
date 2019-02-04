import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class ActionButton extends Component {
    state = { start: false };
  
    startClock = employee => event => {
      this.setState({ start: true });
    };

    stopClock = employee => event => {
        this.setState({ start: false });
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

export default ActionButton;