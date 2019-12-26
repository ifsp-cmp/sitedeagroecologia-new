import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import { NavLink } from 'react-router-dom';

import arrow from '../../../assets/images/menu/arrow.svg';

import './NavigationItems.css'

const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem link='/' active>Início</NavigationItem>

        <li className='Menu1'>Políticas Nacionais New <img src={arrow} />
            <ul className='SubMenu1'>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
        </li>

        <NavigationItem className='Menu1' link='/politicasnacionais'>Políticas Nacionais <img src={arrow} /></NavigationItem>
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
        }
    </ul>
);

export default navigationItems;