import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import camisadoreal1 from '../images/camisadoreal1.jpg';
import camisadoreal2 from '../images/camisadoreal2.jpg';
import camisadoreal3 from '../images/camisadoreal3.jpg';
import camisadocity1 from '../images/camisadocity1.jpg';
import camisadocity2 from '../images/camisadocity2.jpg';
import camisadocity3 from '../images/camisadocity3.jpg';
import camisadomilan from '../images/camisadomilan.jpg';
import camisadainter from '../images/camisadainter.jpg';
import camisadajuve from '../images/camisadajuve.jpg';

const App = () => {
  return (
    <div className="carousel-container">
      <Carousel
        interval={2000} // Alterado para mudar automaticamente a cada 2 segundos (2000ms)
        indicators={false}
        controls={true}
        className="custom-carousel"
      >
        <Carousel.Item>
          <div className="d-flex justify-content-between">
            <img
              className="custom-carousel-img"
              src={camisadoreal1}
              alt="First slide"
            />
            <img
              className="custom-carousel-img"
              src={camisadoreal2}
              alt="Second slide"
            />
            <img
              className="custom-carousel-img"
              src={camisadoreal3}
              alt="Third slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-between">
            <img
              className="custom-carousel-img"
              src={camisadocity1}
              alt="Fourth slide"
            />
            <img
              className="custom-carousel-img"
              src={camisadocity2}
              alt="Fifth slide"
            />
            <img
              className="custom-carousel-img"
              src={camisadocity3}
              alt="Sixth slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-between">
            <img
              className="custom-carousel-img"
              src={camisadomilan}
              alt="Fourth slide"
            />
            <img
              className="custom-carousel-img"
              src={camisadajuve}
              alt="Fifth slide"
            />
            <img
              className="custom-carousel-img"
              src={camisadainter}
              alt="Sixth slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default App;