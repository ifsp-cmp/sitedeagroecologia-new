import React from 'react';
import SaibaMais from '../../SaibaMais/SaibaMais';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';
import './Visitas.css';

import foto1 from '../../../assets/images/EducacaoPopular/Visitas/foto1.png';
import visita1 from '../../../assets/images/EducacaoPopular/Visitas/Visita-01.png';
import visita2 from '../../../assets/images/EducacaoPopular/Visitas/Visita-02.png';
import visita3 from '../../../assets/images/EducacaoPopular/Visitas/Visita-03.png';
import visita4 from '../../../assets/images/EducacaoPopular/Visitas/Visita-04.png';
import visita5 from '../../../assets/images/EducacaoPopular/Visitas/Visita-05.png';
import visita6 from '../../../assets/images/EducacaoPopular/Visitas/Visita-06.png';

const visitas = () =>{
    const conteudo1= <ul className="card-text">
        <li><a href="https://www.cmp.ifsp.edu.br/index.php/noticias/564-neaes-promove-i-visita-ao-assentamento-milton-santos-vivencias-da-agricultura-familiar-e-agroecologica" target="_blank" rel="noopener noreferrer">Neaes promove I Visita ao Assentamento Milton Santos - vivência e aprendizado</a></li>
    </ul>

    return(
        <div>
            <TopoDaPagina menu="Educação Popular" submenu="Visitas e Vivências"></TopoDaPagina>
            <div className="container-fluid Visitas">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto1} width="100%" alt={""}></img>
                        <p className="texto1">As visitas e vivências são etapas prioritárias da metodologia de pesquisa participativa e da própria Educação Popular. As visitas e vivências ocorreram com participação de estudantes e pesquisadores no Assentamento Milton Santos, e posteriormente na Ocupação Marielle Vive, para aulas, avaliações/ validações participativas, mutirões de plantação agroecológica e etc, tanto dos agricultores para as formações realizadas com os grupos de consumo e posterior venda dos alimentos.</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>

                <div className="planosCinza">
                    <div className="row" style={{marginTop: "30px"}}>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p className="card-body planos">VISITAS DE CAMPO AO ASSENTAMENTO MILTON SANTOS</p>
                            <div className="texto1">
                                <p><strong>I VISITA</strong></p>
                                <p>No dia 23 de março de 2019 os alunos do Instituto Federal de Campinas que fazem parte do grupo de pesquisa NEAES visitaram, em conjunto com os Professores e orientadores André Bordignon e Estela Batista o Assentamento Milton Santos.</p>
                            </div>
                            <img src={visita1} width="50%" alt={"Visita 1"}></img>
                            <img src={visita2} width="50%" alt={"Visita 1"}></img>
                            <hr style={{marginTop: "60px"}} color="#707070"></hr>
                            <div className="texto1">
                                <p><strong>II VISITA</strong></p>
                                <p>No dia 15 de maio de 2018 o Núcleo de Estudos em Agroecologia, Educação e Sociedade – Neaes, em parceria com a Coordenadoria de Extensão do IFSP Campinas, realizou a I Visita de Campo ao Assentamento Milton Santos – Vivências da Agricultura Familiar e Produção Agroecológica na Região Metropolitana de Campinas.</p>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <SaibaMais conteudo={conteudo1}></SaibaMais>
                    <div className="row" style={{paddingBottom: "50px"}}>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <img src={visita3} width="50%" alt={"Visita 2"}></img>
                            <img src={visita4} width="50%" alt={"Visita 2"}></img>
                            <hr style={{marginTop: "60px"}} color="#707070"></hr>
                            <div className="texto1">
                                <p><strong>III VISITA</strong></p>
                                <p>No dia 06 de abril de 2019, a Cooperflora e a Regional Campinas do MST promoveram visita ao Assentamento Milton Santos, e conversa a respeito do trabalho no campo, da agroecologia, do contexto político-social e do uso de agrotóxicos. Durante toda a manhã, pessoas envolvidas com a rede de consumo (Comunidade que Sustenta a Agricultura), pesquisadores(as), amigos(as) e assentados(as) trocaram informações e aprendizados, e foram agraciados com um delicioso café da manhã com produtos do local. Terminando com visita à uma casa e sua produção.</p>
                            </div>
                            <img src={visita5} width="50%" alt={"Visita 3"}></img>
                            <img src={visita6} width="50%" alt={"Visita 3"}></img>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="card-body planos">MUTIRÃO AGROFLORESTAL NO ASSENTAMENTO MS</p>
                        <div className="texto1">
                            <p>Aconteceu no dia 11 de maio de 2019 o Mutirão Agroflorestal no Assentamento Milton Santos, como parte das III Jornadas Universitárias em Defesa da Reforma Agrária. Organizado pelo grupo de pesquisa, extensão e educação popular MOSOA - Movimentos Sociais, Agroecologia, Autogestão e Autonomia - com a participação de Rafael Virgínio dos Santos (Agrônomo e Mestrando em Agroecologia/UFSCar).</p>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>

                <div className="planosCinza">
                    <div className="row" style={{marginTop: "30px"}}>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p className="card-body planos">VISITA DE CAMPO AO ACAMPAMENTO “MARIELLE VIVE”</p>
                            <div className="texto1">
                                <p>Aconteceu no dia 06 de julho de 2019 a finalização do curso "Agroecologia, Segurança alimentar e tecnologias para agricultura familiar" e entrega de certificados. Foi feita em conjunto com visita e atividade prática no acampamento Marielle Vive, em Valinhos. Essa visita teve a participação da nutricionista Carla Caratin.</p>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default visitas;