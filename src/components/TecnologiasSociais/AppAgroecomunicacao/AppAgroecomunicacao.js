import React from 'react';

import './AppAgroecomunicacao.css';

import foto1 from '../../../assets/images/TecnologiasSociais/App/foto1.jpg';

const appAgroecomunicacao = () =>{
    return (
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
                <p>O aplicativo surgiu da observação da vivência cotidiana dos assentados e assentadas produtores para escoarem a produção em canais alternativos durante as visitas de campo. A partir da reorganização destes canais em redes sociotécnicas de apoio outras formas de comercialização com a venda direta dos produtos foram desenhadas pelos agricultores e agricultoras do Assentamento Milton Santos, como a formação de grupos de consumo e pontos de venda em feiras orgânicas da Região Metropolitana de Campinas.</p>
                <p>Contudo, para que uma rede de consumo consciente das relações existentes entre os sistemas agroalimentares seja parte de um projeto de fortalecimento da agricultura familiar de forma consistente, sobretudo nos assentamentos de reforma agrária, é preciso dar visibilidade a estes territórios e sujeitos políticos.</p>
                <p>Desta forma, o objetivo do aplicativo é localizar estes territórios e sujeitos para o consumidor consciente da importância dos circuitos curtos e diretos de comercialização. Uma vez localizados os territórios, é possível encontrar dados sobre os pontos de venda em que os produtos são oferecidos, os arranjos comerciais existentes, periodicidade, dias e locais das entregas. Posteriormente, o aplicativo Agrocomunicação possibilitará a comunicação da produção pelos próprios agricultores e agricultoras orgânicos e agroecológicos destes territórios.</p>
                <p>O aplicativo foi desenvolvido pelos estudantes de Tecnologia em Análise e Desenvolvimento de Sistemas Letícia Franco Carvalho, Gabriel Bucalon, Winícius Andrade e Patrick Augusto Arashiro com orientação técnica dos professores Fábio Feliciano de Oliveira e Glauber da Rocha Balthazar.</p>
                </div>
                <div className="col-md-2"></div>
            </div>
            
            <div className="row">
        <div className="col-md-2"/>
        <div className="col-md-8">
            <div className="card"> 
                <div className="card-body fundo_cinza">
                    <h4 className="card-title titulo3"><a href=" https://drive.google.com/file/d/1brcHRQ0WlC06YIs_033OO55IN7wjaaCq/view" target="_blank"  rel="noopener noreferrer">Clique aqui e baixe o APP</a></h4>
                </div>
            </div>
        </div>
        <div className="col-md-2"/>
        </div>
           

        </div>
    )
}

export default appAgroecomunicacao;