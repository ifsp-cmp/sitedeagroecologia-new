import React from 'react'
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina'
import './HistoriasDeVida.css'
import foto1 from '../../../assets/images/EducacaoPopular/HistoriasDeVida/foto_teste.png'
import foto2 from '../../../assets/images/EducacaoPopular/HistoriasDeVida/foto2.png'
//melhorar a qualidade das fotos.

const HistoriasDeVida = () => {
  return (
    <div>
      <TopoDaPagina
        menu="Educação Popular"
        submenu="Histórias de vida e Agroecologia"
      />
      <div className="container-fluid HistoriasDeVida">
        <div className="row justify-content-center">
          <div className="col-md-2"></div>
          <div className="col-md-8 row justify-content-center">
            <img
              src={foto1}
              width="100%"
              alt="Imagem Histórias de vida"
              style={{ maxWidth: 900 }}
            />
            <div className="texto1">
              <p>
                A alimentação é um tema extremamente presente nas nossas vidas,
                é um fator importante que determina culturas, aspectos, e
                comportamentos desde o início das sociedades. Em vista disto, é
                importante dizer que pode ser utilizado como tema gerador de
                estudo na Metodologia de História de Vida, que consiste em
                sintetizar memórias e experiências a fim de utilizá-las no
                presente e traçar um futuro baseado em novos conhecimentos. Com
                base nisso, o objetivo deste projeto é utilizar a temática da
                alimentação vinculada à metodologia da História de Vida como
                parte do acompanhamento das atividades vinculadas ao curso de
                Auxiliar em Agroecologia na modalidade da EJA do Campus de
                Campinas do IFSP.
              </p>
              <p>
                O projeto trabalha através entrevistas com questões norteadoras
                sobre a alimentação que tem como objetivo promover aos alunos da
                modalidade EJA autoconhecimento sobre a trajetória alimentar em
                perspectiva multidimensional além de da promover a auto reflexão
                terapêutica em função das memórias afetivas transcendendo-as
                para o aspecto coletivo e de identidade com o curso. Além disso,
                possibilita o fortalecimento dos vínculos institucionais com o
                Câmpus.
              </p>
              <p><b>Orientadora:</b>  Profª Erika Batista.</p>
              <p><b>Bolsista:</b>  Isabelli Thais Messias Costa – aluna do 1° ano do Curso de Eletrônica Integrado ao Ensino Médio.</p>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  )
}

export default HistoriasDeVida
