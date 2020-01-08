import React from 'react';

// import './DapDosCooperados.css';

const dapDosCooperados = (props) =>{
    return (
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 texto1">
                <p><strong style={{color: "#1A2D00"}}>O que é DAP?</strong></p>
                <p>A Declaração de Aptidão ao Pronaf é a comprovação de enquadramento do agricultor como pequeno produtor. É indispensável para acesso a políticas públicas como o Pronaf, o Programa de Aquisição de Alimentos, Merenda Escolar e Habitação Rural.</p>
                <p><strong style={{color: "#1A2D00"}}>Quem emite o DAP?</strong></p>
                <p>Para obtê-la, o agricultor(a) familiar deve dirigir-se a um órgão ou entidade credenciada pela Secretaria Especial de Agricultura Familiar e do Desenvolvimento Agrário (antigo MDA) (Sindicato dos Trabalhadores Rurais ou Casa da Agricultura), munidos de CPF e dados acerca de seu estabelecimento de produção (área, número de pessoas residentes, composição de forma de trabalho e da renda, endereço completo). Para os agricultores (as) familiares que necessitam desta declaração podendo ser emitida pela Federação dos Trabalhadores na Agricultura do Estado de São Paulo (FETAESP), por meio de seus Sindicatos de Trabalhadores Rurais filiados.</p>
                <p><strong style={{color: "#1A2D00"}}>Quais as vantagens de ter a DAP?</strong></p>
                <p>O Agricultor (a) é reconhecido como Agricultor Familiar, podendo acessar a diversos Programas do Governo Federal para desenvolvimento da agricultura como financiamentos com baixa taxa de juros, comercialização, programas de Habitação Rural, além de ter um documento comprovando as atividades agrícolas do agricultor para aposentadoria.</p>
            </div>
            <div className="col-md-2"></div>
        </div>
    );
}

export default dapDosCooperados;