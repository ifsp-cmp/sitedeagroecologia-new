import React from 'react';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';

import './AppAgroecomunicacao.css';

import foto1 from '../../../assets/images/TecnologiasSociais/appAgro/logo_appAgro2.jpg';
import icone from '../../../assets/images/TecnologiasSociais/appAgro/icone.png';

const appAgroecomunicacao = () =>{
    return (
        <div>
            <TopoDaPagina menu="Tecnologias Sociais" submenu="App Agroecomunicação"></TopoDaPagina>
            <div className="container-fluid AppAgro">
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
                    <p>O aplicativo surgiu da vivência dos assentados e assentadas produtores para escoarem a produção em canais alternativos durante as visitas de campo. A partir da reorganização destes canais em redes sociotécnicas de apoio outras formas de comercialização foram desenhadas, como a formação de grupos de consumo e pontos de venda em feiras orgânicas da Região Metropolitana de Campinas.</p>
                    <p>Contudo, para que uma rede de consumo consciente das relações existentes entre os sistemas agroalimentares seja parte de um projeto de fortalecimento da agricultura familiar, sobretudo nos assentamentos de reforma agrária, é preciso dar visibilidade a estes territórios e sujeitos políticos. Desta forma, o objetivo do aplicativo é localizá-los para o consumidor consciente da importância dos circuitos curtos e diretos de comercialização.</p>
                    <p>Uma vez localizados os territórios, é possível encontrar dados sobre os pontos de venda em que os produtos são oferecidos, os arranjos comerciais existentes, periodicidade, dias e locais das entregas. Posteriormente, o aplicativo Agrocomunicação possibilitará a comunicação da produção pelos próprios agricultores e agricultoras orgânicos e agroecológicos destes territórios.</p>
                    <p>O trabalho é parte do projeto da Chamada 21/2016 do CNPq e foi desenvolvido pelo profº Fábio Feliciano e pelas profªs Erika Batista e Zady Salazar, com o apoio de estudantes bolsistas de Tecnologia em Análise e Desenvolvimento de Sistemas durante 2018 e 2019. O aplicativo está disponível para sistema Android e o dowload liberado pela Play Store.</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                
                <div className="row">
                    <div className="col-md-2"/>
                    <div className="col-md-8">
                        <div className="card" style={{borderBottom: "4px solid #77B81E"}}> 
                            <div className="card-body fundo_cinza">
                                <h4 className="card-title titulo3"><img src={icone} alt={"Icone_Download"}></img><a href=" https://apkpure.com/br/agrocomunica%C3%A7%C3%A3o-%E2%80%93-da-reforma-agr%C3%A1ria-at%C3%A9-voc%C3%AA/io.neaes.agrocomunicacao.starter" target="_blank"  rel="noopener noreferrer"> Clique aqui e baixe o APP</a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"/>
                </div>
            

            </div>
        </div>
    )
}

export default appAgroecomunicacao;