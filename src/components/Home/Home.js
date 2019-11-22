import React from 'react';
import './Home.css';
import foto from './foto1.jpg';

const home = () => {
    return(
        <div className='Home'>
           <p>AGROECOLOGIA EM REDE</p>
           <img id="img1" src={foto}></img>
        </div>
    );
}

export default home;

