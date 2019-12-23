import React from 'react';
import Form from '../Form/Form';

import './Home.css';

import foto1 from '../../assets/images/Home/foto1.jpg';
import foto2 from '../../assets/images/Home/foto2.jpg';
import foto3 from '../../assets/images/Home/foto3.png';
// import foto4 from '../../assets/images/foto_ciencia.svg';
import foto5 from '../../assets/images/Home/foto_ciencia2.png';
// import foto6 from '../../assets/images/foto_movimento.svg';
import foto7 from '../../assets/images/Home/foto_movimento2.png';
// import foto8 from '../../assets/images/foto_pratica.svg';
import foto9 from '../../assets/images/Home/foto_pratica2.png';
import foto10 from '../../assets/images/Home/foto4.png';
import foto11 from '../../assets/images/Home/foto5.png';
import foto12 from '../../assets/images/Home/foto6.png';

const home = () => {
    return (
        <div className="container-fluid">
            <div className='Home'>
                <div className="row">
                    <img src={foto1} width="100%"></img>
                </div><br></br>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
                        <img src={foto3} width="90%"></img>
                    </div>
                    <div className="col-md-1">
                        <img id="img2" className="rounded-circle" src={foto2}></img>
                    </div>
                    <div className='col-md-7 bloco1'>
                        <h2 className="titulo3">NÚCLEO DE ESTUDOS EM AGROECOLOGIA, EDUCAÇÃO E SOCIEDADE (NEAES)</h2>
                        <p>Esta Plataforma reúne os trabalhos do Núcleo de Estudos em Agroecologia, Educação e Sociedade (NEAES) do Instituto Federal de São Paulo (IFSP), Campus de Campinas. Também reúne os trabalhos desenvolvidos no âmbito dos projetos NESAN e NEA do IFSP, Campus de Campinas. Foi em 2016 que os primeiros passos foram dados na formação do que viria a se tornar o NEAES enquanto grupo de pesquisa vinculado ao Campus.<br></br><br></br> Atualmente o campus oferece os cursos de nível técnico integrado ao ensino médio, técnico concomitante/ subsequente e cursos tecnológicos em nível superior em diversas áreas, além disso, o NEAES integra uma importante rede de construção do conhecimento agroecológico, defesa e promoção da segurança alimentar na Região Metropolitana de Campinas ao lado de parceiros estratégicos. Apropriando-se de forma interdisciplinar das contribuições da Agroecologia num campus com este perfil, o NEAES canalizou seus esforços para articular tecnologias sociais, segurança alimentar e redes sociotécnicas.
                        </p>
                        <button type="button" className="btn btn-success botao1">Saiba Mais</button>
                    </div>
                </div>
                <div className="row titulo2">
                    <div className="col-md-12">
                        <p>O QUE É AGROECOLOGIA?</p>
                    </div>
                </div>
                <div className="row bloco2">
                    <div className="col-md-1"></div>
                    <div className="col-md-3 card bloco3">
                        <img className="card-img-top" src={foto5}></img>
                        <div className="card-body">
                            <h5 className="card-title">É CIÊNCIA</h5>
                            <p className="card-text">Conjunto de conhecimentos técnicos, tecnológicos e sociopolíticos de natureza inter, multi e transdisciplinar articulados numa mesma matriz científica para o desenvolvimento de uma agricultura de base ecológica.</p>
                        </div>
                    </div>
                    <div className="col-md-3 card bloco3">
                        <img className="card-img-top" src={foto7}></img>
                        <div className="card-body">
                            <h5 className="card-title">É MOVIMENTO</h5>
                            <p className="card-text">Troca de saberes e construção do conhecimento agroecológico com movimentos sociais e comunidades organicamente ligadas à terra, como agricultoras e agricultores familiares, indígenas, populações quilombolas e povos tradicionais para a proteção da sociobiodiversidade.</p>
                        </div>
                    </div>
                    <div className="col-md-3 card bloco3">
                        <img className="card-img-top" src={foto9}></img>
                        <div className="card-body">
                            <h5 className="card-title">É PRÁTICA</h5>
                            <p className="card-text">Rede de agentes e ações políticas, econômicas, sociais, institucionais, culturais, ecológicas, éticas e pedagógicas de luta, denúncia e proposição de projetos e políticas públicas para a defesa da soberania e segurança alimentares.</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div><br></br><br></br>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <img src={foto10} width="100%"></img>
                    </div>
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title"><b>NO IFSP/ CÂMPUS DE CAMPINAS</b></h6>
                                <h4 className="card-subtitle titulo3">Núcleo de Estudos em Segurança Alimentar e Nutricional (NESAN)</h4>
                                <p className="card-text">Em setembro de 2017 o NEAES teve o projeto "Agroecologia, tecnologias de produção orgânica em assentamentos rurais e educação popular: a contribuição do IFSP na promoção da segurança alimentar e nutricional para a região metropolitana de Campinas" contemplado pela Chamada CNPq/MCTIC Nº 016/2016 - SEGURANÇA ALIMENTAR E NUTRICIONAL NO ÂMBITO DA UNASUL para a criação de um Núcleo de Estudos em Segurança Alimentar e Nutricional, possibilitando o fomento de parte das atividades reunidas nesta Plataforma.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div><br></br>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title"><b>NO IFSP/ CÂMPUS DE CAMPINAS</b></h6>
                                <h4 className="card-subtitle titulo3">Núcleo de Estudos em Agroecologia (NEA)</h4>
                                <p className="card-text">Em fevereiro de 2018 o NEAES teve o projeto "Agroecologia, tecnologias de produção orgânica em assentamentos rurais e educação popular: a contribuição do IFSP para a sustentabilidade ambiental e segurança alimentar na RMC" contemplado pela Chamada Nº 21/2016 - Linha 1: Criação de Núcleo de Estudo em Agroecologia e Produção Orgânica (NEA), possibilitando articulação com as ações iniciadas pelo NESAN e ampliação dos trabalhos como principal fonte de fomento às atividades de pesquisa, extensão e ensino no âmbito do projeto NEA.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src={foto11} width="100%"></img>
                    </div>
                    <div className="col-md-1"></div>
                </div><br></br>
                <div className="row">
                    <div className="col-md-6">
                        <img src={foto12} width="110%" height="100%"></img>
                    </div>
                    <div className="col-md-6">
                       <Form></Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default home;

