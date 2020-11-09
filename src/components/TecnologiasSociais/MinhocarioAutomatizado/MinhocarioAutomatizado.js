import React from 'react';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';
import './MinhocarioAutomatizado.css';
import { Link } from 'react-router-dom';

// import video from '../../../assets/images/TecnologiasSociais/Minhocario/MINHOCARIO.mp4';
import foto1 from '../../../assets/images/TecnologiasSociais/Minhocario/foto1.png';

const minhocarioAutomatizado = () => {
    return (
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
                        <p>Um dos insumos necessários para os cultivos é a fertilização por meio de adubos. Os agricultores compram compostos de fezes de animais e queixam-se do preço e da logística para a compra, além de o esterco adotado ser um possível vetor de agentes patogênicos ao homem se não compostado de maneira adequada. Diante deste cenário de inviabilidade financeira e de riscos à saúde, os assentados e assentadas estão partindo para um modo mais sustentável para fertilização do solo, a compostagem orgânica.</p>
                        <p>Neste contexto é que surgiu a ideia de criar um dispositivo integrado para monitoramento destas condições e controle com otimização do processo e do tempo necessário para a produção dos húmus. O monitoramento possibilitará que o próprio sistema atue quando necessário, autorregulando-se e fazendo com que os parâmetros fiquem dentro da margem ótima de funcionamento.</p>
                        <p>Esta ação foi desenhada com o apoio da metodologia de <Link to="/epdiagnosticoruralparticipativo"><b>Diagnóstico Rural Participativo</b></Link> e iniciada com o projeto "Dispositivo para monitoramento de compostagem caseira" com bolsistas da área de Eletrônica durante o ano de 2019 e no âmbito do fomento da Chamada 21/2016 do CNPq. A partir dos processos de validação participativa ocorridos no decorrer desta fase inicial, o projeto sofreu mudanças técnicas de concepção e atualmente está em desenvolvimento pelo estudante e bolsista de extensão do IFSP, Samuel Vicente de Freitas, sob a orientação técnica do professor Edson Anício Duarte e coordenação da profª Erika Batista.</p>
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