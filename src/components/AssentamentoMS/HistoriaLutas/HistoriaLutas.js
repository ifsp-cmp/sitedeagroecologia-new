import React from 'react';
import SaibaMais from '../../SaibaMais/SaibaMais';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';

import './HistoriaLutas.css';

import foto1 from '../../../assets/images/AssentamentoMS/HistLutas/foto1.jpg';

const historiasLutas = () =>{
    const conteudo = <ul className="card-text">
        <li><a href="https://www.facebook.com/AssentamentoMiltonSantos/posts/380597652019366/" target="_blank" rel="noopener noreferrer">Facebook Assentamento Milton Santos</a></li>
    </ul>;

    return (
        <div>
            <TopoDaPagina menu="Assentamento Milton Santos" submenu="História e Lutas"></TopoDaPagina>
            <div className="container-fluid AssentamentoMS">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto1} width="100%" alt={"EntradaAssentamentoMS"}></img>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 texto1">
                        <p>O Assentamento Milton Santos nasceu de um processo de lutas intenso na região. As famílias foram retiradas do Sítio Santo Antonio em 5 de dezembro de 2005, ocupando outra área no mesmo dia: próximo à rodovia que liga Limeira a Arthur Nogueira, a fazenda Santa Júlia. Após duas liminares de reintegração de posse, o acampamento Milton Santos entrou em acordo com o INCRA, levando seus barracos de lona preta para a área do Sítio Boa Vista em 23 de dezembro de 2005, num dia de muita chuva. Essa mesma área em 2004 já havia sido palco da luta do acampamento Terra Sem Males, existente desde 2002.</p>
                        <p>O sítio foi confiscado por decreto federal em 1976 e é arrendado ilegalmente pela Usina Ester desde 1989. A área pertencia a Fábrica de Tecidos Carioba, propriedade da família Abdalla e foi tomado pela União como acerto de dívidas trabalhistas. O Instituto Nacional de Previdência Social (INPS, atual INSS) passou a ser o detentor do Sítio Boa Vista a partir de 1977 e este foi repassado para o INCRA para fins de reforma agrária em 2004.</p>
                        <p>O INCRA instalou as cerca de 150 famílias em dezembro de 2005 na área que correspondia a apenas parte do Sítio Boa Vista. No processo de ocupação e permanência na área, enfrentando todas as dificuldades quanto a falta de água, moradia precária e escassez de alimento e transporte, muitas das famílias desistiram de permanecer no local, ficando apenas 68 famílias para serem assentadas. Apesar do Sítio Boa Vista ter mais de 300 hectares, foram utilizados para o assentamento apenas 104 hectares, ficando cada família com cerca de um hectare.</p>
                        <p>O assentamento não encerrou as lutas. Neste processo, surgiu o Acampamento Roseli Nunes, que enfrentou mais cinco ocupações entre 2007 e 2011, denunciando a grilagem de terras públicas e o uso indevido do Sítio Boa Vista pela Usina Ester. A ocupação mais recente, que ganhou o nome de Helenira Resende, aconteceu de agosto a outubro de 2011 e reuniu mais de 500 famílias, além daquelas que já viviam no Acampamento Roseli Nunes, que permanece até hoje dentro de uma área de recuo do Assentamento Milton Santos. As ocupações no entorno, apesar de denunciarem a grilagem de terras do Sítio Boa Vista pela Usina, não conseguiram ampliar o assentamento ou mesmo atender às demandas dos trabalhadores do campo na região.</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <SaibaMais conteudo={conteudo}></SaibaMais>


            </div>
        </div>
    )
}

export default historiasLutas;