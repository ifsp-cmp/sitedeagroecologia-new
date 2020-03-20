import React from 'react';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';
import SaibaMais from '../../SaibaMais/SaibaMais';
import './Equipes.css';

const equipes = () =>{
    const conteudo = <ul className="card-text">
        <li><a href="http://dgp.cnpq.br/dgp/espelhogrupo/272964#recursosHumanos" target="_blank" rel="noopener noreferrer">Acesso ao Diretório do Grupo de Pesquisa NEAES no CNPq.</a></li>
    </ul>;

    return(
        <div>
            <TopoDaPagina menu="Quem Somos" submenu="Equipes"></TopoDaPagina>
            <div className="container-fluid Equipes">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        {/* <img src={}></img> */}
                        <div className="texto1">
                            <p><strong>COORDENAÇÃO GERAL:</strong></p>
                            <p>Profª Erika Batista, Drª em Ciências Sociais e Pós-doutora em Relações Internacionais e Desenvolvimento. Contato: <u>erika.batista@ifsp.edu.br</u></p>
                            <p>Profº Herivelto Fernandes Rocha, Ms em Geografia Agrária. Contato: <u>herivelto.rocha@ifsp.edu.br</u></p>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="planosCinza">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p className="card-body planos">CONHEÇA NOSSA EQUIPE</p>
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