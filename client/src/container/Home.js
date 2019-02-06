import React from 'react';
import { connect } from 'react-redux';
import ProductHero from '../components/Home/ProductHero';
import ProductHowItWorks from '../components/Home/ProductHowItWorks';
import EmployeeSection from '../components/Home/EmployeeSection';

const mapStateToProps = state => ({
  ...state.home,
  token: state.common.token
});

class Home extends React.Component {
  
  render() {
    return (
      <React.Fragment>
        <ProductHero />
        <EmployeeSection/>
        <ProductHowItWorks />
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Home);