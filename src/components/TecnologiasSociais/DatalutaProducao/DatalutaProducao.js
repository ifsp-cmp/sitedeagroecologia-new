import React from 'react';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';
import './DatalutaProducao.css';

import foto from '../../../assets/images/TecnologiasSociais/Dataluta/foto1.png';
import foto2 from '../../../assets/images/TecnologiasSociais/Dataluta/app-dataluta.png';
import icone from '../../../assets/images/TecnologiasSociais/appAgro/icone.png';

const datalutaProducao = () => {
    return (
        <div>
            <TopoDaPagina menu="Tecnologias Sociais" submenu="Dataluta Produção"></TopoDaPagina>
            <div className="container-fluid Dataluta">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto} width="100%" alt={"Homem Plantando"}></img>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 texto1">
                        <p>O aplicativo visa possibilitar o gerenciamento produtivo da agricultura familiar brasileira. Além do gerenciamento, o aplicativo também será capaz de gerar um banco de dados referente a esta produção. No Brasil, os grandes produtores são favorecidos na disputa por políticas públicas (crédito, produção, comercialização, infraestrutura e etc.) e a justificativa, quase sempre, passa pela quantidade produzida por eles (recordes e mais recordes, uma safra após a outra). Não se discute a qualidade, nem de que forma se dá o processo produtivo.</p>
                        <p>A criação de um banco de dados referente à produção orgânica e agroecológica originada em territórios de reforma agrária e alimentado pelas famílias produtoras pode contribuir para o fortalecimento do território camponês e, consequentemente, para a matriz agroecológica. Dimensionar a quantidade e qualidade da produção agroecológica, num contexto de avanço do impactos sociais e ambientais causados pelos grandes fazendeiros e pelo avanço da fronteira agrícola em áreas florestadas, é uma forma de justificarmos a existência da agricultura de matriz agroecológica realizada pelas famílias camponesas do país.</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row" style={{ marginTop: '30px', marginBottom: '10px' }}>
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto2} width="100%" alt={"App Data Luta"}></img>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="texto1">O aplicativo foi desenvolvido como parte do projeto fomentado pela Chamada 21/2016 do CNPq e coordenado pelo profº Herivelto Fernandes Rocha com apoio do estudante de Tecnologia em Desenvolvimento de Sistemas, José Guilherme Marques de Castro, e orientação técnica dos professores Glauber da Rocha Balthazar e Draylson Micael. O app pode ser acessado pelos sistema Android e seu download pode ser feito na Play Store.</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2" />
                    <div className="col-md-8">
                        <div className="card" style={{ borderBottom: "4px solid #77B81E" }}>
                            <div className="card-body fundo_cinza">
                                <h4 className="card-title titulo3"><img src={icone} alt={"Icone_Download"}></img><a href=" https://play.google.com/store/apps/details?id=dataluta.ifsp.edu.br" target="_blank" rel="noopener noreferrer"> Clique aqui e baixe o APP</a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2" />
                </div>
            </div>
        </div>
    )//https://play.google.com/store/apps/details?id=dataluta.ifsp.edu.br
}

export default datalutaProducao;