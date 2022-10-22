import React from 'react'
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina'
import './HortaExperimental.css'

const HortaExperimental = () => {
  return (
    <div>
      <TopoDaPagina menu="Tecnologias Sociais" submenu="Horta Experimental" />
      <div className="container-fluid HortaExperimental">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            Horta Experimental
          </div>
        </div>
      </div>
    </div>
  )
}

export default HortaExperimental
