import React from 'react';
import LazyLoad from 'react-lazyload';

import Form from '../../containers/Form/Form';
import './Home.css';

// import foto1 from '../../assets/images/Home/foto1.jpg';
import bannerHome from '../../assets/images/Home/bannerhome.png';
import neaesfoto from '../../assets/images/Home/home-neas.png';
import fotoCiencia1 from '../../assets/images/Home/foto_ciencia1.png';
import fotoCiencia2 from '../../assets/images/Home/foto_ciencia2.png';
import fotoMovimento1 from '../../assets/images/Home/foto_movimento1.png';
import fotoMovimento2 from '../../assets/images/Home/foto_movimento2.png';
import fotoPratica1 from '../../assets/images/Home/foto_pratica1.png';
import fotoPratica2 from '../../assets/images/Home/foto_pratica2.png';
import foto4 from '../../assets/images/Home/foto4.png';
import foto5 from '../../assets/images/Home/foto5.png';
import foto6 from '../../assets/images/Home/foto6.png';

const home = () => {
    return (
        <div className="container-fluid">
            <LazyLoad placeholder={<div>Loading</div>}>
                <div className='Home'>
                    <div className="row">
                        <LazyLoad style={{width: '100%'}} placeholder={<div>Loading</div>}>
                            <img src={bannerHome} width="100%" alt={"Campo"}></img>
                        </LazyLoad>
                    </div><br></br>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4 NeaesFoto">
                            <img src={neaesfoto} alt={"Logo Neaes"} width="100%"></img>
                        </div>
                        <div className='col-md-6 bloco1'>
                            <h2 className="titulo3">NÚCLEO DE ESTUDOS EM AGROECOLOGIA, EDUCAÇÃO E SOCIEDADE (NEAES)</h2>
                            <p>Esta Plataforma reúne os trabalhos do Núcleo de Estudos em Agroecologia, Educação e Sociedade (NEAES) do Instituto Federal de São Paulo (IFSP), Campus de Campinas. Também reúne os trabalhos desenvolvidos no âmbito dos projetos NESAN e NEA do IFSP, Campus de Campinas, no âmbito das Chamadas 16 e 21/2016 do CNPq.</p>
                            <p>O NEAES integra uma importante rede de construção do conhecimento agroecológico, defesa e promoção da Soberania e Segurança Alimentar e Nutricional na Região Metropolitana de Campinas ao lado de parceiros estratégicos. Apropriando-se de forma interdisciplinar das contribuições da Agroecologia, o Núcleo vem canalizando seus esforços para articular tecnologias sociais e redes sociotécnicas para o fortalecimento de territórios de reforma agrária e para a garantia do Direito Humano à Alimentação Adequada.</p>
                        </div>
                    </div>
                    <div className="album py-4 " style={{ marginBottom: "60px" }}>
                        <div className="container">
                            <div className="row ">
                                <div className="col-md-12 titulo2">
                                    <p>O QUE É AGROECOLOGIA?</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 ">
                                    <div className="card mb-4 shadow-sm  bloco3">
                                        <img className="card-img-top" src={fotoCiencia2} alt={"Vegetais"}></img>
                                        <div className="card-body">
                                            <img src={fotoCiencia1} alt={"Icone_Ciencia"}></img>
                                            <h5 className="card-title tituloBox">É CIÊNCIA</h5>
                                            <p className="card-text text-center">Conjunto de conhecimentos técnicos, tecnológicos e sociopolíticos de natureza inter, multi e transdisciplinar articulados numa mesma matriz científica para o desenvolvimento de uma agricultura de base ecológica.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4 shadow-sm bloco3">
                                        <img className="card-img-top" src={fotoMovimento2} alt={"Galinha"}></img>
                                        <div className="card-body">
                                            <img src={fotoMovimento1} alt={"Icone_Movimento"} width="35px"></img>
                                            <h5 className="card-title tituloBox">É MOVIMENTO</h5>
                                            <p className="card-text text-center">Troca de saberes e construção do conhecimento agroecológico com movimentos sociais e comunidades organicamente ligadas à terra, como agricultoras e agricultores familiares, indígenas, populações quilombolas e povos tradicionais para a proteção da sociobiodiversidade.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4 shadow-sm bloco3">
                                        <img className="card-img-top" src={fotoPratica2} alt={"Enxada"}></img>
                                        <div className="card-body">
                                            <img src={fotoPratica1} alt={"Icone_Prática"} width="35px" style={{ marginBottom: "5px" }}></img>
                                            <h5 className="card-title tituloBox">É PRÁTICA</h5>
                                            <p className="card-text text-center">Rede de agentes e ações políticas, econômicas, sociais, institucionais, culturais, ecológicas, éticas e pedagógicas de luta, denúncia e proposição de projetos e políticas públicas para a defesa da soberania e segurança alimentares.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row Bloco4">
                        <div className="cartao">
                            <img className="cartao-image" src={foto4} width="100%" alt={"HortaDoAssentamento"}></img>
                            <div className="cartao-corpo">
                                <h6 className="cartao-titulo"><b>NO IFSP/ CÂMPUS DE CAMPINAS</b></h6>
                                <h4 className="titulo3">Núcleo de Estudos em Segurança Alimentar e Nutricional (NESAN)</h4>
                                <p className="cartao-texto text-justify">Em setembro de 2017 o NEAES teve o projeto "Agroecologia, tecnologias de produção orgânica em assentamentos rurais e educação popular: a contribuição do IFSP na promoção da segurança alimentar e nutricional para a região metropolitana de Campinas" contemplado pela Chamada CNPq/MCTIC Nº 016/2016 - SEGURANÇA ALIMENTAR E NUTRICIONAL NO ÂMBITO DA UNASUL para a criação de um Núcleo de Estudos em Segurança Alimentar e Nutricional, possibilitando o fomento de parte das atividades reunidas nesta Plataforma.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row Bloco4">
                        <div className="cartao">
                            <div className="cartao-corpo">
                                <h6 className="cartao-titulo"><b>NO IFSP/ CÂMPUS DE CAMPINAS</b></h6>
                                <h4 className="titulo3">Núcleo de Estudos em Agroecologia (NEA)</h4>
                                <p className="cartao-texto text-justify">Em fevereiro de 2018 o NEAES teve o projeto "Agroecologia, tecnologias de produção orgânica em assentamentos rurais e educação popular: a contribuição do IFSP para a sustentabilidade ambiental e segurança alimentar na RMC" contemplado pela Chamada Nº 21/2016 - Linha 1: Criação de Núcleo de Estudo em Agroecologia e Produção Orgânica (NEA), possibilitando articulação com as ações iniciadas pelo NESAN e ampliação dos trabalhos como principal fonte de fomento às atividades de pesquisa, extensão e ensino no âmbito do projeto NEA.</p>
                            </div>
                            <img className="cartao-image" src={foto5} width="100%" alt={"ApresentaçõesDeProjetos"}></img>
                        </div>
                    </div><br></br>
                    <div className="row Bloco5">

                        <img className="" src={foto6} alt={"VegetaisELegumes"}></img>
                        <Form></Form>
                    </div>
                </div>
            </LazyLoad>
        </div >
    );
}

export default home;

