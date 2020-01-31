import React from 'react';

import './ParceriasLogos.css';

import icone from '../../../assets/images/QuemSomos/Parcerias/icone_mais.svg';

const parceriasLogos = (props) =>{
    return(
        <div className="col-md-4">
            <div className="mb-4 container">
                <img className="image" width="100%" src={props.foto} alt={""}></img>
                <div className="middle">
                    <a href={props.link}><div className="text">SAIBA MAIS <img src={icone} alt={""}></img></div></a>
                </div>
            </div>
        </div>
    )
}

export default parceriasLogos;