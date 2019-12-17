import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../../Navigation/SideDrawer/DrawerToggle/DrawerToggle';

import './Toolbar.css';


const toolbar = (props) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <Logo height='120%' />
        <nav className="DesktopOnly">
            <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
    </header>

);

export default toolbar;