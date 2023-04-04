import React from 'react'
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina'
import './AppEanDcnt.css'
import foto1 from '../../../assets/images/TecnologiasSociais/appEan/foto1.png'
import foto2 from '../../../assets/images/TecnologiasSociais/appEan/foto2.png'

const AppEanDcnt = () => {
  return (
    <div>
      <TopoDaPagina menu="Tecnologias Sociais" submenu="App EAN/DCNTs" />
      <div className="container-fluid AppEanDcnt">
        <div className="row justify-content-center">
          <div className="col-md-2"></div>
          <div className="col-md-8 row justify-content-center">
            <img className="img-fluid" src={foto1} alt='Imagem do App Ean DCNT' />
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-2"></div>
          <div className="col-md-8 row justify-content-center">
            <div className="texto1">
              <p>
                <b>Aplicativo de Educação Alimentar e Nutricional como tecnologia social para a Educação de Jovens e Adultos na cidade de Campinas</b>
              </p>
              <p>
                <b>Objetivos: </b> Organizar e apresentar de forma clara, simples e acessível os componentes de
                uma alimentação saudável e como eles estão inseridos em nossa alimentação por meio de um
                jogo eletrônico de perguntas e respostas.
              </p>
              <p>
                <b>Resultados:</b> Todos os requisitos para finalizar a primeira versão do aplicativo do projeto
                foram concluídos, tendo um ótimo feedback da amostra do público alvo na validação
                participativa, com relatos de features que podem melhorar como: mais opções de respostas
                dos feedbacks, descrição dos quizes em relação ao áudio, dificuldade com cores, dificuldade
                em relação a informações cadastrais (localização de sua região) e aumento da imersão para
                maior aprendizado. E também sugestões do que futuramente pode ser adicionado como:
                botão de aumentar o volume mais do que o permitido, seta para abaixar e subir em questões
                mais longas, número para exibir a quantidade fracionária exata em relação às imagens, botão
                para visualizar a senha ao cadastrar/logar e alteração do ícone de botão de áudio.
              </p>
              <p>
                <b>Orientadora:</b> Profª Joice Barbosa Mendes.
              </p>
              <p>
                <b>Co-orientadora:</b> Profª Erika Batista.
              </p>
              <p>
                <b>Bolsista:</b> Bruno Povliuk
              </p>
              <p>
                <b>Financiamento: </b>CNPq (PIBIC-2022/2023) e IFSP – CMP.
              </p>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-2"></div>
          <div className="col-md-8 row justify-content-center">
            <img className="img-fluid" src={foto2} alt='Imagem do App Ean DCNT' />
          </div>
          <div className="col-md-2"></div>

          <div className="col-md-2"></div>
          <div className="col-md-8 row justify-content-center mb-2">
            <div className="texto1"> <p>
              <b>Imagens que ilustram o trabalho desenvolvido</b>
            </p>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>

      </div>
    </div >
  )
}

export default AppEanDcnt
