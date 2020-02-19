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
                        <p className="texto1">A metodologia de Pesquisa-ação desenvolvida por todas as frentes do projeto prevê formas de avaliações e validações participativas do público alvo da ação, compreendendo-os como sujeitos autônomos e ativos na verificação da eficácia e aplicabilidade das tecnologias em seu próprio cotidiano.</p>
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
                            <p>Todos os dispositivos técnicos elaborados e em desenvolvimento são validados com a comunidade participante das ações para que haja verificação dos objetivos, aplicabilidade, manuseio, aprimoramento das funcionalidades e monitoramento do desempenho para correções ou replicação para outras unidades. Os processos de validação participativa ocorrem no território do Assentamento em coletivo ou em Unidade de Referência selecionada pelos próprios agricultores e agricultoras em reuniões anteriores da Cooperativa.</p>
                            <p><strong>1. Validação Participativa – Irrigador Automatizado</strong></p>
                            <p>A validação deste projeto ocorreu na primeira versão do protótipo, em outubro de 2018, e na instalação da peça de campo final, em junho de 2019.</p>
                        </div>
                        <div className="card" style={{borderBottom: "4px solid #77B81E"}}> 
                            <div className="card-body fundo_cinza">
                                <h4 className="card-title titulo3"><img src={icone} alt={"Icone_Download"}></img><a href="https://drive.google.com/drive/folders/1nWRtF0gBYAMDj1kTWzOAmnjmdNW9g6mX" target="_blank"  rel="noopener noreferrer"> Veja o resultado</a></h4>
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
                                <p>Assim como os dispositivos técnicos, as tecnologias digitais também são concebidas em conjunto com os participantes das ações. Os objetivos são alinhados e os ajustes realizados durante todo o processo de construção da intervenção a partir das tecnologias sociais já envolvidas. Atualmente, as intervenções estão direcionadas para o melhor planejamento produtivo dos</p>
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