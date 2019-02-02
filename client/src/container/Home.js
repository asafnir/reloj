import React from 'react';
import { connect } from 'react-redux';
import ProductHero from '../components/Home/ProductHero';
import ProductHowItWorks from '../components/Home/ProductHowItWorks';

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token
});

class Home extends React.Component {
  
  render() {
    return (
      <React.Fragment>
        <ProductHero />
        <ProductHowItWorks />
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Home);