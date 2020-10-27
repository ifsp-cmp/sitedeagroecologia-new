import React from 'react';
import SaibaMais from '../../SaibaMais/SaibaMais';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';
import './Visitas.css';
import foto1 from '../../../assets/images/EducacaoPopular/Visitas/foto1.png';
// Visita1
import f1_visita1 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita1/foto1.JPG';
import f1_visita2 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita1/foto2.JPG';
import f1_visita3 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita1/foto3.JPG';
import f1_visita4 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita1/foto4.JPG';
import f1_visita5 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita1/foto5.JPG';
import f1_visita6 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita1/foto6.JPG';
import f1_visita7 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita1/foto7.JPG';
import f1_visita8 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita1/foto8.JPG';
//Visita2
import visita3 from '../../../assets/images/EducacaoPopular/Visitas/Visita-03.png';
import visita4 from '../../../assets/images/EducacaoPopular/Visitas/Visita-04.png';
//Visita3
import foto1_visita3 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita_Saude/foto1.jpg';
import f3_visita2 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita_Saude/foto2.jpg';
import f3_visita3 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita_Saude/foto3.jpg';
import f3_visita4 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita_Saude/foto4.jpg';
import f3_visita5 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita_Saude/foto5.jpg';
import f3_visita6 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita_Saude/foto6.jpg';
import f3_visita7 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita_Saude/foto7.png';
import f3_visita8 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita_Saude/foto8.jpg';
import f3_visita9 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita_Saude/foto9.jpg';
//Visita4
import f4_visita1 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita4/foto1.jpg';
import f4_visita2 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita4/foto2.jpg';
import f4_visita3 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita4/foto3.jpg';
import f4_visita4 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita4/foto4.jpg';
import f4_visita5 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita4/foto5.jpg';
import f4_visita6 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita4/foto6.jpg';
//Visita 5 e 6
import visita1 from '../../../assets/images/EducacaoPopular/Visitas/Visita-01.png';
import visita2 from '../../../assets/images/EducacaoPopular/Visitas/Visita-02.png';
import visita5 from '../../../assets/images/EducacaoPopular/Visitas/Visita-05.png';
import visita6 from '../../../assets/images/EducacaoPopular/Visitas/Visita-06.png';
//Visita 7
import marielleFoto1 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita7/foto1.jpg';
import marielleFoto2 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita7/foto2.jpg';
import marielleFoto3 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita7/foto3.jpg';
import marielleFoto4 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita7/foto4.jpg';
import marielleFoto5 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita7/foto5.jpg';
import marielleFoto6 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita7/foto6.jpg';
import marielleFoto7 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita7/foto7.jpg';
import marielleFoto8 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita7/foto8.jpg';
//Visita 8
import mutiraoFoto1 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita8/m.1_teste.jpg';
import mutiraoFoto2 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita8/m.3_teste.jpg';
import mutiraoFoto3 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita8/m.4_teste.jpg';
import mutiraoFoto4 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita8/m.11_teste.jpg';
import mutiraoFoto5 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita8/m.14_teste.jpg';
import mutiraoFoto6 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita8/m.15_teste.jpg';
import mutiraoFoto7 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita8/m.25.jpg';
//Visita9
import f9_visita1 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita9/foto1.jpg';
import f9_visita2 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita9/foto2.jpg';
import f9_visita3 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita9/foto3.jpg';
import f9_visita4 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita9/foto4.jpg';
import f9_visita5 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita9/foto5.jpg';
import f9_visita6 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita9/foto6.jpg';
import f9_visita7 from '../../../assets/images/EducacaoPopular/Visitas/Carrosel/Visita9/foto7.jpg';
//Carousel
import Carousel from '../../CarroseldeFotos/Carousel';

const visitas = () => {
    const conteudo1 = <ul className="card-text">
        <li><a href="https://portal.cmp.ifsp.edu.br/index.php/noticias/564-neaes-promove-i-visita-ao-assentamento-milton-santos-vivencias-da-agricultura-familiar-e-agroecologica" target="_blank" rel="noopener noreferrer">Neaes promove I Visita ao Assentamento Milton Santos - vivência e aprendizado</a></li>
    </ul>

    return (
        <div>
            <TopoDaPagina menu="Educação Popular" submenu="Visitas e Vivências"></TopoDaPagina>
            <div className="container-fluid Visitas">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto1} width="100%" alt={""}></img>
                        <p className="texto1">As visitas e vivências são etapas prioritárias da metodologia de pesquisa participativa e da própria Educação Popular. As visitas e vivências ocorrem com o apoio e engajamento de estudantes, pesquisadores, bolsistas, agricultoras e agricultores. Inicialmente, o terriório chave destas ações foi o Assentamento Milton Santos, seguido pelo território da Ocupação Marielle Vive. Os objetivos das  vivências são múltiplos, desde preparação e realização de aulas práticas, avaliações, formações e validações participativas, ações de extensão tecnológica, mutirões agroecológicos, visitas técnicas e exploratórias de iniciação cientifica e pesquisas colaborativas.</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>

                <div className="planosCinza pb-4">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p className="card-body planos">1° VISITA NO ASSENTAMENTO MILTON SANTOS</p>
                            <div className="texto1">
                                <p>Foi em 01/10/2016 que houve o primeiro encontro de servidores e estudantes do IFSP, Campus de Campinas, com o território e as lideranças locais do Assentamento Milton Santos. Um pequeno grupo foi convidado pela profª Erika Batista para acompanhá-la na visita, que ocorreu no âmbito do projeto de extensão "Meio ambiente, sustentabilidade e agroecologia: a contribuição da produção orgânica para a educação alimentar,  ambiental e política", antes mesmo da organização do próprio NEAES enquanto grupo de pesquisa.</p>
                                <p>A acolhida foi inesquecível e simboliza o início de uma grande jornada e parceria que se estende até hoje. Muito felizes por fazer parte desta história e sempre gratos pela receptiva da Regional Campinas do MST, das agricultoras e agricultores do Assentamento e Cooperflora! E o "safinho" hoje já está gigante!</p>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <Carousel
                            foto1={f1_visita1} alt1={"Foto 1"}
                            foto2={f1_visita2} alt2={"Foto 2"}
                            foto3={f1_visita3} alt3={"Foto 3"}
                            foto4={f1_visita4} alt4={"Foto 4"}
                            foto5={f1_visita5} alt5={"Foto 5"}
                            foto6={f1_visita6} alt6={"Foto 6"}
                            foto7={f1_visita7} alt7={"Foto 7"}
                            foto8={f1_visita8} alt8={"Foto 8"}
                            id={"Visita1"}
                        />
                    </div>
                </div>

                <div className="row" style={{ marginTop: "10px" }}>
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="card-body planos">VISITA DE CAMPO AO ASSENTAMENTO MILTON SANTOS</p>
                        <div className="texto1">
                            <p><strong>I VISITA</strong></p>
                            <p>No dia 15 de maio de 2018 o Núcleo de Estudos em Agroecologia, Educação e Sociedade – Neaes, em parceria com a Coordenadoria de Extensão do IFSP Campinas, realizou a I Visita de Campo ao Assentamento Milton Santos – Vivências da Agricultura Familiar e Produção Agroecológica na Região Metropolitana de Campinas.</p>
                            <img src={visita3} width="50%" alt={"Visita 2"}></img>
                            <img src={visita4} width="50%" alt={"Visita 2"}></img>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <SaibaMais conteudo={conteudo1}></SaibaMais>

                <div className="planosCinza pb-4">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p className="card-body planos">MUTIRÃO DA SAÚDE</p>
                            <div className="texto1">
                                <p>No dia 15 de setembro de 2018 aconteceu o Mutirão Saúde da Família, Segurança Alimentar, Saúde e Auto-Cuidados. A ação foi realizada no âmbito da 1ª edição do Curso FIC em parceria com a profª Adriane Delício, que trouxe os estudantes da "Liga Acadêmica de Medicina de Família e Comunidade da Faculdade São Leopoldo Mandic" e outros parceiros para fortalecer o mutirão.</p>
                                <p>Outra ação inesquecível que foi muito bem recebida pelo território e se estendeu para além dos agricultores e agricultoras residentes, atendendo também os moradores das ocupações e bairros ao redor do Milton Santos. Foram organizadas brigadas de atendimento para a realização de consultas em clínica geral, testes rápidos, orientações médicas e nutricionais, além de atualização de vacinação para crianças e adultos.</p>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <Carousel
                            foto1={foto1_visita3} alt1={"Foto 1"}
                            foto2={f3_visita2} alt2={"Foto 2"}
                            foto3={f3_visita3} alt3={"Foto 3"}
                            foto4={f3_visita4} alt4={"Foto 4"}
                            foto5={f3_visita5} alt5={"Foto 5"}
                            foto6={f3_visita6} alt6={"Foto 6"}
                            foto7={f3_visita7} alt7={"Foto 7"}
                            foto8={f3_visita8} alt8={"Foto 8"}
                            foto9={f3_visita9} alt9={"Foto 9"}
                            id={"Multirao-Saude"}
                        />
                    </div>
                </div>

                <div className="row pb-4">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="card-body planos">VISITA DE BOLSISTAS DO E.M INTEGRADO EM ELETRÔNICA</p>
                        <div className="texto1">
                            <p> Em 15/02/2019 os estudantes do IFSP e bolsistas do projeto CNPq/ Chamada 21-2016 retomaram as atividades de extensão tecnológica e iniciação científica com visita técnica para acompanhar demandas da comunidade frente às dificuldades sociotécnicas de campo. A visita foi orientada pela profª coordenadora do projeto, Erika Batista e conduzida pelas lideranças comunitárias locais Eunice Pimenta e Arieli Contrigiani.</p>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                    <Carousel
                        foto1={f4_visita1} alt1={"Foto 1"}
                        foto2={f4_visita2} alt2={"Foto 2"}
                        foto3={f4_visita3} alt3={"Foto 3"}
                        foto4={f4_visita4} alt4={"Foto 4"}
                        foto5={f4_visita5} alt5={"Foto 5"}
                        foto6={f4_visita6} alt6={"Foto 6"}
                        id={"Visita4"}
                    />
                </div>

                <div className="planosCinza pb-5">
                    <div className="row" >
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p className="card-body planos">VISITA DE CAMPO AO ASSENTAMENTO MILTON SANTOS</p>
                            <div className="texto1">
                                <p><strong>II VISITA</strong></p>
                                <p>No dia 23 de março de 2019 os alunos do Instituto Federal de Campinas que fazem parte do grupo de pesquisa NEAES visitaram, em conjunto com os Professores e orientadores André Bordignon e Estela Batista o Assentamento Milton Santos.</p>
                            </div>
                            <img src={visita1} width="50%" alt={"Visita 2"}></img>
                            <img src={visita2} width="50%" alt={"Visita 2"}></img>
                            <hr style={{ marginTop: "60px" }} color="#707070"></hr>

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

                <div className="row pb-4">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="card-body planos">VISITA DE CAMPO AO ACAMPAMENTO “MARIELLE VIVE”</p>
                        <div className="texto1">
                            <p>Aconteceu no dia 06 de julho de 2019 a finalização do curso "Agroecologia, Segurança alimentar e tecnologias para agricultura familiar" e entrega de certificados. Foi feita em conjunto com visita e atividade prática no acampamento Marielle Vive, em Valinhos. Essa visita teve a participação da nutricionista Carla Caratin.</p>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                    <Carousel
                        foto1={marielleFoto1} alt1={"Foto 1"}
                        foto2={marielleFoto2} alt2={"Foto 2"}
                        foto3={marielleFoto3} alt3={"Foto 3"}
                        foto4={marielleFoto4} alt4={"Foto 4"}
                        foto5={marielleFoto5} alt5={"Foto 5"}
                        foto6={marielleFoto6} alt6={"Foto 6"}
                        foto7={marielleFoto7} alt7={"Foto 7"}
                        foto8={marielleFoto8} alt8={"Foto 8"}
                        id={"Marielle"}
                    />
                </div>

                <div className="planosCinza pb-4">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p className="card-body planos">MUTIRÃO AGROFLORESTAL NO ASSENTAMENTO MS</p>
                            <div className="texto1">
                                <p>Aconteceu no dia 11 de maio de 2019 o Mutirão Agroflorestal no Assentamento Milton Santos, como parte das III Jornadas Universitárias em Defesa da Reforma Agrária. Organizado pelo grupo de pesquisa, extensão e educação popular MOSOA - Movimentos Sociais, Agroecologia, Autogestão e Autonomia - com a participação de Rafael Virgínio dos Santos (Agrônomo e Mestrando em Agroecologia/UFSCar).</p>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <Carousel
                            foto1={mutiraoFoto1} alt1={"Foto 1"}
                            foto2={mutiraoFoto2} alt2={"Foto 2"}
                            foto3={mutiraoFoto3} alt3={"Foto 3"}
                            foto4={mutiraoFoto4} alt4={"Foto 4"}
                            foto5={mutiraoFoto5} alt5={"Foto 5"}
                            foto6={mutiraoFoto6} alt6={"Foto 6"}
                            foto7={mutiraoFoto7} alt7={"Foto 7"}
                            id={"Multirao"}
                        />
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="card-body planos">VISITA DE CAMPO À ESCOLA NACIONAL FLORESTAN FERNANDES</p>
                        <div className="texto1">
                            <p> Outro sonho se realizou com o apoio dos recursos recebidos pela Chamada 21/2016 do CNPq: possibilitar aos estudantes do Campus Campinas do IFSP conhecer as instalações da <a href="https://amigosenff.org.br/?fbclid=IwAR39VXVnZ9jK2GwNGzSM-3YFecVWVlSfcrusmvdnTRgIVLRtbzeYk8gpWTs" target="_blank" rel="noopener noreferrer" ><b>Escola Nacional Florestan Fernandes!</b></a> Foi no dia 28 de setembro de 2019 que o grupo partiu num micro-ônibus disponibilizado pelo IFSP com 23 pessoas para passar um dia na ENFF e acompanhar suas atividades.</p>
                            <p>Dentre elas, o ciclo de debates "Terra urbana: a necessidade de construir a cidade e a democracia", que contou com a presença de Ermínia Maricato, os espaços de formação, cuidado com as crianças, hortas agroecológicas e alimentação. Além de toda a aula sobre cooperativismo e economia solidária que acompanhou cada cantinho visitado. Sem dúvida uma experiência memorável para nossos estudantes!</p>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                    <Carousel
                        foto1={f9_visita1} alt1={"Foto 1"}
                        foto2={f9_visita2} alt2={"Foto 2"}
                        foto3={f9_visita3} alt3={"Foto 3"}
                        foto4={f9_visita4} alt4={"Foto 4"}
                        foto5={f9_visita5} alt5={"Foto 5"}
                        foto6={f9_visita6} alt6={"Foto 6"}
                        foto7={f9_visita7} alt7={"Foto 7"}
                        id={"Florestan"}
                    />
                </div>

            </div>
        </div>
    )
}

export default visitas;