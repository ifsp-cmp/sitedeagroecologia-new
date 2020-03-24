import React from 'react';
import './CarrosseldeFotos.css';

import rigthArrowCarousel from '../../assets/images/icons/rightarrowcarousel.svg';
import leftArrowCarousel from '../../assets/images/icons/leftarrowcarousel.svg';
import foto1 from '../../assets/images/EducacaoPopular/MutiraoAgroflorestal/m.1.jpg';
import foto3 from '../../assets/images/EducacaoPopular/MutiraoAgroflorestal/m.3.jpg';
import foto4 from '../../assets/images/EducacaoPopular/MutiraoAgroflorestal/m.4.jpg';
import foto11 from '../../assets/images/EducacaoPopular/MutiraoAgroflorestal/m.11.jpg';
import foto14 from '../../assets/images/EducacaoPopular/MutiraoAgroflorestal/m.14.jpg';
import foto15 from '../../assets/images/EducacaoPopular/MutiraoAgroflorestal/m.15.jpg';
import foto19 from '../../assets/images/EducacaoPopular/MutiraoAgroflorestal/m.19.jpg';
import foto25 from '../../assets/images/EducacaoPopular/MutiraoAgroflorestal/m.25.jpg';
import foto27 from '../../assets/images/EducacaoPopular/MutiraoAgroflorestal/m.27.jpg';
import foto28 from '../../assets/images/EducacaoPopular/MutiraoAgroflorestal/m.28.jpg';



const carrosseldeFotos = () => {

    return (
        <div className="PhotosCarousel">
            <div className="container-fluid">
                <div className="row">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        {/* <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol> */}
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="LinhadeFotos">
                                    <div className="foto">
                                        <img class="d-block w-100" src={foto1} alt="First slide" />
                                    </div>
                                    <div className="foto">
                                        <img class="d-block w-100" src={foto3} alt="Second slide" />
                                    </div>
                                    <div className="foto">
                                        <img class="d-block w-100" src={foto4} alt="Second slide" />
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="LinhadeFotos">
                                    <div className="foto">
                                        <img class="d-block w-100" src={foto11} alt="First slide" />
                                    </div>
                                    <div className="foto">
                                        <img class="d-block w-100" src={foto14} alt="Second slide" />
                                    </div>
                                    <div className="foto">
                                        <img class="d-block w-100" src={foto15} alt="Second slide" />
                                    </div>

                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="LinhadeFotos">
                                    <div className="foto">
                                        <img class="d-block w-100" src={foto19} alt="First slide" />
                                    </div>
                                    <div className="foto">
                                        <img class="d-block w-100" src={foto25} alt="Second slide" />
                                    </div>
                                    <div className="foto">
                                        <img class="d-block w-100" src={foto27} alt="Second slide" />
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