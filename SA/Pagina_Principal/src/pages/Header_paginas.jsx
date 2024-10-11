import React from 'react'
import './Header_paginas.css'

function Header_paginas() {
  return (
    <div className='divHeaderPage'>
      <div className='imgsNavBar'>
        <img className='sapo' src="./logo_sapo.png" alt="" />
        <img className='user' src="./img_usuario.png" alt="" />
      </div>
      <div className='buttonsNav'>
        <a href=""><button className='bt1'>Inicio</button></a>
        <a href=""><button className='bt2'>Lançamentos</button></a>
        <a href=""><button className='bt3'>Populares</button></a>
        <a href=""><button className='bt4'>Melhores Avaliados</button></a>
        <a href=""><button className='bt5'>Updates</button></a>
      </div>
    </div>
  )
}

export default Header_paginas
