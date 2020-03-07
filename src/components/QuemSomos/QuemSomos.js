import React from 'react';
import SaibaMais from '../SaibaMais/SaibaMais';
import Projetos from '../Projetos/Projetos';
import TopoDaPagina from '../TopoDaPagina/TopoDaPagina';

import './QuemSomos.css';

import foto1 from '../../assets/images/QuemSomos/Introducao/banner-quemsomos.png';
import foto2 from '../../assets/images/QuemSomos/Introducao/quemsomos-03.png';
import foto3 from '../../assets/images/QuemSomos/Introducao/quemsomos-02.png';

const quemSomos = () =>{
    const conteudo = <ul className="card-text">
        <li><a href="http://dgp.cnpq.br/dgp/espelhogrupo/272964#linhaPesquisa" target="_blank" rel="noopener noreferrer">Acesso ao Diretório de Grupos de Pesquisa do CNPq</a></li>
    </ul>

    const projeto = [
        {titulo: 'EQUIPES', link: '/qsequipes'},
        {titulo: 'IND. ACADÊMICOS', link: '/qsindicadoresacademicos'},
        {titulo: 'PARCERIAS', link: '/qsparcerias'}
    ]

    return(
        <div>
            <TopoDaPagina menu="Quem Somos" submenu=""></TopoDaPagina>
            <div className="container-fluid QuemSomos">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto1} width="100%" alt={"Banner Neaes"}></img>
                        <div className="texto1">
                            <p>O NEAES é formado por professores pesquisadores, estudantes, bolsistas e profissionais técnicos multi e interdisciplinares, tanto do quadro de servidores e alunos do IFSP, Campus de Campinas, quanto de outras instituições.</p>
                            <p>Os membros do grupo estão distribuídos entre as três grandes linhas de pesquisa que conduzem os projetos: Economia política, movimentos sociais, feminismo, educação e comunicação popular; Tecnologias sustentáveis, produção agroecológica e segurança alimentar e Novas tecnologias, redes, comercialização e reforma agrária.</p>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                
                <div className="planosCinza">
                    <div className="row" style={{marginTop: "30px"}}>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p className="card-body planos">LINHAS DE PESQUISA</p>
                            <div className="texto1">
                                <p><strong>Economia política, movimentos sociais, feminismo, educação e comunicação popular</strong></p>
                                <p><b>Grupo:</b> Núcleo de Estudos em Agroecologia, Educação e Sociedade - NEAES</p>
                                <p><b>Objetivo:</b> Pesquisar os fundamentos econômico-políticos de fomento à produção de alimentos, a reestruturação produtiva sustentável no campo, as alternativas da produção de base agroecológica, os movimentos sociais do campo e as políticas de reforma agrária, o papel das mulheres na agroecologia e as formas de letramento e comunicação popular nestes territórios. Promover intervenções sócioeducativas na perspectiva de educação popular para a construção do conhecimento agroecológico.</p>
                                <hr style={{marginTop: "50px",marginBottom: "50px"}} color="#707070"></hr>
                                
                                <p><strong>Novas tecnologias, redes, comercialização e reforma agrária</strong></p>
                                <p><b>Grupo:</b> Núcleo de Estudos em Agroecologia, Educação e Sociedade - NEAES</p>
                                <p><b>Objetivo:</b> Alimentar uma Plataforma sócioeducativa com as informações, projetos e conhecimentos científicos produzidos pelas respectivas linhas; pesquisar as possibilidades para formação de redes políticas e de comercialização para alimentos orgânicos na RMC; desenvolver ferramentas facilitadoras para arranjos comerciais diretos entre produtores e consumidores; elaborar mapas geográficos e banco de dados; divulgar a importância político-econômica da reforma agrária para desenvolvimento rural sustentável.</p>
                                <hr style={{marginTop: "50px",marginBottom: "50px"}} color="#707070"></hr>
                            
                                <p><strong>Tecnologias sustentáveis, produção agroecológica e segurança alimentar</strong></p>
                                <p><b>Grupo:</b> Núcleo de Estudos em Agroecologia, Educação e Sociedade - NEAES</p>
                                <p><b>Objetivo:</b> Explorar a produção agroecológica para intervenções técnicas de melhoramento de processos e produtos; desenvolver tecnologias sustentáveis para a gestão eficiente dos recursos naturais; pesquisar os processos bioquímicos e microbiológicos dos alimentos para assegurar condições higiênico-sanitárias adequadas; promover o intercâmbio de conhecimentos científicos da engenharia elétrica, microeletrônica, programação, bioquímica e microbiologia com os conhecimentos técnicos e culturais do agricultor.</p>                        </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <SaibaMais conteudo={conteudo}></SaibaMais>
                </div>

                <div className="album py-4 fundoImagem" style={{marginTop: '-10px'}}>
                    <div className="container">
                        <div className="row titulo2">
                            <div className="col-md-12">
                                <p>SAIBA MAIS SOBRE O NEAES</p>
                            </div>
                        </div>
                        <div className="row">
                            <Projetos foto={foto2} titulo={projeto[0].titulo} link={projeto[0].link}></Projetos>
                            <Projetos foto={foto3} titulo={projeto[1].titulo} link={projeto[1].link}></Projetos>
                            <Projetos foto={foto2} titulo={projeto[2].titulo} link={projeto[2].link}></Projetos>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default quemSomos;