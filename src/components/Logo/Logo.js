import React from 'react';
import { NavLink } from 'react-router-dom';

import './Logo.css';
import logoNeaes from '../../assets/images/logoneaes.png';

const logo = (props) => (
    <div className='Logo' style={{height :props.height}}>
         <NavLink  to='/home' exact>
            <img src={logoNeaes} alt='Logo do Neaes'/>
        </NavLink>
    </div>
); 
export default logo;