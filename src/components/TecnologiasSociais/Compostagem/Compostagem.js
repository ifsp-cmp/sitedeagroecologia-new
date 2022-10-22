import React from 'react'
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina'
import './Compostagem.css'

const Compostagem = () => {
  return (
    <div>
      <TopoDaPagina menu="Tecnologias Sociais" submenu="Compostagem" />
      <div className="container-fluid Compostagem">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            Compostagem
          </div>
        </div>
      </div>
    </div>
  )
}

export default Compostagem
