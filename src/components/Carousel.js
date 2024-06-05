import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../'
import camisadoreal from '../images/camisadoreal.jpg'
import camisadoreal2 from '../images/camisadoreal2.jpg'
import camisadoreal3 from '../images/camisadoreal3.jpg'

const App = () => {
  return (
    <div className="carousel">
      <Carousel
        interval={null}
        indicators={false}
        controls={true}
        className="custom-carousel"
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={camisadoreal}
            alt="Camisa do Re"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={camisadoreal2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={camisadoreal3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default App;