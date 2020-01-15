import React from 'react';

import './FichaAgroecologica.css';

import foto from '../../../assets/images/TecnologiasSociais/Fichas/foto1.png';
import foto1 from '../../../assets/images/TecnologiasSociais/Fichas/fichaagroecologicap1.jpg';
import foto2 from '../../../assets/images/TecnologiasSociais/Fichas/fichaagroecologicap2.jpg';
import foto3 from '../../../assets/images/TecnologiasSociais/Fichas/fichadatalutaproducaop1.jpg';

const fichaAgroecologica =()=>{
    return(
        <div className="container-fluid Ficha">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <img src={foto} width="100%" alt={"Homens com um carirnho de mão"}></img>
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
            
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-2">
                    <img src={foto1} alt={"Ficha Agroecológica 1"} width="100%"></img>
                </div>
                <div className="col-md-2">
                    <img src={foto2} alt={"Ficha Agroecológica 2"} width="100%"></img>
                </div>
                <div className="col-md-2">
                    <img src={foto3} alt={"Ficha DataLuta Produção"} width="100%"></img>
                </div>
                <div className="col-md-3"></div>
            </div>

        </div>
    )
}

export default fichaAgroecologica;