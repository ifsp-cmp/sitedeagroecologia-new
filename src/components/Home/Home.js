import React from 'react';
import './Home.css';
import foto1 from '../../assets/images/foto1.png';
import foto2 from '../../assets/images/foto2.jpg';
import foto3 from '../../assets/images/foto3.png';
import foto4 from '../../assets/images/foto_ciencia.svg';
import foto5 from '../../assets/images/foto_ciencia2.png';
// import foto6 from '../../assets/images/foto_movimento.svg';
import foto7 from '../../assets/images/foto_movimento2.png';
import foto8 from '../../assets/images/foto_pratica.svg';
import foto9 from '../../assets/images/foto_pratica2.png';

const home = () => {
    return (
        <div className="container-fluid">
            <div className='Home'>
                <div className="row">
                    <div className="col-md-12 titulo">
                        <p>AGROECOLOGIA EM REDE</p>
                    </div>
                </div>
                <div className="row">
                    <img src={foto1} width="100%"></img>
                    <br /><br />
                </div><br></br>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
                        <img src={foto3} height="70%"></img>
                    </div>
                    <div className="col-md-1">
                        <img id="img2" className="rounded-circle" src={foto2}></img>
                    </div>
                    <div className='col-md-7 bloco1'>
                        <h2>NÚCLEO DE ESTUDOS EM AGROECOLOGIA, EDUCAÇÃO E SOCIEDADE (NEAES)</h2>
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
                </div>
                
                   
            </div>
        </div>
    );
}

export default home;

