import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Navigation/Footer/Footer';

import './Layout.css';

class Layout extends Component{

  state ={
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    const oldState = {
		  ...this.state
	  }
    this.setState({showSideDrawer: !oldState.showSideDrawer});
  }

  render(){
    // console.log("[Layout component] ", this.props.isAuthenticated);
    // console.log("Env. Variable", process.env.NODE_ENV);
    return (
      <div className="Layout">
        <Toolbar
          isAuth={this.props.isAuthenticated} 
          clicked={this.sideDrawerClosedHandler}
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <SideDrawer 
          isAuth={this.props.isAuthenticated} 
          closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}
        />
        <main className="Content">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.userData.userId !== null 
  }
}

export default connect(mapStateToProps)(Layout);

