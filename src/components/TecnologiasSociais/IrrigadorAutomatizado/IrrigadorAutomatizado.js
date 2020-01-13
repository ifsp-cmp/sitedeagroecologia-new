import React from 'react';
// import Iframe from 'react-iframe';
import SaibaMais from '../../SaibaMais/SaibaMais';

import './IrrigadorAutomatizado.css';

import foto1 from '../../../assets/images/TecnologiasSociais/Irrigador/foto5.jpg';
import video from '../../../assets/images/TecnologiasSociais/Irrigador/Irrigador_automatizado.mp4';

const irrigadorAutomatizado =()=>{
    const conteudo = <ul className="card-text">
        <li><a href="https://cmp.ifsp.edu.br/index.php/noticias/821-estudante-do-ifsp-campinas-desenvolve-irrigador-automatizado-para-agricultura-familiar" target="_blank" rel="noopener noreferrer">Estudante desenvolve irrigador automatizado para agricultura familiar</a></li>
        <li><a href="https://www.youtube.com/watch?v=5xn3AgSqUkc&t=13s" target="_blank" rel="noopener noreferrer">Video do irrigador atomatizado</a></li>
    </ul>

    return(
        <div className="container-fluid Irrigador">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <img src={foto1} alt={"IrrigadorAutomatizado"} width="100%"></img>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 texto1">
                    <p>No período de março de 2018 a junho de 2019 foi desenvolvido o projeto “Irrigador Automatizado” a partir das ações de extensão tecnológica iniciadas a partir dos relatos dos produtores e produtores sobre a complexidade para a questão de irrigação e falta d’água, o gasto excessivo de tempo para acompanhamento dos cultivos, uso inadequado de água para determinados plantios e consumo demasiado deste recurso.</p>
                    <p>O objetivo desta intervenção foi dinamizar o processo de irrigação através de um dispositivo de baixo custo e fácil manuseio que poupasse tempo dos agricultores e controlasse os fluxos de água para utilização em quaisquer tipos de sistemas de irrigação. O primeiro resultado esperado para o projeto foi a criação de um dispositivo que cumprisse as tarefas especificadas de monitoramento de tempo e volume da água despejada de acordo com o horário real – o que foi atingido no terceiro protótipo.</p>
                    <p>Quando os testes demonstraram que os sistemas estavam em perfeito estado e funcionamento, criou-se o modelo aplicável que serviu como segunda etapa do projeto. A peça de campo foi instalada para monitoramento no Assentamento Milton Santos em junho de 2019 após a validação participativa final com a comunidade na Unidade de Referência selecionada pelos assentados.</p>
                    <p>O projeto foi desenvolvido pelo estudante de Eletroeletrônica do Ensino Médio Técnico, Ruan Paiva Leopoldo, com a orientação técnica do professor Edson Anício Duarte. Atualmente, o dispositivo é monitorado pelo estudante Noah Serrati Moreno, aluno do curso de Eletrônica Integrado ao Ensino Médio, e o projeto coordenado pela professora Erika Batista.</p>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <p className="card-body planos">CONHEÇA O IRRIGADOR AUTOMATIZADO</p>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="video">
                        <iframe  width="560" height="315"
                        src="https://www.youtube.com/embed/ISDScjWNVXA" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="Video"/>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>

            <SaibaMais conteudo={conteudo}></SaibaMais>

        </div>
    )
}

export default irrigadorAutomatizado;