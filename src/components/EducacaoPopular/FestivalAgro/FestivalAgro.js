import React from 'react'
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';
import './FestivalAgro.css';

const FestivalAgro = () => {
    return (
        <>
            <TopoDaPagina menu="Educação Popular" submenu="Festival de Agroecologia e Ecoturismo" />
            <div className="container-fluid FestivalAgro">

                <div className="row mb-4">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="card-body planos">1º Festival de Agroecologia</p>
                        <div className="texto1">
                            <p>O <a href="https://www.facebook.com/media/set/?vanity=festivalae&set=a.300726630775584" target="_blank" rel="noopener noreferrer"><b>1º Festival de Agroecologia e Ecoturismo</b></a> do Leste Paulista ocorreu nos dias 1 e 2 de dezembro de 2018, no Cefol – Centro de Lazer e Formação dos Trabalhadores Químicos, na cidade de Valinhos. O NEAES participou da organização como apoiador do evento, que mobilizou aproximadamente 500 pessoas entre público geral, produtores, consumidores e demais organizações parceiras.</p>
                        </div>
                    </div>
                </div>

                <div className="planosCinza pb-4">
                    <div className="row" style={{ marginTop: "30px" }}>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p className="card-body planos">2º Festival de Agroecologia</p>
                            <div className="texto1">
                                <p>A <a href="https://www.facebook.com/festivalae/photos/?tab=album&album_id=481401489374763" target="_blank" rel="noopener noreferrer"><b>2ª edição do Festival</b></a> ocorreu novamente no Cefol durante os dias 5 e 6 de outubro de 2019. O NEAES participou mais ativamente da organização do evento, mobilizando seus esforços para construir a agenda cultural da programação e garantir o engajamento do público nas atividades</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="card-body planos">3º Festival de Agroecologia</p>
                        <div className="texto1">
                            <p>O <a href="https://festivalae.com.br/programacao-2020/" target="_blank" rel="noopener noreferrer"><b>3º Festival</b></a> foi realizado em meio às condições impostas pela pandemia de Covid-19 e ocorreu nos dias 17 e 18 de outubro de 2020, numa edição 100% online. Foram mais de 18 horas de programação, entre oficinas, palestras e rodas de conversa. Mais uma vez o NEAES fortaleceu a comissão da agenda cultural, além da participação da profª Erika Batista na mesa <a href=" https://www.youtube.com/watch?v=yslzDEbnRVQ" target="_blank" rel="noopener noreferrer"><b>"O ensino de Agroecologia durante a pandemia"</b></a>, ao lado de outros dois coordenadores de NEA e colegas do IFSP, Alexandra Filipak do Campus de Matão e Flávio Pontes do Campus de Boituva.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FestivalAgro
