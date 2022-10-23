import React from 'react'
import Carousel from '../../CarroseldeFotos/Carousel'
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina'
import './Compostagem.css'
import foto1_car1 from '../../../assets/images/TecnologiasSociais/Compostagem/foto1.png'
import foto2_car1 from '../../../assets/images/TecnologiasSociais/Compostagem/foto2.png'
import foto3_car1 from '../../../assets/images/TecnologiasSociais/Compostagem/foto3.png'

const Compostagem = () => {
  return (
    <div>
      <TopoDaPagina menu="Tecnologias Sociais" submenu="Compostagem" />
      <div className="container-fluid Compostagem">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="texto1">
              <p>
                Você sabia que, no Brasil, milhões de toneladas dos resíduos
                orgânicos, ou seja, o seu “lixo” orgânico, são descartados de
                forma irregular, a céu aberto, nos lixões? E porque a palavra
                “lixo” está entre parênteses? Porque até hoje esse termo é
                utilizado de forma errada. A definição de lixo é tudo aquilo que
                NÃO pode ser reciclado, reutilizado, e o seu “lixo” orgânico
                definitivamente pode! Então vamos usar a palavra resíduo! Uma
                possibilidade de aproveitamento do seu resíduo orgânico é ele
                ser compostado para virar adubo orgânico para hortas via
                processo de compostagem. Esse trabalho de conscientização e
                educação ambiental está sendo realizado no Instituto Federal
                (IFSP), campus Campinas, através da implantação de lixeiras para
                coleta de resíduo orgânico produzido na escola, caixas plásticas
                para a vermicompostagem e a confecção de leiras (Figura 1), além
                da fixação de cartazes e realização de oficinas de compostagem
                com os alunos e alunas (Figuras 2 e 3).
              </p>
            </div>
            <Carousel
              foto1={foto1_car1}
              alt1={'Foto 1 Validação Participativa App AGROCOMUNICAÇÃO'}
              foto2={foto2_car1}
              alt2={'Foto 2 Validação Participativa App AGROCOMUNICAÇÃO'}
              foto3={foto3_car1}
              alt3={'Foto 3 Validação Participativa App AGROCOMUNICAÇÃO'}
              id="CompostagemCarrousel"
            />
            <div className="texto1">
              <p>
                <b>Orientadora:</b> Profª Mariana Saragiotto da Silva Alves.
              </p>
              <p>
                <b>Co-orientadora:</b> Profª Erika Batista.
              </p>
              <p>
                <b>Bolsista:</b> Giovana Silveira Marques – aluna do 4º ano do
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

export default Compostagem
