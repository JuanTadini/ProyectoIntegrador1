import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>Carrusel de Imágenes</h2>
      <Slider {...settings}>
        <div>
          <img src="imagen1.jpg" alt="Imagen 1" />
        </div>
        <div>
          <img src="imagen2.jpg" alt="Imagen 2" />
        </div>
        <div>
          <img src="imagen3.jpg" alt="Imagen 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
