import React from 'react';

import './IndicadoresAcademicos.css';

import foto1 from '../../../assets/images/QuemSomos/IndicadoresAcademicos/quemsomos-02.png';
import foto2 from '../../../assets/images/QuemSomos/IndicadoresAcademicos/icone.png';

const indicadoresAcademicos = () =>{
    return(
        <div className="container-fluid IndicadoresAcademicos">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <img src={foto1} width="100%" alt={"IFSP Campinas"}></img>
                    <div className="texto1">
                        <p className="titulo3"><img src={foto2} alt={"Icone_I"}></img> Conheça os Indicadores Acadêmicos</p>
                        <p>Aqui poderia vir uma breve explicação sobre o que é essa página, qual é o conteúdo que a pessoa vera abaixo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat:</p>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
 
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4">
                    <ul className="texto1">
                        <li><a href="/" rel="noopener noreferrer">Organização de eventos, 2018</a></li>
                        <li><a href="/" rel="noopener noreferrer">Organização de eventos, 2019</a></li>
                        <li><a href="/" rel="noopener noreferrer">Publicações e Apresentações de Trabalho 2017</a></li>
                        <li><a href="/" rel="noopener noreferrer">Publicações e Apresentações de Trabalho 2018</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul className="texto1">
                        <li><a href="/" rel="noopener noreferrer">Publicações e Apresentações de Trabalho 2019</a></li>
                        <li><a href="/" rel="noopener noreferrer">Participações em eventos</a></li>
                        <li><a href="/" rel="noopener noreferrer">Trabalhos Acadêmicos Vinculados</a></li>
                        <li><a href="/" rel="noopener noreferrer">Destaques</a></li>
                    </ul>
                </div>
                <div className="col-md-2"></div>
            </div>
 
            <div className="planosCinza">
                <div className="row" style={{marginTop: "30px",paddingBottom: "50px"}}>
                    <div className="col-md-2" ></div>
                    <div className="col-md-8">
                        <p className="planos">ORGANIZAÇÃO DE EVENTOS, 2018</p>
                        <div className="texto1">
                            <ol>
                                <li>Visita de Campo à Produção Agroecológica do Assentamento Milton Santos - vivências da agricultura familiar e desenvolvimento rural sustentável, 27 de abril de 2018</li>
                                <li>Segurança Alimentar e Culinária Sustentável. Local de Realização: Assentamento Milton Santos, 29 de julho de 2018.</li>
                                <li>Semana Nacional de Ciência e Tecnologia - Ciência para redução das desigualdades – Campus Campinas, 15 a 19 outubro de 2018.</li>
                                <li>Mutirão saúde da família com os alunos da Liga Acadêmica de Medicina de Família e Comunidade da Faculdade de Medicina São Leopoldo Mandic. Local de Realização: Assentamento Milton Santos, 23 de novembro de 2018.</li>
                                <li>Resolução de conflitos e comunicação comunitária. Local de Realização: Assentamento Milton Santos, 30 de novembro de 2018.</li>
                                <li>I Festival de Agroecologia e Ecoturismo do Leste Paulista, Valinhos - CEFOL (Centro de Formação e Lazer do Sindicato do Quimicos Unificados), 1 e 2 de dezembro de 2018.</li>
                            </ol>
                        </div>                        
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2" ></div>
                <div className="col-md-8">
                    <p className="planos">ORGANIZAÇÃO DE EVENTOS, 2019</p>
                    <div className="texto1">
                        <ol>
                            <li>Abelhas Sem Ferrão - Prof. Ricardo Camargo // Atividade de Meliponicultura com apoio da Associação de Meliponicultores do Estado de São Paulo - AMESAMPA. Local de Realização: CEFOL, no dia 15 de março de 2019.</li>
                            <li>Sistemas agroflorestais e segurança alimentar - João Canuto, Embrapa Jaguariúna. Local de Realização: CEFOL, no dia 30 de março de 2019.</li>
                            <li>Impactos dos Organismos Geneticamente Modificados (OGMs) - José Maria Gusman Ferraz, da UNIARA. Local de Realização: CEFOL, no dia 13 de abril de 2019.</li>
                            <li>Agroecologia e Redes Sociotécnicas - Luã Trento. Local de Realização: CEFOL, no dia 27 de abril de 2019</li>
                            <li>Planejamento e gestão de grupos de consumo em assentamentos de reforma agrária - Ariele Contrigiani. Local de Realização: CEFOL, no dia 3 de maio de 2019</li>
                            <li>Segurança Alimentar e boas práticas higiênico-sanitárias - Carla Caratin. Local de Realização: CEFOL, no dia 11 de maio de 2019.</li>
                            <li>Mulheres e agroecologia - Sheila Saori. Local de Realização: CEFOL, no dia 28 de junho de 2019</li>
                            <li>II Festival de Agroecologia e Ecoturismo do Leste Paulista, Valinhos - CEFOL, nos dias 05 e 06 de outubro de 2019.</li>
                        </ol>
                    </div>                        
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="planosCinza">
                <div className="row" style={{marginTop: "30px",paddingBottom: "50px"}}>
                    <div className="col-md-2" ></div>
                    <div className="col-md-8">
                       <p className="planos">PUBLICAÇÕES E APRESENTAÇÕES DE TRABALHO 2017</p>
                        <div className="texto1">
                            <ol>
                                <li>BATISTA, Erika; ELEUTÉRIO, Chrystian Daniel. A contribuição da agroecologia no âmbito da economia política, tecnologias sustentáveis e educação alimentar. IV Congresso de Extensão e IV Mostra de Arte e Cultura, Campus Cubatão-SP, 2017, Brasil.</li>
                                <li>BATISTA, Erika; ROCHA, Herivelto Fernandes. A contribuição das atividades de extensão no IFSP para o desenvolvimento de práticas socioeducativas no âmbito da Agroecologia. VI Congresso Latino – Americano de Agroecologia, X Congresso Brasileiro de Agroecologia, V Seminário de Agroecologia do DF e entorno. 12 a 15 de setembro de 2017, Brasília/DF.</li>
                                <li>BATISTA, Erika. A alternativa agroecológica em assentamentos rurais do MST: economia política da sustentabilidade e resistência no Brasil. XXXI Congresso da Associação Latino-americana de Sociologia - Alas 2017, Montevideo - Uruguai, Uruguai, 2017, p.1824. (ISBN 978-9974-8434-7-9)</li>
                                <li>ELEUTÉRIO, Chrystian Daniel; LEOPOLDO, Ruan de Paiva; BATISTA, Erika; BARTANTE, Celso. Irrigador automático sustentável para produções agroecológicas. II Mostra de Trabalhos Acadêmicos. IFSP, Campus de Campinas, dezembro, 2017.</li>
                                <li>ELEUTÉRIO, Chrystian Daniel; LEOPOLDO, Ruan de Paiva; BATISTA, Erika. Sustentabilidade, agroecologia e educação no âmbito da economia política da produção de alimentos. II Mostra de Trabalhos Acadêmicos. IFSP, Campus de Campinas, dezembro, 2017.</li>
                            </ol>
                        </div>                        
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2" ></div>
                <div className="col-md-8">
                    <p className="planos">PUBLICAÇÕES E APRESENTAÇÕES DE TRABALHO 2018</p>
                    <div className="texto1">
                        <ol>
                            <li>ANDRADE, Nathan Silva de; ROCHA, Herivelto Fernandes. Mapeamento da produção de alimentos do assentamento Milton Santos - Americana - SP. 9º Congresso de Inovação, Ciência e Tecnologia do IFSP - CONICT. Boituva, 2018. (ISSN 2178-9959)</li>
                            <li>BATISTA, Erika; ROCHA, Herivelto. Desenvolvimento do DATALUTA Produção. X Congreso de la Asociación Latinoamericana de Sociología Rural, 25 a 30 de noviembre, 2018, Montevideo, Uruguay.</li>
                            <li>BATISTA, Erika; ROCHA, Herivelto Fernandes; SANTOS, Luiz Roberto da Cruz; SANTOS, Francielly Prado. Economia política, agroecologia e tecnologias sociais na produção de alimentos do Brasil: estratégias socioeducativas para o desenvolvimento rural sustentável na RMC. IV Congresso de Educação Profissional e Tecnológica, Instituto Federal de Educação, Ciência e Tecnologia de São Paulo, CONEPT. Araraquara - SP, 2018. (ISSN 2448-2994)</li>
                            <li>BATISTA, Erika; ROCHA, Herivelto Fernandes. A contribuição das atividades de extensão no IFSP para o desenvolvimento de práticas socioeducativas no âmbito da Agroecologia. Cadernos de Agroecologia. Anais do VI CLAA, XCBA e VSEMDF, Vol 13, nº 1, Jul. 2018. (ISSN 2236-7934)</li>
                            <li>BATISTA, Erika; ROCHA, Herivelto Fernandes. A contribuição das atividades de extensão no IFSP para o desenvolvimento de práticas socioeducativas no âmbito da Agroecologia. VI Congresso Latino – Americano de Agroecologia, X Congresso Brasileiro de Agroecologia, V Seminário de Agroecologia do DF e entorno. 12 a 15 de setembro de 2017, Brasília/DF.</li>
                            <li>BATISTA, Erika; SALAZAR, Zady Castañeda; BARBANTE, Celso C. Agroecologia, tecnologias sociais e estratégias para o desenvolvimento rural sustentável. XII Jornadas Lationamericanas de Estudios Sociales de la Ciencia y la Tecnología. Santiago de Chile, 18 a 20 de julio, 2018.</li>
                            <li>LEOPOLDO, Ruan de Paiva; BATISTA, Erika; DUARTE, Edson Anício. Irrigador automatizado para Assentamentos de reforma agrária. 9º Congresso de Inovação, Ciência e Tecnologia do IFSP - CONICT. Boituva, 2018. (ISSN 2178-9959)</li>
                            <li> MAFRA, Gabrielly Barreiro; BATISTA, Erika; ALVES, Mariana Saragiotto S. Análise das condições higiênico-sanitárias no cultivo de alface (Lactuca sativa) orgânica e convencional em propriedades rurais da região de Campinas. 9º Congresso de Inovação, Ciência e Tecnologia do IFSP - CONICT. Boituva, 2018. (ISSN 2178-9959)</li>
                            <li>SALAZAR, Zady Castaneda. Aplicativo Agrocomunicação: instrumento de comercialização entre produtores e consumidores de produtos sem agrotóxicos. 9º Congresso de Inovação, Ciência e Tecnologia do IFSP - CONICT. Boituva, 2018. (ISSN 2178-9959)</li>
                        </ol>
                    </div>                        
                </div>
                <div className="col-md-2"></div>
            </div>



            <div className="planosCinza">
                <div className="row" style={{marginTop: "30px",paddingBottom: "50px"}}>
                    <div className="col-md-2" ></div>
                    <div className="col-md-8">
                        <p className="planos">PUBLICAÇÕES E APRESENTAÇÕES DE TRABALHO 2019</p>
                        <div className="texto1">
                            <ol>
                                <li>BATISTA, Estela Pereira; MOREIRA, Alexsander Fonseca; PEREIRA, Guilherme Henrique Alves; DE OLIVEIRA, Ítallo de Jesus Guimarães; LIMA, Jessé Ferreira Lima. Criação de audiovisual sobre a produção alimentar do assentamento Milton Santos: conhecendo produto e produtor. Cadernos de Resumos da IX Jornada de estudos em assentamentos rurais. Campinas, 12 a 14 de junho 2019. Campinas, SP: UNICAMP/ FEAGRI, 2019. (ISBN 978-85-99678-11-4).</li>
                                <li>BUCALON, Gabriel; ANDRADE, Winicius O.; SALAZAR, Zady Castañeda; DE OLIVEIRA, Fabio Feliciano. Aplicativo Agrocomunicação: instrumento de comercialização entre produtores e consumidores de produtos sem agrotóxicos. Cadernos de Resumos da IX Jornada de estudos em assentamentos rurais. Campinas, 12 a 14 de junho 2019. Campinas, SP: UNICAMP/ FEAGRI, 2019. (ISBN 978-85-99678-11-4)</li>
                                <li>CONTRIGIANI, Ariele Carolina; DE PAULA, Fernanda Folster. A produção agroecológica e comercialização em circuitos curtos de alimentação da Cooperflora e o protagonismo das mulheres. Cadernos de Resumos da IX Jornada de estudos em assentamentos rurais. Campinas, 12 a 14 de junho 2019. Campinas, SP: UNICAMP/ FEAGRI, 2019. (ISBN 978-85-99678-11-4)</li>
                                <li>CONTRIGIANI, Ariele Carolina; REZENDE, Renan Estevão; SOUZA, Fernando Cesar de Oliveira. Agricultura familiar: caminhos da luta pela terra e permanência em assentamentos de reforma agrária. Cadernos de Resumos da IX Jornada de estudos em assentamentos rurais. Campinas, 12 a 14 de junho 2019. Campinas, SP: UNICAMP/ FEAGRI, 2019. (ISBN 978-85-99678-11-4)</li>
                                <li>DE ANDRADE, Nathan Silva; ROCHA, Herivelto Fernandes. Uso de software livre no mapeamento da produção agroecológica do assentamento Milton Santos - Americana / SP. IX Jornada de estudos em assentamentos rurais. Campinas, 2019.</li>
                                <li>DE FREITAS, Samuel Vicente Dias; BATISTA, Erika; DOS SANTOS, Franciely Prado. Economia política, agroecologia e tecnologias sociais para o desenvolvimento rural sustentável na RMC. IX Jornada de estudos em assentamentos rurais. Campinas, 2019.</li>
                            </ol>
                        </div>                        
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2" ></div>
                <div className="col-md-8">
                    <p className="planos">PARTICIPAÇÕES EM EVENTOS</p>
                    <div className="texto1">
                        <ol>
                            <li>XXXI Congresso da Associação Latino-americana de Sociologia - Alas 2017, realizado em Montevideu, Uruguai.</li>
                            <li>I Workshop AGROECOLOGIA E REDES DE CONSUMO CONSCIENTE. Campinas, 2017.</li>
                            <li>Seminário Internacional da Rede Latino-americana de Soberania e Segurança Alimentar e Nutricional (SSAN), Brasília-DF, maio de 2018.</li>
                            <li>Greenk Tech Show, maio de 2018.</li>
                            <li>XIX Encontro Nacional de Geógrafos (ENG) – “Pensar e Fazer a Geografia brasileira no século XXI: escalas, conflitos socioespaciais e crise estrutural na nova geopolítica mundial”, julho de 2018, na Universidade Federal da Paraíba.</li>
                            <li>X Congreso de la Asociación Latinoamericana de Sociología Rural, Montevideo, novembro, 2018.</li>
                            <li> IV Congresso de Educação Profissional e Tecnológica do IFSP, Câmpus Araraquara, 2018. 8. 9 ° Congresso de Inovação, Ciência e Tecnologia do IFSP – CONICT. IFSP, Câmpus Boituva, de 11 a 13 de dezembro de 2018.</li>
                            <li>III Jornadas Universitárias em Defesa da Reforma Agrária - Realização GEPEDISC/UNICAMP - Mesa redonda com o tema "Mulheres, agroecologia e luta pela terra" - maio de 2019.</li>
                            <li>Programa Aulas Abertas em Agroecologia, Rede de Agroecologia da Unicamp, setembro de 2019.</li>
                        </ol>
                    </div>                        
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="planosCinza">
                <div className="row" style={{marginTop: "30px",paddingBottom: "50px"}}>
                    <div className="col-md-2" ></div>
                    <div className="col-md-8">
                       <p className="planos">TRABALHOS ACADÊMICOS VINCULADOS</p>
                        <div className="texto1">
                            <ol>
                                <li> MEDINA, Rodolfo. Movimento dos Trabalhadores Rurais sem Terra, Multiletramento e Letramento Social: educação não formal e popular no Assentamento Milton Santos. TCC de Especialização. Curso de Formação Docente em Educação para Inserção Social. IFSP, Campus de Campinas, 2019.</li>
                                <li>2- PERES, Mayara de Oliveira. Tempos de trabalho e de lazer no Assentamento Milton Santos: o caso das mulheres. TCC de Especialização. Curso de Formação Docente em Educação para Inserção Social. IFSP, Campus de Campinas, 2019.</li>
                            </ol>
                        </div>                        
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2" ></div>
                <div className="col-md-8">
                    <p className="planos">DESTAQUES</p>
                    <div className="texto1">
                        <ol>
                            <li>IX Mostra de Ciência e Tecnologia da Escola Açai – MCTEA e Mostra Científica Norte-Nordeste – Mocinn. Abaetetuba – Pará, de 3 a 7 de dezembro de 2018. 2° Lugar com o projeto “TECNOLOGIAS SOCIAIS, REDES SOCIOTÉCNICAS E AGROECOLOGIA: IRRIGADOR AUTOMATIZADO DE BAIXO CUSTO PARA AGRICULTURA FAMILIAR DE REFORMA AGRÁRIA”, do estudante Ruan de Paiva Leopoldo.</li>
                            <li>VI Mostra de Ciências e Tecnologia Instituto 3M, Centro Esportivo do Sesi, Sumaré, 29 a 30 de novembro de 2018. Professor finalista com o projeto “Irrigador automatizado para agricultura familiar”, do estudante Ruan de Paiva Leopoldo.</li>
                            <li>17ª Feira Brasileira de Ciências e Engenharia, InovaUSP - Centro de Inovação da Universidade de São Paulo, 19 a 22 de março de 2019, co-orientadora do projeto finalista "Tecnologias sociais e Agroecologia: irrigador automatizado a baixo custo para agricultura familiar de reforma agrária", do estudante Ruan de Paiva Leopoldo.</li>
                        </ol>
                    </div>                        
                </div>
                <div className="col-md-2"></div>
            </div>

        </div>
    )
}

export default indicadoresAcademicos;