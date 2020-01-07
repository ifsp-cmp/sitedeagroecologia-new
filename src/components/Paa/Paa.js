import React from 'react';

import './Paa.css';

import foto1 from '../../assets/images/PN/PAA/PAA.png';
import foto2 from '../../assets/images/PN/foto2.png';

const Paa = () =>{
    return(
        <div className="container-fluid Paa">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <img src={foto1} width="100%" alt={"Alimentos"}></img>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 texto1">
                <p>O <strong>Programa de Aquisição de Alimentos (PAA)</strong>, criado pelo art. 19 da Lei no 10.696, de 02 de julho de 2003, no âmbito do Programa Fome Zero possui duas finalidades básicas:promover o acesso à alimentação e incentivar a agricultura familiar. </p>
                <p>Para o alcance desses dois objetivos, o programa compra alimentos produzidos pela agricultura familiar, com dispensa de licitação, e os destina às pessoas em situação de insegurança alimentar e nutricional e àquelas atendidas pela rede socioassistencial, pelos equipamentos públicos de segurança alimentar e nutricional e pela rede pública e filantrópica de ensino. </p>
                <p>O orçamento do PAA é composto por recursos do Ministério do Desenvolvimento Social (MDS) e sua execução pode ser feita por meio de seis modalidades: Compra com Doação Simultânea, Compra Direta, Apoio à Formação de Estoques, Incentivo à Produção e ao Consumo de Leite, Compra Institucional e Aquisição de Sementes. </p>
                <p>O programa vem sendo executado por estados e municípios em parceria com o MDS e pela Companhia Nacional de Abastecimento (CONAB).</p>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body fundo_cinza">
                            <h4 className="card-title titulo3"><img src={foto2} alt={"Icone_Lâmpada"}></img> Saiba mais!</h4>
                                <ul className="card-text">
                                    <li><a href="http://mds.gov.br/assuntos/seguranca-alimentar/programa-de-aquisicao-de-alimentos-paa" target="_blank" rel="noopener noreferrer">Programa de Aquisição de Alimentos (PAA)</a></li>
                                    <li><a href="http://mapas.cnpm.embrapa.br/mds/?layers=5" target="_blank" rel="noopener noreferrer">Mapa de inclusão produtiva da Empraba</a></li>
                                </ul>
                        </div>
                    </div>
                    {/* <hr width="100%" color="#77B81E" size="5px"></hr>   */}
                </div>
                <div className="col-md-2"></div>
            </div>


        </div>
    );
}

export default Paa;