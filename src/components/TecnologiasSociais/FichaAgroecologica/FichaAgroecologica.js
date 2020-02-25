import React from 'react';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';
import './FichaAgroecologica.css';

import foto1 from '../../../assets/images/TecnologiasSociais/Fichas/foto1.png';
import foto2 from '../../../assets/images/TecnologiasSociais/Fichas/foto2.png';

const fichaAgroecologica =()=>{
    return(
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
                
                <div className="row" style={{marginTop: '30px',marginBottom: '40px'}}>
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto2} width="100%" alt={"Fichas Agroecológicas"}></img>
                    </div>
                    <div className="col-md-2"></div>
                </div>

            </div>
        </div>
    )
}

export default fichaAgroecologica;