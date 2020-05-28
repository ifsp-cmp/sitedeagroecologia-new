import React from 'react';
import SaibaMais from '../../SaibaMais/SaibaMais';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';

import './CursosFic.css';

import foto1 from '../../../assets/images/EducacaoPopular/CursosFic/foto_2.jpg';

const cursosFic = () =>{
    const conteudo = <ul>
        <li><a href="https://drive.google.com/drive/folders/1GOsbVs9AztdHoyj6SBR47n_hBz86X-Lk" target="_blank" rel="noopener noreferrer">Site com informações do curso.</a></li>
    </ul>

    return(
        <div>
            <TopoDaPagina menu="Educação Popular" submenu="Cursos FIC"></TopoDaPagina>
            <div className="container-fluid CursosFic">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto1} width="100%" alt={"Curso Fic"}></img>
                        <div className="texto1">
                            <p>A proposta do Curso de Formação Inicial e Continuada (FIC) “Segurança Alimentar e Tecnologias Sustentáveis para Agricultura Familiar e Agroecologia” foi elaborada no âmbito dos projetos fomentados pelo CNPq para implantação do NEA e NESAN. O objetivo geral do curso foi difundir os princípios da Agroecologia, Tecnologias Sociais e Segurança e Soberania Alimentar e Nutricional (SSAN) para a garantia do Direito Humano à Alimentação Adequada (DHAA) e estímulo da produção orgânica e agroecológica das comunidades rurais e urbanas, envolvendo agricultores familiares de assentamentos de reforma agrária e grupos comunitários periurbanos da Região Metropolitana de Campinas.</p>
                            <p>A metodologia de ensino utilizada foi a Pedagogia da Alternância com a composição dos conteúdos alternados entre os chamados “Tempo Escola (TE) / Tempo Comunidade (TC) ou Social (TS)”, adotada nas escolas da Via Campesina, do Movimento dos Trabalhadores Rurais Sem Terra (MST), das Casas Familiares Rurais (CFRs) e outros coletivos organizados em torno da Educação do Campo. A organização didática e pedagógica partiram do trabalho enquanto princípio educativo que, em síntese, pressupõe formas de ensino-aprendizagem que perpassem as estruturas do trabalho produtivo e superem a divisão intelectual e manual do trabalho, levando à auto-organização dos alunos e a gestão democrática dos conteúdos com a participação de toda a comunidade envolvida com a escola.</p>
                            <p>As atividades desenvolvidas nas edições do curso foram organizadas pelos grupos de pesquisa Núcleo de Estudos em Agroecologia, Educação e Sociedade (NEAES) e pelo Laboratório de Uso das TICs (L@ITEC), coordenados pela professora Erika Batista e Márcio André Miranda, respectivamente. A carga horária total do curso foi de 90 horas, distribuídas entre 60 horas de Tempo Escola e 30 horas de Tempo Comunidade.</p>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>

                <div className="planosCinza">
                    <div className="row" style={{marginTop: "30px"}}>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p className="card-body planos">CURSO FIC 2018 - 1° EDIÇÃO</p>
                            <div className="texto1">
                                <p>A primeira edição do curso FIC foi realizada no território do Assentamento Milton Santos, na cidade de Americana, Região Metropolitana de Campinas/ SP. As aulas ocorreram de agosto a dezembro de 2018 no barracão social do Assentamento e com o apoio da coordenação regional do MST e suas lideranças locais. Profissionais de diversas áreas complementares às de formação da equipe executora dos projetos CNPq foram convidados para contemplar o mapeamento temático inicial realizado com os agricultores e agricultoras do Milton Santos para conhecimento das demandas do território naquele momento.</p>
                                <p>Foram ofertadas 40 vagas, preenchidas em totalidade no início das aulas. Dadas as dificuldades de acompanhar todas as atividades do Tempo Escola, muitos agricultores e agricultoras desistiram ao longo do semestre diante de suas demandas cotidianas. Mesmo assim, 16 assentados concluíram a 1ª edição.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="card-body planos">CURSO FIC 2019 - 2º EDIÇÃO</p>
                        <div className="texto1">
                            <p>A segunda edição do curso foi realizada no primeiro semestre de 2019 e ofertada em parceria com o Sindicato dos Químicos Unificados de Campinas, EMBRAPA – Meio Ambiente (Jaguariúna – SP) e ocorreu no Centro de Formação e Lazer (Cefol), localizado na Rodovia D. Pedro I, km 118, Valinhos/SP, região próxima ao Acampamento Marielle Vive e de onde eram a maioria dos alunos e alunas matriculados nesta edição. Também participaram diferentes convidados e profissionais de áreas complementares as da equipe executora dos projetos CNPq que fomentaram a ação.</p>
                        </div>
                    </div>
                </div>
                <SaibaMais conteudo={conteudo}></SaibaMais>

                <div className="planosCinza">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p className="card-body planos">CURSOS FIC 2019 - 3° EDIÇÃO</p>
                            <div className="texto1">
                                <p>A terceira edição do curso ocorreu na sede do IFSP, Campus de Campinas, na região do Campo Grande, no período de agosto a dezembro de 2019. As atividades foram realizadas em parceria com o Departamento de Segurança Alimentar e Nutricional da Prefeitura Municipal de Campinas com o objetivo de apoiar as ações de Educação Alimentar e Nutricional no território, marcado por alta vulnerabilidade sócio alimentar no Município. O plano de ensino foi direcionado em reuniões anteriores com a comunidade local para o estabelecimento de uma rede sociotécnica de criação e manutenção de hortas orgânicas e agroecológicas comunitárias.</p>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default cursosFic;