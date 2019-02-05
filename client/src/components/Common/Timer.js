import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const style = {
  timer: {
    display: 'block',
    right: '0',
    textAlign: 'center',
    color: '#333',
  }
}

const mapStateToProps = state => ({
  baseTime: state.employee.baseTime,
  startedAt: state.employee.startedAt,
  stoppedAt: state.employee.stoppedAt
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

class Timer extends React.Component {

  componentDidMount() {
    this.interval = setInterval(this.forceUpdate.bind(this), this.props.updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Helper function that takes store state
  // and returns the current elapsed time
  getElapsedTime(baseTime, startedAt, stoppedAt = new Date().getTime()) {
    if (!startedAt) {
      return 0;
    } else {
      return stoppedAt - startedAt + baseTime;
    }
  }

  render() {
    const { baseTime, startedAt, stoppedAt} = this.props;
    const elapsed = this.getElapsedTime(baseTime, startedAt, stoppedAt);
    return (
      
        <div style={style.timer}>
          {moment.utc(elapsed).format('HH:mm:ss')}
        </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
