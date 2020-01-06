import React from 'react';

import './Planapo.css';

import foto1 from '../../assets/images/PN/PLANAPO/PLANAPO.png';
import foto2 from '../../assets/images/PN/foto2.png';

const Planapo = () =>{
    return(
        <div className="container-fluid Planapo">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <img src={foto1} width="100%" alt={"HortaNoAssentamento"}></img>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 texto1">
                <p>Um dos principais instrumentos da Política Nacional de Agroecologia e Produção Orgânica (PNAPO) é o <strong>Plano Nacional de Agroecologia e Produção Orgânica (PLANAPO)</strong>, conhecido como <strong>Brasil Agroecológico</strong>. </p>
                <p>Sua efetivação proporcionou a promoção do desenvolvimento rural sustentável, impulsionado pelas crescentes preocupações das organizações sociais do campo e da floresta, e da sociedade em geral, a respeito da necessidade de se produzir alimentos saudáveis conservando os recursos naturais. </p>
                <p>Promovendo o estreito diálogo e articulação com os estados e municípios, de forma a integrar políticas setoriais de incentivo, fortalecimento e ampliação dos sistemas de produção orgânicos e de base agroecológica com os processos de planejamento e implementação de políticas locais.</p>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body fundo_cinza">
                            <h4 className="card-title titulo3"><img src={foto2} alt={"Icone_Lâmpada"}></img> Saiba mais!</h4>
                            <p className="card-text">
                                <ul>
                                 <li><a href="http://www.agroecologia.gov.br/plano" target="_blank" rel="noopener noreferrer">Plano Nacional de Agroecologia e Produção Orgânica (Planapo)</a></li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    {/* <hr width="100%" color="#77B81E" size="5px"></hr> */}
                </div>
                <div className="col-md-2"></div>
            </div>
            
            <div className="planosCinza">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="card-body planos">PLANAPO 2013-2015</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 texto1">
                    <p>Embora a existência de um plano nacional para a agroecologia e produção orgânica seja uma conquista recente, o <strong>PLANAPO 2013-2015</strong> se destacou como uma experiência bem-sucedida de construção participativa em política pública, que promoveu avanços na criação, articulação e adequação de programas e ações, em nível nacional, no macrocampo da agroecologia, o que se refletiu sobre o planejamento de entes subnacionais, em diversos estados. Além disso, o Planapo contribuiu para a maior inserção do tema nos processos internos de órgãos públicos, operadores de crédito, instituições de ensino, pesquisa e extensão, nos diversos níveis federativos. </p>
                    <p>Durante a vigência do Plano, a <strong>CNAPO</strong> – instância de gestão do Plano integrada por quatorze representantes da sociedade civil e quatorze do governo - e a <strong>CIAPO</strong> – composta por representantes de órgãos e entidades públicas federais - tiveram atuação decisiva na promoção de articulação institucional e na convergência otimizada de recursos públicos em ações governamentais compartilhadas. Nesse sentido, sem desconsiderar as dificuldades do processo e os desafios a serem superados na integração de ações públicas em agroecologia, avançou-se, durante a vigência do <strong>PLANAPO 2013-2015</strong>, na incorporação das diretrizes da política no corpo das instituições responsáveis por ações do Plano e na criação de mecanismos de gestão que ampliaram a transparência e o intercâmbio de informações entre os envolvidos. </p>
                    <p>Além disso, um dos principais resultados do primeiro ciclo de execução do Planapo a ser destacado diz respeito ao fortalecimento de relações de confiança entre órgãos públicos, agricultores(as) e consumidores(as), em torno da real preocupação com questões de saúde no campo, com a oferta de alimentos saudáveis e com a necessidade de melhor integrar a produção agrícola à conservação ambiental.</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body fundo_cinza">
                                <h4 className="card-title titulo3"><img src={foto2} alt={"Icone_Lâmpada"}></img> Saiba mais!</h4>
                                <p className="card-text">
                                    <ul>
                                    <li><a href="http://www.agroecologia.gov.br/plano" target="_blank" rel="noopener noreferrer">Plano Nacional de Agroecologia e Produção Orgânica (Planapo)</a></li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        {/* <hr width="100%" color="#77B81E" size="5px"></hr> */}
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <p className="card-body planos">PLANAPO 2016-2019</p>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 texto1">
                <p>Em um processo de continuidade e aperfeiçoamento do primeiro ciclo do Plano, foi lançado o <strong>PLANAPO 2016-2019</strong>, iniciando-se um processo de atualização técnica, de revisões e ajustes propostos pelas áreas responsáveis pelas ações do plano. </p>
                <p>Tendo por base esta experiência anterior, o segundo ciclo do PLANAPO, de 2016 a 2019, está estruturado sobre 194 iniciativas de órgãos federais, ancoradas no Plano Plurianual (PPA) e associadas a metas e objetivos específicos. No âmbito da CIAPO, o processo de planejamento do segundo ciclo iniciou-se com o mapeamento das áreas de inserção do tema agroecologia e produção orgânica no PPA 2016-2019, desde o começo de 2015. </p>
                <p>Com o <strong>PLANAPO 2016-2019</strong>, são assentadas as bases para a continuidade do processo de consolidação e aperfeiçoamento da política de agroecologia e produção orgânica, com a consciência de que há muito para se avançar, mas também com a convicção da importância da construção deste caminho para recolocar a produção agrícola em uma relação sustentável com o meio ambiente.      </p>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body fundo_cinza">
                            <h4 className="card-title titulo3"><img src={foto2} alt={"Icone_Lâmpada"}></img> Saiba mais!</h4>
                            <p className="card-text">
                                <ul>
                                 <li><a href="http://www.mda.gov.br/sitemda/sites/sitemda/files/ceazinepdf/PLANAPO_2016_2019.pdf" target="_blank" rel="noopener noreferrer">http://www.mda.gov.br/sitemda/sites/sitemda/files/ceazinepdf/PLANAPO_2016_2019.pdf</a></li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    {/* <hr width="100%" color="#77B81E" size="5px"></hr> */}
                </div>
                <div className="col-md-2"></div>
            </div>

        </div>
    );
}

export default Planapo;