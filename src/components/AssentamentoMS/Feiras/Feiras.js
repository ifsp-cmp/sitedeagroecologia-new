import React from 'react';
import Grupos from '../GruposConsumo/Grupos/Grupos';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';

import './Feiras.css';

const feiras = () =>{
    const grupo = [
        {endereco: 'Rua General Marcondes Salgado, 150 – Bosque - Campinas', entrega: 'Mensalmente no 3º (terceiro) sábado de cada mês',horario: '9h as 13h e a roda de conversa após a feira'},
        {endereco: 'R. José Bonifácio, 381 - Chácara Machadinho I, Americana - SP, 13478-040', entrega: 'Semanalmente às Segundas-Feiras',horario: '18h30 às 20h'}
    ]

    return(
        <div>
            <TopoDaPagina menu="Assentamento Milton Santos" submenu="Feiras"></TopoDaPagina>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="card-body planos">Roda de Conversa e Feira de Alimentação Saudável e Artesanatos</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <Grupos endereco={grupo[0].endereco} entrega={grupo[0].entrega} horario={grupo[0].horario}></Grupos>
                
                
                <div className="planosCinza">
                    <div className="row " >
                        <div className="col-md-2" ></div>
                        <div className="col-md-8">
                            <p className="card-body planos">Livres – Rede de Produtos do Bem</p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 texto1">
                            <p>O Livres é uma plataforma que organiza grupos de consumidores, feiras e lojas que funcionam em sistema de permutas de prestação de serviços, créditos solidários, dentre outros. Este novo sistema integra produtores e consumidores, eliminando o intermediador. Promovendo o acesso da população a produtos do bem – livre de agrotóxicos – a Cooperflora e o MST fornecem produtos para a loja do município de Campinas, que fica aberta durante a semana e também para as feiras que acontecem aos sábados.</p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <Grupos endereco={grupo[1].endereco} entrega={grupo[1].entrega} horario={grupo[1].horario}></Grupos>
                </div>

            </div>
        </div>
    )
}

export default feiras;