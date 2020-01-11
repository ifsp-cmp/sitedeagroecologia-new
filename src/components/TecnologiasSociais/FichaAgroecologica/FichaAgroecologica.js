import React from 'react';

import './FichaAgroecologica.css';

const fichaAgroecologica =()=>{
    return(
        <div className="container-fluid Ficha">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 texto1">
                    <p>O projeto “Fichas Agroecológicas: Tecnologias Apropriadas para a Produção Orgânica” visa disponibilizar informação técnica sobre tecnologias apropriadas aos sistemas orgânicos de produção, de forma resumida, em linguagem simples e acessível aos produtores rurais.</p>
                    <p>Como princípios básicos para a aprovação de uma ficha estão o de que a tecnologia divulgada esteja de acordo com os princípios e normas estabelecidos pela legislação brasileira da produção orgânica e que seja resultado de processos gerados ou validados por pesquisas científicas, ações de construção participativa do conhecimento ou de experiências práticas dos produtores.</p>
                </div>
                <div className="col-md-2"></div>
            </div>    
        </div>
    )
}

export default fichaAgroecologica;