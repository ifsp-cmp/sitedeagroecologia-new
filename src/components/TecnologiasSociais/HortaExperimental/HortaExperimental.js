import React from 'react'
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina'
import './HortaExperimental.css'
import foto1 from '../../../assets/images/TecnologiasSociais/HortaExperimental/foto1.png'
//em andamento

const HortaExperimental = () => {
  return (
    <div>
      <TopoDaPagina menu="Tecnologias Sociais" submenu="Horta Experimental" />
      <div className="container-fluid HortaExperimental">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <img src={foto1} width='100%' alt='Imagem da Horta Experimental'/>
            <div className="texto1">
              <p>
                O cultivo agroecológico é uma forma de plantio que busca o
                equilíbrio dinâmico entre os cultivares produzidos e o ambiente,
                visando a manutenção da qualidade do solo, incluindo a
                microbiota, além da água, do ar e espécies nativas, ou seja,
                visa a manutenção da integridade do ecossistema produtivo.
                Portanto, esse trabalho tem como meta a implantação de uma horta
                agroecológica no Instituto Federal (IFSP), campus Campinas, que
                será utilizada como uma ferramenta didático-pedagógica para
                alunos do ensino médio e na educação de jovens e adultos (EJA).
                As Figuras 1, 2 e 3 mostram a etapa de descompactação do solo,
                construção da leira de compostagem, e marcação dos pontos para o
                plantio em nível, respectivamente.
              </p>
              <p>
                <b>Orientadora:</b> Profª Mariana Saragiotto da Silva Alves.
              </p>
              <p>
                <b>Co-orientadora:</b> Profª Erika Batista.
              </p>
              <p>
                <b>Bolsista:</b> Maria Vitória Brites Torres – aluna do 3° ano do
                curso de Informática integrado ao ensino médio.
              </p>
              <p>
                <b>Financiamento: </b>CNPq (PIBIC-2022/2023) e IFSP – CMP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HortaExperimental
