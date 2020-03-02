import React from 'react';

import './DrawerToggle.css';

const drawerToggle = (props) => (

    <div className='DrawerToggle' onClick={props.clicked}>
        <div className="Tit">
            <p>AGROECOLOGIA <span className="TitBranco">EM REDE</span></p>
        </div>
        <div className='Menu'>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
);

export default drawerToggle;