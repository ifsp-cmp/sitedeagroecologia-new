import React from 'react';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';
import './MinhocarioAutomatizado.css';

// import video from '../../../assets/images/TecnologiasSociais/Minhocario/MINHOCARIO.mp4';
import foto1 from '../../../assets/images/TecnologiasSociais/Minhocario/foto1.png';

const minhocarioAutomatizado =()=>{
    return(
        <div>
            <TopoDaPagina menu="Tecnologias Sociais" submenu="Minhocário Automatizado"></TopoDaPagina>
            <div className="container-fluid Minhocario">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto1} width="100%" alt={"Homem com mão na terra"}></img>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 texto1">
                        <p>Um dos insumos necessários para os cultivos é a fertilização por meio de adubos. Os agricultores compram compostos de fezes de animais (esterco produzido à base de fezes de aves, no caso) para este processo e queixam-se do preço e da logística para a compra, além de o esterco adotado ser um possível vetor de agentes patogênicos ao homem se não compostado de maneira adequada. Diante deste cenário de inviabilidade financeira e de riscos à saúde, os assentados estão partindo para um modo mais sustentável para fertilização do solo, a compostagem orgânica.</p>
                        <p>Em decorrência destes fatores, surgiu a ideia de criar um dispositivo integrado que monitore estas condições para fins de controle e otimização do processo e do tempo necessário para a produção dos húmus. O monitoramento possibilitará que o próprio sistema atue quando necessário, autorregulando-se e fazendo com que os parâmetros fiquem dentro da margem ótima de funcionamento.</p>
                        <p>A partir disso, bolsistas da área de Eletrônica iniciaram um desenho da intervenção com foco em um processo de compostagem que otimize tempo, eficácia e praticidade na aeração dos compostos orgânicos responsáveis pelas variáveis a fim de criar um circuito para determinar os níveis críticos dos parâmetros de temperatura e umidade de forma prática e de fácil compreensão e manuseio pelo público alvo.</p>
                        <p>O projeto está em desenvolvimento pelos estudantes do curso de Eletrônica Integrado ao Ensino Médio Samuel Vicente de Freitas, Franciely Prado e Vinícius Marchesi com a orientação técnica do professor Maicon Vaz Moreira e co-orientação dos professores Márcio André de Miranda e Erika Batista.</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="card-body planos">CONHEÇA O MINHOCÁRIO AUTOMATIZADO</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="Video">
                            <iframe width="560" height="315" 
                            title={"VídeoMinhocárioAutomatizado"}
                            src="https://www.youtube.com/embed/SgcJpGP3aYA" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen 
                            className="Video"></iframe>  
                        </div> 
                    </div>
                    <div className="col-md-2"></div>
                </div>

            </div>
        </div>
    )
}

export default minhocarioAutomatizado;