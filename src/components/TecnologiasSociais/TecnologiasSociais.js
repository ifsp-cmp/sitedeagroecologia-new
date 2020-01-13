import React from 'react';

import './TecnologiasSociais.css';
import Projetos from '../Projetos/Projetos';

import foto1 from '../../assets/images/TecnologiasSociais/foto1.jpg';
import foto4 from '../../assets/images/TecnologiasSociais/foto4.jpg';
import foto5 from '../../assets/images/TecnologiasSociais/foto5.jpg';


const tecnologiasSociais = () =>{
    const projeto = [
        {titulo: 'APP AGROECOMUNICAÇÃO'},
        {titulo: 'DATALUTA PRODUÇÃO'},
        {titulo: 'IRRIGADOR'},
        {titulo: 'MINHOCÁRIO AUTOMATIZADO'},
        {titulo: 'MAPEAMENTO DA PRODUÇÃO'},
        {titulo: 'FICHAS AGROECOLÓGICAS'},
    ]

    return (
        <div className="container-fluid TecnologiasSociais">
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
                    <p>Na ótica do desenvolvimento rural sustentável situamos as chamadas Tecnologias Sociais (TS) no campo dos Estudos Sociais da Ciência e Tecnologia (ESCT) enquanto produtos, técnicas e metodologias participativas desenvolvidas coletivamente a partir de um conjunto de conhecimentos científicos, culturais e populares para a satisfação de demandas de grupos sociais subalternos na hierarquia do circuito tecnológico tradicional, visando por sua vez a transformação do cotidiano de vulnerabilidade econômica e subordinação política que caracterizam estes grupos.</p>
                    <p>O fortalecimento da agricultura familiar agroecológica, sobretudo em territórios de reforma agrária, está articulado a este conjunto de saberes contra-hegemônico para a criação e manutenção de redes sociotécnicas que sejam capazes de sustentar circuitos produtivos e comerciais que democratizem não só os conhecimentos, mas também os frutos deste processo, no caso os alimentos livres de contaminação agroquímica e de alto valor nutritivo.</p>
                    <p>Neste processo, o NEAES tem participado da construção de tecnologias sociais importantes junto aos agricultores e agricultoras do Assentamento Milton Santos que atuam pelo coletivo da Cooperflora - Cooperativa da Agricultura Familiar de Americana, Cosmópolis, Limeira e Piracicaba, organizado e gerido pelo Movimento dos Trabalhadores Rurais sem Terra (MST), Regional de Campinas.</p>
                    <p>Dentre estas tecnologias, o grupo teve a oportunidade de mediar intervenções para dinamizar o cotidiano produtivo, comercial e político dos produtores e produtoras associados, como as que derivaram dos projetos "Irrigador automatizado", aplicativos "Agrocomunicação" e "Dataluta Produção", bem como o "Minhocário Automatizado" e o “Mapeamento censitário”.</p>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row titulo2">
                <div className="col-md-12">
                    <p>CONHEÇA OS PROJETOS DE TECNOLOGIA SOCIAL</p>
                </div>
            </div>

            <div className="row EstruturaBlocos">
                <div className="col-md-2"></div>
                <Projetos foto={foto1} titulo={projeto[0].titulo}></Projetos>
                <Projetos foto={foto1} titulo={projeto[1].titulo}></Projetos>
                <Projetos foto={foto5} titulo={projeto[2].titulo}></Projetos>
                <div className="col-md-2"></div>
            </div>

            <div className="row EstruturaBlocos">
                <div className="col-md-2"></div>
                <Projetos foto={foto1} titulo={projeto[3].titulo}></Projetos>
                <Projetos foto={foto1} titulo={projeto[4].titulo}></Projetos>
                <Projetos foto={foto4} titulo={projeto[5].titulo}></Projetos>
                <div className="col-md-2"></div>
            </div>

        </div>
    )
}

export default tecnologiasSociais;