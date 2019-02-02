import React, { Component } from 'react';
import Clock from 'react-clock';

class ClockLogo extends Component {
    state = {
        date: new Date(),
    }

    componentDidMount() {
        setInterval(
        () => this.setState({ date: new Date() }),
        1000
        );
    }
    
    componentWillUnmount() {
        this.setState({date: null})
    }

    render() {
        return (    
            <Clock
                size={40}
                className={this.props.className}
                value={this.state.date}
            />
        );
    }
}

export default ClockLogo;