import React from 'react';
import './Footer.css'
import { NavLink } from 'react-router-dom';

import logoFacebook from '../../../assets/images/logofacebook.png';
import logoEmail from '../../../assets/images/logoemail.png';
import license from '../../../assets/images/license.png';
import logoIfspCampinas from '../../../assets/images/logoifspcampinas.png';
import logoNeaes from '../../../assets/images/logoneaes.png';

const footer = () => {
    return (
        <footer className="Footer Bloco">
            <div className="AcessoRapido">
                <p className='Titulo'>Acesso Rápido</p>
            </div>
            <div className='PaginasdeInteresse Bloco'>
                <p className='Titulo'>Páginas de Interesse</p>

            </div>
            <div className='Contato'>
                <p className='Titulo'>Entre em Contato</p>

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