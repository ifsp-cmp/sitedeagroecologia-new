import React from 'react';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';
import SaibaMais from '../../SaibaMais/SaibaMais';
import './Equipes.css';
import { membros } from '../../../data/membros';
import CardEquipe from './CardEquipe';
import foto1 from '../../../assets/images/QuemSomos/Introducao/quemsomos-03.png';

const equipes = () => {
    const conteudo = <ul className="card-text">
        <li><a href="http://dgp.cnpq.br/dgp/espelhogrupo/272964#recursosHumanos" target="_blank" rel="noopener noreferrer">Acesso ao Diretório do Grupo de Pesquisa NEAES no CNPq.</a></li>
    </ul>;

    return (
        <div>
            <TopoDaPagina menu="Quem Somos" submenu="Equipes"></TopoDaPagina>
            <div className="container-fluid Equipes">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto1} width="100%" alt={"Equipe de alunos e professores do Neaes"}></img>
                        <div className="texto1 ">
                            <p><strong>COORDENAÇÃO GERAL:</strong></p>
                            <p>Profª Erika Batista, Drª em Ciências Sociais e Pós-doutora em Relações Internacionais e Desenvolvimento. Contato: <a href="mailto:erika.batista@ifsp.edu.br" title="Envie um e-mail">erika.batista@ifsp.edu.br</a></p>
                            <p>Profª  Mariana Saragiotto S. Alves, Drª Bióloga. Contato: <a href="mailto:mariana.alves@ifsp.edu.br" title="Envie um e-mail">mariana.alves@ifsp.edu.br</a></p>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="card-body planos">CONHEÇA NOSSA EQUIPE</p>
                    </div>
                </div>
                <div className="container my-4">
                    <div className="row justify-content-center">
                        {membros.map(membro => (
                            <CardEquipe
                                key={membro.name}
                                membro={membro}
                            />
                        ))

                        }
                    </div>
                </div>

                <div className="planosCinza">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p className="card-body planos">ACESSE NOSSO DIRETÓRIO NO CNPq</p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <SaibaMais conteudo={conteudo}></SaibaMais>
                </div>
            </div>


        </div>
    )
}

export default equipes;