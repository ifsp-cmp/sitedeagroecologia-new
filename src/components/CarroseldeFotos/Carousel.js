import React from 'react'
import './Carousel.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

const Carousel = (props) => {
    return (
        <div className="container col-md-6 mb-4 mt-2">
            <div id={props.id} className="carousel slide carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target={`#${props.id}`} data-slide-to="0" className="active"></li>
                    <li data-target={`#${props.id}`} data-slide-to="1"></li>
                    <li data-target={`#${props.id}`} data-slide-to="2"></li>
                    <li data-target={`#${props.id}`} data-slide-to="3"></li>
                    <li data-target={`#${props.id}`} data-slide-to="4"></li>
                    <li data-target={`#${props.id}`} data-slide-to="5"></li>
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
                    <div className="carousel-item">
                        <img className="d-block w-100" src={props.foto4} alt={props.alt4} />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={props.foto5} alt={props.alt5} />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={props.foto6} alt={props.alt6} />
                    </div>
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
