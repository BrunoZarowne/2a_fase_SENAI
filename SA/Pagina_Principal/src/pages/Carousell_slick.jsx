import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousell_slick.css'
import { Link } from 'react-router-dom';

function Carousell_slick() {
    const images = ['./ONE.png', './MHA.png', './ONP.png', './MOB.png', './KAGU.png', './berserk.png'];
    
      const settings = {
        dots: true, // Adiciona os pontinhos de navegação
        infinite: true, // Loop infinito no carrossel
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
      };
    
  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
           {/* <Link to=""> */}
            <img src={image} alt={`Slide ${index + 1}`} />
           {/* </Link>     */}
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousell_slick


/* procurar como fazer e usar objetos e jogar informações pra uma pagina */