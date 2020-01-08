import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './components/Home/Home';
import PoliticasNacionais from './components/PoliticasNacionais/PoliticasNacionais';
import Pnapo from './components/PoliticasNacionais/Pnapo/Pnapo';
import Planapo from './components/PoliticasNacionais/Planapo/Planapo';
import Plansan from './components/PoliticasNacionais/Plansan/Plansan';
import Paa from './components/PoliticasNacionais/Paa/Paa';
import Pnae from './components/PoliticasNacionais/Pnae/Pnae';

import AssentamentoMS from './components/AssentamentoMS/AssentamentoMS';
import HistoriaLutas from './components/AssentamentoMS/HistoriaLutas/HistoriaLutas';
import Cooperflora from './components/AssentamentoMS/CooperativaCooperflora/CooperativaCooperflora';
import GruposConsumo from './components/AssentamentoMS/GruposConsumo/GruposConsumo';
import Feiras from './components/AssentamentoMS/Feiras/Feiras';


// import Login from './containers/Login/Login';
import Cadastro from './containers/Cadastro/Cadastro';
// import Logout from './containers/Login/Logout';
// import ForgotPassword from './containers/Login/ForgotPassword';
import ListarUsuarios from './containers/ListarUsuarios/ListarUsuarios';
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
        <Route exact path="/pnapo" component={Pnapo} />
        <Route exact path="/planapo" component={Planapo} />
        <Route exact path="/plansan" component={Plansan} />
        <Route exact path="/paa" component={Paa} />
        <Route exact path="/pnae" component={Pnae} />

        <Route exact path="/assentamentomiltonsantos" component={AssentamentoMS} />
        <Route exact path="/mshistoriaelutas" component={HistoriaLutas} />
        <Route exact path="/mscooperflora" component={Cooperflora} />
        <Route exact path="/msgruposdeconsumo" component={GruposConsumo} />
        <Route exact path="/msfeiras" component={Feiras} />

        <Route exact path="/listarusuarios" component={ListarUsuarios} />
        
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