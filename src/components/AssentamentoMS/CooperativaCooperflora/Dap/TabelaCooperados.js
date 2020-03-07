import React from 'react';

import './TabelaCooperados.css';

const tabelaCooperados = () =>{ 
    return (
        <div style={{paddingBottom: "40px", marginTop: "30px"}} className="row TabelaCooperados">
             <div className="col-md-2"></div>
             <div className="col-md-8">
                <div className="table-responsive-md">
                    <table className="table table-hover" style={{fontSize: "20px"}}>
                        <thead>
                            <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">DAP Agricultor</th>
                            <th scope="col">Situação</th>
                            </tr>
                        </thead>
                        <tbody className="texto1">
                            <tr>
                            <td>EUNICE MARIA PIMENTA</td>
                            <td>IN-SP0260000-00057-181007</td>
                            <td>DAP Suspensa <div className="circulo1"></div></td>
                            </tr>
                            <tr>
                            <td>OSMAR ANTONIO CONTRIGIAN</td>
                            <td>IN-SP0260000-00057-181007</td>
                            <td>DAP Suspensa <div className="circulo1"></div></td>
                            </tr>
                            <tr>
                            <td>ELENI PIRES FERNANDES</td>
                            <td>IN-SP0260000-00001-080318</td>
                            <td>DAP Ativa <div className="circulo2"></div></td>
                            </tr>
                            <tr>
                            <td>IRENE SOARES DA SILVA ASSIS</td>
                            <td>IN-SP0260000-00100-080318</td>
                            <td>DAP Ativa <div className="circulo2"></div></td>
                            </tr>
                            <tr>
                            <td>GILMAR JUSTINO DE ASSIS</td>
                            <td>IN-SP0260000-00100-080318</td>
                            <td>DAP Ativa <div className="circulo2"></div></td>
                            </tr>
                            <tr>
                            <td>JOSE SOARES DA SILVA</td>
                            <td>IN-SP0260000-00086-080318</td>
                            <td>DAP Ativa <div className="circulo2"></div></td>
                            </tr>
                            <tr>
                            <td>LIORMANDO JOSE DOS SANTOS</td>
                            <td>IN-SP0260000-00082-080318</td>
                            <td>DAP Ativa <div className="circulo2"></div></td>
                            </tr>
                            <tr>
                            <td>SEBASTIAO SANTOS SILVA</td>
                            <td>IN-SP0260000-00085-200318</td>
                            <td>DAP Ativa <div className="circulo2"></div></td>
                            </tr>
                            <tr>
                            <td>JANETE PERUCA DA SILVA</td>
                            <td>SDW0093749638332106181034</td>
                            <td>DAP Ativa <div className="circulo2"></div></td>
                            </tr>
                            <tr>
                            <td>MARIA REGINA ALBUQUERQUE CAMPO</td>
                            <td>SDW0027942468011307181121</td>
                            <td>DAP Ativa <div className="circulo2"></div></td>
                            </tr>
                            <tr>
                            <td>ROBERTO MARTIM CARDOSO</td>
                            <td>SDW0027942468011307181121</td>
                            <td>DAP Ativa <div className="circulo2"></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
             <div className="col-md-2"></div>
        </div>
    )
}

export default tabelaCooperados;