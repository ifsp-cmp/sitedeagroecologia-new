import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import { NavLink } from 'react-router-dom';
// import arrow from '../../../assets/images/menu/arrow.svg';
import './NavigationItems.css'

const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem link='/' active>Início</NavigationItem>
        <li className='Menu1'>
            <NavLink to="/politicasnacionais" exact>
                <p className="TituloMenu">Políticas Nacionais <span className="Seta"> &#9662; </span></p>
            </NavLink>
            <ul className='SubMenu1'>
                <NavigationItem link="/pnapo">PNAPO</NavigationItem>
                <NavigationItem link="/planapo">PLANAPO</NavigationItem>
                <NavigationItem link="/plansan">PLANSAN</NavigationItem>
                <NavigationItem link="/paa">PAA</NavigationItem>
                <NavigationItem link="/pnae">PNAE</NavigationItem>
            </ul>
        </li>
        <div className="DivMenuMobile" >&nbsp;</div>
        <li className='Menu1'>
            <NavLink to="/assentamentomiltonsantos" exact>
                <p className="TituloMenu">Assentamento Milton Santos <span className="Seta"> &#9662; </span> </p>
            </NavLink>
            <ul className='SubMenu1'>
                <NavigationItem link='/mshistoriaelutas' active>HISTÓRIA E LUTAS</NavigationItem>
                <NavigationItem link='/mscooperflora' active>COOPERATIVA COOPERFLORA</NavigationItem>
                <NavigationItem link='/msgruposdeconsumo' active>GRUPOS DE CONSUMO</NavigationItem>
                <NavigationItem link='/msfeiras' active>FEIRAS</NavigationItem>
            </ul>
        </li>
        <div className="DivMenuMobile" >&nbsp;</div>
        <li className='Menu1'>
            <NavLink to="/tecnologiassociais" exact>
                <p className="TituloMenu">Tecnologias Sociais <span className="Seta"> &#9662; </span> </p>
            </NavLink>
            <ul className='SubMenu1 SubMenuTech'>
                <NavigationItem link='/tshortaexperimental' active>HORTA EXPERIMENTAL</NavigationItem>
                <NavigationItem link='/tscompostagem' active>COMPOSTAGEM NO CAMPUS</NavigationItem>
                <NavigationItem link='/tsappEanDcnt' active>APP EAN/ DCNTs</NavigationItem>
                <NavigationItem link='/tsappagrocomunicacao' active>APP AGROCOMUNICAÇÃO</NavigationItem>
                <NavigationItem link='/tsdatalutaproducao' active>DATALUTA PRODUÇÃO</NavigationItem>
                <NavigationItem link='/tsirrigadorautomatizado' active>IRRIGADOR AUTOMATIZADO</NavigationItem>
                <NavigationItem link='/tsminhocarioautomatizado' active>MINHOCÁRIO AUTOMATIZADO</NavigationItem>
                <NavigationItem link='/tsmapeamentodaproducao' active>MAPEAMENTO DA PRODUÇÃO</NavigationItem>
                <NavigationItem link='/tsfichasagroecologicas' active>FICHAS AGROECOLÓGICAS</NavigationItem>
            </ul>
        </li>
        <div className="DivMenuMobile" >&nbsp;</div>
        <li className='Menu1'>
            <NavLink to="/educacaopopular" exact>
                <p className="TituloMenu">Educação Popular <span className="Seta"> &#9662; </span> </p>
            </NavLink>
            <ul className='SubMenu1'>
                <NavigationItem link='/epcursosfic' active>CURSOS FIC</NavigationItem>
                <NavigationItem link='/epmetodologiasparticipativas' active>METODOLOGIAS PARTICIPATIVAS</NavigationItem>
                <NavigationItem link='/epformacoes' active>FORMAÇÕES GRUPO DE CONSUMO</NavigationItem>
                <NavigationItem link='/epdiagnosticoruralparticipativo' active>DIAGNÓSTICO RURAL PARTICIPATIVO</NavigationItem>
                <NavigationItem link='/epvisitasevivencias' active>VISITAS E VIVÊNCIAS</NavigationItem>
                <NavigationItem link='/epfestivalagroecologia' active>FESTIVAL DE AGROECOLOGIA E ECOTURISMO</NavigationItem>
            </ul>
        </li>
        <div className="DivMenuMobile" >&nbsp;</div>
        <li className='Menu1'>
            <NavLink to="/quemsomos" exact>
                <p className="TituloMenu">Quem Somos <span className="Seta"> &#9662; </span> </p>
            </NavLink>
            <ul className='SubMenu1'>
                <NavigationItem link='/qsequipes'>EQUIPES</NavigationItem>
                <NavigationItem link='/qsparcerias'>PARCERIAS</NavigationItem>
            </ul>
        </li>
        {/* {!props.isAuthenticated ?
            <NavigationItem link='/cadastro'>Cadastro</NavigationItem> : null
        }
        {!props.isAuthenticated
            ? <NavigationItem link='/login'>Login</NavigationItem>
            : <NavigationItem link='/logout'>{props.isAuthenticated}Logout</NavigationItem>
        } */}
    </ul>
);

export default navigationItems;