import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import { NavLink } from 'react-router-dom';

import arrow from '../../../assets/images/menu/arrow.svg';

import './NavigationItems.css'

const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem link='/' active>Início</NavigationItem>

        <li className='Menu1'>
            <p className="TituloMenu">Políticas Nacionais <img src={arrow} /></p>
            <ul className='SubMenu1'>
                <NavigationItem link="/pnapo">PNAPO</NavigationItem>
                <NavigationItem link="/planapo">PLANAPO</NavigationItem>
                <NavigationItem link="/plansan">PLANSAN</NavigationItem>
                <NavigationItem link="/paa">PAA</NavigationItem>
                <NavigationItem link="/pnae">PNAE</NavigationItem>
            </ul>
        </li>

        <li className='Menu1'>
            <p className="TituloMenu">Assentamento Milton Santos <img src={arrow} /></p>
            <ul className='SubMenu1'>
                <NavigationItem link='/mslutassociais' active>Lutas Sociais</NavigationItem>
                <NavigationItem link='/mscooperflora' active>Cooperativa Cooperflora</NavigationItem>
                <NavigationItem link='/msgruposdeconsumo' active>Grupos de Consumo</NavigationItem>
                <NavigationItem link='/msfeiras' active>Feiras</NavigationItem>

            </ul>
        </li>

        <li className='Menu1'>
            <p className="TituloMenu">Tecnologias Sociais <img src={arrow} /></p>
            <ul className='SubMenu1'>
                <NavigationItem link='/tsagrocomunicacao' active>Agrocomunicação</NavigationItem>
                <NavigationItem link='/tsdatalutaproducao' active>Dataluta Produção</NavigationItem>
                <NavigationItem link='/tsirrigador' active>Irrigador</NavigationItem>
                <NavigationItem link='/tsminhocarioautomatizado' active>Minhocário Automatizado</NavigationItem>
                <NavigationItem link='/rsmapeamentodaproducao' active>Mapeamento da Produção</NavigationItem>
                <NavigationItem link='/tsfichasagroecologicas' active>Fichas Agroecológicas</NavigationItem>
            </ul>
        </li>

        <li className='Menu1'>
            <p className="TituloMenu">Educação Popular <img src={arrow} /></p>
            <ul className='SubMenu1'>
                <NavigationItem link='/epcursosfic' active>Cursos Fic</NavigationItem>
                <NavigationItem link='/epformacoes' active>Formações</NavigationItem>
                <NavigationItem link='/epdiagnosticoruralparticipativo' active>Diagnóstico Rural Participativo</NavigationItem>
                <NavigationItem link='/avaliacoesevalidacoesparticipativas' active>Avaliações e Validações Participativas</NavigationItem>
                <NavigationItem link='/epvisitasevivencias' active>Visitas e Vivências</NavigationItem>
            </ul>
        </li>

        <NavigationItem link='/quemsomos'>Quem Somos</NavigationItem>


        {/* <NavigationItem className='Menu1' link='/politicasnacionais'>Políticas Nacionais <img src={arrow} /></NavigationItem>
        <NavigationItem link='/assentamentoms'>Assentamento Milton Santos</NavigationItem>
        <NavigationItem link='/tecnologiassociais'>Tecnologias Sociais</NavigationItem>
        <NavigationItem link='/educacaopopular'>Educação Popular</NavigationItem>
        <NavigationItem link='/quemsomos'>Quem Somos</NavigationItem>

        {props.isAuthenticated ?
            <NavigationItem link='/training'>Formação</NavigationItem> : null
        }
        {!props.isAuthenticated ?
            <NavigationItem link='/cadastro'>Cadastro</NavigationItem> : null
        }
        {!props.isAuthenticated
            ? <NavigationItem link='/login'>Login</NavigationItem>
            : <NavigationItem link='/logout'>Logout</NavigationItem>
        } */}
    </ul>
);

export default navigationItems;