import React from 'react'
import Carousel from '../../CarroseldeFotos/Carousel';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';
import './FestivalAgro.css';

import f1_agro1 from '../../../assets/images/EducacaoPopular/FestivalAgroecologia/1Edicao/foto6.jpg';
import f1_agro2 from '../../../assets/images/EducacaoPopular/FestivalAgroecologia/1Edicao/foto2.jpg';
import f1_agro3 from '../../../assets/images/EducacaoPopular/FestivalAgroecologia/1Edicao/foto3.jpg';
import f1_agro4 from '../../../assets/images/EducacaoPopular/FestivalAgroecologia/1Edicao/foto4.jpg';
import f1_agro5 from '../../../assets/images/EducacaoPopular/FestivalAgroecologia/1Edicao/foto5.jpg';
import f1_agro6 from '../../../assets/images/EducacaoPopular/FestivalAgroecologia/1Edicao/foto1.jpg';
import f1_agro7 from '../../../assets/images/EducacaoPopular/FestivalAgroecologia/1Edicao/foto7.jpg';

import f2_agro1 from '../../../assets/images/EducacaoPopular/FestivalAgroecologia/2Edicao/foto1.jpg';
import f2_agro2 from '../../../assets/images/EducacaoPopular/FestivalAgroecologia/2Edicao/foto2.jpg';
import f2_agro3 from '../../../assets/images/EducacaoPopular/FestivalAgroecologia/2Edicao/foto3.jpg';
import f2_agro4 from '../../../assets/images/EducacaoPopular/FestivalAgroecologia/2Edicao/foto4.jpg';
import f2_agro5 from '../../../assets/images/EducacaoPopular/FestivalAgroecologia/2Edicao/foto5.jpg';
import f2_agro6 from '../../../assets/images/EducacaoPopular/FestivalAgroecologia/2Edicao/foto6.jpg';
import f2_agro7 from '../../../assets/images/EducacaoPopular/FestivalAgroecologia/2Edicao/foto7.jpg';
import ReactPlayer from 'react-player';

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
                    <Carousel
                        foto1={f1_agro1} alt1={"Foto 1"}
                        foto2={f1_agro2} alt2={"Foto 2"}
                        foto3={f1_agro3} alt3={"Foto 3"}
                        foto4={f1_agro4} alt4={"Foto 4"}
                        foto5={f1_agro5} alt5={"Foto 5"}
                        foto6={f1_agro6} alt6={"Foto 6"}
                        foto7={f1_agro7} alt7={"Foto 7"}
                        id={"FestivalAgroecologia"}
                    />
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
                    <Carousel
                        foto1={f2_agro1} alt1={"Foto 1"}
                        foto2={f2_agro2} alt2={"Foto 2"}
                        foto3={f2_agro3} alt3={"Foto 3"}
                        foto4={f2_agro4} alt4={"Foto 4"}
                        foto5={f2_agro5} alt5={"Foto 5"}
                        foto6={f2_agro6} alt6={"Foto 6"}
                        foto7={f2_agro7} alt7={"Foto 7"}
                        id={"FestivalAgroecologia2"}
                    />
                </div>

                <div className="row mb-4">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="card-body planos">3º Festival de Agroecologia</p>
                        <div className="texto1">
                            <p>O <a href="https://festivalae.com.br/programacao-2020/" target="_blank" rel="noopener noreferrer"><b>3º Festival</b></a> foi realizado em meio às condições impostas pela pandemia de Covid-19 e ocorreu nos dias 17 e 18 de outubro de 2020, numa edição 100% online. Foram mais de 18 horas de programação, entre oficinas, palestras e rodas de conversa. Mais uma vez o NEAES fortaleceu a comissão da agenda cultural, além da participação da profª Erika Batista na mesa <a href=" https://www.youtube.com/watch?v=yslzDEbnRVQ" target="_blank" rel="noopener noreferrer"><b>"O ensino de Agroecologia durante a pandemia"</b></a>, ao lado de outros dois coordenadores de NEA e colegas do IFSP, Alexandra Filipak do Campus de Matão e Flávio Pontes do Campus de Boituva.</p>
                        </div>
                        <div className="player-wrapper mb-3">
                            <ReactPlayer
                                className='react-player '
                                controls
                                width='100%'
                                height='100%'
                                url='https://www.youtube.com/watch?v=yslzDEbnRVQ'
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FestivalAgro
