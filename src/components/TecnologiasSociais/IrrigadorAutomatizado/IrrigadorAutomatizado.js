import React from 'react';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';
import SaibaMais from '../../SaibaMais/SaibaMais';
import ReactPlayer from 'react-player';
import Carousel from '../../CarroseldeFotos/Carousel';

import foto1_car from '../../../assets/images/TecnologiasSociais/Irrigador/Carrossel/foto1.jpg';
import foto2_car from '../../../assets/images/TecnologiasSociais/Irrigador/Carrossel/foto2.jpg';
import foto3_car from '../../../assets/images/TecnologiasSociais/Irrigador/Carrossel/foto3.jpg';
import foto4_car from '../../../assets/images/TecnologiasSociais/Irrigador/Carrossel/foto4.jpg';
import foto5_car from '../../../assets/images/TecnologiasSociais/Irrigador/Carrossel/foto5.jpg';
import foto6_car from '../../../assets/images/TecnologiasSociais/Irrigador/Carrossel/foto6.jpg';
import foto7_car from '../../../assets/images/TecnologiasSociais/Irrigador/Carrossel/foto7.jpg';
import foto8_car from '../../../assets/images/TecnologiasSociais/Irrigador/Carrossel/foto8.jpg';
import foto9_car from '../../../assets/images/TecnologiasSociais/Irrigador/Carrossel/foto9.jpg';
import foto10_car from '../../../assets/images/TecnologiasSociais/Irrigador/Carrossel/foto10.jpg';

import './IrrigadorAutomatizado.css';

import foto1 from '../../../assets/images/TecnologiasSociais/Irrigador/foto5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


const irrigadorAutomatizado = () => {
    const conteudo = <ul className="card-text">
        <li><a href="https://www.youtube.com/watch?v=5xn3AgSqUkc&t=13s" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} size="2x" title="Vídeo do Irrigador Automatizado" color="#77B81E" /></a></li>
        <li><a href="https://portal.cmp.ifsp.edu.br/index.php/noticias/821-estudante-do-ifsp-campinas-desenvolve-irrigador-automatizado-para-agricultura-familiar" target="_blank" rel="noopener noreferrer">Estudante desenvolve irrigador automatizado para agricultura familiar</a></li>
    </ul>

    return (
        <div>
            <TopoDaPagina menu="Tecnologias Sociais" submenu="Irrigador Automatizado"></TopoDaPagina>
            <div className="container-fluid Irrigador">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto1} alt={"IrrigadorAutomatizado"} width="100%"></img>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 texto1">
                        <p>O projeto foi desenvolvido pelo estudante de Eletroeletrônica do Ensino Médio Técnico, Ruan Paiva Leopoldo, com a orientação técnica do professor Edson Anício Duarte. Durante 2019, o dispositivo foi monitorado pelo estudante Noah Serrati Moreno, aluno do curso de Eletrônica Integrado ao Ensino Médio. Atualmente está em andamento a construção de um segundo protótipo de campo para ser instalado em nova unidade de referência no Assentamento.</p>
                    </div>
                    <div className="col-md-2"></div>
                    <Carousel
                        foto1={foto1_car} alt1={"Foto 1 Irrigador Automatizado"}
                        foto2={foto2_car} alt2={"Foto 2 Irrigador Automatizado"}
                        foto3={foto3_car} alt3={"Foto 3 Irrigador Automatizado"}
                        foto4={foto4_car} alt4={"Foto 4 Irrigador Automatizado"}
                        foto5={foto5_car} alt5={"Foto 5 Irrigador Automatizado"}
                        foto6={foto6_car} alt6={"Foto 6 Irrigador Automatizado"}
                        foto7={foto7_car} alt7={"Foto 7 Irrigador Automatizado"}
                        foto8={foto8_car} alt8={"Foto 8 Irrigador Automatizado"}
                        foto9={foto9_car} alt9={"Foto 9 Irrigador Automatizado"}
                        foto10={foto10_car} alt10={"Foto 10 Irrigador Automatizado"}
                        id={"IrrigadorAutomatizado"}
                    />
                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="card-body planos">CONHEÇA O IRRIGADOR AUTOMATIZADO</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="player-wrapper mb-3">
                            <ReactPlayer
                                className='react-player '
                                controls
                                width='100%'
                                height='100%'
                                url='https://www.youtube.com/embed/ISDScjWNVXA'
                            />
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>

                <SaibaMais conteudo={conteudo}></SaibaMais>


                {/* <div className="planosCinza">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p className="card-body planos">O PROJETO ATUALMENTE</p>
                            <div className="texto1">
                                <p>Após a validação participativa em junho de 2019, o aluno Noah assumiu o projeto, inicialmente focado em monitorar o funcionamento para montagem de novas peças. Porém esse objetivo foi trocado para a criação de uma nova peça já com melhorias em relação a versão final do aluno Ruan. </p>
                                <p>O novo produto possui agora uma programação que simplificasse a interface para o usuário, permitindo habilitar até duas válvulas solenoide, uma placa eletrônica que organizava os circuitos para próximos autores terem facilidade em encontrar possíveis erros ou eletrônicos em falha. E por fim, itens eletrônicos e elétricos adicionados para impedir a sobrecarga do sistema e deixar o projeto mais profissional em relação ao funcionamento.</p>
                                <p>A partir disso, está planejado para 2020 uma validação participativa da segunda peça, que será instalada no Assentamento Milton Santos, em uma segunda Unidade de Referência escolhida pela orientadora Erika Batista conjuntamente aos assentados. Nessa validação será mostrado as novidades do projeto e como devem utilizar o irrigador em casos de mudança em horários de irrigação ou hortas.</p>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div> */}



            </div>
        </div>
    )
}

export default irrigadorAutomatizado;