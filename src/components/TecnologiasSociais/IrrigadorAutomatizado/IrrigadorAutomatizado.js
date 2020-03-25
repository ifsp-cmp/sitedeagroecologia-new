import React from 'react';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';
import SaibaMais from '../../SaibaMais/SaibaMais';

import './IrrigadorAutomatizado.css';

import foto1 from '../../../assets/images/TecnologiasSociais/Irrigador/foto5.jpg';
// import video from '../../../assets/images/TecnologiasSociais/Irrigador/Irrigador_automatizado.mp4';

const irrigadorAutomatizado =()=>{
    const conteudo = <ul className="card-text">
        <li><a href="https://cmp.ifsp.edu.br/index.php/noticias/821-estudante-do-ifsp-campinas-desenvolve-irrigador-automatizado-para-agricultura-familiar" target="_blank" rel="noopener noreferrer">Estudante desenvolve irrigador automatizado para agricultura familiar</a></li>
        <li><a href="https://www.youtube.com/watch?v=5xn3AgSqUkc&t=13s" target="_blank" rel="noopener noreferrer">Video do irrigador atomatizado</a></li>
    </ul>

    return(
        <div>
            <TopoDaPagina menu="Tecnologias Sociais" submenu="Irrigador Automatizado"></TopoDaPagina>
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
                        <div className="Video">
                            <iframe width="560" height="315" 
                            title={"VídeodoIrrigadorAutomatizado"}
                            src="https://www.youtube.com/embed/ISDScjWNVXA" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="Video"/>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>

                <SaibaMais conteudo={conteudo}></SaibaMais>


                <div className="planosCinza">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p className="card-body planos">O PROJETO ATUALMENTE</p>
                            <div className="texto1">
                                <p>Após a validação participativa em junho de 2019, o aluno Noah assumiu o projeto, inicialmente focado em monitorar o funcionamento para montagem de novas peças. Porém esse objetivo foi trocado para a criação de uma nova peça já com melhorias em relação a versão final do aluno Ruan. </p>
                                <p>O novo produto possui agora uma programação que simplificasse a interface para o usuário, permitindo habilitar até duas válvulas solenoide, uma placa eletrônica que organizava os circuitos para próximos autores terem facilidade em encontrar possíveis erros ou eletrônicos em falha. E por fim, itens eletrônicos e elétricos adicionados para impedir a sobrecarga do sistema e deixar o projeto mais profissional em relação ao funcionamento.</p>
                                <p>A partir disso, está planejado para 2020 uma validação participativa da segunda peça, que será instalada no Assentamento Milton Santos, em uma segunda Unidade de Referência escolhida pela orientadora Erika Batista conjuntamente aos assentados. Nessa validação será mostrado as novidades do projeto e como devem utilizar o irrigador em casos de mudança em horários de irrigação ou hortas.</p>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            
            
            
            </div>
        </div>
    )
}

export default irrigadorAutomatizado;