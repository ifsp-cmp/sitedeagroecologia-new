import React from 'react';
import SaibaMais from '../SaibaMais/SaibaMais';
import './PoliticasNacionais.css';

import foto1 from '../../assets/images/PN/foto1.png';
import foto3 from '../../assets/images/PN/foto3.png';

const politicasNacionais = (props) =>{
    const conteudo = <ul>
            <li>PITAGUARI, S. O.; LIMA, J. Ferrera de. As idéias keynesianas e o crescimento do produto nas economias locais. Interações: Revista Internacional de Desenvolvimento Local, Campo Grande, v. 6, n. 10, p. 11-20, 2005.</li>
            <li>RUA, M. G. Análise de políticas públicas: conceitos básicos. Rio de Janeiro, 2005. Curso de Aperfeiçoamento em Agroecologia. REDCAPA – Rede de Instituições Vinculadas à Capacitação em Economia e Política Agrícola da América Latina e Caribe.</li>
        </ul>;
  
    return(
        <div className="container-fluid home">
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
                    <p>A agricultura familiar no Brasil destaca-se como forma de vida e obtenção de renda de milhares de homens e mulheres, porém, historicamente, o setor enfrenta obstáculos que requerem políticas públicas pertinentes, que viabilizem a estes pequenos produtores rurais a sua fixação no campo – evitando novos fluxos de êxodo rural – e que contribuam para o desenvolvimento humano e regional.</p>
                    <p>Conceitualmente as políticas públicas formuladas e implementadas pelo Estado devem compreender, principalmente, um conjunto de decisões e ações estrategicamente selecionadas, relativas à alocação de valores normativos e pecuniários com a finalidade de implementar determinadas ações objetivando promover o crescimento e o desenvolvimento de um setor econômico ou de um locus geográfico (RUA, 2005).</p>
                    <p> Ou seja, as principais políticas públicas do governo Federal voltadas à promoção da agricultura familiar, as quais segundo Pitaguari e Lima (2005), devem compreender gastos públicos capazes de diminuir os custos de produção e viabilizar o setor produtivo, melhorando as condições estruturais de crescimento e desenvolvimento da economia local.</p>
                    <p> Dessa forma a plataforma socioeducativa em questão destaca as principais Políticas Públicas do Governo Federal com capacidade de diminuir desigualdades históricas para o desenvolvimento do setor.</p>
                </div>
                <div className="col-md-2"></div>
            </div>

            <SaibaMais conteudo={conteudo}></SaibaMais>
            
            <div className="row titulo2">
                <div className="col-md-12">
                    <p>CONHEÇA OS PROJETOS DE POLÍTICAS PÚBLICAS</p>
                </div>
            </div>
            <div className="row bloco2">
                <div className="col-md-1"></div>
                <div className="col-md-3 bloco4">
                    <img className="card-img-top" src={foto1} width="100%" alt={"HortaNoAssentamento"}></img>
                        <div className="card-body">
                            <h5 className="card-title"><img src={foto3} alt={"Icone_Casa"}></img>PNAPO</h5>
                            {/* <p className="card-text">A Política Nacional de Agroecologia e Produção Orgânica (PNAPO) tem por objetivo integrar, articular e adequar políticas, programas e ações indutores da transição agroecológica, da produção orgânica e de base...</p> */}
                        </div>
                </div>
            </div>


        </div>
    );
}

export default politicasNacionais;