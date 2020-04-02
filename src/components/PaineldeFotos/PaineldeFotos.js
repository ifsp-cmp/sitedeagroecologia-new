import React from 'react';
import './PaineldeFotos.css';

const paineldeFotos = (props) => {

    return (
        <div className="PainelDeFotos">
            <div className="foto">
                <img src={props.foto1} alt="Foto 1" />
            </div>
            <div className="foto">
                <img src={props.foto2} alt="Foto 2" />
            </div>
            <div className="foto">
                <img src={props.foto3} alt="Foto x" />
            </div>
            <div className="foto">
                <img src={props.foto4} alt="Foto x" />
            </div>
            <div className="foto">
                <img src={props.foto5} alt="Foto x" />
            </div>
            <div className="foto">
                <img src={props.foto6} alt="Foto x" />
            </div>
            <div className="foto">
                <img src={props.foto7} alt="Foto x" />
            </div>
            <div className="foto">
                <img src={props.foto8} alt="Foto x" />
            </div>
            <div className="foto">
                <img src={props.foto9} alt="Foto x" />
            </div>

        </div>
    )
}



export default paineldeFotos;