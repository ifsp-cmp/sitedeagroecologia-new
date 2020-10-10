import React from 'react';
import Projetos from '../Projetos/Projetos';
import TopoDaPagina from '../TopoDaPagina/TopoDaPagina';

import './PoliticasNacionais.css';

import foto1 from '../../assets/images/PN/Introducao/foto1.png';
import foto2 from '../../assets/images/PN/Introducao/PNAPO.png';
import foto3 from '../../assets/images/PN/Introducao/PLANAPO.png';
import foto4 from '../../assets/images/PN/Introducao/PLANSAN.png';
import foto5 from '../../assets/images/PN/Introducao/PAA.png';
import foto6 from '../../assets/images/PN/Introducao/PNAE.png';
import { Link } from 'react-router-dom';


const politicasNacionais = () => {
    const projeto = [
        { titulo: 'PNAPO', link: '/pnapo', alt:'Mulheres organizando alimentos orgânicos'},
        { titulo: 'PLANAPO', link: '/planapo', alt:'Colheita no Assentamento Milton Santos'},
        { titulo: 'PLANSAN', link: '/plansan', alt:'Três pessoas segurando produtos orgânicos'},
        { titulo: 'PAA', link: '/paa', alt:'Venda de legumes orgânicos'},
        { titulo: 'PNAE', link: '/pnae', alt:'Cesta com produtos orgânicos'},
    ]

    return (
        <div>
            <TopoDaPagina menu="Políticas Nacionais" submenu=""></TopoDaPagina>
            <div className="container-fluid home">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto1} width="100%" alt={"Horta No Assentamento"}></img>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 texto1 link">
                        <p>A agricultura familiar no Brasil destaca-se como forma de vida e obtenção de renda de milhares de homens e mulheres, porém, historicamente, o setor enfrenta obstáculos que requerem políticas públicas pertinentes, que viabilizem a estes pequenos produtores rurais a sua fixação no campo – evitando novos fluxos de êxodo rural – e que contribuam para o desenvolvimento humano e regional de forma ambientalmente sustentável e socialmente justa.</p>
                        <p>Esta Plataforma visa contribuir para a visibilidade destes territórios, sujeitos políticos e da Agroecologia como matriz científica e cultural e modelo de desenvolvimento para a sustentabilidade. Em termos de políticas públicas, muitas foram descontinuadas desde 2016 em âmbito federal e estadual, dentre as quais destacamos a <Link to="/pnapo"><b>Política Nacional de Agroecologia e Produção Orgânica (PNAPO)</b></Link> e os <Link to="/paa"><b>Programas de Aquisição de Alimentos (PAA)</b></Link> e <Link to="/pnae"><b>Programa Nacional de Alimentação Escolar (PNAE)</b></Link>.</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>

                <div className="album py-4 fundoImagem" >
                    <div className="container">
                        <div className="row titulo2">
                            <div className="col-md-12">
                                <p>CONHEÇA OS PROJETOS DE POLÍTICAS PÚBLICAS</p>
                            </div>
                        </div>

                        <div className="row">
                            <Projetos foto={foto2} titulo={projeto[0].titulo} link={projeto[0].link} alt={projeto[0].alt}></Projetos>
                            <Projetos foto={foto3} titulo={projeto[1].titulo} link={projeto[1].link} alt={projeto[1].alt}></Projetos>
                            <Projetos foto={foto4} titulo={projeto[2].titulo} link={projeto[2].link} alt={projeto[2].alt}></Projetos>
                        </div>

                        <div className="row">
                            <Projetos foto={foto5} titulo={projeto[3].titulo} link={projeto[3].link} alt={projeto[3].alt}></Projetos>
                            <Projetos foto={foto6} titulo={projeto[4].titulo} link={projeto[4].link} alt={projeto[4].alt}></Projetos>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default politicasNacionais;