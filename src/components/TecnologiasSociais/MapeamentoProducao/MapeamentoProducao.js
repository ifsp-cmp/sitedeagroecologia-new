import React from 'react';

import './MapeamentoProducao.css';

const mapeamentoProducao=()=>{
    return(
        <div className="container-fluid Mapeamento">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 texto1">
                   <p>O projeto consiste no mapeamento da produção agroecológica e realização de um micro-censo demográfico do assentamento rural Milton Santos. O mapeamento se deu a partir do uso de softwares livres: Phildigit (programa de vetorização de mapas), Philcarto (programa de cartografia temática), Libre Office e Inkscape (programa editor de gráficos vetoriais) e como base teórica os princípios da Cartografia Geográfica Crítica, na qual o mapa é visto como capaz de transmitir uma visão de mundo de seu autor e é, por excelência, parte do discurso geográfico e instrumento da análise geográfica.</p>
                   <p>A ação integra o abastecimento dos dados de produção que serão destinados aos aplicativos Agrocomunicação e DATALUTA Produção num segundo momento. Atualmente, o projeto é desenvolvido pelo estudante Nathan Andrade Silva, aluno do curso de Informática Integrado ao Ensino Médio e pelo professor Herivelto Fernandes Rocha.</p>
                </div>
                <div className="col-md-2"></div>
            </div>   
        </div>
    )
}

export default mapeamentoProducao;