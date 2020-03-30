import React from 'react';
import './PaineldeFotos.css';

const paineldeFotos = (props) => {

    return (
        <div className="PainelDeFotos">
            <div className="foto">
                <img src={props.foto1} alt="Second slide" />
            </div>
            <div className="foto">
                <img src={props.foto2} alt="Second slide" />
            </div>
            <img src={props.foto3} alt="Second slide" />
            <img src={props.foto4} alt="Second slide" />
            <img src={props.foto5} alt="Second slide" />
            <img src={props.foto6} alt="Second slide" />
            <img src={props.foto7} alt="Second slide" />
            <img src={props.foto8} alt="Second slide" />
            <img src={props.foto9} alt="Second slide" />

        </div>
    )
}



export default paineldeFotos;