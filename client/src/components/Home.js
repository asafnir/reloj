import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token
});

class Home extends React.Component {
  
  render() {
    return (
      <div className="home-page">
        <div className="container page">
          <div className="row">
            
          </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);