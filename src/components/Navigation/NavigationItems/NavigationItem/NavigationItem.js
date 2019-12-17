import React from 'react';
import './NavigationItem.css'
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <div className='NavigationItem'>
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

/* old

        <li><a 
            href={props.link}
            className={props.active ? 'Active' :  null }>{
                props.children}
            </a>
        </li>

*/

