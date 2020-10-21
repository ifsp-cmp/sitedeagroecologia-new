import React from 'react';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';
import './MetodologiasParticipativas.css';

import Carousel from '../../CarroseldeFotos/Carousel';
import foto1_car1 from '../../../assets/images/EducacaoPopular/Avaliacoes/Carrossel/foto1.JPG';
import foto2_car1 from '../../../assets/images/EducacaoPopular/Avaliacoes/Carrossel/foto2.JPG';
import foto3_car1 from '../../../assets/images/EducacaoPopular/Avaliacoes/Carrossel/foto3.jpg';
import foto4_car1 from '../../../assets/images/EducacaoPopular/Avaliacoes/Carrossel/foto4.jpg';
import foto5_car1 from '../../../assets/images/EducacaoPopular/Avaliacoes/Carrossel/foto5.jpg';
import foto6_car1 from '../../../assets/images/EducacaoPopular/Avaliacoes/Carrossel/foto6.JPG';

import foto1_car2 from '../../../assets/images/EducacaoPopular/Avaliacoes/Carrossel2/foto1.jpg';
import foto2_car2 from '../../../assets/images/EducacaoPopular/Avaliacoes/Carrossel2/foto2.jpg';
import foto3_car2 from '../../../assets/images/EducacaoPopular/Avaliacoes/Carrossel2/foto3.jpg';
import foto4_car2 from '../../../assets/images/EducacaoPopular/Avaliacoes/Carrossel2/foto4.jpg';
import foto5_car2 from '../../../assets/images/EducacaoPopular/Avaliacoes/Carrossel2/foto5.jpg';
import foto6_car2 from '../../../assets/images/EducacaoPopular/Avaliacoes/Carrossel2/foto6.jpg';

import foto_capa from '../../../assets/images/EducacaoPopular/Avaliacoes/foto1.png';
import icone from '../../../assets/images/EducacaoPopular/Avaliacoes/icone.png';
import SaibaMais from '../../SaibaMais/SaibaMais';

const MetodologiasParticipativas = () => {
    const conteudo1 = <ul className="card-text">
        <li><a href="https://www.youtube.com/watch?v=5xn3AgSqUkc&t=1347s" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: '#707070' }}>Vídeo Audiovisual - Projeto Irrigador</a></li>
    </ul>

    return (
        <div>
            <TopoDaPagina menu="Educação Popular" submenu="Metodologias Participativas"></TopoDaPagina>
            <div className="container-fluid MetodologiasParticipativas">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto_capa} width="100%" alt={""}></img>
                        <p className="texto1">A metodologia de pesquisa-ação é adotada por todas as frentes dos projetos que integram os trabalhos do NEAES. Em consonância com os princípios da Educação Popular, esta metodologia possilita formas participativas de construção coletiva na forma de avaliações, validações participativas, diagnósticos rurais participativos e levantamento de demandas comunitárias e sociotécnicas. Com esta orientação metodológica, espera-se que os participantes envolvidos nas ações sejam sujeitos ativos na verificação da eficácia e aplicabilidade das tecnologias sociais desenvolvidas em seu próprio cotidiano.</p>

                    </div>
                    <div className="col-md-2"></div>
                </div>

                <div className="planosCinza">
                    <div className="row" style={{ marginTop: "30px" }}>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p className="card-body planos">AVALIAÇÕES</p>
                            <div className="texto1">
                                <p><strong>1. Curso FIC, 2ª edição 2019</strong></p>
                                <p>A avaliação foi proposta aos alunos do curso de formação inicial e continuada do primeiro semestre de 2019, com três perguntas geradoras: Que bom; Que pena; Que tal?. Os participantes que não dispunham do domínio da escrita puderam responder oralmente às questões e um relator as transcreveu.</p>
                            </div>
                            
                            <div className="card" style={{ borderBottom: "4px solid #77B81E" }}>
                                <div className="card-body fundo_cinza">
                                    <h4 className="card-title titulo3"><img src={icone} alt={"Icone_Download"}></img><a href=" https://drive.google.com/drive/folders/1rc6uziL1R0gpt3mASuF3Lg50Wk-BMATd" target="_blank" rel="noopener noreferrer"> Veja o resultado</a></h4>
                                </div>
                            </div>
                            <div className="texto1">
                                <p><strong>2. Curso FIC, 3ª edição 2019</strong></p>
                                {/* <p></p> */}
                            </div>
                            <div className="card" style={{ borderBottom: "4px solid #77B81E" }}>
                                <div className="card-body fundo_cinza">
                                    <h4 className="card-title titulo3"><img src={icone} alt={"Icone_Download"}></img><a href="https://drive.google.com/drive/u/2/folders/1DDOKpVCKvSRM2N4eAuvO3x4ze25wc9it" target="_blank" rel="noopener noreferrer"> Veja o resultado</a></h4>
                                </div>
                            </div>
                            <div className="texto1">
                                <p><strong>3. Avaliação Grupos de consumo</strong></p>
                                <p>A avaliação online foi proposta aos grupos de consumo das cestas agroecológicas no ano de 2018, para avaliar a satisfação do grupo para com os alimentos, periodicidade de entrega, quantidade e etc, proporcionando devolutivas dos consumidores sobre os arranjos comerciais propostos e o fortalecimento do vínculo político-comunitário dos envolvidos.</p>
                            </div>
                            <div className="card" style={{ borderBottom: "4px solid #77B81E" }}>
                                <div className="card-body fundo_cinza">
                                    <h4 className="card-title titulo3"><img src={icone} alt={"Icone_Download"}></img><a href="https://drive.google.com/drive/folders/1XcjtkAioQCz7ByK3TsG4ozZKQf593KOY" target="_blank" rel="noopener noreferrer"> Veja o resultado</a></h4>
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
                        <div className="card" style={{ borderBottom: "4px solid #77B81E" }}>
                            <div className="card-body fundo_cinza">
                                <h4 className="card-title titulo3"><img src={icone} alt={"Icone_Download"}></img><a href="https://drive.google.com/drive/folders/1II_98OMGJHWeTzFhwdkHZ-MTKLvTvQHn" target="_blank" rel="noopener noreferrer"> Veja o resultado</a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <SaibaMais conteudo={conteudo1}></SaibaMais>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="texto1">
                            <p><strong>2. Validação Participativa – Dispositivo de compostagem</strong></p>
                            <p>A validação deste projeto ocorreu a partir do Diagnóstico Rural Participativo iniciado em visitas de campo. Após observação e coleta de informações foi possível desenhar a ideia inicial e apresentá-la aos cooperados em junho de 2019. Nesta ocasião, também foi aplicado um questionário com os participantes a fim de orientar a construção técnica do primeiro protótipo.</p>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                    <Carousel
                        foto1={foto1_car1} alt1={"Foto 1 Validação Participativa Dipostivo de Compostagem"}
                        foto2={foto2_car1} alt2={"Foto 2 Validação Participativa Dipostivo de Compostagem"}
                        foto3={foto3_car1} alt3={"Foto 3 Validação Participativa Dipostivo de Compostagem"}
                        foto4={foto4_car1} alt4={"Foto 4 Validação Participativa Dipostivo de Compostagem"}
                        foto5={foto5_car1} alt5={"Foto 5 Validação Participativa Dipostivo de Compostagem"}
                        foto6={foto6_car1} alt6={"Foto 6 Validação Participativa Dipostivo de Compostagem"}
                        id={"ValidacaoParticipativaCompostagem"}
                    />
                </div>

                <div className="planosCinza my-5 p-4">
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
                    <Carousel
                        foto1={foto1_car2} alt1={"Foto 1 Validação Participativa App AGROCOMUNICAÇÃO"}
                        foto2={foto2_car2} alt2={"Foto 2 Validação Participativa App AGROCOMUNICAÇÃO"}
                        foto3={foto3_car2} alt3={"Foto 3 Validação Participativa App AGROCOMUNICAÇÃO"}
                        foto4={foto4_car2} alt4={"Foto 4 Validação Participativa App AGROCOMUNICAÇÃO"}
                        foto5={foto5_car2} alt5={"Foto 5 Validação Participativa App AGROCOMUNICAÇÃO"}
                        foto6={foto6_car2} alt6={"Foto 6 Validação Participativa App AGROCOMUNICAÇÃO"}
                        id={"ValidacaoParticipativaAgrocomunicacao"}
                    />
                </div>

            </div>
        </div>
    )
}

export default MetodologiasParticipativas;