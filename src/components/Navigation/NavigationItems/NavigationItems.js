import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import arrow from '../../../assets/images/menu/arrow.svg';

import './NavigationItems.css'

const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem link='/' active>Início</NavigationItem>

        <li className='Menu1'>
            <p className="TituloMenu">Políticas Nacionais <img src={arrow} alt={"Flecha"}/></p>
            <ul className='SubMenu1'>
                <NavigationItem link="/politicasnacionais"><li>INTRODUÇÃO</li></NavigationItem>
                <NavigationItem link="/pnapo"><li>PNAPO</li></NavigationItem>
                <NavigationItem link="/planapo"><li>PLANAPO</li></NavigationItem>
                <NavigationItem link="/plansan"><li>PLANSAN</li></NavigationItem>
                <NavigationItem link="/paa"><li>PAA</li></NavigationItem>
                <NavigationItem link="/pnae"><li>PNAE</li></NavigationItem>
            </ul>
        </li>

        <li className='Menu1'>
            <p className="TituloMenu">Assentamento Milton Santos <img src={arrow} alt={"Flecha"}/></p>
            <ul className='SubMenu1'>
                <NavigationItem link="/assentamentomiltonsantos"><li>INTRODUÇÃO</li></NavigationItem>
                <NavigationItem link='/mshistoriaelutas' active>HISTÓRIA E LUTAS</NavigationItem>
                <NavigationItem link='/mscooperflora' active>COOPERATIVA COOPERFLORA</NavigationItem>
                <NavigationItem link='/msgruposdeconsumo' active>GRUPOS DE CONSUMO</NavigationItem>
                <NavigationItem link='/msfeiras' active>FEIRAS</NavigationItem>

            </ul>
        </li>

        <li className='Menu1'>
            <p className="TituloMenu">Tecnologias Sociais <img src={arrow} alt={"Flecha"}/></p>
            <ul className='SubMenu1'>
                <NavigationItem link="/tecnologiassociais"><li>INTRODUÇÃO</li></NavigationItem>
                <NavigationItem link='/tsappagrocomunicacao' active>APP AGROCOMUNICAÇÃO</NavigationItem>
                <NavigationItem link='/tsdatalutaproducao' active>DATALUTA PRODUÇÃO</NavigationItem>
                <NavigationItem link='/tsirrigador' active>IRRIGADOR</NavigationItem>
                <NavigationItem link='/tsminhocarioautomatizado' active>MINHOCÁRIO AUTOMATIZADO</NavigationItem>
                <NavigationItem link='/rsmapeamentodaproducao' active>MAPEAMENTO DA PRODUÇÃO</NavigationItem>
                <NavigationItem link='/tsfichasagroecologicas' active>FICHAS AGROECOLÓGICAS</NavigationItem>
            </ul>
        </li>

        <li className='Menu1'>
            <p className="TituloMenu">Educação Popular <img src={arrow} alt={"Flecha"} /></p>
            <ul className='SubMenu1'>
                <NavigationItem link="/educacaopopular"><li>INTRODUÇÃO</li></NavigationItem>
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