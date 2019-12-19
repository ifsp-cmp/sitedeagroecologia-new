import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.css'

const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem link='/' active>Início</NavigationItem>
        <NavigationItem link='/politicasnacionais'>Políticas Nacionais</NavigationItem>
        <NavigationItem link='/assentamentoms'>Assentamento Milton Santos</NavigationItem>
        <NavigationItem link='/tecnologiassociais'>Tecnologias Sociais</NavigationItem>
        <NavigationItem link='/educacaopopular'>Educação Popular</NavigationItem>
        <NavigationItem link='/quemsomos'>Quem Somos</NavigationItem>

        { props.isAuthenticated ?
            <NavigationItem link='/training'>Formação</NavigationItem> : null
        }
        { !props.isAuthenticated ?
            <NavigationItem link='/cadastro'>Cadastro</NavigationItem> :  null
        }
        { !props.isAuthenticated 
            ? <NavigationItem link='/login'>Login</NavigationItem>
            : <NavigationItem link='/logout'>Logout</NavigationItem>
        }
    </ul>
);

export default navigationItems;