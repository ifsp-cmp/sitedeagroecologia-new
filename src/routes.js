import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './components/Home/Home';
import PoliticasNacionais from './components/PoliticasNacionais/PoliticasNacionais';
import Teste from './components/Teste/Teste';
// import Login from './containers/Login/Login';
import Cadastro from './containers/Cadastro/Cadastro';
// import Logout from './containers/Login/Logout';
// import ForgotPassword from './containers/Login/ForgotPassword';
// // import ListarUsuarios from './containers/ListarUsuarios/ListarUsuarios';
// import Projeto from './components/Projeto/Projeto';
// import Cooperflora from './components/Cooperflora/Cooperflora';
// import Training from './containers/Training/Training';

class Routes extends Component{ 
  
  render(){
    let routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/politicasnacionais" component={PoliticasNacionais} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Redirect to='/' />
      </Switch>
    );

    // if(this.props.isAuthenticated){
    //   routes = (
    //     <Switch>
    //       <Route exact path="/" component={Home} />
    //       <Route exact path="/login" component={Login} />
    //       <Route exact path="/cadastro" component={Cadastro} />
    //       <Route exact path="/projeto" component={Projeto} />
    //       <Route exact path="/cooperflora" component={Cooperflora} />
    //       {/* <Route exact path="/listarusuarios" component={ListarUsuarios} /> */}
    //       <Route exact path="/logout" component={Logout} />
    //       <Route exact path="/training" component={Training} />
    //       <Redirect to='/' />
    //     </Switch>
    //   );
    // }

    return(
      <React.Fragment>
          {routes}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state =>{
  return{
    isAuthenticated: state.userData.userId !== null
  }
}   

export default connect(mapStateToProps)(Routes);