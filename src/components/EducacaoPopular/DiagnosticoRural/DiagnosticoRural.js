import React from 'react';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';
import './DiagnosticoRural.css';

import foto1 from '../../../assets/images/EducacaoPopular/DiagnosticoRural/foto1.png';

const diagnosticoRural = () => {
    return (
        <div>
            <TopoDaPagina menu="Educação Popular" submenu="Diagnóstico Rural Participativo"></TopoDaPagina>
            <div className="container-fluid DiagnosticoRural">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto1} width="100%" alt={"Roda de Conversa"}></img>
                        <div className="texto1">
                            <p>O “Diagnóstico Rural Participativo” funciona como ponte para apreensão da realidade de um determinado grupo e suas relações sociais, identificando problemas enfrentados pelos participantes para direcionar soluções. O objetivo deste trabalho é utilizá-lo como metodologia de suporte e ação para projetos de intervenção sociotécnica em conjunto com os agricultores e agricultoras do Assentamento Milton Santos, em Americana/ SP.</p>
                            <p>A aplicação do Diagnóstico tem ocorrido em paralelo com o desenvolvimento de outras intervenções na área técnica, sobretudo da frente de pesquisa em Eletrônica e os resultados iniciais demonstram que este acompanhamento tem sido muito importante para auxiliar e incentivar os assentados a produzirem suas próprias soluções. A partir das oficinas de DRP os participantes têm se reconhecido como protagonistas dos próprios problemas e assumido posição de autonomia junto as ações propostas, fortalecendo os princípios da Educação Popular e a construção de tecnologias sociais.</p>
                            <p>O DRP para acompanhamento do "Dispositivo de Compostagem" foi iniciado em 23 de agosto de 2019 e os principais problemas identificados foram: alto custo na compra de compostos orgânicos para nutrir a terra, principalmente para substituir os agentes agroquímicos utilizados nos cultivos convencionais do agronegócio, que podem prejudicar desde o solo até a saúde do consumidor dos alimentos cultivados; o composto orgânico comprado muitas vezes é feito com fezes de animais (aves e gado) e exige alguns procedimentos prolongados e cuidadosos que necessitam de bastante atenção para não prejudicar nenhum agente, desde as plantas que serão cultivadas até o consumidor do alimento, e como não existe a fiscalização não há garantia deste processo. A partir disso, foi possível construir uma ponte entre a necessidade de um bom composto orgânico e seu uso correto de forma acessível e aplicável naquele ambiente, inserindo o conhecimento da prática de compostagem caseira. Em seguida, foi acordado uma formação em técnicas de compostagem caseira em outubro de 2019.</p>
                            <p>Esta ação fez parte do projeto de ensino “O impacto do agronegócio sobre a agricultura familiar camponesa, transição agroecológica e tecnologias sociais na RMC”, coordenado pela professora Erika Batista e realizado pela estudante Manuela Gracie Niconielo, aluna do curso Técnico em Eletrônica Integrado ao Ensino Médio e Bolsista de Ensino do Campus Campinas durante o ano de 2019. A ação cresceu e originou o projeto "Diagnóstico Rural Participativo como metodologia para Projetos de Intervenção Sociotécnica" iniciado em 2020, com o qual a estudante e bolsista do Programa de Iniciação Científica do IFSP foi premiada com o 3º Lugar na categoria conjunta de "Ciências Sociais Aplicadas, Linguística e Artes", além do Prêmio "Democraticação da Ciência" durante a I Feira Brasileira de Jovens Cientistas, ocorrida em junho de 2020.</p>

                                {/* Saiba mais: INSERIR LINK APRESENTAÇÃO MANUELA/ CANAL NEAES + GALERIA FOTOS DRP + LINK FBJC (colocar o link no negrito da citação da feira no texto mesmo https://fbjc.com.br/). */}
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
    )
}

export default diagnosticoRural;