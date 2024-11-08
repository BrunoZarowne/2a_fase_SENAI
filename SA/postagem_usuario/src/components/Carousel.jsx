import React from 'react'
import { useState } from 'react'
import './Carousel.css'
import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Swiper, SwiperSlide } from 'swiper/react'



function Carousel() { 
  const [imagensObras, setImagensObras] = useState([
    {id: '1', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bananas_%28Alabama_Extension%29.jpg/1200px-Bananas_%28Alabama_Extension%29.jpg'},
    {id: '2', image: 'https://lh4.googleusercontent.com/proxy/164-DMLRNy1eWrUvCsbkEslbqoOtis7-OJ5DPjR0qpBk3vWf4TRtzNTcpXLlUaWxhfp4_H0m6iNcsDlnlOjuwQKw6J6A2KfF1KQQb1YNr1O9wk4Vmc5lKM8MkZz-1SGR5jbLqgRNi_C0sMmdsmiXXEUnR47U0vBkWBn9aA7WhLrbo2EXiEZ2bOLqXFk5b3cOLB2E6MCc'},
    {id: '3', image: 'https://revistacampoenegocios.com.br/wp-content/uploads/2020/09/Foto-02-2.jpg'},
    {id: '4', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bananas_%28Alabama_Extension%29.jpg/1200px-Bananas_%28Alabama_Extension%29.jpg'},
    {id: '5', image: 'https://lh4.googleusercontent.com/proxy/164-DMLRNy1eWrUvCsbkEslbqoOtis7-OJ5DPjR0qpBk3vWf4TRtzNTcpXLlUaWxhfp4_H0m6iNcsDlnlOjuwQKw6J6A2KfF1KQQb1YNr1O9wk4Vmc5lKM8MkZz-1SGR5jbLqgRNi_C0sMmdsmiXXEUnR47U0vBkWBn9aA7WhLrbo2EXiEZ2bOLqXFk5b3cOLB2E6MCc'},
    {id: '6', image: 'https://revistacampoenegocios.com.br/wp-content/uploads/2020/09/Foto-02-2.jpg'},
  ])

  function adcImagens() {
    setImagensObras((imagensObras) => [...imagensObras, {id: imagensObras.length + 1, image: './2.jpg'}])
    console.log(imagensObras)
  }
  return (
    <div className='containerCarousel'>
     <Swiper
      slidesPerView={2}
      pagination={{ clickable: true}}
      navigation
     >
      {imagensObras.map((item) => (
        <SwiperSlide key={item.id}>
          <img className='abogus' src={item.image}/>
        </SwiperSlide>
      ))}
     </Swiper>

     <button onClick={adcImagens}>adc</button>
    </div>
  )
}

export default Carousel

// qnd for usar dar usar esse comando
// npm i swiper