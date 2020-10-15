import React from 'react';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';
import Carousel from '../../CarroseldeFotos/Carousel';

import './CursosFic.css';

import foto1 from '../../../assets/images/EducacaoPopular/CursosFic/foto1.jpg';
import foto1_edicao18 from '../../../assets/images/EducacaoPopular/CursosFic/Edicao2018/foto1.jpg';
import foto2_edicao18 from '../../../assets/images/EducacaoPopular/CursosFic/Edicao2018/foto2.jpg';
import foto3_edicao18 from '../../../assets/images/EducacaoPopular/CursosFic/Edicao2018/foto3.jpg';
import foto4_edicao18 from '../../../assets/images/EducacaoPopular/CursosFic/Edicao2018/foto4.jpg';
import foto5_edicao18 from '../../../assets/images/EducacaoPopular/CursosFic/Edicao2018/foto5.jpg';
import foto6_edicao18 from '../../../assets/images/EducacaoPopular/CursosFic/Edicao2018/foto6.jpg';

import foto1_2edicao from '../../../assets/images/EducacaoPopular/CursosFic/Edicao2/foto1.jpg';
import foto2_2edicao from '../../../assets/images/EducacaoPopular/CursosFic/Edicao2/foto2.jpg';
import foto3_2edicao from '../../../assets/images/EducacaoPopular/CursosFic/Edicao2/foto3.jpg';
import foto4_2edicao from '../../../assets/images/EducacaoPopular/CursosFic/Edicao2/foto4.jpg';
import foto5_2edicao from '../../../assets/images/EducacaoPopular/CursosFic/Edicao2/foto5.jpg';
import foto6_2edicao from '../../../assets/images/EducacaoPopular/CursosFic/Edicao2/foto6.jpg';

import foto1_3edicao from '../../../assets/images/EducacaoPopular/CursosFic/Edicao3/foto1.jpg';
import foto2_3edicao from '../../../assets/images/EducacaoPopular/CursosFic/Edicao3/foto2.jpg';
import foto3_3edicao from '../../../assets/images/EducacaoPopular/CursosFic/Edicao3/foto3.jpg';
import foto4_3edicao from '../../../assets/images/EducacaoPopular/CursosFic/Edicao3/foto4.jpg';
import foto5_3edicao from '../../../assets/images/EducacaoPopular/CursosFic/Edicao3/foto5.jpg';
import foto6_3edicao from '../../../assets/images/EducacaoPopular/CursosFic/Edicao3/foto6.jpg';

const cursosFic = () => {
    return (
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

                <div className="planosCinza pb-4">
                    <div className="row" style={{ marginTop: "30px" }}>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p className="card-body planos">CURSO FIC 2018 - 1° EDIÇÃO</p>
                            <div className="texto1">
                                <p>A primeira edição do curso FIC foi realizada no território do Assentamento Milton Santos, na cidade de Americana, Região Metropolitana de Campinas/ SP. As aulas ocorreram de agosto a dezembro de 2018 no barracão social do Assentamento e com o apoio da coordenação regional do MST e suas lideranças locais. Profissionais de diversas áreas complementares às de formação da equipe executora dos projetos CNPq foram convidados para contemplar o mapeamento temático inicial realizado com os agricultores e agricultoras do Milton Santos para conhecimento das demandas do território naquele momento.</p>
                                <p>Foram ofertadas 40 vagas, preenchidas em totalidade no início das aulas. Dadas as dificuldades de acompanhar todas as atividades do Tempo Escola, muitos agricultores e agricultoras desistiram ao longo do semestre diante de suas demandas cotidianas. Mesmo assim, 16 assentados concluíram a 1ª edição.</p>
                            </div>
                        </div>
                    </div>
                    <Carousel
                        foto1={foto1_edicao18} alt1={"Foto 1 Curso FIC Primeira Edição"}
                        foto2={foto2_edicao18} alt2={"Foto 2 Curso FIC Primeira Edição"}
                        foto3={foto3_edicao18} alt3={"Foto 3 Curso FIC Primeira Edição"}
                        foto4={foto4_edicao18} alt4={"Foto 4 Curso FIC Primeira Edição"}
                        foto5={foto5_edicao18} alt5={"Foto 5 Curso FIC Primeira Edição"}
                        foto6={foto6_edicao18} alt6={"Foto 6 Curso FIC Primeira Edição"}
                        id={"Edicao2018"}
                    />

                </div>

                <div className="row mb-4">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="card-body planos">CURSO FIC 2019 - 2º EDIÇÃO</p>
                        <div className="texto1">
                            <p>A segunda edição do curso foi realizada no primeiro semestre de 2019 e ofertada em parceria com o Sindicato dos Químicos Unificados de Campinas, EMBRAPA – Meio Ambiente (Jaguariúna – SP) e ocorreu no Centro de Formação e Lazer (Cefol), localizado na Rodovia D. Pedro I, km 118, Valinhos/SP, região próxima ao Acampamento Marielle Vive e de onde eram a maioria dos alunos e alunas matriculados nesta edição. Também participaram diferentes convidados e profissionais de áreas complementares as da equipe executora dos projetos CNPq que fomentaram a ação.</p>
                        </div>
                    </div>
                    <Carousel
                        foto1={foto1_2edicao} alt1={"Foto 1 Curso FIC Segunda Edição"}
                        foto2={foto2_2edicao} alt2={"Foto 2 Curso FIC Segunda Edição"}
                        foto3={foto3_2edicao} alt3={"Foto 3 Curso FIC Segunda Edição"}
                        foto4={foto4_2edicao} alt4={"Foto 4 Curso FIC Segunda Edição"}
                        foto5={foto5_2edicao} alt5={"Foto 5 Curso FIC Segunda Edição"}
                        foto6={foto6_2edicao} alt6={"Foto 6 Curso FIC Segunda Edição"}
                        id={"Edicao2"}
                    />
                </div>


                <div className="planosCinza pb-4 mb-5">
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
                    <Carousel
                        foto1={foto1_3edicao} alt1={"Foto 1 Curso FIC Terceira Edição"}
                        foto2={foto2_3edicao} alt2={"Foto 2 Curso FIC Terceira Edição"}
                        foto3={foto3_3edicao} alt3={"Foto 3 Curso FIC Terceira Edição"}
                        foto4={foto4_3edicao} alt4={"Foto 4 Curso FIC Terceira Edição"}
                        foto5={foto5_3edicao} alt5={"Foto 5 Curso FIC Terceira Edição"}
                        foto6={foto6_3edicao} alt6={"Foto 6 Curso FIC Terceira Edição"}
                        id={"Edicao3"}
                    />

                </div>

            </div>
        </div>
    )
}

export default cursosFic;