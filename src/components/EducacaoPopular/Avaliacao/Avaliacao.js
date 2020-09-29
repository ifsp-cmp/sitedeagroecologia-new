import React from 'react';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';
import './Avaliacao.css';

import foto1 from '../../../assets/images/EducacaoPopular/Avaliacoes/foto1.png';
import icone from '../../../assets/images/EducacaoPopular/Avaliacoes/icone.png';

const avaliacao = () =>{
    return(
        <div>
            <TopoDaPagina menu="Educação Popular" submenu="Avaliação e Validação"></TopoDaPagina>
            <div className="container-fluid Avaliacao">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto1} width="100%" alt={""}></img>
                        <p className="texto1">A metodologia de pesquisa-ação é adotada por todas as frentes dos projetos que integram os trabalhos do NEAES. Em consonância com os princípios da Educação Popular, esta metodologia possilita formas participativas de construção coletiva na forma de avaliações, validações participativas, diagnósticos rurais participativos e levantamento de demandas comunitárias e sociotécnicas. Com esta orientação metodológica, espera-se que os participantes envolvidos nas ações sejam sujeitos ativos na verificação da eficácia e aplicabilidade das tecnologias sociais desenvolvidas em seu próprio cotidiano.</p>
                        
                    </div>
                    <div className="col-md-2"></div>
                </div>
                
                <div className="planosCinza">
                    <div className="row" style={{marginTop: "30px"}}>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p className="card-body planos">AVALIAÇÕES</p>
                            <div className="texto1">
                                <p><strong>1. Curso FIC, 2ª edição 2019</strong></p>
                                <p>A avaliação foi proposta aos alunos do curso de formação inicial e continuada do primeiro semestre de 2019, com três perguntas geradoras: Que bom; Que pena; Que tal?. Os participantes que não dispunham do domínio da escrita puderam responder oralmente às questões e um relator as transcreveu.</p>
                            </div>
                            <div className="card" style={{borderBottom: "4px solid #77B81E"}}> 
                                <div className="card-body fundo_cinza">
                                    <h4 className="card-title titulo3"><img src={icone} alt={"Icone_Download"}></img><a href=" https://drive.google.com/drive/folders/1nWRtF0gBYAMDj1kTWzOAmnjmdNW9g6mX?usp=drive_open" target="_blank"  rel="noopener noreferrer"> Veja o resultado</a></h4>
                                </div>
                            </div>
                            <div className="texto1">
                                <p><strong>2. Avaliação Grupos de consumo</strong></p>
                                <p>A avaliação online foi proposta aos grupos de consumo das cestas agroecológicas no ano de 2018, para avaliar a satisfação do grupo para com os alimentos, periodicidade de entrega, quantidade e etc, proporcionando devolutivas dos consumidores sobre os arranjos comerciais propostos e o fortalecimento do vínculo político-comunitário dos envolvidos.</p>
                            </div>
                            <div className="card" style={{borderBottom: "4px solid #77B81E"}}> 
                                <div className="card-body fundo_cinza">
                                    <h4 className="card-title titulo3"><img src={icone} alt={"Icone_Download"}></img><a href="https://drive.google.com/drive/folders/1uDgVX1Zdiu-whaxMUQW9HUrA4yxFO6ZI" target="_blank"  rel="noopener noreferrer"> Veja o resultado</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="card-body planos">VALIDAÇÕES PARTICIPATIVAS</p>
                        <div className="texto1">
                            <p><strong>Dispositivos técnicos</strong></p>
                            <p>Todos os dispositivos técnicos elaborados e em desenvolvimento são validados com a comunidade participante pelo menos em três fases - diagramação da solução, protótipo de bancada e protótipo de campo - para que haja verificação dos objetivos, aplicabilidade, manuseio, aprimoramento das funcionalidades e monitoramento do desempenho para correções ou replicação em outras unidades de referência. Os processos de validação participativa ocorrem nos territórios das comunidades envolvidas nos projetos e, no caso do Assentamento Milton Santos, o coletivo de agricultoras e agricultores selecionam a Unidade de Referência para aplicação e monitoramento dos dispositivos.</p>
                            <p><strong>1. Validação Participativa – Irrigador Automatizado</strong></p>
                            <p>A validação deste projeto ocorreu na primeira versão do protótipo, em outubro de 2018, e na instalação da peça de campo final, em junho de 2019.</p>
                        </div>
                        <div className="card" style={{borderBottom: "4px solid #77B81E"}}> 
                            <div className="card-body fundo_cinza">
                                <h4 className="card-title titulo3"><img src={icone} alt={"Icone_Download"}></img><a href="https://drive.google.com/open?id=1w74PjVz29zfjneQqRKLXWXSFPHxFm42i" target="_blank"  rel="noopener noreferrer"> Veja o resultado</a></h4>
                            </div>
                        </div>
                        <div className="texto1">
                            <p><strong>2. Validação Participativa – Dispositivo de compostagem</strong></p>
                            <p>A validação deste projeto ocorreu a partir do Diagnóstico Rural Participativo iniciado em visitas de campo. Após observação e coleta de informações foi possível desenhar a ideia inicial e apresentá-la aos cooperados em junho de 2019. Nesta ocasião, também foi aplicado um questionário com os participantes a fim de orientar a construção técnica do primeiro protótipo.</p>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>

                <div className="planosCinza" style={{marginTop: "30px"}}>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p className="card-body planos">TECNOLOGIAS DIGITAIS</p>
                            <div className="texto1">
                                <p>Assim como os dispositivos técnicos, as tecnologias digitais também são concebidas em conjunto com os participantes das ações. Os objetivos são alinhados e os ajustes realizados durante todo o processo de construção da intervenção a partir das tecnologias sociais já envolvidas. Atualmente, as intervenções estão direcionadas para o melhor planejamento produtivo dos agricultores e agricultoras do Assentamento Milton Santos. Porém, existem outras iniciativas em andamento desde setembro de 2020 junto a comunidade local na região do Campus Campinas.</p>
                                <p><strong>1. Aplicativo – AGROCOMUNICAÇÃO</strong></p>
                                <p>O aplicativo foi validado em sua ideia geral no dia 12 de agosto de 2018 para os produtores e produtoras da Cooperflora no Assentameto. Os participantes puderam opinar sobre as funcionalidades e interface do protótipo.</p>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default avaliacao;