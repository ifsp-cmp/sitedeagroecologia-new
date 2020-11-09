import React from 'react';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';

import './MapeamentoProducao.css';

import foto1 from '../../../assets/images/TecnologiasSociais/Mapeamento/foto1.png';
import foto2 from '../../../assets/images/TecnologiasSociais/Mapeamento/foto_map.png';
import SaibaMais from '../../SaibaMais/SaibaMais';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';

const mapeamentoProducao = () => {
    const conteudo = <ul className="card-text">
        <li><a href="https://drive.google.com/drive/folders/1yloFqIGkuBEku74NoKqhGND-_A4q3MWK" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGoogleDrive} size="2x" title="Análise censitária e mapeamento da produção agroecológica do assentamento Milton Santos" color="#1A2D00"/></a></li>
    </ul>;

    return (
        <div>
            <TopoDaPagina menu="Tecnologias Sociais" submenu="Mapeamento de Produção"></TopoDaPagina>
            <div className="container-fluid Mapeamento">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto1} width="100%" alt={"Homens com um carirnho de mão"}></img>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 texto1">
                        <p>O projeto consistiu no mapeamento da produção agroecológica e realização de um micro-censo demográfico do Assentamento Milton Santos. O mapeamento se deu a partir do uso de softwares livres: Phildigit (programa de vetorização de mapas), Philcarto (programa de cartografia temática), Libre Office e Inkscape (programa editor de gráficos vetoriais) e como base teórica nos princípios da Cartografia Geográfica Crítica, na qual o mapa é visto como capaz de transmitir uma visão de mundo de seu autor e é, por excelência, parte do discurso geográfico e instrumento da análise geográfica.</p>
                        <p>A ação integra o abastecimento dos dados de produção que serão destinados aos aplicativos Agrocomunicação e DATALUTA Produção num segundo momento. O projeto foi desenvolvido pelo estudante Nathan Andrade Silva, aluno do curso de Informática Integrado ao Ensino Médio e coordenado pelo professor Herivelto Fernandes Rocha no âmbito dos trabalhos que integraram o projeto da Chamada 21/2016 do CNPq.</p>
                        <img src={foto2} width="100%" alt={"Mapa de produção"}/>
                    </div>
                    <div className="col-md-2"></div>
                </div>

                <SaibaMais conteudo={conteudo}/>
            </div>
        </div>
    )
}

export default mapeamentoProducao;