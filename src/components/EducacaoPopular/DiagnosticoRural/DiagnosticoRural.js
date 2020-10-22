import React from 'react';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';
import './DiagnosticoRural.css';
import Carousel from '../../CarroseldeFotos/Carousel';

import foto1_car from '../../../assets/images/EducacaoPopular/DiagnosticoRural/Carrossel/foto1.jpg';
import foto2_car from '../../../assets/images/EducacaoPopular/DiagnosticoRural/Carrossel/foto2.jpg';
import foto3_car from '../../../assets/images/EducacaoPopular/DiagnosticoRural/Carrossel/foto3.jpg';
import foto4_car from '../../../assets/images/EducacaoPopular/DiagnosticoRural/Carrossel/foto4.jpg';
import foto5_car from '../../../assets/images/EducacaoPopular/DiagnosticoRural/Carrossel/foto5.jpg';
import foto6_car from '../../../assets/images/EducacaoPopular/DiagnosticoRural/Carrossel/foto6.jpg';

import foto1 from '../../../assets/images/EducacaoPopular/DiagnosticoRural/foto1.png';
import SaibaMais from '../../SaibaMais/SaibaMais';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleDrive, faYoutube } from '@fortawesome/free-brands-svg-icons';

const diagnosticoRural = () => {
    const conteudo1 = <ul className="card-text">
        <li><a href="https://www.youtube.com/watch?v=0bI0l_bZwEg " target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} size="2x" title="Apresentação de trabalho da Manuela" color="#77B81E"/></a><a className="ml-2" href="https://drive.google.com/drive/folders/1CLGTxMTxiT6mMz13ByxvjCP5MqKmtp5u " target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGoogleDrive} size="2x" color="#1A2D00" title="Galeria fotos DRP"/></a></li>
    </ul>

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
                            <p>Esta ação fez parte do projeto de ensino “O impacto do agronegócio sobre a agricultura familiar camponesa, transição agroecológica e tecnologias sociais na RMC”, coordenado pela professora Erika Batista e realizado pela estudante Manuela Gracie Niconielo, aluna do curso Técnico em Eletrônica Integrado ao Ensino Médio e Bolsista de Ensino do Campus Campinas durante o ano de 2019. A ação cresceu e originou o projeto "Diagnóstico Rural Participativo como metodologia para Projetos de Intervenção Sociotécnica" iniciado em 2020, com o qual a estudante e bolsista do Programa de Iniciação Científica do IFSP foi premiada com o 3º Lugar na categoria conjunta de "Ciências Sociais Aplicadas, Linguística e Artes", além do Prêmio "Democraticação da Ciência" durante a <a href="https://fbjc.com.br/" target="_blank" rel="noopener noreferrer"><b>I Feira Brasileira de Jovens Cientistas</b></a>, ocorrida em junho de 2020.</p>

                                {/* Saiba mais: INSERIR LINK APRESENTAÇÃO MANUELA/ CANAL NEAES + GALERIA FOTOS DRP + LINK FBJC (colocar o link no negrito da citação da feira no texto mesmo https://fbjc.com.br/). */}
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                    <Carousel 
                        foto1={foto1_car} alt1={"Foto 1 Diagnóstico Rural - Milton Santos"}
                        foto2={foto2_car} alt2={"Foto 2 Diagnóstico Rural - Milton Santos"}
                        foto3={foto3_car} alt3={"Foto 3 Diagnóstico Rural - Milton Santos"}
                        foto4={foto4_car} alt4={"Foto 4 Diagnóstico Rural - Milton Santos"}
                        foto5={foto5_car} alt5={"Foto 5 Diagnóstico Rural - Milton Santos"}
                        foto6={foto6_car} alt6={"Foto 6 Diagnóstico Rural - Milton Santos"}
                        id={"DiagnosticoRural"}
                    />
                </div>
                <SaibaMais conteudo={conteudo1}></SaibaMais>
            </div>
        </div>
    )
}

export default diagnosticoRural;