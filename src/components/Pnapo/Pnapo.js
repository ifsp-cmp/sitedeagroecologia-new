import React from 'react';

import './Pnapo.css';

import foto1 from '../../assets/images/PN/PNAPO/PNAPO.png';
import foto2 from '../../assets/images/PN/foto2.png';

const Pnapo = () =>{
    return(
        <div className="container-fluid Pnapo">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <img src={foto1} width="100%" alt={"MulheresNoAssentamento"}></img>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 texto1">
                <p><strong>A Política Nacional de Agroecologia e Produção Orgânica (PNAPO)</strong> tem por objetivo integrar, articular e adequar políticas, programas e ações indutores da transição agroecológica, da produção orgânica e de base agroecológica, como contribuição para o desenvolvimento sustentável, possibilitando melhoria de qualidade de vida à população por meio da oferta e consumo de alimentos saudáveis e do uso sustentável dos recursos naturais.</p> 
                <p>Em vigor desde 2012, a partir do decreto presidencial n°7.794, de 20 de agosto, o Brasil se torna o primeiro país a criar uma política de estado específica para o incentivo à agroecologia e à produção orgânica.</p> 
                <p>Construído de forma participativa, o decreto surgiu pela preocupação da sociedade civil e das organizações sociais do campo e da floresta sobre a necessidade de se produzir alimento em quantidade e qualidade necessárias, com o menor impacto possível ao meio ambiente e à vida. Nesse momento, foram definidas as diretrizes, instrumentos e instâncias de gestão da PNAPO.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body fundo_cinza">
                            <h4 className="card-title titulo3"><img src={foto2} alt={"Icone_Lâmpada"}></img> Saiba mais!</h4>
                            <p className="card-text">
                                <ul>
                                 <li><a href="http://www.agroecologia.gov.br/politica/" target="_blank" rel="noopener noreferrer">Política Nacional de Agroecologia e Produção Orgânica (Pnapo)</a></li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <hr width="100%" color="#77B81E" size="5px"></hr>
                    
                </div>
            </div>


        </div>
    );
}

export default Pnapo;