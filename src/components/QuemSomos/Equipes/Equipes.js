import React from 'react';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';
import './Equipes.css';

const equipes = () =>{
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
            </div>

            <div style={{paddingBottom: "20px", marginTop: "30px"}} className="row TabelaCooperados">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="table-responsive-md">
                        <table className="table table-hover" style={{fontSize: "20px"}}>
                            <thead>
                                <tr>
                                <th scope="col">Pesquisadores</th>
                                <th scope="col">Titulação Máxima</th>
                                <th scope="col">Instituição</th>
                                </tr>
                            </thead>
                            <tbody className="texto1">
                                <tr>
                                <td>André Luís Bordignon</td>
                                <td>Mestrado Profissional</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Diego Aparecido Alves Gomes Figueira</td>
                                <td>Mestrado</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Draylson Micael de Souza</td>
                                <td>Doutorado</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Erika Batista</td>
                                <td>Doutorado</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Estela Pereira Batista</td>
                                <td>Mestrado</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Fábio Feliciano de Oliveira</td>
                                <td>Mestrado</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Herivelto Fernandes Rocha</td>
                                <td>Mestrado Profissional</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Krícia Helena Barreto</td>
                                <td>Doutorado</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Luciano Pereira</td>
                                <td>Doutorado</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Maicon Vaz Moreira</td>
                                <td>Mestrado</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Márcio André Miranda</td>
                                <td>Doutorado</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Mariana Saragiotto da Silva Alves</td>
                                <td>Doutorado</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Nilton Costa Junior</td>
                                <td>Mestrado Profissional</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Zady Castaneda Salazar</td>
                                <td>Mestrado</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>


            <div style={{paddingBottom: "20px", marginTop: "20px"}} className="row TabelaCooperados">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="table-responsive-md">
                        <table className="table table-hover" style={{fontSize: "20px"}}>
                            <thead>
                                <tr>
                                <th scope="col">Técnicos</th>
                                <th scope="col">Formação Acadêmica</th>
                                <th scope="col">Instituição</th>
                                </tr>
                            </thead>
                            <tbody className="texto1">
                                <tr>
                                <td>Ariele Carolina Contrigiani</td>
                                <td>Mestranda</td>
                                <td>UFSCAR</td>
                                </tr>
                                <tr>
                                <td>Carla Vanessa de Sousa Caratin</td>
                                <td>Mestranda</td>
                                <td>-</td>
                                </tr>
                                <tr>
                                <td>Nathalia Pasqualão de Biagi</td>
                                <td>Graduação</td>
                                <td>UFSCAR</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>

            <div style={{paddingBottom: "50px", marginTop: "20px"}} className="row TabelaCooperados">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="table-responsive-md">
                        <table className="table table-hover" style={{fontSize: "20px"}}>
                            <thead>
                                <tr>
                                <th scope="col">Estudantes</th>
                                <th scope="col">Nível de Escolaridade</th>
                                <th scope="col">Instituição</th>
                                </tr>
                            </thead>
                            <tbody className="texto1">
                                <tr>
                                <td>Alexsander Fonseca Moreira</td>
                                <td>Ensino Médio (2o grau)</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Franciely Prado dos Santos</td>
                                <td>Ensino Médio (2o grau)</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Gabriel Bucalon</td>
                                <td>Graduação curso TADS</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Gabrielly Barreiro Mafra</td>
                                <td>Ensino Médio (2o grau)</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Guilherme Henrique Alves Pereira</td>
                                <td>Ensino Profissional de nível técnico</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Jessé Ferreira Lima Ensino</td>
                                <td>Ensino Médio (2o grau)</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>José Guilherme Marques de Castro</td>
                                <td>Graduação curso TADS</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Leticia Franco</td>
                                <td>Graduação curso TADS</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Luiz Roberto da Cruz Santos</td>
                                <td>Ensino Médio (2o grau)</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Mariane Dynara dos Santos de Freitas</td>
                                <td>Ensino Médio (2o grau)</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Mayara de Oliveira Peres</td>
                                <td>Especialização</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Nathan Silva de Andrade</td>
                                <td>Ensino Médio (2o grau)</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Noah Serrati Moreno</td>
                                <td>Ensino Médio (2o grau)</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Pedro Gabriel Dall'Oca Almeida</td>
                                <td>Graduação Electrônica Industrial</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Rafaela Ferreira Leite</td>
                                <td>Ensino Médio (2o grau)</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Rodolfo Medina</td>
                                <td>Especialização</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Samuel Vicente Dias de Freitas</td>
                                <td>Ensino Médio (2o grau)</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                                <tr>
                                <td>Winícius Oliveira de Andrade</td>
                                <td>Graduação curso TADS</td>
                                <td>IFSP Câmpus Campinas</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>

        </div>
    )
}

export default equipes;