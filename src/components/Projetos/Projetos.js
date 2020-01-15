import React from 'react';

import './Projetos.css';

import foto3 from '../../assets/images/TecnologiasSociais/icone.png';
const projetos = (props) =>{
    return (
        <div className="col-md">
            <div className="card texto bloco4">
                <img className="card-img-top" src={props.foto} height="140px" alt={""}></img>
                <div className="card-image-overplay">
                    <p className="card-text"><img src={foto3} alt={"Icone_Casa"}></img><a href={props.link} className="tituloA">{props.titulo}</a></p>
                </div>
            </div>
        </div>
    )
}

export default projetos;