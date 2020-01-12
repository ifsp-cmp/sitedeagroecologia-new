import React from 'react';

import './TopoDaPagina.css';

const topoDaPagina = (props) =>{
    return(
        <div className="TopoDaPagina">
            <div className="row ">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <p className="TituloTopo"><br></br>TÍTULO</p>
                    <p className="CaminhoTopo">CAMINHO -></p>
                </div>
                
            </div>
        </div>
    )
}

export default topoDaPagina;