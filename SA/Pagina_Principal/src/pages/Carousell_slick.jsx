import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousell_slick.css'
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", border: "1px green solid" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function adcObj() {
  alert('aaaa')
}
function Carousell_slick() {
    const obj1 = {nome: 'mob', img: 'https://m.media-amazon.com/images/I/91QPDVbQDvL._AC_UF1000,1000_QL80_.jpg', id:1}
    const images = ['./ONE.png', './MHA.png', './ONP.png', './MOB.png', './KAGU.png', './berserk.png'];
    
      const settings = {
        dots: false, // Adiciona os pontinhos de navegação
        infinite: true, // Loop infinito no carrossel
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    
  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className='divCarousel' key={index}>
           {/* <Link to=""> */}
            <img src={image} alt={`Slide ${index + 1}`} />
           {/* </Link>     */}
          </div>
        ))}
      </Slider>
      <button onClick={adcObj}>aaa</button>
    </div>
  )
}

export default Carousell_slick


/* procurar como fazer e usar objetos e jogar informações pra uma pagina */