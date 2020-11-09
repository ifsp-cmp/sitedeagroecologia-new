import React from 'react';
import SaibaMais from '../../SaibaMais/SaibaMais';
import Grupos from './Grupos/Grupos';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';

import './GruposConsumo.css';

import foto1 from '../../../assets/images/AssentamentoMS/GrpConsumo/foto1.jpg'; 
import foto2 from '../../../assets/images/AssentamentoMS/GrpConsumo/foto2.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const gruposConsumo = () =>{
    const conteudo =<ul className="card-text">
    <li><a href="https://www.facebook.com/Cooperflora1/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon title="Cooperativa Cooperflora" size="2x" color="#77B81E" icon={faFacebook}/></a></li>
</ul>;

    const grupo = [
        {endereco:'R. José Bonifácio, 381 - Chácara Machadinho I, Americana - SP, 13478-040' ,entrega : 'Semanalmente às Segundas-Feiras', horario : '18h30 às 20h'},
        {endereco:'R. Heitor Lacerda Guedes, 1000 - Cidade Satélite Íris, Campinas - SP, 13059-581' , entrega:'Quinzenalmente às 1ªs (primeiras) e 3ªs (terceiras) quartas-feiras de cada mês' , horario: '14h00 às 15h00'},
        {endereco:'Rua Cônego Manoel Garcia, 1010 - Jardim Chapadão, Campinas - SP, 13070-037' , entrega:'Quinzenalmente às segundas e últimas quintas-feiras de cada mês' , horario: '11h às 12h'},
        {endereco:'STOUT Café, Cultura; Bar - R. Gilberto Pattaro, 105 - Barão Geraldo, Campinas - SP, 13084-375' , entrega:'Quinzenalmente às 1ªs (primeiras) e 3ªs (terceiras) quartas-feiras de cada mês' , horario: '18h30 as 19h30'},
        {endereco:'R. Prudente de Moraes, 431 – Centro – Santa Barbara D’Oeste' , entrega:'Semanalmente às Segundas-Feiras' , horario: '18h00 às 20h'},
        {endereco:'Av. Pádua Dias - Agronomia, Piracicaba - SP, 13418-900' , entrega:'Quinzenalmente às Terças-Feiras' , horario: '11h00 as 13h30'},
    ];

    return (
        <div>
            <TopoDaPagina menu="Assentamento Milton Santos" submenu="Grupos de Consumo"></TopoDaPagina>
            <div className="container-fluid GruposConsumo">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto1} width="100%" alt={"ProdutosOrgânicos"}></img>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 texto1">
                        <p>Os grupos de consumo foram criados, principalmente, para viabilizar o escoamento da produção das famílias assentadas, visto a diminuição das compras no mercado institucional e nos investimentos para a agricultura familiar.</p>
                        <p>Porém, a relação de compra/venda entre os agricultores assentados e os consumidores não poderia ser empreendida com a exploração desmedida da terra ou dos agricultores ou dos consumidores - esses vistos como trabalhadores que possuem o direito de se alimentarem de forma saudável e com alimentos livres de venenos e agrotóxicos. Sendo assim, implementou-se a realização de formações e rodas de conversas com as pessoas interessadas em adquirir esses alimentos, para adequar as formas de compra e venda. Além disso, permitir o esclarecimento aos consumidores sobre a pressão do sistema agroalimentar na cadeia produtiva da agricultura familiar e propor aos grupos alternativas e experiências que contornam o modelo clientelista, com práticas de venda direta, circuitos de proximidade e circuitos curtos de comercialização.</p>
                        <p>Atualmente, os grupos de consumo formados têm seu próprio arranjo comercial e recebem de acordo com a periodicidade acordada. As cestas agroecológicas são formadas por um combinado de alimentos in natura e processados, além de produtos artesanais como pães e temperos preparados por agricultores e agricultoras cooperados.</p>
                        <h4 style={{marginTop: "30px"}} className="card-title titulo3">  <img src={foto2} alt={"Icone_Informativo"}></img> Conheça e apoie os grupos de consumo</h4>
                        <p>Os grupos de consumo têm entregue a média de 250 cestas por mês no período iniciado pelo 2º semestre de 2019, além da venda em feiras pré-determinadas, aumentando as rendas das famílias produtoras cooperadas e aumentando a abrangência do território em que atuam pelo estabelecimento de redes sociotécnicas. Clique e saiba mais sobre os Grupos de Consumo da região:</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <ul className="texto1">
                            <li><a href="#americana" rel="noopener noreferrer">Americana</a></li>
                            <li><a href="#estrelalibre" rel="noopener noreferrer">Estrela Libre/IFSP CAMPINAS</a></li>
                            <li><a href="#sindicatodospetroleiros" rel="noopener noreferrer">Sindicato dos Petroleiros (Campinas)</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="texto1">
                            <li><a href="#baraogeraldo" rel="noopener noreferrer">Barão Geraldo</a></li>
                            <li><a href="#sindprosbo" rel="noopener noreferrer">Santa Barbara D'Oeste – SINDPROSBO</a></li>
                            <li><a href="#esalq" rel="noopener noreferrer">Piracicaba - ESALQ</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                
                <div id="americana" className="planosCinza">
                    <div className="row " style={{marginTop: "30px"}}>
                        <div className="col-md-2" ></div>
                        <div className="col-md-8" >
                            <p className="planos">AMERICANA</p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 texto1">
                            <p>O grupo teve início em 07 de agosto de 2017, quando foi realizada uma formação para decidir questões sobre as entregas, junto com os primeiros consumidores. Atualmente não é realizada formação inicial, e sim uma conversa explicativa sobre o grupo, cestas, modo de produção e comercialização antes de entrarem no grupo.</p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <Grupos endereco={grupo[0].endereco} entrega={grupo[0].entrega} horario={grupo[0].horario}></Grupos>
                </div>

                <div id="estrelalibre" className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="planos">ESTRELA LIBRE/ IFSP CAMPINAS</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 texto1">
                        <p>O grupo teve início em 31 de agosto de 2017, quando foi realizada uma formação junto com os primeiros consumidores para apresentar o modo de produção dos alimentos, os arranjos comerciais das entregas e composição das cestas agroecológicas. Desde então, já ocorreram mais duas formações e o grupo é exclusivo a comunidade interna do IFSP Campus de Campinas.</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <Grupos endereco={grupo[1].endereco} entrega={grupo[1].entrega} horario={grupo[1].horario}></Grupos>

                <div id="sindicatodospetroleiros" className="planosCinza">
                    <div className="row " style={{marginTop: "30px"}}>
                        <div className="col-md-2" ></div>
                        <div className="col-md-8">
                            <p className="planos">SINDICATO DOS PETROLEIROS (CAMPINAS)</p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 texto1">
                            <p>O grupo teve início em 10 de agosto de 2017, foi realizada uma formação junto com os primeiros consumidores, posteriormente uma conversa para decidir questões sobre as entregas. Atualmente não é realizada formação inicial, no entanto é feita uma conversa explicativa sobre o grupo, cestas, modo de produção e comercialização antes de entrarem no grupo.</p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <Grupos endereco={grupo[2].endereco} entrega={grupo[2].entrega} horario={grupo[2].horario}></Grupos>
                    <div style={{marginTop: "-25px"}}><SaibaMais conteudo={conteudo} ></SaibaMais></div>
                </div>

                <div id="baraogeraldo" className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="planos">BARÃO GERALDO</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 texto1">
                        <p>O grupo teve início em 20 de março de 2019, quando foi realizada uma formação para decidir questões sobre as entregas, junto com os primeiros consumidores. Atualmente não é realizada formação inicial, no entanto é feita uma conversa explicativa sobre o grupo, cestas, modo de produção e comercialização antes de entrarem no grupo.</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <Grupos endereco={grupo[3].endereco} entrega={grupo[3].entrega} horario={grupo[3].horario}></Grupos>
                <div style={{marginTop: "-25px"}}><SaibaMais conteudo={conteudo} ></SaibaMais></div>

                <div id="sindprosbo" className="planosCinza">
                    <div className="row " style={{marginTop: "30px"}}>
                        <div className="col-md-2" ></div>
                        <div className="col-md-8">
                            <p className="planos">SANTA BÁRBARA D’OESTE – SINDPROSBO</p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 texto1">
                            <p>O grupo teve início em 23 de maio de 2019, quando foi realizada uma conversa junto com uma comissão de professoras representantes do Sindicato dos Professores do município de Santa Bárbara D’Oeste sobre as cestas, funcionamento do grupo de consumo, modo de produção e comercialização. Esta comissão é que organiza as atividades de entrega e retirada das cestas no Assentamento Milton Santos em Americana, bem como a gestão do grupo em si.</p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <Grupos endereco={grupo[4].endereco} entrega={grupo[4].entrega} horario={grupo[4].horario}></Grupos>
                    <div style={{marginTop: "-25px"}}><SaibaMais conteudo={conteudo} ></SaibaMais></div>
                </div>

                <div id="esalq" className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="planos">PIRACICABA - ESALQ</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 texto1">
                        <p>A Cooperflora também entrega produtos para um grupo de consumo localizado no município de Piracicaba, na Escola Superior de Agricultura Luiz de Queiroz – ESALQ. O grupo é formado por estudantes do campus e tem a especificidade de não ser gerido pela Cooperflora. A iniciativa e gestão é realizada pelas pessoas e grupos de pesquisa em Agroecologia da ESALQ com base nas experiências com os grupos de consumo da Cooperflora em Americana.</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <Grupos endereco={grupo[5].endereco} entrega={grupo[5].entrega} horario={grupo[5].horario}></Grupos>

                <div style={{marginTop: "-25px"}}><SaibaMais conteudo={conteudo} ></SaibaMais></div>
            
            </div>
        </div>
    )
}

export default gruposConsumo;