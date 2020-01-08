import React, { PureComponent } from 'react';
import Layout from './containers/Layout/Layout';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Routes from './routes';

import './App.css';

// import * as actions from './store/actions/index';

class App extends PureComponent {

  // componentDidMount() {
  //   this.props.onVerifyLogin();
  // }

  render() {
    return (
      <Layout>
        <Routes />
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // onVerifyLogin: () => dispatch(actions.verifyLogin())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
// export default connect(null, mapDispatchToProps)(App);