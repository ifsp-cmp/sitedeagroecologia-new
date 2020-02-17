import React from 'react';

import './TopoDaPagina.css';

const topoDaPagina = (props) => {

    const caminho = props.submenu ? <span>{props.menu}>{props.submenu}</span> : <span>{props.menu}</span>;

    return (
        <div className="TopoDaPagina">
            <p className="TituloTopo">{props.menu}</p>
            <p className="CaminhoTopo">{caminho}</p>
        </div>
    )
}

export default topoDaPagina;