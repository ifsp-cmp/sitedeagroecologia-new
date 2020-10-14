import React from 'react';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';
import './FichaAgroecologica.css';

import foto1 from '../../../assets/images/TecnologiasSociais/Fichas/foto1.png';
import foto2 from '../../../assets/images/TecnologiasSociais/Fichas/foto2.png';
import SaibaMais from '../../SaibaMais/SaibaMais';

const fichaAgroecologica = () => {
    const conteudo = <ul className="card-text">
        <li><a href="https://drive.google.com/file/d/1CBqYvd8U8Qz_YyOESIj7F46HyrMW-7Vl/view?usp=sharing" target="_blank" rel="noopener noreferrer">Ficha Agroecológica - App Agrocomunicação</a></li>
        <li><a href="https://drive.google.com/file/d/1f10ehIt0Y9CKrhkF-Y-2YLKU92QbrgK3/view?usp=sharing" target="_blank" rel="noopener noreferrer">Ficha Agroecológica - DataLuta Produção</a></li>
    </ul>

    return (
        <div>
            <TopoDaPagina menu="Tecnologias Sociais" submenu="Fichas Agroecológicas"></TopoDaPagina>
            <div className="container-fluid Ficha">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto1} width="100%" alt={"Fichas Agroecológicas caindo"}></img>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 texto1">
                        <p>O projeto “Fichas Agroecológicas: Tecnologias Apropriadas para a Produção Orgânica” visa disponibilizar informação técnica sobre tecnologias apropriadas aos sistemas orgânicos de produção, de forma resumida, em linguagem simples e acessível aos produtores rurais.</p>
                        <p>Como princípios básicos para a aprovação de uma ficha estão o de que a tecnologia divulgada esteja de acordo com os princípios e normas estabelecidos pela legislação brasileira da produção orgânica e que seja resultado de processos gerados ou validados por pesquisas científicas, ações de construção participativa do conhecimento ou de experiências práticas dos produtores.</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>

                <div className="row" style={{ marginTop: '30px', marginBottom: '40px' }}>
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto2} width="100%" alt={"Fichas Agroecológicas"}></img>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <SaibaMais conteudo={conteudo} />
            </div>
        </div>
    )
}

export default fichaAgroecologica;