import React from 'react';
import Projetos from '../Projetos/Projetos';
import TopoDaPagina from '../TopoDaPagina/TopoDaPagina';

import './EducacaoPopular.css';

import foto1 from '../../assets/images/EducacaoPopular/Introducao/EducacaoPopular.png';
// import foto from '.._'
import foto2 from '../../assets/images/EducacaoPopular/Introducao/EducacaoPopular-01.png';
import foto3 from '../../assets/images/EducacaoPopular/Introducao/EducacaoPopular-02.png';
import foto4 from '../../assets/images/EducacaoPopular/Introducao/EducacaoPopular-03.png';
import foto5 from '../../assets/images/EducacaoPopular/Introducao/EducacaoPopular-04.png';
import foto6 from '../../assets/images/EducacaoPopular/Introducao/EducacaoPopular-05.png';
import foto7 from '../../assets/images/EducacaoPopular/Introducao/EducacaoPopular-06.jpg';

const educacaoPopular = () =>{
    const projeto = [
        {titulo: 'HISTÓRIAS DE VIDA', link:'/ephistoriasdevida', alt: 'Uma aula de Curso FIC no Assentamento Milton Santos'},
        {titulo: 'CURSOS FIC', link:'/epcursosfic', alt: 'Uma aula de Curso FIC no Assentamento Milton Santos'},
        {titulo: 'METODOLOGIAS PARTICIPATIVAS', link:'/epmetodologiasparticipativas', alt: ''},
        {titulo: 'FORMAÇÕES', link:'/epformacoes', alt: ''},
        {titulo: 'DIAGNÓSTICO RURAL', link:'/epdiagnosticoruralparticipativo', alt: ''},
        {titulo: 'VISITAS E VIVÊNCIAS', link:'/epvisitasevivencias', alt: 'Visita de estudantes ao Assentamento Milton Santos'},
        {titulo: 'FESTIVAL DE AGROECOLOGIA', link:'/epfestivalagroecologia', alt: 'Festival de Agroecologia'}
    ]

    return(
        <div>
            <TopoDaPagina menu="Educação Popular" submenu=""></TopoDaPagina>
            <div className="container-fluid EducacaoPopular">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto1} width="100%" alt={"Conversa no Assentamento"}></img>
                        <div className="texto1">
                            <p>O desenvolvimento de estratégias sociotécnicas para a agricultura de base ecológica e a partir dos princípios da Agroecologia podem ser bastante significativos quando articulados aos princípios pedagógicos da Educação Popular. As intervenções técnico-tecnológicas, as ações de ensino e extensão empreendidas com a mediação do NEAES através dos trabalhos em SAN e Agroecologia buscam esta articulação na perspectiva de dinamizar um conjunto de saberes coletivos e direcionados pelos próprios sujeitos por meio de sua atuação política para o encaminhamento de soluções.</p>
                            <p>O intercâmbio de saberes entre os membros da equipe NEAES com os agricultores e agricultoras também se demonstra fundamental para a concepção, ampliação e manutenção de Tecnologias Sociais no território do Assentamento, expandindo o escopo das intervenções para uma rede sociotécnica que é ao mesmo tempo política e contra-hegemônica para a criação e manutenção de novos circuitos produtivos e comerciais que realmente democratizem o conhecimento e o acesso, não só às inovações técnico-tecnológicas, mas sobretudo aos alimentos de alto valor nutritivo e livres de contaminação agroquímica produzidos por estes sujeitos.</p>
                            <p>Todos os projetos que geraram intervenções técnicas e tecnológicas foram iniciados em trabalhos exploratórios de extensão, como vivências e acompanhamento de reuniões e encontros dos assentados e assentadas em seu cotidiano de auto-organização e produção pela Cooperativa Cooperflora. Nestes trabalhos, estudantes e pesquisadores são apresentados aos princípios da Educação Popular da escuta atenta e participativa para que, a partir do olhar dos próprios sujeitos, possam vislumbrar em que medida há possibilidade e/ ou necessidade de contribuição nas demandas identificadas.</p>
                            <p>O Diagnóstico Rural Participativo (DRP) também tem sido utilizado como ferramenta metodológica de auxílio nestes acompanhamentos, com o objetivo de facilitar a identificação destas demandas e a organização dos saberes em encaminhamentos práticos. Através do resultado do DRP, as equipes que constituem as linhas de trabalho do NEAES se orientam para assimilar qual o papel que lhes cabe neste intercâmbio e desenhando propostas de intervenção.</p>
                            <p>Estas propostas são apresentadas em processos de Validação Participativa junto aos agricultores e agricultoras envolvidos no DRP realizado, em que sugestões e direcionamentos são apontados e as decisões para desenvolvimento de projetos práticos tomadas coletivamente, como o escopo para as ações de formação inicial e continuada, elaboração de dispositivos técnicos e ferramentas tecnológicas.</p>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>

                <div className="album py-4 fundoImagem" >
                    <div className="container">
                        <div className="row titulo2">
                            <div className="col-md-12">
                                <p>SAIBA MAIS SOBRE O ASSENTAMENTO</p>
                            </div>
                        </div>

                        <div className="row">
                            <Projetos foto={foto2} titulo={projeto[0].titulo} link={projeto[0].link} alt={projeto[0].alt}></Projetos>
                            <Projetos foto={foto2} titulo={projeto[1].titulo} link={projeto[1].link} alt={projeto[1].alt}></Projetos>
                            <Projetos foto={foto3} titulo={projeto[2].titulo} link={projeto[2].link} alt={projeto[2].alt}></Projetos>
                        </div>

                        <div className="row">
                            <Projetos foto={foto4} titulo={projeto[3].titulo} link={projeto[3].link} alt={projeto[3].alt}></Projetos>
                            <Projetos foto={foto5} titulo={projeto[4].titulo} link={projeto[4].link} alt={projeto[4].alt}></Projetos>
                            <Projetos foto={foto6} titulo={projeto[5].titulo} link={projeto[5].link} alt={projeto[5].alt}></Projetos>
                        </div>

                        <div className="row">
                            <Projetos foto={foto7} titulo={projeto[6].titulo} link={projeto[6].link} alt={projeto[6].alt} ></Projetos>
                        </div>
                    </div>  
                </div>

            </div>
        </div>
    )
}

export default educacaoPopular;