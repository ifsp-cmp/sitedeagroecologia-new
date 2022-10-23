import React from 'react'
import './Carousel.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

const Carousel = (props) => {
    return (
        <div className="container col-md-8 mb-4 mt-2">
            <div id={props.id} className="carousel slide carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target={`#${props.id}`} data-slide-to="0" className="active"></li>
                    <li data-target={`#${props.id}`} data-slide-to="1"></li>
                    <li data-target={`#${props.id}`} data-slide-to="2"></li>
                    {props.foto4 ? <li data-target={`#${props.id}`} data-slide-to="3"></li> :null}
                    {props.foto5 ? <li data-target={`#${props.id}`} data-slide-to="4"></li>:null}
                    {props.foto6 ? <li data-target={`#${props.id}`} data-slide-to="5"></li>:null}
                    {props.foto7 ? (<li data-target={`#${props.id}`} data-slide-to="6"></li>) : null}
                    {props.foto8 ? (<li data-target={`#${props.id}`} data-slide-to="7"></li>) : null}
                    {props.foto9 ? (<li data-target={`#${props.id}`} data-slide-to="8"></li>) : null}
                    {props.foto10 ? (<li data-target={`#${props.id}`} data-slide-to="9"></li>) : null}
                    {props.foto11 ? (<li data-target={`#${props.id}`} data-slide-to="10"></li>) : null}
                    {props.foto12 ? (<li data-target={`#${props.id}`} data-slide-to="11"></li>) : null}
                    {props.foto13 ? (<li data-target={`#${props.id}`} data-slide-to="12"></li>) : null}
                    {props.foto14 ? (<li data-target={`#${props.id}`} data-slide-to="13"></li>) : null}

                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={props.foto1} alt={props.alt1} />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={props.foto2} alt={props.alt2} />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={props.foto3} alt={props.alt3} />
                    </div>
                    
                    {props.foto4 ? 
                        <div className="carousel-item">
                            <img className="d-block w-100" src={props.foto4} alt={props.alt4} />
                        </div>
                    :''}
                    {props.foto5? 
                        <div className="carousel-item">
                            <img className="d-block w-100" src={props.foto5} alt={props.alt5} />
                        </div> 
                    :''}
                    
                    {props.foto6 ? (<> <div className="carousel-item"><img className="d-block w-100" src={props.foto6} alt={props.alt6} /></div></>) : ''}
                    {props.foto7 ? (<> <div className="carousel-item"><img className="d-block w-100" src={props.foto7} alt={props.alt7} /></div></>) : ''}
                    {props.foto8 ? (<> <div className="carousel-item"><img className="d-block w-100" src={props.foto8} alt={props.alt8} /></div></>) : ''}
                    {props.foto9 ? (<> <div className="carousel-item"><img className="d-block w-100" src={props.foto9} alt={props.alt9} /></div></>) : ''}
                    {props.foto10 ? (<> <div className="carousel-item"><img className="d-block w-100" src={props.foto10} alt={props.alt10} /></div></>) : ''}
                    {props.foto11 ? (<> <div className="carousel-item"><img className="d-block w-100" src={props.foto11} alt={props.alt11} /></div></>) : ''}
                    {props.foto12 ? (<> <div className="carousel-item"><img className="d-block w-100" src={props.foto12} alt={props.alt12} /></div></>) : ''}
                    {props.foto13 ? (<> <div className="carousel-item"><img className="d-block w-100" src={props.foto13} alt={props.alt13} /></div></>) : ''}
                </div>


                <a className="carousel-control-prev" href={`#${props.id}`} role="button" data-slide="prev">
                    {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                    <FontAwesomeIcon className="highlight" icon={faArrowAltCircleLeft} style={{ color: 'white' }} size="3x" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href={`#${props.id}`} role="button" data-slide="next" >
                    {/* <span className="carousel-control-next-icon" aria-hidden="true" style={{color: '#77B81E'}}></span> */}
                    <FontAwesomeIcon icon={faArrowAltCircleRight} style={{ color: 'white' }} size="3x" />
                    <span className="sr-only" >Next</span>
                </a>
            </div>
        </div>


    )
}

export default Carousel;
