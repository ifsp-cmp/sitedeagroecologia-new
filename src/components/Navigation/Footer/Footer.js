import React from 'react';
import './Footer.css'
import { NavLink } from 'react-router-dom';
import phoneIcon from '../../../assets/images/icons/phoneicon.svg';
import emailIcon from '../../../assets/images/icons/emailicon.svg';


const footer = () => {
    return (
        <footer className="Footer">
            <div className="AcessoRapido Bloco">
                <p className='Titulo'>Acesso Rápido</p>
                <NavLink to='/' exact>Início</NavLink>
                <br />
                <NavLink to='/quemsomos' exact>Quem Somos</NavLink>
            </div>
            <div className='PaginasdeInteresse Bloco'>
                <p className='Titulo'>Páginas de Interesse</p>
                <li><a href="http://agroecologia.gov.br/">Agroecologia Governo Federal</a></li>
                <li><a href="http://www.osala-agroecologia.org/">Observatório de Soberania Alimentar e Agroecologia</a></li>
                <li><a href="http://aba-agroecologia.org.br/">Associação Brasileira de Agroecologia</a></li>
                <li><a href="https://www.embrapa.br/">Embrapa</a></li>
                <li><a href="http://www.cati.sp.gov.br/">Coordenaria de Desenvolvimento Rural Sustentável</a></li>
                <li><a href="http://www.incra.gov.br/">INCRA</a></li>

            </div>
            <div className='Contato Bloco'>
                <p className='Titulo'>Entre em Contato</p>
                <div>
                    <p> Av. Comendador Aladino Selmi, s/n,
                        <br />Bairro Amarais
                        <br />Campinas - SP
                        <br />CEP: 13069-901
                    </p>
                    <div className='Fone'>
                        <div className='Icone'>
                            <img src={phoneIcon} alt='Phone Icon'></img>
                        </div>
                        (19) 3746-6128
                    </div>
                    <div className='Email'>
                        <div className='Icone'>
                            <img src={emailIcon} alt='Email Icon'></img>
                        </div>
                        erika.batista@ifsp.edu.br
                    </div>
                    <div className='Facebook'>
                        <p>Acompanhe as novidades</p>
                        <a href="https://www.facebook.com/neaes.ifsp.campinas/">
                            <div className='IconeFacebook Icone'>
                                <span>f</span>
                            </div>
                        </a>
                    </div>

                    {/* <dt>Facebook</dt>
                                <dd><a href="https://www.facebook.com/neaes.ifsp.campinas/">https://www.facebook.com/neaes.ifsp.campinas/</a></dd>
                                <dt>Email</dt>
                                <dd><a href="mailto:erika.batista@ifsp.edu.br">erika.batista@ifsp.edu.br</a></dd>
                                <dt>Endereço</dt>
                                <dd>
                                    Av. Comendador Aladino Selmi, s/n, <br />
                                    Bairro Amarais<br />
                                    CEP: 13069-901<br />
                                    Campinas - SP
											</dd>
                                <dt>Telefone</dt>
                                <dd>(19) 3746-6128</dd>
                            </dl>
                        </div>
                    </div> */}
                </div>

            </div>
            {/* <div className="Bloco">
                Realização
                <div className="Itens">
                    <a href="https://cmp.ifsp.edu.br/index.php/extensao-categoria-menu-2/2-uncategorised/221-neaes">
                    <img className="NeaesLogo" src={logoNeaes} alt='Logo do NEAES'/>
                    </a> 
                    <a href='http://www.cmp.ifsp.edu.br' >
                        <img className="IfspLogo" src={logoIfspCampinas} alt='Logo do IFSP Campinas'/>
                    </a>
                </div>
            </div>
            <div className="Bloco">
                <NavLink className="Projeto" to='/projeto' exact>Equipe de Desenvolvimento</NavLink><br />
                <img className="License" src={license} alt='Tipo de Licenciamento.'/>
            </div>
            <div className="Bloco">
                Contato<br />
                <a href='https://www.facebook.com/Cooperflora1/' target="_blank" rel="noopener noreferrer">
                    <img className="FacebookLogo" src={logoFacebook} alt='Logo do Facebook'/>
                </a>
                <a href='mailto:contatocooperflora@gmail.com'>
                    <img className="EmailLogo" src={logoEmail} alt='Logo do Email'/>
                </a>
            </div> */}
        </footer>
    );
}

export default footer;