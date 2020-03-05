import React from 'react';

import './DrawerToggle.css';
import FechaMenu from '../../../../assets/images/menu/fechamenu.svg';

const drawerToggle = (props) => {
    let html = (
        <div className='Menu'>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
    if(props.sideDrawerOpen){
        html = (
            <div className='CloseMenu'>
                <img src={FechaMenu} alt='Simbolo para fechar o menu.' />
            </div>
        );
    }
    // console.log(props.clicked);
    console.log("Atual",props.atual);
    return(
    <div className='DrawerToggle' onClick={props.clicked}>
        <div className="Tit">
            <p>AGROECOLOGIA <span className="TitBranco">EM REDE</span></p>
        </div>
        {html}
    </div>
    );
};

export default drawerToggle;