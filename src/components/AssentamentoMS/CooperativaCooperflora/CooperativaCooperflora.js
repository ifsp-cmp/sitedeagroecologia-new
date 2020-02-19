import React from 'react';
import SaibaMais from '../../SaibaMais/SaibaMais';
import DapDosCooperados from './Dap/DapDosCooperados';
import TabelaCooperados from './Dap/TabelaCooperados';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';

import './CooperativaCooperflora.css';

import video from '../../../assets/images/AssentamentoMS/Cooperflora/cooperflora.mp4';
import foto1 from '../../../assets/images/AssentamentoMS/Cooperflora/foto1.jpeg';

const cooperativaCooperflora = () =>{
    const conteudo = <ul className="card-text">
        <li><a href="https://www.facebook.com/Cooperflora1/" target="_blank" rel="noopener noreferrer">Facebook Cooperativa Cooperflora</a></li>
    </ul>;

    return (
        <div>
            <TopoDaPagina menu="Assentamento Milton Santos" submenu="Cooperativa Cooperflora"></TopoDaPagina>
            <div className="container-fluid AssentamentoMS">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto1} width="100%" alt={"EntradaAssentamentoMS"}></img>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 texto1">
                        <p>Os agricultores e agricultoras do assentamento Milton Santos sempre enfrentaram inúmeros obstáculos no decorrer do processo de assentamento e continuam os enfrentando, embora remodelados, nos processos atuais de permanência. As dificuldades relacionadas à produção sempre estiveram presentes dado o contexto de monocultura da cana de açúcar e mais recentemente com o plantio da soja no entorno do Assentamento, fato que prejudica a produção orgânica das famílias assentadas pelo o uso de agrotóxicos.</p>
                        <p>A partir do ano de 2016, com a diminuição das compras no mercado institucional pelo Governo Federal e dos investimentos para a agricultura familiar a produção dos assentados foi comprometida pela falta de canais alternativos para o escoamento da produção. Foi a partir desse momento que alguns agricultores que frequentavam o Ensino de Jovens e Adultos - EJA, no barracão social do Assentamento, organizaram-se em conjunto com militantes da Regional Campinas do Movimento dos Trabalhadores Rurais Sem Terra (MST) para formarem a Cooperflora - Cooperativa da Agricultura Familiar de Americana, Cosmópolis, Limeira e Piracicaba no ano de 2014. No entanto, a sua fundação oficial se deu em novembro de 2015 e, somente em 2016, realizou sua primeira atividade por meio da comercialização de cestas agroecológicas através da venda direta ao consumidor.</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="planosCinza">
                    <div className="row " style={{marginTop: "30px"}}>
                        <div className="col-md-2" ></div>
                        <div className="col-md-8">
                            <p className="card-body planos">DAP DOS COOPERADOS</p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <DapDosCooperados></DapDosCooperados>
                    <TabelaCooperados></TabelaCooperados>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="card-body planos">VÍDEO DA COOPERFLORA EUNICE PIMENTA</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="Video">
                            <video id="MyVideo" controls>
                                <source  src={video} type="video/mp4"></source>    
                            </video> 
                        </div> 
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <SaibaMais conteudo={conteudo}></SaibaMais>
            </div>
        </div>
    )
}

export default cooperativaCooperflora;