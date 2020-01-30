import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import './SideDrawer.css';

const sideDrawer = (props) => {
    let attachedClasses = 'SideDrawer Close';
    if(props.open){
        attachedClasses = 'SideDrawer Open';
    }
    return(
        <div>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses} onClick={props.closed}>
                <Logo classNema='Logo' height='8%'/>
                <br />
                <br />
                <br />
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth}/>
                </nav>
            </div>
        </div>
    );
}

export default sideDrawer;