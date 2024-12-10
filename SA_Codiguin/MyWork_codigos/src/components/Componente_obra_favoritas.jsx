import React, { useContext } from 'react'
import "./Componente_obra_favoritas.css"
import { GlobalContext } from '../context/GlobalContext'
import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Swiper, SwiperSlide } from 'swiper/react'



function Componente_obra_favoritas() {

  const {obrasFavoritadas} = useContext(GlobalContext)

  return (
    <div className='container_obras_favoritas'>
      <div className='favoritadas'>
        <Swiper
        slidesPerView={5}
        pagination={{clickable: true}}
        navigation
        >
          {obrasFavoritadas.map((item) =>(
            <SwiperSlide key={item.id}>
              <img className='imgFav' src={item.img} alt="" /><br />
              <label className='txtFav'>{item.titulo}</label>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Componente_obra_favoritas
