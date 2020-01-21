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

import TecnologiaSociais from './components/TecnologiasSociais/TecnologiasSociais';
import AppAgroecomunicao from './components/TecnologiasSociais/AppAgroecomunicacao/AppAgroecomunicacao';
import datalutaProducao from './components/TecnologiasSociais/DatalutaProducao/DatalutaProducao';
import irrigadorAutomatizado from './components/TecnologiasSociais/IrrigadorAutomatizado/IrrigadorAutomatizado';
import minhocarioAutomatizado from './components/TecnologiasSociais/MinhocarioAutomatizado/MinhocarioAutomatizado';
import mapeamentoProducao from './components/TecnologiasSociais/MapeamentoProducao/MapeamentoProducao';
import fichaAgroecologica from './components/TecnologiasSociais/FichaAgroecologica/FichaAgroecologica';

import EducacaoPopular from './components/EducacaoPopular/EducacaoPopular.js';
import CursosFic from './components/EducacaoPopular/CursosFic/CursosFic';
import Formacoes from './components/EducacaoPopular/Formacoes/Formacoes';
import DiagnosticoRural from './components/EducacaoPopular/DiagnosticoRural/DiagnosticoRural';
import Avaliacao from './components/EducacaoPopular/Avaliacao/Avaliacao';
import Visitas from './components/EducacaoPopular/Visitas/Visitas';

import QuemSomos from './components/QuemSomos/QuemSomos';
import Equipes from './components/QuemSomos/Equipes/Equipes';
import IndicadoresAcademicos from './components/QuemSomos/IndicadoresAcademicos/IndicadoresAcademicos';
import Parcerias from './components/QuemSomos/Parcerias/Parcerias';

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

        <Route exact path="/tecnologiassociais" component={TecnologiaSociais} />
        <Route exact path="/tsappagrocomunicacao" component={AppAgroecomunicao} />
        <Route exact path="/tsdatalutaproducao" component={datalutaProducao} />
        <Route exact path="/tsirrigadorautomatizado" component={irrigadorAutomatizado} />
        <Route exact path="/tsminhocarioautomatizado" component={minhocarioAutomatizado} />
        <Route exact path="/tsmapeamentodaproducao" component={mapeamentoProducao} />
        <Route exact path="/tsfichasagroecologicas" component={fichaAgroecologica} />

        <Route exact path="/educacaopopular" component={EducacaoPopular} />
        <Route exact path="/epcursosfic" component={CursosFic} />
        <Route exact path="/epformacoes" component={Formacoes} />
        <Route exact path="/epdiagnosticoruralparticipativo" component={DiagnosticoRural} />
        <Route exact path="/epavaliacaoevalidacao" component={Avaliacao} />
        <Route exact path="/epvisitasevivencias" component={Visitas} />
        
        <Route exact path="/quemsomos" component={QuemSomos} />
        <Route exact path="/qsequipes" component={Equipes} />
        <Route exact path="/qsindicadoresacademicos" component={IndicadoresAcademicos} />
        <Route exact path="/qsparcerias" component={Parcerias} />

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