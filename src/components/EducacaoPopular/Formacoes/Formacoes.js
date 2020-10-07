import React from 'react';
import SaibaMais from '../../SaibaMais/SaibaMais';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';

import './Formacoes.css';

import foto1 from '../../../assets/images/EducacaoPopular/Formacoes/foto_capa2.jpg';
import foto2 from '../../../assets/images/EducacaoPopular/Formacoes/foto2.jpg';
import foto3 from '../../../assets/images/EducacaoPopular/Formacoes/foto3.jpg';

const formacoes = () => {
    const conteudo = <ul className="card-text">
        <li><a href="https://portal2.cmp.ifsp.edu.br/portal/index.php/2-noticias/1721-ifsp-campinas-tera-ii-formacao-em-agroecologia-e-redes-de-consumo-consciente" target="_blank" rel="noopener noreferrer">IFSP/Campinas terá II Formação em Agroecologia e Redes de Consumo Consciente.</a></li>
        <li><a href="https://portal.cmp.ifsp.edu.br/index.php/noticias/469-ifsp-campinas-tera-ii-formacao-em-agroecologia-e-redes-de-consumo-consciente" target="_blank" rel="noopener noreferrer">IFSP/Campinas terá III Formação em Agroecologia e Redes de Consumo Consciente</a></li>
    </ul>;

    return (
        <div>
            <TopoDaPagina menu="Educação Popular" submenu="Formações"></TopoDaPagina>
            <div className="container-fluid Formacoes">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto1} width="100%" alt={"Roda de Conversa"}></img>
                        <div className="texto1">
                            <p>As formações para participação nos grupos de consumo fazem parte da metodologia participativa da pesquisa-ação e das atividades que compõem a "Campanha Anual para Promoção do Produto Orgânico", na qual os próprios agricultores e agricultoras da Cooperflora promovem uma roda de conversa com consumidores interessados na aquisição periódica da produção da Cooperativa da Agricultura Familiar de Americana, Cosmópolis, Limeira e Piracicaba – Cooperflora.</p>
                            <p>Essa reunião garante a construção de relações entre os agricultores e consumidores possibilitando diversos arranjos de consumo, na qual os consumidores adquirem a ciência da pressão do sistema agroalimentar na restrição de dietas alimentares e da própria produção. A partir disso é possível situar produtor e consumidor numa relação de equivalência para atingir o objetivo da alimentação nutritiva, além da permanência dos agricultores e agricultoras de forma produtiva no território e com planejamento pelo acordo de compra garantida.</p>
                            <p>No Campus Campinas, já ocorreram três formações para o Grupo de Consumo “Estrela Livre”. A I Formação em "Agroecologia e Redes de Consumo Consciente" ocorreu em 05 de agosto de 2017, quando o grupo formado por servidores do Instituto Federal de São Paulo (IFSP) iniciou o recebimento das cestas quinzenalmente com produtos orgânicos da Cooperflora. A II Formação foi realizada em 27 de setembro de 2017 e a III Formação em 11 de abril de 2018. Em função da dificuldade de realizar as formações presencialmente, em 2019 o NEAES iniciou um projeto para atender esta demanda de forma remota e que resultou no <b><a href="https://cooperflora.eco.br/" target="_blank" rel="noopener noreferrer" >"Site de Formação Cooperflora"</a></b>, coordenado pelo profº André Luís Bordignon.</p>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto2} width="50%" alt={"Foto Cooperflora1"}></img>
                        <img src={foto3} width="50%" alt={"Foto Cooperflora2"}></img>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <SaibaMais conteudo={conteudo}></SaibaMais>

            </div>
        </div>
    )
}

export default formacoes;