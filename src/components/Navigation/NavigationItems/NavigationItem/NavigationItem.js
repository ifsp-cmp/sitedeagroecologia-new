import React from 'react';
import './NavigationItem.css'
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => ( 
    <div className='NavigationItem mt-1'>
        <li><NavLink
            to={props.link}
            exact 
            className={props.active ? 'Active' :  null }>{
                props.children}
            </NavLink>
        </li>
    </div>
);

export default navigationItem;

