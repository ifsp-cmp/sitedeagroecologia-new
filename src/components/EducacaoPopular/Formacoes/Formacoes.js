import React from 'react';
import SaibaMais from '../../SaibaMais/SaibaMais';

import './Formacoes.css';

import foto1 from '../../../assets/images/EducacaoPopular/Formacoes/foto1.png';

const formacoes = () =>{
    const conteudo = <ul className="card-text">
        <li><a href="https://www2.cmp.ifsp.edu.br/portal/index.php/2-noticias/1721-ifsp-campinas-tera-ii-formacao-em-agroecologia-e-redes-de-consumo-consciente" target="_blank" rel="noopener noreferrer">IFSP/Campinas terá II Formação em Agroecologia e Redes de Consumo Consciente.</a></li>
        <li><a href="https://cmp.ifsp.edu.br/index.php/noticias/469-ifsp-campinas-tera-ii-formacao-em-agroecologia-e-redes-de-consumo-consciente" target="_blank" rel="noopener noreferrer">IFSP/Campinas terá III Formação em Agroecologia e Redes de Consumo Consciente</a></li>
    </ul>;

    return(
        <div className="container-fluid Formacoes">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <img src={foto1} width="100%" alt={"Roda de Conversa"}></img>
                    <div className="texto1">
                        <p>As formações para participação nos grupos de consumo fazem parte da metodologia participativa da pesquisa-ação, na qual os próprios agricultores da Cooperflora promovem uma roda de conversa com consumidores interessados na aquisição periódica da produção dos agricultores e agricultoras cooperados.</p>
                        <p>Essa reunião garante a construção de relações entre os agricultores e consumidores possibilitando diversos arranjos de consumo, na qual os consumidores adquirem a ciência da pressão do sistema agroalimentar na restrição de dietas alimentares e da própria produção. A partir disso é possível situar produtor e consumidor numa relação de equivalência para atingir o objetivo da alimentação nutritiva, além da permanência dos agricultores e agricultoras de forma produtiva no território e com planejamento pelo acordo de compra garantida.</p>
                        <p>No Campus Campinas, já ocorreram três formações para o Grupo de Consumo “Estrela Livre”. A I Formação em Agroecologia e Redes de Consumo Consciente ocorreu em 05 de agosto de 2017, quando o grupo formado por servidores do Instituto Federal de São Paulo (IFSP) iniciou suas atividades com 18 participantes num arranjo comercial modelado pelo próprio grupo na ocasião. A capacitação é o primeiro passo para os servidores e estudantes que desejam fazer parte do grupo Estrela Livre, que recebe quinzenalmente cestas de produtos orgânicos da Cooperativa da Agricultura Familiar de Americana, Cosmópolis, Limeira e Piracicaba – Cooperflora.</p>
                        <p>Na formação são abordadas as características do processo produtivo agroecológico, os cultivos realizados no assentamento Milton Santos, os produtores já certificados via OCS e os desafios econômicos e políticos que atingem diretamente a agricultura familiar. Também são apresentados o formato e a dinâmica das estratégias de desenvolvimento econômico do assentamento e o modelo de redes de consumo conscientes.</p>
                        <p>A II Formação foi realizada em 27 de setembro de 2017 e a III Formação em 11 de abril de 2018. Atualmente, o grupo conta servidores e estudantes do Campus Campinas, Unidade Amarais e o processo de capacitação está em reelaboração para abranger mais participantes de forma digital e diretamente pelo canal de acesso da Cooperflora.</p>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
            <SaibaMais conteudo={conteudo}></SaibaMais>


        </div>
    )
}

export default formacoes;