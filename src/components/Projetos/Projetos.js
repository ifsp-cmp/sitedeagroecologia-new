import React from 'react';

import './Projetos.css';

import foto3 from '../../assets/images/TecnologiasSociais/icone.png';
import { NavLink } from 'react-router-dom';

const projetos = (props) =>{
    return (
        <div className="col-md-4">
            <NavLink
                to={props.link}
                style={{textDecoration: 'none'}}
            > 
                <div className="card mb-4 shadow-sm">
                    <img className="card-img-top" src={props.foto} alt={props.alt}></img>
                    <div className="card-body texto">
                        <p className="card-text"><img src={foto3} alt={"Icone_Casa"}></img> {props.titulo} </p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default projetos;