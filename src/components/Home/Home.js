import React from 'react';
import './Home.css';
import foto1 from '../../assets/images/foto1.png';
import foto2 from '../../assets/images/foto2.jpg';
import foto4 from '../../assets/images/foto4.png';

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
                </div>
                <div className="row justify-content-around">
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
                        <img src={foto4} height="60%"></img>
                    </div>
                    <div className="col-md-1 align-self-center">
                        <img id="img2" className="rounded-circle" src={foto2}></img>
                    </div>
                    <div className='col-md-7 bloco2'>
                        <h2>NÚCLEO DE ESTUDOS EM AGROECOLOGIA, EDUCAÇÃO E SOCIEDADE (NEAES)</h2>
                        <p>Esta Plataforma reúne os trabalhos do Núcleo de Estudos em Agroecologia, Educação e Sociedade (NEAES) do Instituto Federal de São Paulo (IFSP), Campus de Campinas. Também reúne os trabalhos desenvolvidos no âmbito dos projetos NESAN e NEA do IFSP, Campus de Campinas. Foi em 2016 que os primeiros passos foram dados na formação do que viria a se tornar o NEAES enquanto grupo de pesquisa vinculado ao Campus.<br></br><br></br> Atualmente o campus oferece os cursos de nível técnico integrado ao ensino médio, técnico concomitante/ subsequente e cursos tecnológicos em nível superior em diversas áreas, além disso, o NEAES integra uma importante rede de construção do conhecimento agroecológico, defesa e promoção da segurança alimentar na Região Metropolitana de Campinas ao lado de parceiros estratégicos. Apropriando-se de forma interdisciplinar das contribuições da Agroecologia num campus com este perfil, o NEAES canalizou seus esforços para articular tecnologias sociais, segurança alimentar e redes sociotécnicas.
                        </p>
                    </div>
                </div>
                <br></br>
                {/* <div className="bloco3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">É Ciência</h5>
                            <p className="card-text">Conjunto de conhecimentos técnicos, tecnológicos e sociopolíticos de natureza inter, multi e transdisciplinar articulados numa mesma matriz científica para o desenvolvimento de uma agricultura de base ecológica.</p>
                            <a href="#" className="btn btn-primary">Visitar</a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default home;

