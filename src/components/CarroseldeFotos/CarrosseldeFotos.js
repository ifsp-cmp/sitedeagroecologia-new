import React from 'react';
import './CarrosseldeFotos.css';

import rigthArrowCarousel from '../../assets/images/icons/rightarrowcarousel.svg';
import leftArrowCarousel from '../../assets/images/icons/leftarrowcarousel.svg';

const carrosseldeFotos = (props) => {

    return (
        <div className="PhotosCarousel">
            <div className="container-fluid">
                <div className="row">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="LinhadeFotos">
                                    <div className="foto">
                                        <img class="d-block w-100" src={props.foto1} alt="First slide" />
                                    </div>
                                    <div className="foto">
                                        <img class="d-block w-100" src={props.foto2} alt="Second slide" />
                                    </div>
                                    <div className="foto">
                                        <img class="d-block w-100" src={props.foto3} alt="Second slide" />
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="LinhadeFotos">
                                    <div className="foto">
                                        <img class="d-block w-100" src={props.foto4} alt="First slide" />
                                    </div>
                                    <div className="foto">
                                        <img class="d-block w-100" src={props.foto5} alt="Second slide" />
                                    </div>
                                    <div className="foto">
                                        <img class="d-block w-100" src={props.foto6} alt="Second slide" />
                                    </div>

                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="LinhadeFotos">
                                    <div className="foto">
                                        <img class="d-block w-100" src={props.foto7} alt="First slide" />
                                    </div>
                                    <div className="foto">
                                        <img class="d-block w-100" src={props.foto8} alt="Second slide" />
                                    </div>
                                    <div className="foto">
                                        <img class="d-block w-100" src={props.foto9} alt="Second slide" />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                            {/* <span class="sr-only">Previous</span> */}
                            <div className="arrow">
                                <img src={leftArrowCarousel} alt="carousel arrow" />
                            </div>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                            {/* <span class="sr-only">Next</span> */}
                            <div className="arrow">
                                <img src={rigthArrowCarousel} alt="carousel arrow" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default carrosseldeFotos;