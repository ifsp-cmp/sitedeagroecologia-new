import React from 'react';

const grupos = (props) =>{
    return (
        <div className="row">
            <div className="col-md-2"></div>

            <div className="col-md-3">
                <div className="card"> 
                    <div className="card-body fundo_cinza">
                        <h4 className="card-title titulo3" style={{fontSize: "24px"}}>Endereço</h4>
                        <p>{props.endereco}</p>
                    </div>
                </div>
            </div>
            
            <div className="col-md-3">
                <div className="card"> 
                    <div className="card-body fundo_cinza">
                        <h4 className="card-title titulo3" style={{fontSize: "24px"}}>Entregas</h4>
                        <p>{props.entrega}</p>
                    </div>
                </div>
            </div>

            <div className="col-md-2">
                <div className="card"> 
                    <div className="card-body fundo_cinza">
                        <h4 className="card-title titulo3" style={{fontSize: "24px"}}>Horário</h4>
                        <p>{props.horario}</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2"></div>
        </div>
    )
}

export default grupos;