import React from 'react';

import './TopoDaPagina.css';

const topoDaPagina = () =>{
    return(
        <div className="TopoDaPagina">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-1">
                    <p>PNAE</p>
                </div>
                <div className="col-md-6"></div>
                <div className="col-md-1">
                    <p>POLÍTICAS NACIONAIS</p>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}

export default TopoDaPagina;