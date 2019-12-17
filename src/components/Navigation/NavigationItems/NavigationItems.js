import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.css'

const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem link='/' active>Home</NavigationItem>
        <NavigationItem link='/cooperflora'>Cooperflora</NavigationItem>
        {/* <NavigationItem link='/projeto'>O projeto</NavigationItem> */}
        {/* { props.isAuthenticated ?
            <NavigationItem link='/listarusuarios'>Listar</NavigationItem> : null
        } */}
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